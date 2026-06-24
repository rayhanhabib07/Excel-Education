import Link from "next/link";

const courses = [
  {
    level: "Class 8",
    description: "Strong foundation in Maths, Science & English for board preparation.",
    subjects: ["Mathematics", "General Science", "English", "Bengali"],
    color: "bg-[#dbeafe] text-[#1e3a8a]",
  },
  {
    level: "SSC (Class 9–10)",
    description: "Focused coaching for Science, Commerce & Humanities groups with regular model tests.",
    subjects: ["Physics", "Chemistry", "Biology", "Higher Maths", "Accounting", "English"],
    color: "bg-[#fef3c7] text-[#92400e]",
  },
  {
    level: "HSC (Class 11–12)",
    description: "Intensive board exam preparation with experienced college-level teachers.",
    subjects: ["Physics", "Chemistry", "Biology", "Higher Maths", "Accounting", "English"],
    color: "bg-[#dcfce7] text-[#166534]",
  },
];

export default function CoursesPreview() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#f59e0b] uppercase tracking-wide mb-2">Programmes</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b]">Courses We Offer</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.level}
              className="p-6 sm:p-8 rounded-2xl border border-[#e2e8f0] bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${course.color} mb-4`}>
                {course.level}
              </span>
              <p className="text-[#64748b] text-sm leading-relaxed mb-5">
                {course.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {course.subjects.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 rounded text-xs text-[#64748b] border border-[#e2e8f0]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/courses"
            className="text-sm font-medium text-[#1e3a8a] hover:text-[#2563eb] transition-colors"
          >
            See all courses, schedules &amp; fees →
          </Link>
        </div>
      </div>
    </section>
  );
}
