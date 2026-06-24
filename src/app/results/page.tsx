import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Results & Achievements",
  description:
    "Board exam results and GPA 5 achievers from Excel Education, Beanibazar. See our SSC & HSC toppers year by year.",
};

type Achiever = {
  name: string;
  exam: string;
  year: number;
  result: string;
  group: string;
};

const achievers: Achiever[] = [
  { name: "Fatima Akter", exam: "SSC", year: 2025, result: "GPA 5.00", group: "Science" },
  { name: "Rafiul Islam", exam: "HSC", year: 2025, result: "GPA 5.00", group: "Science" },
  { name: "Nusrat Jahan", exam: "SSC", year: 2025, result: "GPA 5.00", group: "Commerce" },
  { name: "Tariqul Hasan", exam: "HSC", year: 2024, result: "GPA 5.00", group: "Science" },
  { name: "Ayesha Siddika", exam: "SSC", year: 2024, result: "GPA 5.00", group: "Science" },
  { name: "Mehedi Hasan", exam: "HSC", year: 2024, result: "GPA 5.00", group: "Commerce" },
  { name: "Roksana Begum", exam: "SSC", year: 2023, result: "GPA 5.00", group: "Science" },
  { name: "Imran Ahmed", exam: "HSC", year: 2023, result: "GPA 5.00", group: "Science" },
];

const years = [...new Set(achievers.map((a) => a.year))].sort((a, b) => b - a);

export default function ResultsPage() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#f59e0b] uppercase tracking-wide mb-2">Results</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
            Our Achievers
          </h1>
          <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
            Excel Education students consistently top the SSC &amp; HSC board exams.
            Here are some of our proud achievers.
          </p>
        </div>

        {/* Stats banner */}
        <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto mb-16 p-6 rounded-2xl bg-[#1e3a8a] text-white text-center">
          <div>
            <p className="text-3xl font-extrabold">200+</p>
            <p className="text-xs text-[#bfdbfe] mt-1">GPA 5 Achievers</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold">95%</p>
            <p className="text-xs text-[#bfdbfe] mt-1">Pass Rate</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold">10+</p>
            <p className="text-xs text-[#bfdbfe] mt-1">Years of Results</p>
          </div>
        </div>

        {years.map((year) => (
          <section key={year} className="mb-12">
            <h2 className="text-xl font-bold text-[#1e293b] mb-5 flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-[#dbeafe] text-[#1e3a8a]">
                {year}
              </span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievers
                .filter((a) => a.year === year)
                .map((a) => (
                  <div
                    key={`${a.name}-${a.exam}-${a.year}`}
                    className="p-5 rounded-xl border border-[#e2e8f0] bg-white text-center hover:shadow-sm transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#dbeafe] flex items-center justify-center mx-auto mb-3">
                      <span className="text-lg" aria-hidden="true">🎓</span>
                    </div>
                    <p className="font-semibold text-[#1e293b]">{a.name}</p>
                    <p className="text-sm text-[#64748b] mt-0.5">
                      {a.exam} · {a.group}
                    </p>
                    <p className="text-lg font-bold text-[#059669] mt-2">{a.result}</p>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
