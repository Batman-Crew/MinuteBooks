"use client";

import { cn } from "@/lib/utils";
import { useState, useRef } from "react";
import type { LucideIcon } from "lucide-react";

export type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
};

type Props = {
  services: ServiceItem[];
};

export function ServicesWithAnimatedHoverModal({ services }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="divide-y divide-white/5">
      {services.map((service, idx) => {
        const Icon = service.icon;
        const isHovered = hoveredIndex === idx;

        return (
          <div
            key={service.title}
            className={cn(
              "relative flex items-start gap-6 px-8 py-7 transition-colors duration-300 cursor-default group",
              isHovered ? "bg-white/5" : "bg-transparent"
            )}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* animated left accent */}
            <div
              className={cn(
                "absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-white/60 to-white/10 transition-opacity duration-300",
                isHovered ? "opacity-100" : "opacity-0"
              )}
            />

            {/* icon */}
            <div
              className={cn(
                "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors duration-300",
                isHovered
                  ? "border-white/20 bg-white/10 text-white"
                  : "border-white/10 bg-white/5 text-muted-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
            </div>

            {/* content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-1.5">
                <h3 className="text-base font-semibold text-foreground">
                  {service.title}
                </h3>
                <div
                  className={cn(
                    "flex flex-wrap gap-1.5 transition-all duration-300",
                    isHovered
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-2"
                  )}
                >
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
