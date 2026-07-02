"use client";

import { Check, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { Magnetic } from "@/components/ui/magnetic-button";

const plans = [
  {
    name: "Starter",
    price: "₹499",
    period: "/month",
    description: "For solo shops just getting started.",
    features: ["Single branch", "Billing & POS", "Basic inventory", "GST-ready invoices", "Email support"],
    popular: false,
  },
  {
    name: "Growth",
    price: "₹1,499",
    period: "/month",
    description: "For growing multi-branch businesses.",
    features: [
      "Up to 5 branches",
      "Full accounting suite",
      "Automated GST filing",
      "Payroll for up to 25 staff",
      "Priority support",
      "Bank reconciliation",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large operations at scale.",
    features: [
      "Unlimited branches",
      "Unlimited payroll",
      "Dedicated account manager",
      "Custom integrations & API",
      "SLA-backed support",
      "Onboarding & migration",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-28 lg:py-36 relative bg-white overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-175 bg-[#6C3BFF]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <BlurReveal className="text-center mb-16">
          <span className="tag-pill mb-4 inline-block">Simple, transparent pricing</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#170b33] mb-4">
            Pricing that grows with you.
          </h2>
          <p className="text-[#5d4483] text-lg max-w-xl mx-auto">
            No hidden fees. No per-user surprises. Cancel any time.
          </p>
        </BlurReveal>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <BlurReveal key={plan.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`relative h-full rounded-3xl p-8 ${
                  plan.popular
                    ? "gradient-border bg-[#170b33] text-white shadow-2xl shadow-[#6C3BFF]/30 md:scale-105"
                    : "border border-[#e4dbf5] bg-[#F8F9FC]"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-linear-to-r from-[#6C3BFF] to-[#A343FC] text-white text-xs font-bold tracking-wide">
                    MOST POPULAR
                  </span>
                )}

                <h3 className={`font-heading text-xl font-bold mb-1 ${plan.popular ? "text-white" : "text-[#170b33]"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.popular ? "text-white/70" : "text-[#7c6699]"}`}>
                  {plan.description}
                </p>

                <div className="mb-8 flex items-baseline gap-1">
                  <span className={`font-heading text-4xl font-bold ${plan.popular ? "text-white" : "text-[#170b33]"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.popular ? "text-white/60" : "text-[#7c6699]"}`}>{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check size={16} className={plan.popular ? "text-[#C084FC] mt-0.5 shrink-0" : "text-[#6C3BFF] mt-0.5 shrink-0"} />
                      <span className={plan.popular ? "text-white/90" : "text-[#5d4483]"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Magnetic strength={0.2} className="block w-full">
                  <a
                    href="#contact"
                    className={`flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-semibold transition-all ${
                      plan.popular
                        ? "bg-white text-[#170b33] hover:bg-[#F8F9FC]"
                        : "bg-[#170b33] text-white hover:bg-[#2e1a56]"
                    }`}
                  >
                    Get Started <ArrowRight size={14} />
                  </a>
                </Magnetic>
              </motion.div>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
