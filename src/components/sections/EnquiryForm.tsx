"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    // Checkbox comes as "on" or undefined
    const payload = {
      ...data,
      consent: data.consent === "on" ? true : false,
    };

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || "Something went wrong");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 rounded-2xl border border-emerald-200 bg-emerald-50 text-center">
        <span className="text-4xl mb-3 block">✅</span>
        <h3 className="text-xl font-bold text-[#1e293b] mb-2">Enquiry Submitted!</h3>
        <p className="text-[#64748b]">
          Thank you! We&apos;ll contact you within a few hours. For immediate
          assistance, call or WhatsApp us.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-[#1e3a8a] hover:underline"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot — hidden from real users */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="studentName" className="block text-sm font-medium text-[#1e293b] mb-1.5">
            Student Name <span className="text-red-500">*</span>
          </label>
          <input
            id="studentName"
            name="studentName"
            type="text"
            required
            className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] bg-white text-[#1e293b] placeholder-[#94a3b8] text-sm focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-colors"
            placeholder="Student's full name"
            disabled={status === "loading"}
          />
        </div>
        <div>
          <label htmlFor="guardianName" className="block text-sm font-medium text-[#1e293b] mb-1.5">
            Parent / Guardian Name <span className="text-red-500">*</span>
          </label>
          <input
            id="guardianName"
            name="guardianName"
            type="text"
            required
            className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] bg-white text-[#1e293b] placeholder-[#94a3b8] text-sm focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-colors"
            placeholder="Parent or guardian name"
            disabled={status === "loading"}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#1e293b] mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] bg-white text-[#1e293b] placeholder-[#94a3b8] text-sm focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-colors"
            placeholder="01XXX-XXXXXX"
            disabled={status === "loading"}
          />
        </div>
        <div>
          <label htmlFor="whatsapp" className="block text-sm font-medium text-[#1e293b] mb-1.5">
            WhatsApp <span className="text-[#94a3b8] font-normal">(optional)</span>
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] bg-white text-[#1e293b] placeholder-[#94a3b8] text-sm focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-colors"
            placeholder="If different from phone"
            disabled={status === "loading"}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#1e293b] mb-1.5">
          Email <span className="text-[#94a3b8] font-normal">(optional)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] bg-white text-[#1e293b] placeholder-[#94a3b8] text-sm focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-colors"
          placeholder="your@email.com"
          disabled={status === "loading"}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="level" className="block text-sm font-medium text-[#1e293b] mb-1.5">
            Class / Level <span className="text-red-500">*</span>
          </label>
          <select
            id="level"
            name="level"
            required
            className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] bg-white text-[#1e293b] text-sm focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-colors"
            defaultValue=""
            disabled={status === "loading"}
          >
            <option value="" disabled>Select level</option>
            <option value="class-8">Class 8</option>
            <option value="ssc">SSC (Class 9–10)</option>
            <option value="hsc">HSC (Class 11–12)</option>
          </select>
        </div>
        <div>
          <label htmlFor="group" className="block text-sm font-medium text-[#1e293b] mb-1.5">
            Group <span className="text-[#94a3b8] font-normal">(if applicable)</span>
          </label>
          <select
            id="group"
            name="group"
            className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] bg-white text-[#1e293b] text-sm focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-colors"
            defaultValue=""
            disabled={status === "loading"}
          >
            <option value="">Not applicable / undecided</option>
            <option value="science">Science</option>
            <option value="commerce">Commerce / Business Studies</option>
            <option value="humanities">Humanities</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="subjects" className="block text-sm font-medium text-[#1e293b] mb-1.5">
          Subjects Interested In <span className="text-[#94a3b8] font-normal">(optional)</span>
        </label>
        <input
          id="subjects"
          name="subjects"
          type="text"
          className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] bg-white text-[#1e293b] placeholder-[#94a3b8] text-sm focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-colors"
          placeholder="e.g. Physics, Chemistry, Maths"
          disabled={status === "loading"}
        />
      </div>

      <div>
        <label htmlFor="area" className="block text-sm font-medium text-[#1e293b] mb-1.5">
          Area / Location <span className="text-[#94a3b8] font-normal">(optional)</span>
        </label>
        <input
          id="area"
          name="area"
          type="text"
          className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] bg-white text-[#1e293b] placeholder-[#94a3b8] text-sm focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-colors"
          placeholder="Your area in Beanibazar / Sylhet"
          disabled={status === "loading"}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#1e293b] mb-1.5">
          Message <span className="text-[#94a3b8] font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] bg-white text-[#1e293b] placeholder-[#94a3b8] text-sm focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition-colors resize-none"
          placeholder="Any questions or specific requirements..."
          disabled={status === "loading"}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-[#e2e8f0] text-[#1e3a8a] focus:ring-[#1e3a8a]"
          disabled={status === "loading"}
        />
        <label htmlFor="consent" className="text-sm text-[#64748b]">
          I consent to Excel Education contacting me about admission via phone,
          WhatsApp, or email. <span className="text-red-500">*</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3.5 px-6 rounded-lg font-semibold text-sm text-white bg-[#f59e0b] hover:bg-[#d97706] transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Submitting..." : "Submit Enquiry"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {errorMsg}
        </p>
      )}
    </form>
  );
}
