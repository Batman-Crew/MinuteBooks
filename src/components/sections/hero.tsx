"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const perks = [
  "Free consultation",
  "Go live in 48 hours",
  "No lock-in contracts",
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5+", label: "Years Experience" },
  { value: "24/7", label: "Worldwide Support" },
];

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#FAF4F9]">
      {/* Background image — subtle */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80"
          alt="Team working on software"
          fill
          className="object-cover opacity-[0.06]"
          priority
        />
        {/* Dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(125,59,113,0.07)_1px,transparent_1px)] bg-[size:28px_28px]" />
        {/* Soft purple orbs */}
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-[#B076A5]/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 -right-40 w-[500px] h-[500px] bg-[#7D3B71]/10 rounded-full blur-[140px]" />
        {/* Bottom fade to page bg */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-[#FAF4F9] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7D3B71]/25 bg-[#7D3B71]/8 text-xs font-semibold text-[#7D3B71] mb-8 animate-fade-in-up">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7D3B71] animate-pulse-slow" />
            Available for new projects
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6 animate-fade-in-up [animation-delay:80ms]">
            <span className="gradient-text">Custom Software</span>
            <br />
            <span className="text-[#33092B]">Built for</span>{" "}
            <span className="gradient-text-cyan">Your Business</span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-[#96568B] leading-relaxed mb-6 animate-fade-in-up [animation-delay:160ms]">
            From idea to production — we design and build web apps, mobile
            applications, and AI-powered products that scale with your ambitions.
            Based in Bangalore. Serving clients worldwide.
          </p>

          {/* Perks row */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10 animate-fade-in-up [animation-delay:220ms]">
            {perks.map((perk) => (
              <span
                key={perk}
                className="flex items-center gap-1.5 text-sm text-[#96568B] font-medium"
              >
                <CheckCircle2 size={14} className="text-[#7D3B71] shrink-0" />
                {perk}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-20 animate-fade-in-up [animation-delay:300ms]">
            <Link href="#contact" className="btn-primary">
              Book a Free Consultation
              <ArrowRight size={15} />
            </Link>
            <Link href="#services" className="btn-outline">
              Explore Services
            </Link>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in-up [animation-delay:420ms]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center py-5 px-4 rounded-2xl bg-white border border-[#E3D3E0] shadow-sm shadow-[#7D3B71]/6"
              >
                <div className="text-2xl sm:text-3xl font-bold text-[#33092B] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-[#96568B] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
