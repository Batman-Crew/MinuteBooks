"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic-button";

const socialLinks = [
  {
    label: "X (Twitter)",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const footerLinks = {
  Product: [
    { href: "#features", label: "Features" },
    { href: "#dashboard", label: "Dashboard Demo" },
    { href: "#pricing", label: "Pricing" },
    { href: "#industries", label: "Industries" },
  ],
  Modules: [
    { href: "#pos", label: "POS" },
    { href: "#inventory", label: "Inventory" },
    { href: "#accounting", label: "Accounting" },
    { href: "#gst", label: "GST Filing" },
    { href: "#payroll", label: "Payroll" },
  ],
  Company: [
    { href: "#faq", label: "FAQ" },
    { href: "#testimonials", label: "Customer Stories" },
    { href: "#contact", label: "Contact" },
    { href: "#", label: "Careers" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[#e4dbf5] bg-[#faf8fd]">
      {/* Newsletter strip */}
      <div className="border-b border-[#e4dbf5] bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading text-lg font-bold text-[#170b33] mb-1">Stay ahead of GST deadlines.</p>
            <p className="text-sm text-[#5d4483]">One email a month — product updates, compliance changes, no spam.</p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-sm items-center gap-2 rounded-full border border-[#e4dbf5] bg-[#F8F9FC] p-1.5 shrink-0"
          >
            <Mail size={16} className="text-[#7c6699] ml-2 shrink-0" />
            <input
              type="email"
              required
              placeholder="you@business.com"
              className="w-full bg-transparent text-sm text-[#170b33] placeholder:text-[#a695c2] outline-none px-1"
            />
            <Magnetic strength={0.2}>
              <button type="submit" className="btn-primary py-2 px-4 text-xs shrink-0">
                Subscribe
              </button>
            </Magnetic>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <Image src="/logo-mark.png" alt="Minute Books" width={32} height={32} className="h-8 w-8 rounded-lg shadow-[0_0_12px_rgba(124,58,237,0.35)]" />
              <span className="font-heading text-base font-bold tracking-tight text-[#170b33]">Minute Books</span>
            </Link>
            <p className="text-sm text-[#5d4483] leading-relaxed mb-6 max-w-xs">
              Cloud accounting, POS, GST, and payroll — one beautiful platform
              built for Indian businesses. Accounting made simple.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-9 w-9 rounded-lg border border-[#e4dbf5] bg-white flex items-center justify-center text-[#5d4483] hover:text-[#170b33] hover:border-[#a695c2] hover:bg-[#f2ecfa] transition-colors"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-[#170b33]">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-[#5d4483] hover:text-[#170b33] transition-colors font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact row */}
        <div className="mt-12 pt-8 border-t border-[#e4dbf5] grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {[{ icon: MapPin, value: "Bangalore, India", href: null }].map((item) => (
            <div key={item.value} className="flex items-center gap-2.5 text-sm text-[#5d4483]">
              <item.icon size={14} className="shrink-0 text-[#170b33]" />
              <span className="font-medium">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-[#e4dbf5]">
          <p className="text-xs text-[#7c6699]">
            &copy; {new Date().getFullYear()} Minute Books. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-[#7c6699]">
            <Link href="#" className="hover:text-[#170b33] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#170b33] transition-colors flex items-center gap-1">Terms of Service</Link>
            <Link href="#" className="hover:text-[#170b33] transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
