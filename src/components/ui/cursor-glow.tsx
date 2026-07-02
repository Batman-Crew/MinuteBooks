"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CursorGlow() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const springX = useSpring(x, { damping: 40, stiffness: 120, mass: 0.6 });
  const springY = useSpring(y, { damping: 40, stiffness: 120, mass: 0.6 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;
    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX - 300);
      y.set(e.clientY - 300);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[600px] w-[600px] rounded-full opacity-[0.35] blur-[100px] md:block"
      style={{
        x: springX,
        y: springY,
        background:
          "radial-gradient(circle, rgba(108,59,255,0.35) 0%, rgba(163,67,252,0.18) 45%, transparent 70%)",
      }}
    />
  );
}
