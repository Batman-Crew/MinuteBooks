"use client";

import { BrandScroller, BrandScrollerReverse } from "@/components/ui/brand-scoller";

export function Clients() {
  return (
    <section id="integrations" className="py-20 relative overflow-hidden border-t border-[#e4dbf5] bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-xs font-semibold text-[#7c6699] uppercase tracking-widest">
          Connects with everything you already use
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <BrandScroller />
        <BrandScrollerReverse />
      </div>
    </section>
  );
}
