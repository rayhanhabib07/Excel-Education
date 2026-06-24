import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Excel Education — a trusted coaching centre in Beanibazar, Sylhet with 10+ years of proven board results.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#f59e0b] uppercase tracking-wide mb-2">About</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
            About Excel Education
          </h1>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-[#475569] leading-relaxed">
          <p className="text-lg">
            Excel Education is a private tutoring institute in Beanibazar, Sylhet,
            Bangladesh, providing coaching for Class 8, SSC (Class 9–10), and HSC
            (Class 11–12) students under the NCTB national curriculum.
          </p>

          <p>
            Founded with a simple mission — to give every student in Beanibazar
            access to the quality of teaching that produces top board results. Over
            10+ years, we&apos;ve helped 200+ students achieve GPA 5 in SSC and HSC
            exams, and our pass rate consistently exceeds 95%.
          </p>

          <h2 className="text-2xl font-bold text-[#1e293b] mt-10">What Sets Us Apart</h2>

          <div className="grid sm:grid-cols-2 gap-5 not-prose mt-4">
            {[
              { title: "Experienced Teachers", desc: "Faculty from Dhaka University, SUST, and other reputed institutions with real classroom expertise." },
              { title: "Small Batches", desc: "Maximum 25 students per batch — every student gets personal attention and can ask questions freely." },
              { title: "Regular Model Tests", desc: "Weekly and monthly tests in board exam format so students are fully prepared before the real thing." },
              { title: "Quality Study Materials", desc: "Structured notes, worksheets, and question banks aligned with the NCTB syllabus and latest exam patterns." },
              { title: "Progress Tracking", desc: "Regular parent-teacher communication so families stay informed about their child's progress." },
              { title: "Affordable Fees", desc: "Quality education at fees that are fair and accessible for families in the Beanibazar area." },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl border border-[#e2e8f0] bg-[#f8fafc]">
                <h3 className="font-semibold text-[#1e293b] mb-1">{item.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1e293b] mt-10">Our Mission</h2>
          <p>
            To provide structured, exam-focused coaching that builds genuine
            understanding — not rote memorisation. We believe every student can
            achieve top grades with the right guidance, consistent practice, and a
            supportive learning environment.
          </p>
        </div>

        <div className="text-center mt-14">
          <Link
            href="/admission"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-semibold text-base text-white bg-[#f59e0b] hover:bg-[#d97706] transition-colors shadow-md"
          >
            Book a Free Demo Class
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
