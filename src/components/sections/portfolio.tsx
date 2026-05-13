"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "LearnPro Academy",
    category: "EdTech Platform",
    description: "A full-featured LMS with live classes, course builder, payment integration, and student analytics dashboard serving 10,000+ learners.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    result: "3× increase in course completions",
  },
  {
    title: "StyleHub E-commerce",
    category: "Retail & E-commerce",
    description: "End-to-end e-commerce platform with AI-powered recommendations, inventory management, and real-time order tracking for a fashion brand.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
    tags: ["React Native", "Firebase", "Shopify API", "OpenAI"],
    result: "Online sales grew 3× in 6 months",
  },
  {
    title: "DataFlow Analytics",
    category: "SaaS Dashboard",
    description: "Real-time business intelligence dashboard with custom visualizations, automated reports, and multi-tenant architecture for B2B clients.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Python", "Redis", "AWS"],
    result: "Reduced reporting time by 80%",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-28 lg:py-36 relative bg-[#fafafa]">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 animate-fade-in-up">
          <div>
            <span className="tag-pill mb-4 inline-block">Our Work</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#000]">
              Case Studies
            </h2>
          </div>
          <Link href="#contact" className="btn-outline text-sm shrink-0 inline-flex">
            View all projects <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-2xl border border-[#e5e5e5] bg-white overflow-hidden hover:border-[#aaa] hover:shadow-lg hover:shadow-[#000]/10 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#000]/40 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="tag-pill text-xs">{project.category}</span>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-bold text-lg mb-2 text-[#000]">{project.title}</h3>
                <p className="text-sm text-[#555] leading-relaxed mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs border border-[#e5e5e5] bg-[#fafafa] text-[#555]">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-[#e5e5e5]">
                  <span className="text-xs font-semibold text-[#000]">✦ {project.result}</span>
                  <Link href="#contact" className="inline-flex items-center gap-1 text-xs text-[#555] hover:text-[#000] transition-colors font-medium">
                    Details <ExternalLink size={11} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
