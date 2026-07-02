"use client";

import Image from "next/image";
import { Globe, Smartphone, Layout, Bug, Database, Bot, ArrowRight } from "lucide-react";
import Link from "next/link";
import techImg from "@/Images/technology 2.png";
import rect5 from "@/Images/Rectangle 5.png";

const services = [
  {
    icon: Globe,
    title: "Web App Development",
    description: "Full-stack web applications built with modern frameworks like React, Next.js, and Node.js. Scalable, performant, and production-ready.",
    tags: ["React", "Next.js", "Node.js", "TypeScript"],
    iconBg: "bg-[#170b33]/10 group-hover:bg-[#170b33]/18",
    iconColor: "text-[#170b33]",
    hoverBorder: "hover:border-[#170b33]/30",
    glow: "from-[#170b33]/12 to-transparent",
  },
  {
    icon: Smartphone,
    title: "Mobile Application",
    description: "Cross-platform mobile apps for iOS and Android using React Native and Flutter. Native performance with a single codebase.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    iconBg: "bg-[#5d4483]/10 group-hover:bg-[#5d4483]/18",
    iconColor: "text-[#5d4483]",
    hoverBorder: "hover:border-[#5d4483]/30",
    glow: "from-[#5d4483]/12 to-transparent",
  },
  {
    icon: Layout,
    title: "Website Creation",
    description: "Beautiful, responsive websites that convert visitors into customers. From landing pages to complex multi-page sites.",
    tags: ["Responsive", "SEO", "CMS", "E-commerce"],
    iconBg: "bg-emerald-500/10 group-hover:bg-emerald-500/18",
    iconColor: "text-emerald-600",
    hoverBorder: "hover:border-emerald-400/30",
    glow: "from-emerald-400/12 to-transparent",
  },
  {
    icon: Bug,
    title: "Bug Fixing & Debugging",
    description: "Quick diagnosis and resolution of software issues. Performance optimization, security patches, and code audits.",
    tags: ["Debugging", "Performance", "Security", "Code Review"],
    iconBg: "bg-orange-500/10 group-hover:bg-orange-500/18",
    iconColor: "text-orange-600",
    hoverBorder: "hover:border-orange-400/30",
    glow: "from-orange-400/12 to-transparent",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Efficient database architecture for your applications. Schema design, optimization, migration, and data modeling.",
    tags: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
    iconBg: "bg-sky-500/10 group-hover:bg-sky-500/18",
    iconColor: "text-sky-600",
    hoverBorder: "hover:border-sky-400/30",
    glow: "from-sky-400/12 to-transparent",
  },
  {
    icon: Bot,
    title: "AI Integration & Chatbots",
    description: "Integrate AI capabilities into your products. Custom chatbots, automation workflows, and intelligent features powered by LLMs.",
    tags: ["OpenAI", "LLMs", "Automation", "NLP"],
    iconBg: "bg-[#2e1a56]/10 group-hover:bg-[#2e1a56]/18",
    iconColor: "text-[#2e1a56]",
    hoverBorder: "hover:border-[#2e1a56]/30",
    glow: "from-[#2e1a56]/12 to-transparent",
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 lg:py-36 relative bg-white">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 bg-[#7c6699]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="tag-pill mb-4 inline-block">What We Do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#170b33] mb-4">
            Services We Offer
          </h2>
          <p className="text-[#5d4483] text-lg max-w-xl mx-auto">
            End-to-end digital solutions — from concept and design to deployment and ongoing support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden rounded-2xl border border-[#e4dbf5] bg-[#faf8fd] p-7 transition-all duration-300 animate-fade-in-up ${service.hoverBorder} hover:shadow-md hover:shadow-[#170b33]/8`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div
                className={`absolute top-0 right-0 w-40 h-40 bg-linear-to-bl ${service.glow} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-10 translate-x-10 pointer-events-none`}
              />
              <div className="relative z-10">
                <div className={`h-11 w-11 rounded-xl ${service.iconBg} flex items-center justify-center mb-5 transition-colors duration-300`}>
                  <service.icon size={20} className={service.iconColor} />
                </div>
                <h3 className="font-bold text-base mb-2 text-[#170b33]">{service.title}</h3>
                <p className="text-sm text-[#5d4483] leading-relaxed mb-5">{service.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs border border-[#e4dbf5] bg-white text-[#5d4483]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up [animation-delay:500ms]">
          <Link href="#contact" className="btn-outline inline-flex">
            Discuss your project <ArrowRight size={15} />
          </Link>
        </div>

        {/* Technology showcase banner */}
        <div className="mt-20 grid lg:grid-cols-2 gap-8 items-center rounded-3xl border border-[#e4dbf5] bg-[#faf8fd] overflow-hidden animate-fade-in-up [animation-delay:600ms]">
          <div className="p-8 lg:p-12">
            <span className="tag-pill mb-4 inline-block">Our Stack</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#170b33] mb-3">
              Built with modern, battle-tested technology
            </h3>
            <p className="text-[#5d4483] text-sm leading-relaxed mb-6">
              Every tool we choose is production-proven, well-maintained, and selected to give your product a long-term competitive edge.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "AWS"].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full text-xs border border-[#e4dbf5] bg-white text-[#5d4483] font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="relative h-64 lg:h-full min-h-[240px]">
            <Image src={techImg} alt="Technology stack" fill className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-r from-[#faf8fd] via-transparent to-transparent lg:from-transparent" />
            {/* Floating rect5 accent */}
            <div className="absolute bottom-4 right-4 w-20 h-20 rounded-xl overflow-hidden border-2 border-white shadow-lg -rotate-6 hidden lg:block">
              <Image src={rect5} alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
