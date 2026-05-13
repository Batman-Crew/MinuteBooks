"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { TextRotate } from "@/components/ui/text-rotate";

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

const rotatingTexts = [
  "Your Business",
  "Your Vision",
  "Your Growth",
  "Startups",
  "Enterprises",
];

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#fafafa]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80"
          alt="Team working on software"
          fill
          className="object-cover opacity-[0.06]"
          priority
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-[#777]/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 -right-40 w-[500px] h-[500px] bg-[#000]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-[#fafafa] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#000]/25 bg-[#000]/8 text-xs font-semibold text-[#000] mb-8 animate-fade-in-up">
            <span className="h-1.5 w-1.5 rounded-full bg-[#000] animate-pulse-slow" />
            Available for new projects
          </div>

          {/* Heading with TextRotate */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6 animate-fade-in-up [animation-delay:80ms]">
            <span className="gradient-text">Custom Software</span>
            <br />
            <span className="text-[#000]">Built for </span>
            <span className="inline-flex overflow-hidden gradient-text-cyan">
              <TextRotate
                texts={rotatingTexts}
                rotationInterval={2500}
                staggerDuration={0.025}
                staggerFrom="first"
                splitBy="characters"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                transition={{ type: "spring", damping: 28, stiffness: 300 }}
                mainClassName="justify-center"
                splitLevelClassName="overflow-hidden"
              />
            </span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-[#555] leading-relaxed mb-6 animate-fade-in-up [animation-delay:160ms]">
            From idea to production — we design and build web apps, mobile
            applications, and AI-powered products that scale with your ambitions.
            Based in Bangalore. Serving clients worldwide.
          </p>

          {/* Perks */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10 animate-fade-in-up [animation-delay:220ms]">
            {perks.map((perk) => (
              <span
                key={perk}
                className="flex items-center gap-1.5 text-sm text-[#555] font-medium"
              >
                <CheckCircle2 size={14} className="text-[#000] shrink-0" />
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
                className="text-center py-5 px-4 rounded-2xl bg-white border border-[#e5e5e5] shadow-sm shadow-[#000]/6"
              >
                <div className="text-2xl sm:text-3xl font-bold text-[#000] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-[#555] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
