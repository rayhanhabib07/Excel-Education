const reasons = [
  {
    icon: "🏆",
    title: "Proven Board Results",
    description: "Consistently producing GPA 5 and A+ achievers in SSC & HSC board exams.",
  },
  {
    icon: "👨‍🏫",
    title: "Experienced Teachers",
    description: "Faculty from reputed universities with years of teaching and mentoring experience.",
  },
  {
    icon: "👥",
    title: "Small Batch Sizes",
    description: "Maximum 25 students per batch ensures personal attention for every learner.",
  },
  {
    icon: "📝",
    title: "Regular Model Tests",
    description: "Weekly and monthly tests mimicking real board exam format and difficulty.",
  },
  {
    icon: "📚",
    title: "Quality Study Materials",
    description: "Well-structured notes, worksheets, and question banks aligned with the NCTB syllabus.",
  },
  {
    icon: "🎯",
    title: "Free Demo Class",
    description: "Try before you commit — attend a class for free and see the difference yourself.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#f59e0b] uppercase tracking-wide mb-2">Why Excel Education</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b]">Why Parents &amp; Students Choose Us</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="p-6 rounded-xl bg-white border border-[#e2e8f0] hover:border-[#1e3a8a]/30 transition-colors"
            >
              <span className="text-3xl mb-3 block" aria-hidden="true">{r.icon}</span>
              <h3 className="text-lg font-semibold text-[#1e293b] mb-2">{r.title}</h3>
              <p className="text-sm text-[#64748b] leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
