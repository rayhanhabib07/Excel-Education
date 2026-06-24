import Link from "next/link";

const toppers = [
  { name: "Fatima Akter", exam: "SSC 2025", result: "GPA 5.00", group: "Science" },
  { name: "Rafiul Islam", exam: "HSC 2025", result: "GPA 5.00", group: "Science" },
  { name: "Nusrat Jahan", exam: "SSC 2025", result: "GPA 5.00", group: "Commerce" },
  { name: "Tariqul Hasan", exam: "HSC 2024", result: "GPA 5.00", group: "Science" },
];

export default function ResultsHighlight() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#f59e0b] uppercase tracking-wide mb-2">Results</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b]">Our Achievers</h2>
          <p className="text-[#64748b] mt-3 max-w-lg mx-auto">
            Students coached at Excel Education consistently achieve top board results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {toppers.map((t) => (
            <div
              key={`${t.name}-${t.exam}`}
              className="p-5 rounded-xl border border-[#e2e8f0] bg-white text-center hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-[#dbeafe] flex items-center justify-center mx-auto mb-3">
                <span className="text-xl" aria-hidden="true">🎓</span>
              </div>
              <p className="font-semibold text-[#1e293b]">{t.name}</p>
              <p className="text-sm text-[#64748b] mt-0.5">{t.exam} · {t.group}</p>
              <p className="text-lg font-bold text-[#059669] mt-2">{t.result}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/results"
            className="text-sm font-medium text-[#1e3a8a] hover:text-[#2563eb] transition-colors"
          >
            See all results &amp; achievers →
          </Link>
        </div>
      </div>
    </section>
  );
}
