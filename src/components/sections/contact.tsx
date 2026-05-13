"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

const socialLinks = [
  {
    label: "X (Twitter)",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-28 lg:py-36 relative bg-white">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="tag-pill mb-4 inline-block">Get in Touch</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#33092B] mb-4">
            Let&apos;s Start a Conversation
          </h2>
          <p className="text-[#96568B] text-lg max-w-xl mx-auto">
            Have a project in mind? Reach out and we&apos;ll respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info panel */}
          <div className="lg:col-span-2 animate-fade-in-left space-y-8">
            {[
              { icon: Mail, label: "Email", value: "Vishwatechmania@gmail.com", href: "mailto:Vishwatechmania@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 6374810499", href: "tel:+916374810499" },
              { icon: MapPin, label: "Location", value: "Bangalore, India — worldwide", href: null },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-[#7D3B71]/10 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-[#7D3B71]" />
                </div>
                <div>
                  <p className="text-xs text-[#B076A5] mb-1 font-medium">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="font-semibold text-sm text-[#33092B] hover:text-[#7D3B71] transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-sm text-[#33092B]">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social */}
            <div>
              <p className="text-xs text-[#B076A5] mb-3 font-medium">Find us on</p>
              <div className="flex gap-3">
                {socialLinks.map(({ label, href, svg }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="h-10 w-10 rounded-xl border border-[#E3D3E0] bg-[#FAF4F9] flex items-center justify-center text-[#96568B] hover:text-[#7D3B71] hover:border-[#C99BC1] hover:bg-[#F0E4EE] transition-colors"
                  >
                    {svg}
                  </a>
                ))}
              </div>
            </div>

            {/* Consultation card */}
            <div className="rounded-2xl border border-[#E3D3E0] bg-[#FAF4F9] p-6">
              <h3 className="font-bold mb-2 text-sm text-[#33092B]">Free Consultation</h3>
              <p className="text-xs text-[#96568B] leading-relaxed">
                Book a free 30-minute call to explore what we can build together. We&apos;ll understand your project, propose a solution, and offer flexible beginner-friendly rates.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 animate-fade-in-right [animation-delay:150ms]">
            <form className="rounded-2xl border border-[#E3D3E0] bg-[#FAF4F9] p-7 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[#7D3B71] mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E3D3E0] text-sm text-[#33092B] placeholder:text-[#C99BC1] focus:outline-none focus:border-[#7D3B71] focus:ring-2 focus:ring-[#7D3B71]/15 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[#7D3B71] mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E3D3E0] text-sm text-[#33092B] placeholder:text-[#C99BC1] focus:outline-none focus:border-[#7D3B71] focus:ring-2 focus:ring-[#7D3B71]/15 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-[#7D3B71] mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Project type or inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#E3D3E0] text-sm text-[#33092B] placeholder:text-[#C99BC1] focus:outline-none focus:border-[#7D3B71] focus:ring-2 focus:ring-[#7D3B71]/15 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-xs font-semibold text-[#7D3B71] mb-2">Estimated Budget</label>
                <select
                  id="budget"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#E3D3E0] text-sm text-[#96568B] focus:outline-none focus:border-[#7D3B71] focus:ring-2 focus:ring-[#7D3B71]/15 transition-colors appearance-none"
                >
                  <option value="">Select a range</option>
                  <option>Under ₹50,000</option>
                  <option>₹50,000 – ₹2,00,000</option>
                  <option>₹2,00,000 – ₹5,00,000</option>
                  <option>₹5,00,000+</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-[#7D3B71] mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your project, goals, and timeline..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#E3D3E0] text-sm text-[#33092B] placeholder:text-[#C99BC1] focus:outline-none focus:border-[#7D3B71] focus:ring-2 focus:ring-[#7D3B71]/15 transition-colors resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center">
                Send Message <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
