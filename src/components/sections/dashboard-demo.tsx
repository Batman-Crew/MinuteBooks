"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ShoppingCart, Boxes, BookOpenCheck, Users, Percent } from "lucide-react";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { Counter } from "@/components/ui/counter";

const tabs = [
  {
    id: "sales",
    label: "Sales",
    icon: ShoppingCart,
    stats: [
      { label: "Revenue today", value: 84200, prefix: "₹" },
      { label: "Orders", value: 312 },
      { label: "Avg. order value", value: 270, prefix: "₹" },
    ],
    bars: [55, 70, 48, 90, 65, 80, 100],
  },
  {
    id: "inventory",
    label: "Inventory",
    icon: Boxes,
    stats: [
      { label: "SKUs tracked", value: 4820 },
      { label: "Low stock alerts", value: 12 },
      { label: "Warehouses", value: 6 },
    ],
    bars: [80, 60, 40, 30, 55, 65, 45],
  },
  {
    id: "accounting-tab",
    label: "Accounting",
    icon: BookOpenCheck,
    stats: [
      { label: "Net profit (MTD)", value: 512300, prefix: "₹" },
      { label: "Open invoices", value: 47 },
      { label: "Reconciled", value: 98, suffix: "%" },
    ],
    bars: [40, 55, 60, 50, 75, 85, 95],
  },
  {
    id: "payroll-tab",
    label: "Payroll",
    icon: Users,
    stats: [
      { label: "Employees paid", value: 128 },
      { label: "Payroll cost", value: 1840000, prefix: "₹" },
      { label: "On-time rate", value: 100, suffix: "%" },
    ],
    bars: [90, 92, 88, 95, 91, 97, 100],
  },
  {
    id: "gst-tab",
    label: "GST",
    icon: Percent,
    stats: [
      { label: "GST collected", value: 96400, prefix: "₹" },
      { label: "Returns filed", value: 24 },
      { label: "Compliance score", value: 100, suffix: "%" },
    ],
    bars: [70, 75, 82, 88, 91, 96, 100],
  },
];

export function DashboardDemo() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section id="dashboard" className="py-28 lg:py-36 relative bg-[#F8F9FC] overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <BlurReveal className="text-center mb-16">
          <span className="tag-pill mb-4 inline-block">See it in action</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#170b33] mb-4">
            One dashboard. Every number that matters.
          </h2>
          <p className="text-[#5d4483] text-lg max-w-xl mx-auto">
            Switch between modules and watch your business update in real time.
          </p>
        </BlurReveal>

        <BlurReveal delay={0.1}>
          <div className="rounded-3xl border border-[#e4dbf5] bg-white shadow-2xl shadow-[#6C3BFF]/12 overflow-hidden">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 p-3 border-b border-[#e4dbf5] bg-[#F8F9FC]">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    active === tab.id ? "text-white" : "text-[#5d4483] hover:text-[#170b33]"
                  }`}
                >
                  {active === tab.id && (
                    <motion.span
                      layoutId="dashboard-tab-pill"
                      className="absolute inset-0 rounded-full bg-linear-to-r from-[#6C3BFF] to-[#A343FC]"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <tab.icon size={14} className="relative z-10" />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-6 sm:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="grid lg:grid-cols-5 gap-8 items-center"
                >
                  {/* Flip stat cards */}
                  <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                    {current.stats.map((s, i) => (
                      <FlipCard key={s.label} delay={i * 0.08}>
                        <div className="text-xs text-[#7c6699] font-medium mb-1">{s.label}</div>
                        <Counter
                          value={s.value}
                          prefix={s.prefix}
                          suffix={s.suffix}
                          className="font-heading text-2xl font-bold text-[#170b33]"
                        />
                      </FlipCard>
                    ))}
                  </div>

                  {/* Bar chart */}
                  <div className="lg:col-span-3 rounded-2xl border border-[#e4dbf5] bg-[#F8F9FC] p-6 h-64 flex items-end gap-3">
                    {current.bars.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
                        className="flex-1 rounded-t-lg bg-linear-to-t from-[#6C3BFF] to-[#A343FC]"
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </BlurReveal>
      </div>
    </section>
  );
}

function FlipCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotateX: -90 }}
      animate={{ opacity: 1, rotateX: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      style={{ transformPerspective: 800 }}
      className="rounded-2xl border border-[#e4dbf5] bg-white p-4"
    >
      {children}
    </motion.div>
  );
}
