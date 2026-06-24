import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-[#1e3a8a] text-white text-center text-sm py-2 px-4">
      <p>
        🎓 Admission ongoing for HSC 2026 batch — limited seats!{" "}
        <Link href="/admission" className="underline font-medium hover:text-[#fbbf24]">
          Enquire now →
        </Link>
      </p>
    </div>
  );
}
