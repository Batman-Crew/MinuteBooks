"use client"

import { useState, useEffect, useRef } from "react"

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
  const [fading, setFading] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const changeTo = (next: number) => {
    if (fading) return
    setFading(true)
    timerRef.current = setTimeout(() => {
      setActiveIndex(next)
      setFading(false)
    }, 300)
  }

  const goNext = () => changeTo((activeIndex + 1) % testimonials.length)
  const goPrev = () => changeTo((activeIndex - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const interval = setInterval(goNext, 6000)
    return () => {
      clearInterval(interval)
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [activeIndex])

  const current = testimonials[activeIndex]
  const progress = ((activeIndex + 1) / testimonials.length) * 100

  return (
    <div className="flex items-center justify-center min-h-screen bg-background overflow-hidden px-4 sm:px-8 lg:px-12">
      <div className="relative w-full max-w-5xl">

        {/* Oversized background number */}
        <div
          className="hidden sm:block absolute -left-4 top-1/2 -translate-y-1/2 text-[14rem] lg:text-[22rem] font-bold select-none pointer-events-none leading-none tracking-tighter overflow-hidden"
          style={{ color: "var(--foreground)", opacity: 0.03 }}
        >
          {String(activeIndex + 1).padStart(2, "0")}
        </div>

        {/* Main layout */}
        <div className="relative flex">

          {/* Left column */}
          <div
            className="hidden sm:flex flex-col items-center justify-center pr-8 lg:pr-16 shrink-0"
            style={{ borderRight: "1px solid var(--border)" }}
          >
            <span
              className="text-xs font-mono tracking-widest uppercase"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                color: "var(--muted-foreground)",
              }}
            >
              Testimonials
            </span>
            <div
              className="relative mt-8 w-px"
              style={{ height: "8rem", background: "var(--border)" }}
            >
              <div
                className="absolute top-0 left-0 w-full"
                style={{
                  height: `${progress}%`,
                  background: "var(--foreground)",
                  transition: "height 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                  transformOrigin: "top",
                }}
              />
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 sm:pl-8 lg:pl-16 py-8 sm:py-12">

            {/* Animated content wrapper */}
            <div
              style={{
                opacity: fading ? 0 : 1,
                transform: fading ? "translateY(8px)" : "translateY(0)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              {/* Company badge */}
              <div className="mb-6 sm:mb-8">
                <span
                  className="inline-flex items-center gap-2 text-xs font-mono rounded-full px-3 py-1"
                  style={{
                    color: "var(--muted-foreground)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "color-mix(in srgb, var(--foreground) 40%, transparent)" }}
                  />
                  {current.company}
                </span>
              </div>

              {/* Quote */}
              <div className="relative mb-8 sm:mb-12" style={{ minHeight: "100px" }}>
                <blockquote
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-[1.2] tracking-tight"
                  style={{ color: "var(--foreground)" }}
                >
                  {current.quote}
                </blockquote>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div
                  className="w-6 sm:w-8 shrink-0"
                  style={{ height: "1px", background: "var(--foreground)" }}
                />
                <div>
                  <p
                    className="text-sm sm:text-base font-medium"
                    style={{ color: "var(--foreground)" }}
                  >
                    {current.author}
                  </p>
                  <p className="text-xs sm:text-sm" style={{ color: "var(--muted-foreground)" }}>
                    {current.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Nav buttons row */}
            <div className="flex items-center justify-end gap-2 sm:gap-4 mt-8">
              <button
                onClick={goPrev}
                className="group relative w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center overflow-hidden"
                style={{ border: "1px solid var(--border)" }}
                aria-label="Previous testimonial"
              >
                <span
                  className="absolute inset-0 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300"
                  style={{ background: "var(--foreground)" }}
                />
                <svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                  className="relative z-10 transition-colors duration-200 group-hover:text-background"
                  style={{ color: "var(--foreground)" }}
                >
                  <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button
                onClick={goNext}
                className="group relative w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center overflow-hidden"
                style={{ border: "1px solid var(--border)" }}
                aria-label="Next testimonial"
              >
                <span
                  className="absolute inset-0 translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300"
                  style={{ background: "var(--foreground)" }}
                />
                <svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                  className="relative z-10 transition-colors duration-200 group-hover:text-background"
                  style={{ color: "var(--foreground)" }}
                >
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Mobile dot indicators */}
            <div className="flex sm:hidden items-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => changeTo(i)}
                  className="h-1 rounded-full transition-all duration-300"
                  style={{
                    width: i === activeIndex ? "1.5rem" : "0.5rem",
                    background: i === activeIndex
                      ? "var(--foreground)"
                      : "color-mix(in srgb, var(--foreground) 20%, transparent)",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom ticker */}
        <div className="relative mt-12 overflow-hidden pointer-events-none h-16" style={{ opacity: 0.06 }}>
          <div className="flex whitespace-nowrap text-5xl font-bold tracking-tight absolute animate-marquee">
            {[...Array(12)].map((_, i) => (
              <span key={i} className="mx-8">
                {testimonials.map((t) => t.company).join(" • ")} •
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
