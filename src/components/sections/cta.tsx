"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { Magnetic } from "@/components/ui/magnetic-button";

export function CTA() {
  return (
    <section id="contact" className="py-28 lg:py-36 relative bg-[#faf8fd]">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurReveal>
          <div className="relative overflow-hidden rounded-3xl border border-[#a695c2]/40 shadow-2xl shadow-[#170b33]/15">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-linear-to-br from-[#170b33] via-[#1f1140] to-[#170b33]" />
            <div className="absolute inset-0 animate-mesh-move" style={{
              background: "radial-gradient(circle at 20% 20%, rgba(108,59,255,0.35), transparent 45%), radial-gradient(circle at 80% 30%, rgba(163,67,252,0.3), transparent 45%)",
            }} />
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#6C3BFF]/25 rounded-full blur-[128px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A343FC]/20 rounded-full blur-[128px]" />
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[24px_24px]" />

            <div className="relative z-10 px-8 py-20 sm:px-16 sm:py-28 text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-xs font-semibold text-white/90 mb-6">
                Ready to start?
              </span>

              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Ready to Transform
                <br />
                <span className="text-[#C084FC]">Your Business?</span>
              </h2>

              <p className="text-[#a695c2] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Join thousands of Indian businesses running their sales, GST, and
                payroll on Minute Books. Set up takes minutes, not months.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Magnetic>
                  <Link
                    href="#pricing"
                    className="inline-flex items-center gap-2 bg-white text-[#170b33] font-bold px-7 py-3.5 rounded-full hover:bg-[#faf8fd] transition-all hover:shadow-lg hover:-translate-y-0.5 text-sm"
                  >
                    Start Free Trial
                    <ArrowRight size={15} />
                  </Link>
                </Magnetic>
                <Magnetic strength={0.25}>
                  <Link
                    href="#contact-form"
                    className="inline-flex items-center gap-2 border border-white/25 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-all text-sm"
                  >
                    <Calendar size={16} />
                    Book Demo
                  </Link>
                </Magnetic>
              </div>
              <p className="text-sm text-[#a695c2] mt-6">No credit card required · Cancel anytime</p>
            </div>
          </div>
        </BlurReveal>
      </div>
    </section>
  );
}
