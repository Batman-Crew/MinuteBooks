"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic-button";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#dashboard", label: "Solutions" },
  { href: "#industries", label: "Industries" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "Resources" },
  { href: "#about", label: "About" },
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
      {/* ── Desktop: sticky glass bar ── */}
      <header
        className={`hidden lg:block fixed top-0 left-0 right-0 z-100 transition-all duration-300 animate-fade-in-down backdrop-blur-xl ${
          scrolled
            ? "bg-white/85 border-b border-[#e4dbf5] shadow-sm shadow-[#6C3BFF]/10"
            : "bg-white/40 border-b border-white/40"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image src="/logo-mark.png" alt="Minute Books" width={32} height={32} className="h-8 w-8 rounded-lg" priority />
              <span className="font-heading text-base font-bold tracking-tight text-[#170b33]">
                Minute Books
              </span>
            </Link>

            {/* Nav links */}
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm text-[#5d4483] hover:text-[#170b33] transition-colors duration-200 whitespace-nowrap font-medium group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-linear-to-r from-[#6C3BFF] to-[#A343FC] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <Magnetic strength={0.25}>
                <Link href="#pricing" className="btn-primary text-sm py-2 px-5">
                  Get Started
                </Link>
              </Magnetic>
            </div>
          </div>
        </nav>
      </header>

      {/* ── Mobile: floating pill navbar ── */}
      <div className="lg:hidden fixed top-3 left-4 right-4 z-100 animate-fade-in-down">
        <div
          className={`flex items-center justify-between px-4 h-14 rounded-2xl backdrop-blur-xl transition-all duration-300 ${
            scrolled
              ? "bg-white/90 shadow-lg shadow-[#6C3BFF]/14 border border-[#e4dbf5]"
              : "bg-white/60 shadow-md shadow-[#6C3BFF]/10 border border-white/50"
          }`}
        >
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
            onClick={() => setMobileOpen(false)}
          >
            <Image src="/logo-mark.png" alt="Minute Books" width={28} height={28} className="h-7 w-7 rounded-lg" priority />
            <span className="font-heading text-sm font-bold tracking-tight text-[#170b33]">
              Minute Books
            </span>
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#6C3BFF]/8 hover:bg-[#6C3BFF]/14 transition-colors text-[#170b33]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="mt-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#e4dbf5] shadow-xl shadow-[#6C3BFF]/14 overflow-hidden animate-fade-in-up [animation-duration:0.18s]">
            <div className="px-3 py-3 flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-[#4a3170] hover:text-[#170b33] py-2.5 px-3 rounded-xl hover:bg-[#6C3BFF]/6 transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 pt-2 border-t border-[#e4dbf5] flex flex-col gap-2">
                <Link
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-center py-2 text-[#5d4483] font-medium"
                >
                  Login
                </Link>
                <Link
                  href="#pricing"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center text-sm"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Spacer so page content starts below the fixed navbar */}
      <div className="h-20 lg:h-16" aria-hidden="true" />
    </>
  );
}
