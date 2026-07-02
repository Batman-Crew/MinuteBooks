"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type MagneticProps = {
  children: React.ReactNode;
  className?: string;
};

export function Magnetic({ children, className }: MagneticProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.035 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}
