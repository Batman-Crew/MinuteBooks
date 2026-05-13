"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export function CTA() {
  return (
    <section className="py-28 lg:py-36 relative bg-[#fafafa]">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#aaa]/40 animate-fade-in-up shadow-2xl shadow-[#000]/15">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
              alt="Office workspace"
              fill
              className="object-cover opacity-[0.08]"
            />
          </div>

          {/* Purple gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-[#000] via-[#111] to-[#000]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#555]/30 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#777]/20 rounded-full blur-[128px]" />
          {/* Dot pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[24px_24px]" />

          <div className="relative z-10 px-8 py-20 sm:px-16 sm:py-28 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-xs font-semibold text-white/90 mb-6">
              Ready to start?
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Let&apos;s Build Something
              <br />
              <span className="text-[#e5e5e5]">Extraordinary.</span>
            </h2>

            <p className="text-[#aaa] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              We don&apos;t offer one-size-fits-all pricing. Every project gets a
              custom solution based on your goals, timeline, and budget. Book a
              free 30-minute call — no commitment required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-[#000] font-bold px-7 py-3.5 rounded-full hover:bg-[#fafafa] transition-all hover:shadow-lg hover:-translate-y-0.5 text-sm"
              >
                <Calendar size={16} />
                Book a Free Consultation
                <ArrowRight size={15} />
              </Link>
              <p className="text-sm text-[#aaa]">Flexible, transparent pricing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
