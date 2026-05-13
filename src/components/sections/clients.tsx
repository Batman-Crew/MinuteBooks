"use client";

import { BrandScroller, BrandScrollerReverse } from "@/components/ui/brand-scoller";

export function Clients() {
  return (
    <section className="py-12 relative overflow-hidden border-t border-[#e5e5e5] bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-xs font-semibold text-[#777] uppercase tracking-widest">
          Trusted by teams worldwide
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <BrandScroller />
        <BrandScrollerReverse />
      </div>
    </section>
  );
}
