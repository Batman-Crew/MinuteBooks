"use client";

import { BlurReveal } from "@/components/ui/blur-reveal";
import { Counter } from "@/components/ui/counter";

const stats = [
  { value: 12000, suffix: "+", label: "Businesses Managed", description: "Across India and growing every day" },
  { value: 2.4, suffix: "M+", label: "Invoices Created", description: "Generated and tracked in real time" },
  { value: 480000, suffix: "+", label: "GST Returns Filed", description: "On time, every filing cycle" },
  { value: 18, suffix: "M+", label: "Sales Recorded", description: "Processed through Minute Books POS" },
  { value: 3.1, suffix: "M+", label: "Inventory Items", description: "Tracked across every warehouse" },
  { value: 42, suffix: "M+", label: "Transactions", description: "Reconciled automatically" },
];

export function Stats() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#170b33]">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] bg-size-[24px_24px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6C3BFF]/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#A343FC]/25 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurReveal className="text-center mb-14">
          <span className="tag-pill mb-4 inline-block border-white/20! bg-white/10! text-white!">Live statistics</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Numbers that keep growing.
          </h2>
        </BlurReveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <BlurReveal key={stat.label} delay={i * 0.06} className="text-center">
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                className="font-heading text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight block"
              />
              <div className="font-semibold text-sm text-[#e4dbf5] mb-1">{stat.label}</div>
              <div className="text-xs text-[#a695c2] leading-relaxed">{stat.description}</div>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
