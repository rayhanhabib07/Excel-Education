"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What classes do you offer coaching for?",
    a: "We offer coaching for Class 8, SSC (Class 9–10), and HSC (Class 11–12) students across Science, Commerce, and Humanities groups under the NCTB national curriculum.",
  },
  {
    q: "How large are the batches?",
    a: "We keep a maximum of 25 students per batch to ensure every student gets personal attention from the teacher.",
  },
  {
    q: "Can I attend a demo class before enrolling?",
    a: "Absolutely! We offer free demo classes so students and parents can experience our teaching style before making a commitment.",
  },
  {
    q: "What are the class fees?",
    a: "Fees vary by level and group. Please visit our Courses page for detailed fee information, or contact us for a personalised quote.",
  },
  {
    q: "Do you provide study materials?",
    a: "Yes — all enrolled students receive structured notes, worksheets, and question banks aligned with the NCTB syllabus and board exam patterns.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#f59e0b] uppercase tracking-wide mb-2">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b]">Common Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-[#e2e8f0] rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left text-[#1e293b] font-medium hover:bg-[#f8fafc] transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-[#64748b] shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  open === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-5 pb-4 text-sm text-[#64748b] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
