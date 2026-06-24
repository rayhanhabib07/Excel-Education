import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

const bdPhoneRegex = /^(?:\+?880)?1[3-9]\d{8}$/;

const schema = z.object({
  studentName: z.string().trim().min(1).max(100),
  guardianName: z.string().trim().min(1).max(100),
  phone: z
    .string()
    .trim()
    .regex(bdPhoneRegex, "Please enter a valid Bangladeshi mobile number"),
  whatsapp: z.string().trim().max(20).optional().default(""),
  email: z.string().trim().email().max(200).optional().or(z.literal("")),
  level: z.enum(["class-8", "ssc", "hsc"]),
  group: z.string().trim().max(50).optional().default(""),
  subjects: z.string().trim().max(500).optional().default(""),
  area: z.string().trim().max(200).optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
  consent: z.literal(true, "You must consent to being contacted"),
  // Honeypot — must be empty
  website: z.string().max(0).optional().default(""),
});

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const ipTimestamps = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (ipTimestamps.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    ipTimestamps.set(ip, recent);
    return true;
  }
  recent.push(now);
  ipTimestamps.set(ip, recent);
  return false;
}

function clientIp(req: Request): string {
  return (
    req.headers.get("x-real-ip")?.trim() ??
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    "unknown"
  );
}

async function sendNotificationEmail(data: z.infer<typeof schema>) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_NOTIFY_TO;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.warn("[enquiry] Resend env vars missing — skipping email.");
    return;
  }

  const levelMap: Record<string, string> = {
    "class-8": "Class 8",
    ssc: "SSC (Class 9–10)",
    hsc: "HSC (Class 11–12)",
  };

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    subject: `New Enquiry: ${data.studentName} — ${levelMap[data.level] || data.level}`,
    text: [
      `Student: ${data.studentName}`,
      `Guardian: ${data.guardianName}`,
      `Phone: ${data.phone}`,
      data.whatsapp ? `WhatsApp: ${data.whatsapp}` : null,
      data.email ? `Email: ${data.email}` : null,
      `Level: ${levelMap[data.level] || data.level}`,
      data.group ? `Group: ${data.group}` : null,
      data.subjects ? `Subjects: ${data.subjects}` : null,
      data.area ? `Area: ${data.area}` : null,
      data.message ? `\nMessage:\n${data.message}` : null,
    ]
      .filter(Boolean)
      .join("\n"),
    replyTo: data.email || undefined,
  });

  if (error) {
    console.error("[enquiry] Email send failed:", error);
    throw new Error("Email send failed");
  }
}

export async function POST(request: Request) {
  if (isRateLimited(clientIp(request))) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please check your input and try again." },
      { status: 400 }
    );
  }

  // Honeypot triggered — pretend success
  if (parsed.data.website) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  try {
    await sendNotificationEmail(parsed.data);
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again or call us directly." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
