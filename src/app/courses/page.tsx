import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Courses & Batches",
  description:
    "Class 8, SSC & HSC coaching batches at Excel Education, Beanibazar. Science, Commerce & Humanities groups. See subjects, schedules & fees.",
};

type Course = {
  level: string;
  levelLabel: string;
  color: string;
  groups: {
    name: string;
    subjects: string[];
    schedule: string;
    fee: string;
    seats: number;
  }[];
};

const courses: Course[] = [
  {
    level: "class-8",
    levelLabel: "Class 8",
    color: "bg-[#dbeafe] text-[#1e3a8a]",
    groups: [
      {
        name: "General",
        subjects: ["Mathematics", "General Science", "English", "Bengali", "Bangladesh & Global Studies", "ICT"],
        schedule: "Sat, Mon, Wed — 4:00 PM to 6:00 PM",
        fee: "৳ 1,500 / month",
        seats: 25,
      },
    ],
  },
  {
    level: "ssc",
    levelLabel: "SSC (Class 9–10)",
    color: "bg-[#fef3c7] text-[#92400e]",
    groups: [
      {
        name: "Science",
        subjects: ["Physics", "Chemistry", "Biology", "Higher Mathematics", "English", "ICT"],
        schedule: "Sat, Mon, Wed — 6:30 PM to 8:30 PM",
        fee: "৳ 2,000 / month",
        seats: 25,
      },
      {
        name: "Commerce",
        subjects: ["Accounting", "Business Entrepreneurship", "Finance & Banking", "English", "ICT"],
        schedule: "Sun, Tue, Thu — 4:00 PM to 6:00 PM",
        fee: "৳ 1,800 / month",
        seats: 25,
      },
      {
        name: "Humanities",
        subjects: ["Economics", "Geography", "Civics", "English", "Bengali"],
        schedule: "Sun, Tue, Thu — 6:30 PM to 8:30 PM",
        fee: "৳ 1,500 / month",
        seats: 25,
      },
    ],
  },
  {
    level: "hsc",
    levelLabel: "HSC (Class 11–12)",
    color: "bg-[#dcfce7] text-[#166534]",
    groups: [
      {
        name: "Science",
        subjects: ["Physics", "Chemistry", "Biology", "Higher Mathematics", "English", "ICT"],
        schedule: "Fri, Sat, Mon, Wed — 8:00 AM to 10:30 AM",
        fee: "৳ 2,500 / month",
        seats: 20,
      },
      {
        name: "Commerce",
        subjects: ["Accounting", "Management", "Finance, Banking & Insurance", "English"],
        schedule: "Fri, Sun, Tue, Thu — 8:00 AM to 10:00 AM",
        fee: "৳ 2,200 / month",
        seats: 20,
      },
    ],
  },
];

export default function CoursesPage() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#f59e0b] uppercase tracking-wide mb-2">Programmes</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
            Courses &amp; Batches
          </h1>
          <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
            All programmes follow the NCTB national curriculum. Fees are monthly
            and include study materials.
          </p>
        </div>

        <div className="space-y-16">
          {courses.map((course) => (
            <section key={course.level}>
              <h2 className="text-2xl font-bold text-[#1e293b] mb-6 flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${course.color}`}>
                  {course.levelLabel}
                </span>
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {course.groups.map((group) => (
                  <div
                    key={`${course.level}-${group.name}`}
                    className="p-6 rounded-2xl border border-[#e2e8f0] bg-white hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-lg font-semibold text-[#1e293b] mb-1">
                      {course.levelLabel} — {group.name}
                    </h3>
                    <p className="text-sm text-[#64748b] mb-4">{group.schedule}</p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {group.subjects.map((s) => (
                        <span key={s} className="px-2 py-0.5 rounded text-xs text-[#64748b] border border-[#e2e8f0] bg-[#f8fafc]">
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-end justify-between pt-4 border-t border-[#e2e8f0]">
                      <div>
                        <p className="text-2xl font-bold text-[#1e3a8a]">{group.fee}</p>
                        <p className="text-xs text-[#94a3b8]">Max {group.seats} students/batch</p>
                      </div>
                      <Link
                        href="/admission"
                        className="text-sm font-medium text-[#f59e0b] hover:text-[#d97706] transition-colors"
                      >
                        Enrol →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
