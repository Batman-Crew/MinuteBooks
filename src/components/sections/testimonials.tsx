"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Minute Books turned our rough idea into a polished product in weeks. Their communication was flawless throughout, and the final app exceeded every expectation we had.",
    name: "Arjun Mehta",
    role: "Founder, TechStart",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
    stars: 5,
  },
  {
    quote: "The team delivered a beautiful e-commerce platform that increased our online sales by 3x. They understood our brand perfectly and built exactly what we needed.",
    name: "Priya Sharma",
    role: "Owner, StyleHub",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
    stars: 5,
  },
  {
    quote: "Professional, reliable, and technically excellent. They built our entire LMS platform from scratch and were incredibly responsive to feedback at every stage.",
    name: "Rahul Verma",
    role: "Director, LearnPro Academy",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
    stars: 5,
  },
  {
    quote: "We had a complex AI chatbot requirement and Minute Books nailed it. The integration with our existing CRM was seamless and the bot handles 80% of our support tickets.",
    name: "Sneha Krishnan",
    role: "CTO, HealthLink",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=80&q=80",
    stars: 5,
  },
  {
    quote: "From the first call to final delivery, the experience was exceptional. The mobile app they built for us has a 4.8-star rating on both the App Store and Play Store.",
    name: "David Osei",
    role: "CEO, SwiftApps",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=80&q=80",
    stars: 5,
  },
  {
    quote: "Best freelance dev team we have ever worked with. They took our MVP spec, pointed out improvements we hadn't thought of, and shipped on time within budget.",
    name: "Layla Hassan",
    role: "Product Lead, DataFlow",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-28 lg:py-36 relative bg-white">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="tag-pill mb-4 inline-block">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#33092B] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-[#96568B] text-lg max-w-xl mx-auto">
            Don&apos;t take our word for it — hear from the people we&apos;ve built with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="glass-card-hover rounded-2xl p-7 flex flex-col gap-5 animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-[#96568B] flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#E3D3E0]">
                <div className="relative h-10 w-10 rounded-full overflow-hidden shrink-0 ring-2 ring-[#E3D3E0]">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#33092B]">{t.name}</p>
                  <p className="text-xs text-[#96568B]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
