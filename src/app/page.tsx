import Link from "next/link";
import AnnouncementBar from "@/components/sections/AnnouncementBar";
import TrustBar from "@/components/sections/TrustBar";
import CoursesPreview from "@/components/sections/CoursesPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ResultsHighlight from "@/components/sections/ResultsHighlight";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";

export default function Home() {
  return (
    <>
      <AnnouncementBar />

      {/* Hero */}
      <section className="pt-28 pb-20 sm:pt-32 sm:pb-24 px-4 sm:px-6 bg-gradient-to-b from-[#eff6ff] to-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#dbeafe] text-[#1e3a8a] text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" aria-hidden="true" />
            Admission Open — Limited Seats
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1e293b] leading-[1.1] tracking-tight mb-6 max-w-4xl mx-auto">
            Your child&apos;s path to{" "}
            <span className="text-[#1e3a8a]">GPA 5</span> starts here.
          </h1>

          <p className="text-lg sm:text-xl text-[#64748b] leading-relaxed mb-10 max-w-2xl mx-auto">
            Expert coaching for Class 8, SSC &amp; HSC in Beanibazar, Sylhet.
            Small batches, experienced teachers, and a proven track record of
            board-topping results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admission"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-semibold text-base text-white bg-[#f59e0b] hover:bg-[#d97706] transition-colors shadow-md"
            >
              Book a Free Demo Class
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center px-7 py-4 rounded-lg font-semibold text-base text-[#1e3a8a] border-2 border-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white transition-colors"
            >
              View Courses &amp; Batches
            </Link>
          </div>
        </div>
      </section>

      <TrustBar />
      <CoursesPreview />
      <WhyChooseUs />
      <ResultsHighlight />
      <TestimonialsSection />
      <FaqSection />

      {/* Closing CTA */}
      <section className="py-20 px-4 sm:px-6 bg-[#1e3a8a] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to start your journey to top grades?
          </h2>
          <p className="text-lg text-[#bfdbfe] mb-8">
            Book a free demo class or counselling session. No commitment — just
            see if Excel Education is the right fit.
          </p>
          <Link
            href="/admission"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-semibold text-base text-[#1e3a8a] bg-[#f59e0b] hover:bg-[#d97706] transition-colors shadow-md"
          >
            Book a Free Demo Class
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
