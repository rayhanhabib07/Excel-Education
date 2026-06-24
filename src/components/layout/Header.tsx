"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Results", href: "/results" },
  { label: "Teachers", href: "/teachers" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e2e8f0]"
          : "bg-white"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between" aria-label="Main navigation">
        <Link href="/" className="text-xl font-bold text-[#1e3a8a] tracking-tight">
          Excel<span className="text-[#f59e0b]">.</span>Education
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-6" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[#64748b] hover:text-[#1e3a8a] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/admission"
            className="text-sm font-semibold px-5 py-2.5 rounded-lg bg-[#f59e0b] text-white hover:bg-[#d97706] transition-colors duration-200 shadow-sm"
          >
            Book a Free Demo Class
          </Link>
        </div>

        <button
          className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a8a]"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`block w-5 h-0.5 bg-[#1e293b] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#1e293b] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#1e293b] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-b border-[#e2e8f0] ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col px-6 py-4 gap-3" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block text-base text-[#64748b] hover:text-[#1e3a8a] transition-colors py-1"
                onClick={() => setMenuOpen(false)}
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/admission"
              className="inline-block text-sm font-semibold px-5 py-2.5 rounded-lg bg-[#f59e0b] text-white hover:bg-[#d97706] transition-colors mt-2"
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
            >
              Book a Free Demo Class
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
