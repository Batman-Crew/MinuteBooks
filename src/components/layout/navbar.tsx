"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#industries", label: "Industries" },
  { href: "#blog", label: "Blog" },
  // { href: "#careers", label: "Careers" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Hiring banner */}
      {/* <div className="relative z-50 bg-[#000]/10 border-b border-[#000]/20 py-2 px-4 text-center text-sm">
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#000] animate-pulse-slow" />
          <span className="font-semibold text-[#000]">We&apos;re Hiring!</span>
          <span className="text-[#555] hidden sm:inline">
            Join our growing team of builders.
          </span>
          <Link
            href="#careers"
            className="inline-flex items-center gap-1 text-[#000] font-semibold hover:text-[#222] transition-colors"
          >
            View open roles <ArrowRight size={12} />
          </Link>
        </span>
      </div> */}

      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 animate-fade-in-down ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-[#e5e5e5] shadow-sm shadow-[#000]/8"
            : "bg-[#fafafa]/80 backdrop-blur-md border-b border-[#e5e5e5]/60"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="h-8 w-8 rounded-lg bg-[#000] flex items-center justify-center shadow-[0_0_12px_rgba(125,59,113,0.35)]">
                <span className="text-white font-bold text-sm">MB</span>
              </div>
              <span className="text-base font-bold tracking-tight text-[#000]">
                Minute Books
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#555] hover:text-[#000] transition-colors duration-200 whitespace-nowrap font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="#contact"
                className="text-sm font-medium text-[#555] hover:text-[#000] transition-colors"
              >
                Log in
              </Link>
              <Link href="#contact" className="btn-primary text-sm py-2 px-5">
                Get in Touch
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-[#000] p-1"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-[#e5e5e5] animate-fade-in-up">
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-[#555] hover:text-[#000] py-2.5 px-3 rounded-lg hover:bg-[#000]/6 transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-[#e5e5e5]">
                <Link
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center text-sm"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
