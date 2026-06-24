import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog & Study Resources",
  description:
    "Exam tips, study routines, SSC & HSC preparation guides, and syllabus guidance from Excel Education, Beanibazar.",
};

type Post = {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  tag: string;
};

const posts: Post[] = [
  {
    title: "How to Prepare for SSC Science in 6 Months",
    slug: "ssc-science-preparation-guide",
    excerpt: "A structured study plan for SSC Science students covering Physics, Chemistry, Biology, and Higher Maths — with weekly milestones.",
    date: "2025-12-01",
    tag: "SSC Preparation",
  },
  {
    title: "Top 10 Mistakes HSC Students Make Before Board Exams",
    slug: "hsc-exam-mistakes",
    excerpt: "Common pitfalls that cost students marks in HSC exams, and how to avoid each one with simple habit changes.",
    date: "2025-11-15",
    tag: "HSC Tips",
  },
  {
    title: "Why Regular Model Tests Matter More Than Extra Coaching",
    slug: "model-tests-importance",
    excerpt: "Research shows that testing yourself regularly is more effective than re-reading notes. Here's how we use model tests at Excel Education.",
    date: "2025-10-20",
    tag: "Study Tips",
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#f59e0b] uppercase tracking-wide mb-2">Blog</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
            Study Resources &amp; Tips
          </h1>
          <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
            Exam preparation guides, study routines, and advice from our teachers.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-xl border border-[#e2e8f0] bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2 py-0.5 rounded text-xs font-medium text-[#1e3a8a] bg-[#dbeafe]">
                    {post.tag}
                  </span>
                  <time dateTime={post.date} className="text-xs text-[#94a3b8]">
                    {formatDate(post.date)}
                  </time>
                </div>
                <h2 className="text-lg font-semibold text-[#1e293b] group-hover:text-[#1e3a8a] transition-colors mb-1">
                  {post.title}
                </h2>
                <p className="text-sm text-[#64748b] leading-relaxed">{post.excerpt}</p>
              </div>
              <svg
                className="w-5 h-5 text-[#94a3b8] group-hover:text-[#1e3a8a] transition-colors shrink-0 hidden sm:block"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
