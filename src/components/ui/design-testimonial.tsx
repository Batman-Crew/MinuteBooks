"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"

const testimonials = [
  {
    quote: "Transformed our entire creative process overnight.",
    author: "Sarah Chen",
    role: "Design Director",
    company: "Linear",
  },
  {
    quote: "The most elegant solution we've ever implemented.",
    author: "Marcus Webb",
    role: "Creative Lead",
    company: "Vercel",
  },
  {
    quote: "Pure craftsmanship in every single detail.",
    author: "Elena Frost",
    role: "Head of Product",
    company: "Stripe",
  },
]

export function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)
  const numberX = useTransform(x, [-200, 200], [-10, 10])
  const numberY = useTransform(y, [-200, 200], [-5, 5])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      mouseX.set(e.clientX - (rect.left + rect.width / 2))
      mouseY.set(e.clientY - (rect.top + rect.height / 2))
    }
  }

  const goNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length)
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const timer = setInterval(goNext, 6000)
    return () => clearInterval(timer)
  }, [])

  const current = testimonials[activeIndex]

  return (
    <div className="flex items-center justify-center min-h-screen bg-background overflow-hidden px-4 sm:px-8 lg:px-12">
      <div ref={containerRef} className="relative w-full max-w-5xl" onMouseMove={handleMouseMove}>

        {/* Oversized index number — hidden on mobile, clipped on desktop */}
        <motion.div
          className="hidden sm:block absolute -left-4 top-1/2 -translate-y-1/2 text-[14rem] lg:text-[22rem] font-bold text-foreground/[0.03] select-none pointer-events-none leading-none tracking-tighter overflow-hidden"
          style={{ x: numberX, y: numberY }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Main layout */}
        <div className="relative flex">

          {/* Left column — hidden on mobile */}
          <div className="hidden sm:flex flex-col items-center justify-center pr-8 lg:pr-16 border-r border-border shrink-0">
            <motion.span
              className="text-xs font-mono text-muted-foreground tracking-widest uppercase"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Testimonials
            </motion.span>
            <div className="relative h-32 w-px bg-border mt-8">
              <motion.div
                className="absolute top-0 left-0 w-full bg-foreground origin-top"
                animate={{ height: `${((activeIndex + 1) / testimonials.length) * 100}%` }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 sm:pl-8 lg:pl-16 py-8 sm:py-12">

            {/* Company badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="mb-6 sm:mb-8"
              >
                <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground border border-border rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
                  {current.company}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Quote */}
            <div className="relative mb-8 sm:mb-12 min-h-[100px] sm:min-h-[140px]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={activeIndex}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-[1.2] tracking-tight"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {current.quote.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      className="inline-block mr-[0.25em]"
                      variants={{
                        hidden: { opacity: 0, y: 20, rotateX: 90 },
                        visible: {
                          opacity: 1, y: 0, rotateX: 0,
                          transition: { duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] },
                        },
                        exit: {
                          opacity: 0, y: -10,
                          transition: { duration: 0.2, delay: i * 0.02 },
                        },
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Author + nav row */}
            <div className="flex items-end justify-between gap-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex items-center gap-3 sm:gap-4 min-w-0"
                >
                  <motion.div
                    className="w-6 sm:w-8 h-px bg-foreground shrink-0"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{ originX: 0 }}
                  />
                  <div className="min-w-0">
                    <p className="text-sm sm:text-base font-medium text-foreground truncate">{current.author}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground truncate">{current.role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation buttons */}
              <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                <motion.button
                  onClick={goPrev}
                  className="group relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border flex items-center justify-center overflow-hidden"
                  whileTap={{ scale: 0.95 }}
                  aria-label="Previous testimonial"
                >
                  <motion.div
                    className="absolute inset-0 bg-foreground"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                    className="relative z-10 text-foreground group-hover:text-background transition-colors">
                    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.button>

                <motion.button
                  onClick={goNext}
                  className="group relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border flex items-center justify-center overflow-hidden"
                  whileTap={{ scale: 0.95 }}
                  aria-label="Next testimonial"
                >
                  <motion.div
                    className="absolute inset-0 bg-foreground"
                    initial={{ x: "100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                    className="relative z-10 text-foreground group-hover:text-background transition-colors">
                    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.button>
              </div>
            </div>

            {/* Mobile dot indicators */}
            <div className="flex sm:hidden items-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${i === activeIndex ? "w-6 bg-foreground" : "w-2 bg-foreground/20"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom ticker — strictly contained, no overflow */}
        <div className="relative mt-12 overflow-hidden opacity-[0.06] pointer-events-none h-16">
          <motion.div
            className="flex whitespace-nowrap text-5xl font-bold tracking-tight absolute"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(6)].map((_, i) => (
              <span key={i} className="mx-8">
                {testimonials.map((t) => t.company).join(" • ")} •
              </span>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  )
}
