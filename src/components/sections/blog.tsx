"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import blog1 from "@/Images/Rectangle 141711.png";
import blog2 from "@/Images/Rectangle 141712.png";
import blog3 from "@/Images/Rectangle 141713.png";

const posts: {
  category: string;
  title: string;
  excerpt: string;
  image: StaticImageData;
  readTime: string;
  date: string;
}[] = [
  {
    category: "Web Development",
    title: "Why Next.js 16 Is a Game-Changer for Production Apps",
    excerpt: "Server Components, Turbopack, and the new App Router have fundamentally changed how we think about building performant web applications.",
    image: blog1,
    readTime: "5 min read",
    date: "May 8, 2026",
  },
  {
    category: "AI & Automation",
    title: "Building Production-Ready AI Chatbots with LangChain & OpenAI",
    excerpt: "A practical guide to integrating LLM-powered chatbots into your SaaS product — covering context management, fallbacks, and cost control.",
    image: blog2,
    readTime: "8 min read",
    date: "Apr 28, 2026",
  },
  {
    category: "Mobile",
    title: "React Native vs Flutter in 2026: An Honest Comparison",
    excerpt: "After building 15+ cross-platform apps in both frameworks, here is our unfiltered take on performance, developer experience, and ecosystem maturity.",
    image: blog3,
    readTime: "6 min read",
    date: "Apr 15, 2026",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-28 lg:py-36 relative bg-[#faf8fd]">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 animate-fade-in-up">
          <div>
            <span className="tag-pill mb-4 inline-block">From the Blog</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#170b33]">
              Insights & Guides
            </h2>
          </div>
          <Link href="#blog" className="btn-outline text-sm shrink-0 inline-flex">
            All articles <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={post.title}
              className="group flex flex-col rounded-2xl border border-[#e4dbf5] bg-white overflow-hidden hover:border-[#a695c2] hover:shadow-lg hover:shadow-[#170b33]/10 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#170b33]/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="tag-pill text-xs">{post.category}</span>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-bold text-base leading-snug mb-3 text-[#170b33] group-hover:text-[#170b33] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-[#5d4483] leading-relaxed mb-5 flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-[#e4dbf5]">
                  <div className="flex items-center gap-2 text-xs text-[#7c6699]">
                    <Clock size={11} />
                    {post.readTime}
                    <span className="mx-1">·</span>
                    {post.date}
                  </div>
                  <Link href="#blog" className="inline-flex items-center gap-1 text-xs text-[#170b33] hover:text-[#2e1a56] font-semibold transition-colors">
                    Read <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
