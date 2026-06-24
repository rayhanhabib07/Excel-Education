import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Teachers",
  description:
    "Meet the experienced teachers at Excel Education, Beanibazar. Qualified faculty from reputed universities dedicated to your child's success.",
};

type Teacher = {
  name: string;
  subjects: string[];
  qualification: string;
  experience: number;
  bio: string;
};

const teachers: Teacher[] = [
  {
    name: "Md. Kamal Hossain",
    subjects: ["Physics", "Higher Mathematics"],
    qualification: "MSc Physics, Shahjalal University of Science & Technology",
    experience: 12,
    bio: "Passionate about making physics intuitive. Has coached 50+ GPA 5 achievers in SSC & HSC.",
  },
  {
    name: "Farida Yasmin",
    subjects: ["Chemistry", "Biology"],
    qualification: "MSc Chemistry, Dhaka University",
    experience: 10,
    bio: "Known for her structured approach to organic chemistry and biology practicals.",
  },
  {
    name: "Abdur Rahim",
    subjects: ["Mathematics", "ICT"],
    qualification: "BSc Mathematics, MC College Sylhet",
    experience: 8,
    bio: "Specialises in building strong mathematical foundations from Class 8 through HSC.",
  },
  {
    name: "Nasima Akter",
    subjects: ["English", "Bengali"],
    qualification: "MA English, National University",
    experience: 9,
    bio: "Focuses on exam writing techniques and comprehension skills that directly boost board scores.",
  },
  {
    name: "Rafiqul Islam",
    subjects: ["Accounting", "Finance & Banking"],
    qualification: "MBA, Sylhet International University",
    experience: 7,
    bio: "Commerce specialist who breaks down complex accounting concepts into simple, memorable steps.",
  },
  {
    name: "Sultana Razia",
    subjects: ["Economics", "Bangladesh & Global Studies"],
    qualification: "MSS Economics, Chittagong University",
    experience: 6,
    bio: "Makes economics and civics engaging with real-world examples from Bangladesh's economy.",
  },
];

export default function TeachersPage() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#f59e0b] uppercase tracking-wide mb-2">Faculty</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
            Our Teachers
          </h1>
          <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
            Qualified, experienced, and dedicated to every student&apos;s success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-2xl border border-[#e2e8f0] bg-white hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-[#dbeafe] flex items-center justify-center mb-4">
                <span className="text-2xl" aria-hidden="true">👨‍🏫</span>
              </div>
              <h2 className="text-lg font-semibold text-[#1e293b]">{t.name}</h2>
              <p className="text-sm text-[#1e3a8a] font-medium mt-1">
                {t.subjects.join(" · ")}
              </p>
              <p className="text-xs text-[#94a3b8] mt-1">{t.qualification}</p>
              <p className="text-xs text-[#94a3b8]">{t.experience} years experience</p>
              <p className="text-sm text-[#64748b] leading-relaxed mt-4">
                {t.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
