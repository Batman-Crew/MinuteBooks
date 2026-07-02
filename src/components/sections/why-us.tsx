"use client";

import { Check, X, Minus } from "lucide-react";
import { motion } from "motion/react";
import { BlurReveal } from "@/components/ui/blur-reveal";

const rows = [
  { label: "Real-time GST filing", mb: true, erp: "partial", excel: false },
  { label: "Setup time", mb: "Same day", erp: "Weeks", excel: "N/A" },
  { label: "POS + Inventory + Payroll in one place", mb: true, erp: true, excel: false },
  { label: "Automatic bank reconciliation", mb: true, erp: "partial", excel: false },
  { label: "Mobile access", mb: true, erp: "partial", excel: false },
  { label: "Human error risk", mb: "Low", erp: "Medium", excel: "High" },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check size={16} className="text-[#1E9E5A] mx-auto" />;
  if (value === false) return <X size={16} className="text-[#E0554F] mx-auto" />;
  if (value === "partial") return <Minus size={16} className="text-[#B8860B] mx-auto" />;
  return <span className="text-[10px] sm:text-xs text-[#170b33] font-medium leading-snug">{value}</span>;
}

export function WhyUs() {
  return (
    <section className="py-28 lg:py-36 relative bg-white overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <BlurReveal className="text-center mb-16">
          <span className="tag-pill mb-4 inline-block">Why Minute Books</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#170b33] mb-4">
            Outgrow Excel. Skip the ERP overhead.
          </h2>
          <p className="text-[#5d4483] text-lg max-w-xl mx-auto">
            Everything a traditional ERP promises — without the six-month rollout.
          </p>
        </BlurReveal>

        <BlurReveal delay={0.1}>
          <div className="rounded-3xl border border-[#e4dbf5] bg-[#F8F9FC] overflow-hidden shadow-xl shadow-[#6C3BFF]/8">
            <div className="grid grid-cols-[1.3fr_1fr_1fr_1fr] sm:grid-cols-4 text-center">
              <div />
              <div className="relative py-3 sm:py-5 px-1 bg-linear-to-b from-[#6C3BFF] to-[#8B5CF6] text-white font-heading font-bold text-[11px] sm:text-base rounded-t-2xl -mx-px">
                Minute Books
              </div>
              <div className="py-3 sm:py-5 px-1 text-[#170b33] font-semibold text-[11px] sm:text-base">Traditional ERP</div>
              <div className="py-3 sm:py-5 px-1 text-[#170b33] font-semibold text-[11px] sm:text-base">Excel Sheets</div>
            </div>

            {rows.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="grid grid-cols-[1.3fr_1fr_1fr_1fr] sm:grid-cols-4 items-center border-t border-[#e4dbf5] bg-white"
              >
                <div className="py-4 pl-3 sm:pl-5 pr-1 sm:pr-2 text-[11px] sm:text-sm text-[#170b33] font-medium leading-snug">{row.label}</div>
                <div className="py-4 px-1 text-center bg-[#F8F9FC]/60"><Cell value={row.mb} /></div>
                <div className="py-4 px-1 text-center"><Cell value={row.erp} /></div>
                <div className="py-4 px-1 text-center"><Cell value={row.excel} /></div>
              </motion.div>
            ))}
          </div>
        </BlurReveal>
      </div>
    </section>
  );
}
