"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
      {/* ── Desktop: sticky full-width bar ── */}
      <header
        className={`hidden lg:block sticky top-0 left-0 right-0 z-100 transition-all duration-300 animate-fade-in-down backdrop-blur-xl ${
          scrolled
            ? "bg-white/80 border-b border-[#e5e5e5] shadow-sm shadow-black/6"
            : "bg-white/60 border-b border-[#e5e5e5]/50"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="h-8 w-8 rounded-lg bg-black flex items-center justify-center">
                <span className="text-white font-bold text-sm">MB</span>
              </div>
              <span className="text-base font-bold tracking-tight text-black">
                Minute Books
              </span>
            </Link>

            {/* Nav links */}
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#555] hover:text-black transition-colors duration-200 whitespace-nowrap font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <Link
                href="#contact"
                className="text-sm font-medium text-[#555] hover:text-black transition-colors"
              >
                Log in
              </Link>
              <Link href="#contact" className="btn-primary text-sm py-2 px-5">
                Get in Touch
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* ── Mobile: floating pill navbar ── */}
      <div className="lg:hidden fixed top-3 left-4 right-4 z-100 animate-fade-in-down">
        {/* Pill bar */}
        <div
          className={`flex items-center justify-between px-4 h-14 rounded-2xl backdrop-blur-xl transition-all duration-300 ${
            scrolled
              ? "bg-white/85 shadow-lg shadow-black/10 border border-[#e5e5e5]"
              : "bg-white/70 shadow-md shadow-black/8 border border-[#e5e5e5]/70"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
            onClick={() => setMobileOpen(false)}
          >
            <div className="h-7 w-7 rounded-lg bg-black flex items-center justify-center">
              <span className="text-white font-bold text-xs">MB</span>
            </div>
            <span className="text-sm font-bold tracking-tight text-black">
              Minute Books
            </span>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-center w-9 h-9 rounded-xl bg-black/6 hover:bg-black/10 transition-colors text-black"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Floating dropdown menu */}
        {mobileOpen && (
          <div className="mt-2 rounded-2xl bg-white/90 backdrop-blur-xl border border-[#e5e5e5] shadow-xl shadow-black/10 overflow-hidden animate-fade-in-up [animation-duration:0.18s]">
            <div className="px-3 py-3 flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-[#444] hover:text-black py-2.5 px-3 rounded-xl hover:bg-black/5 transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 pt-2 border-t border-[#e5e5e5]">
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
      </div>

      {/* Spacer so page content starts below the floating mobile pill */}
      <div className="lg:hidden h-20" aria-hidden="true" />
    </>
  );
}
