"use client";

import { Star } from "lucide-react";
import { BlurReveal } from "@/components/ui/blur-reveal";

const testimonials = [
  {
    quote: "We went from three spreadsheets and a WhatsApp group to a single dashboard. GST filing alone saves us two full days a month.",
    author: "Rohit Malhotra",
    role: "Owner",
    company: "Malhotra Electronics",
  },
  {
    quote: "Minute Books POS handles our billing counter during peak hours without a hiccup. Inventory finally matches what's actually on the shelf.",
    author: "Priya Nair",
    role: "Operations Head",
    company: "FreshMart Supermarkets",
  },
  {
    quote: "Payroll used to take our accountant an entire weekend. Now it runs itself and every payslip is ready by the 1st.",
    author: "Arjun Mehta",
    role: "Finance Manager",
    company: "Mehta Manufacturing Co.",
  },
  {
    quote: "The multi-branch view is what sold us — five restaurant locations, one login, real numbers.",
    author: "Kavya Reddy",
    role: "Founder",
    company: "Spice Route Restaurants",
  },
  {
    quote: "Switching from Tally felt terrifying. It took one afternoon, and our books have been cleaner ever since.",
    author: "Sandeep Verma",
    role: "Director",
    company: "Verma Wholesale Traders",
  },
  {
    quote: "Bank reconciliation used to be a monthly nightmare. Now it's automatic and always accurate.",
    author: "Meera Iyer",
    role: "CFO",
    company: "Iyer Garments Pvt Ltd",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="fill-[#FCC900] text-[#FCC900]" />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="w-[340px] sm:w-[380px] shrink-0 rounded-2xl glass-card p-6">
      <Stars />
      <p className="text-sm text-[#170b33] leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-linear-to-br from-[#6C3BFF] to-[#A343FC] flex items-center justify-center text-white text-sm font-bold">
          {t.author.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-semibold text-[#170b33]">{t.author}</div>
          <div className="text-xs text-[#7c6699]">{t.role} · {t.company}</div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3, 6);

  return (
    <section className="py-28 lg:py-36 relative bg-[#F8F9FC] overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <BlurReveal className="text-center mb-16">
          <span className="tag-pill mb-4 inline-block">Loved by business owners</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#170b33] mb-4">
            Don&apos;t just take our word for it.
          </h2>
          <p className="text-[#5d4483] text-lg max-w-xl mx-auto">
            Real businesses, real time saved, real growth.
          </p>
        </BlurReveal>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex gap-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex gap-6 shrink-0 animate-marquee">
            {[...row1, ...row1].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>
        <div className="flex gap-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex gap-6 shrink-0 animate-marquee-reverse">
            {[...row2, ...row2].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
