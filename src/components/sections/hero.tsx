"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  PlayCircle,
  Receipt,
  IndianRupee,
  BarChart3,
  PieChart,
  QrCode,
  CreditCard,
  FileText,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "motion/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextRotate } from "@/components/ui/text-rotate";
import { Magnetic } from "@/components/ui/magnetic-button";
import { Counter } from "@/components/ui/counter";
import { ThreeFloat } from "@/components/ui/three-float";

const rotatingTexts = ["Beautiful.", "Effortless.", "Automated.", "Compliant.", "Simple."];

const stats = [
  { value: 12000, suffix: "+", label: "Businesses" },
  { value: 98, suffix: "%", label: "GST Accuracy" },
  { value: 4.9, suffix: "/5", label: "Rated by owners" },
];

const floatingChips = [
  { Icon: Receipt, label: "Instant receipts", className: "top-[6%] left-[-6%]", delay: 0, depth: 26 },
  { Icon: IndianRupee, label: "GST-ready invoicing", className: "top-[2%] right-[4%]", delay: 0.4, depth: 34 },
  { Icon: BarChart3, label: "Real-time analytics", className: "top-[38%] right-[-8%]", delay: 0.8, depth: 20 },
  { Icon: PieChart, label: "Expense breakdown", className: "bottom-[22%] left-[-10%]", delay: 1.2, depth: 30 },
  { Icon: QrCode, label: "Scan & Pay", className: "bottom-[4%] right-[10%]", delay: 1.6, depth: 24 },
  { Icon: CreditCard, label: "UPI · Card · Cash", className: "bottom-[-4%] left-[16%]", delay: 2, depth: 32 },
  { Icon: FileText, label: "Auto GST filing", className: "top-[62%] left-[-4%]", delay: 2.4, depth: 22 },
];

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { damping: 25, stiffness: 120 });
  const sy = useSpring(my, { damping: 25, stiffness: 120 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-6, 6]);
  const spotlightX = useTransform(sx, [-0.5, 0.5], [10, 90]);
  const spotlightY = useTransform(sy, [-0.5, 0.5], [10, 90]);
  const spotlightBg = useTransform(
    [spotlightX, spotlightY],
    ([sxv, syv]) =>
      `radial-gradient(320px circle at ${sxv}% ${syv}%, rgba(255,255,255,0.35), transparent 70%)`
  );

  // Scroll-driven parallax exit as the user scrolls past the hero
  useGSAP(
    () => {
      if (!contentRef.current || !sectionRef.current) return;
      gsap.to(contentRef.current, {
        y: -80,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    },
    { scope: sectionRef }
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[96vh] flex items-center overflow-hidden bg-[#F8F9FC]"
    >
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0">
        <div className="mesh-gradient-bg absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(108,59,255,0.07)_1px,transparent_1px)] bg-size-[28px_28px]" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-[#F8F9FC] to-transparent" />
      </div>

      <div ref={contentRef} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-28 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="tag-pill mb-8 inline-flex items-center"
            >
              <span className="relative mr-2 flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6C3BFF] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#6C3BFF]" />
              </span>
              Now with automated GST filing
            </motion.div>

            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.02] mb-6">
              <motion.span
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="block text-[#170b33]"
              >
                Business Accounting
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.18 }}
                className="inline-flex overflow-hidden gradient-text"
              >
                <TextRotate
                  texts={rotatingTexts}
                  rotationInterval={1600}
                  staggerDuration={0.012}
                  staggerFrom="first"
                  splitBy="characters"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-60%", opacity: 0 }}
                  transition={{ type: "spring", damping: 34, stiffness: 420, mass: 0.7 }}
                  mainClassName="justify-center lg:justify-start"
                  splitLevelClassName="overflow-hidden"
                />
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-xl text-base sm:text-lg text-[#5d4483] leading-relaxed mb-10 mx-auto lg:mx-0"
            >
              POS, inventory, GST filing, invoicing, and payroll — one beautiful
              platform built for Indian businesses. Go from spreadsheets to
              real-time clarity in minutes, not months.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-14"
            >
              <Magnetic>
                <Link href="#contact" className="btn-primary">
                  Start Free Trial
                  <ArrowRight size={15} />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link href="#contact" className="btn-outline">
                  Book a Demo
                </Link>
              </Magnetic>
              {/* <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} className="group flex items-center gap-2 text-sm font-semibold text-[#170b33]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md shadow-[#6C3BFF]/15 transition-transform group-hover:scale-110">
                  <PlayCircle size={16} className="text-[#6C3BFF]" />
                </span>
                Watch Demo
              </motion.button> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <Counter
                    value={s.value}
                    suffix={s.suffix}
                    className="font-heading text-2xl sm:text-3xl font-bold text-[#170b33]"
                  />
                  <div className="text-xs text-[#5d4483] font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: floating dashboard mockup */}
          <div className="relative flex items-center justify-center lg:justify-end hidden lg:flex">
            <ThreeFloat className="absolute -top-16 -right-10 h-64 w-64 opacity-70" />

            <motion.div
              style={{ rotateX, rotateY, transformPerspective: 1200 }}
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md"
            >
              <DashboardMockup spotlightBg={spotlightBg} />

              {floatingChips.map(({ Icon, label, className, delay, depth }, i) => (
                <FloatingChip
                  key={i}
                  Icon={Icon}
                  label={label}
                  className={className}
                  delay={delay}
                  depth={depth}
                  mx={sx}
                  my={sy}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingChip({
  Icon,
  label,
  className,
  delay,
  depth,
  mx,
  my,
}: {
  Icon: typeof Receipt;
  label: string;
  className: string;
  delay: number;
  depth: number;
  mx: MotionValue<number>;
  my: MotionValue<number>;
}) {
  const px = useTransform(mx, [-0.5, 0.5], [depth, -depth]);
  const py = useTransform(my, [-0.5, 0.5], [depth, -depth]);

  return (
    <motion.div
      className={`group absolute ${className} z-20`}
      style={{ x: px, y: py }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 + delay * 0.15 }}
    >
      <motion.div
        className="animate-float-slow"
        style={{ animationDelay: `${delay}s` }}
        whileHover={{ scale: 1.18, rotate: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 12 }}
      >
        <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl glass-card cursor-default">
          <Icon size={20} className="text-[#6C3BFF]" />
        </div>
        <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-9 whitespace-nowrap rounded-full bg-[#170b33] px-3 py-1 text-[10px] font-semibold text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
          {label}
        </span>
      </motion.div>
    </motion.div>
  );
}

function DashboardMockup({ spotlightBg }: { spotlightBg: MotionValue<string> }) {
  const bars = [40, 65, 50, 80, 60, 95, 70];
  return (
    <div className="relative rounded-3xl border border-[#e4dbf5] bg-white shadow-2xl shadow-[#6C3BFF]/20 overflow-hidden">
      {/* Cursor-tracked spotlight glare */}
      <motion.div className="pointer-events-none absolute inset-0 z-20 mix-blend-overlay" style={{ background: spotlightBg }} />

      {/* Title bar */}
      <div className="relative z-10 flex items-center gap-1.5 px-4 py-3 border-b border-[#e4dbf5] bg-[#F8F9FC]">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFC93C]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#4ECB71]" />
        <span className="ml-3 text-xs font-medium text-[#5d4483]">Minute Books — Dashboard</span>
        <span className="ml-auto flex items-center gap-1.5 text-[10px] font-semibold text-[#1E9E5A]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1E9E5A] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1E9E5A]" />
          </span>
          Live
        </span>
      </div>

      <div className="relative z-10 p-5 space-y-4">
        {/* Stat tiles */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Sales", value: "₹4.8L" },
            { label: "GST Filed", value: "On time" },
            { label: "Payroll", value: "12 paid" },
          ].map((tile) => (
            <motion.div
              key={tile.label}
              whileHover={{ y: -3 }}
              className="rounded-xl bg-[#F8F9FC] border border-[#e4dbf5] px-3 py-2.5 cursor-default"
            >
              <div className="text-[10px] text-[#7c6699] font-medium">{tile.label}</div>
              <div className="text-sm font-bold text-[#170b33] mt-0.5">{tile.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Bar chart + donut */}
        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-3 rounded-xl border border-[#e4dbf5] p-3 flex items-end gap-1.5 h-28">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                whileHover={{ scaleY: 1.05 }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.06, ease: "easeOut" }}
                className="flex-1 rounded-t-md bg-linear-to-t from-[#6C3BFF] to-[#A343FC] origin-bottom"
              />
            ))}
          </div>
          <div className="col-span-2 rounded-xl border border-[#e4dbf5] p-3 flex flex-col items-center justify-center h-28">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="h-14 w-14 rounded-full"
              style={{
                background: "conic-gradient(#6C3BFF 0% 45%, #A343FC 45% 72%, #EDE7FF 72% 100%)",
              }}
            />
            <div className="text-[10px] text-[#7c6699] font-medium mt-1.5">Expense split</div>
          </div>
        </div>

        {/* Invoice list */}
        <div className="rounded-xl border border-[#e4dbf5] divide-y divide-[#EDE7FF]">
          {[
            { name: "Invoice #1042", amount: "₹12,400", status: "Paid" },
            { name: "Invoice #1041", amount: "₹8,250", status: "Due" },
          ].map((row, i) => (
            <motion.div
              key={row.name}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.9 + i * 0.12 }}
              className="flex items-center justify-between px-3 py-2 text-xs"
            >
              <span className="font-medium text-[#170b33]">{row.name}</span>
              <span className="text-[#5d4483]">{row.amount}</span>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                  row.status === "Paid" ? "bg-[#E7F8EE] text-[#1E9E5A]" : "bg-[#FFF3D6] text-[#B8860B]"
                }`}
              >
                {row.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
