import Link from "next/link";

const quickLinks = [
  { label: "Courses", href: "/courses" },
  { label: "Results", href: "/results" },
  { label: "Teachers", href: "/teachers" },
  { label: "About", href: "/about" },
  { label: "Admission", href: "/admission" },
  { label: "Blog", href: "/blog" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1e293b] text-white pt-14 pb-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-3">
              Excel<span className="text-[#f59e0b]">.</span>Education
            </h3>
            <p className="text-sm text-[#94a3b8] leading-relaxed">
              Private tutoring for Class 8, SSC &amp; HSC students. Proven
              results, experienced teachers, small batches.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#94a3b8] mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#cbd5e1] hover:text-[#f59e0b] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#94a3b8] mb-3">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-[#cbd5e1]">
              <li>
                <a href="tel:+8801XXXXXXXXX" className="hover:text-[#f59e0b] transition-colors">
                  📞 +880 1XXX-XXXXXX
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/8801XXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20admission"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f59e0b] transition-colors"
                >
                  💬 WhatsApp
                </a>
              </li>
              <li>📍 Beanibazar, Sylhet, Bangladesh</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#94a3b8] mb-3">
              Legal
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#cbd5e1] hover:text-[#f59e0b] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#334155] pt-6 text-center text-xs text-[#64748b]">
          &copy; {new Date().getFullYear()} Excel Education, Beanibazar, Sylhet.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
