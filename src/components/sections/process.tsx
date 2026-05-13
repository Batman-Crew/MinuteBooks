"use client";

import { Phone, FileText, Code2, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Discovery Call",
    description: "Understand your goals, timelines, and tools needed. Free 30-minute call, no strings attached.",
    iconBg: "bg-[#7D3B71]/10",
    iconColor: "text-[#7D3B71]",
    glow: "from-[#7D3B71]/10 to-transparent",
  },
  {
    icon: FileText,
    step: "02",
    title: "Plan & Proposal",
    description: "Clear steps with realistic timelines, tech stack recommendations, and fully transparent pricing.",
    iconBg: "bg-[#96568B]/10",
    iconColor: "text-[#96568B]",
    glow: "from-[#96568B]/10 to-transparent",
  },
  {
    icon: Code2,
    step: "03",
    title: "Build & Collaborate",
    description: "Code, test, review, and communicate. Weekly updates and open access to progress throughout.",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
    glow: "from-emerald-400/10 to-transparent",
  },
  {
    icon: PackageCheck,
    step: "04",
    title: "Deliver & Support",
    description: "Final handover with complete documentation, deployment support, and ongoing maintenance options.",
    iconBg: "bg-[#632558]/10",
    iconColor: "text-[#632558]",
    glow: "from-[#632558]/10 to-transparent",
  },
];

export function Process() {
  return (
    <section id="process" className="py-28 lg:py-36 relative bg-[#FAF4F9]">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="tag-pill mb-4 inline-block">Our Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#33092B] mb-4">
            How We Work
          </h2>
          <p className="text-[#96568B] text-lg max-w-xl mx-auto">
            Simple. Clear. Focused on results. Four steps from idea to a live product.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="group glass-card-hover rounded-2xl p-7 relative overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-bl ${step.glow} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-8 translate-x-8 pointer-events-none`} />

              <div className="relative z-10">
                <span className="text-5xl font-bold text-[#E3D3E0] group-hover:text-[#C99BC1] transition-colors absolute top-6 right-6 select-none">
                  {step.step}
                </span>
                <div className={`h-11 w-11 rounded-xl ${step.iconBg} flex items-center justify-center mb-6 transition-colors`}>
                  <step.icon size={20} className={step.iconColor} />
                </div>
                <h3 className="font-bold text-base mb-3 text-[#33092B]">{step.title}</h3>
                <p className="text-sm text-[#96568B] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
