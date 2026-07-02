"use client";

import {
  Utensils,
  Store,
  Scissors,
  ShoppingBasket,
  Stethoscope,
  Warehouse,
  Factory,
  Cpu,
  Shirt,
  Car,
} from "lucide-react";
import { motion } from "motion/react";
import { BlurReveal } from "@/components/ui/blur-reveal";

const industries = [
  { icon: Utensils, name: "Restaurant" },
  { icon: Store, name: "Retail" },
  { icon: Scissors, name: "Salon" },
  { icon: ShoppingBasket, name: "Supermarket" },
  { icon: Stethoscope, name: "Medical" },
  { icon: Warehouse, name: "Wholesale" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Cpu, name: "Electronics" },
  { icon: Shirt, name: "Garments" },
  { icon: Car, name: "Automobile" },
];

export function Industries() {
  return (
    <section id="industries" className="py-28 lg:py-36 relative bg-[#F8F9FC] overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 bg-[#8B5CF6]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <BlurReveal className="text-center mb-16">
          <span className="tag-pill mb-4 inline-block">Perfect for every business</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#170b33] mb-4">
            Built for your industry, out of the box.
          </h2>
          <p className="text-[#5d4483] text-lg max-w-xl mx-auto">
            Pre-configured workflows for the businesses that run India.
          </p>
        </BlurReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((ind, i) => (
            <BlurReveal key={ind.name} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -6, rotate: -1 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-[#e4dbf5] bg-white p-6 text-center glass-card-hover cursor-default"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6C3BFF]/10 group-hover:bg-linear-to-br group-hover:from-[#6C3BFF] group-hover:to-[#A343FC] transition-colors duration-300">
                  <ind.icon size={22} className="text-[#6C3BFF] group-hover:text-white transition-colors duration-300" />
                </span>
                <span className="font-semibold text-sm text-[#170b33]">{ind.name}</span>
              </motion.div>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
