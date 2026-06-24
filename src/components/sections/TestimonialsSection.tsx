const testimonials = [
  {
    quote: "My son got GPA 5 in SSC after joining Excel Education. The teachers are dedicated and the regular tests made all the difference.",
    author: "Aminul Haque",
    type: "Parent",
    result: "Son achieved GPA 5 in SSC",
  },
  {
    quote: "The small batch size meant I could ask questions freely. The study materials were excellent — everything was aligned with the board syllabus.",
    author: "Sadia Rahman",
    type: "Student",
    result: "GPA 5.00, HSC Science",
  },
  {
    quote: "We compared several coaching centres and Excel stood out for their results and how approachable the teachers were. Best decision we made.",
    author: "Rashida Begum",
    type: "Parent",
    result: "Daughter in SSC batch",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#f59e0b] uppercase tracking-wide mb-2">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b]">
            What Parents &amp; Students Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="p-6 rounded-xl bg-white border border-[#e2e8f0]"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#f59e0b]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-sm text-[#64748b] leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <p className="text-sm font-semibold text-[#1e293b]">{t.author}</p>
                <p className="text-xs text-[#94a3b8]">{t.type} · {t.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
