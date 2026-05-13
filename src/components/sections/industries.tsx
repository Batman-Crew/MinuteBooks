"use client";

import { Rocket, ShoppingCart, GraduationCap, Heart, PenTool, User } from "lucide-react";

const industries = [
  {
    icon: Rocket,
    title: "Startups & Tech Companies",
    description: "MVPs, prototypes, and scalable platforms to launch and grow your startup fast.",
    iconBg: "bg-[#000]/10 group-hover:bg-[#000]/18",
    iconColor: "text-[#000]",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    description: "End-to-end e-commerce solutions with payments, inventory, and analytics.",
    iconBg: "bg-[#555]/10 group-hover:bg-[#555]/18",
    iconColor: "text-[#555]",
  },
  {
    icon: GraduationCap,
    title: "EdTech & E-Learning",
    description: "LMS platforms, course builders, and interactive learning experiences at scale.",
    iconBg: "bg-emerald-500/10 group-hover:bg-emerald-500/18",
    iconColor: "text-emerald-600",
  },
  {
    icon: Heart,
    title: "Non-Profits & NGOs",
    description: "Affordable digital tools to amplify your mission and reach more people.",
    iconBg: "bg-rose-500/10 group-hover:bg-rose-500/18",
    iconColor: "text-rose-600",
  },
  {
    icon: PenTool,
    title: "Creators & Portfolios",
    description: "Stunning personal sites and creator tools that showcase your best work.",
    iconBg: "bg-amber-500/10 group-hover:bg-amber-500/18",
    iconColor: "text-amber-600",
  },
  {
    icon: User,
    title: "Solo Entrepreneurs",
    description: "Custom tools and platforms to automate, sell, and scale your solo business.",
    iconBg: "bg-[#222]/10 group-hover:bg-[#222]/18",
    iconColor: "text-[#222]",
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-28 lg:py-36 relative bg-white">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 bg-[#777]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="tag-pill mb-4 inline-block">Who We Serve</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#000] mb-4">
            Focus Industries
          </h2>
          <p className="text-[#555] text-lg max-w-xl mx-auto">
            Start simple, scale smart. We work with businesses and creators at every stage of growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, i) => (
            <div
              key={industry.title}
              className="group relative overflow-hidden rounded-2xl border border-[#e5e5e5] bg-[#fafafa] p-7 hover:border-[#aaa] hover:shadow-md hover:shadow-[#000]/8 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={`h-11 w-11 rounded-xl ${industry.iconBg} flex items-center justify-center mb-5 transition-colors duration-300`}>
                <industry.icon size={20} className={industry.iconColor} />
              </div>
              <h3 className="font-bold mb-2 text-[#000]">{industry.title}</h3>
              <p className="text-sm text-[#555] leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
