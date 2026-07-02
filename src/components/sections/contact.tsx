"use client";

import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { Magnetic } from "@/components/ui/magnetic-button";

const EMAIL = "minutebooksofficial@gmail.com";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Website inquiry from ${name || "a visitor"}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-28 lg:py-36 relative bg-white overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 bg-[#6C3BFF]/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <BlurReveal>
          <span className="tag-pill mb-4 inline-block">Get in Touch</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#170b33] mb-4">
            Contact Us
          </h2>
          <p className="text-[#5d4483] text-lg max-w-xl mx-auto mb-10">
            Questions about a plan, a demo, or migrating from Excel or Tally?
            Send us a message — we reply within 24 hours.
          </p>
        </BlurReveal>

        <BlurReveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-[#e4dbf5] bg-[#F8F9FC] p-8 sm:p-10 text-left space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-[#170b33] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#e4dbf5] text-sm text-[#170b33] placeholder:text-[#a695c2] focus:outline-none focus:border-[#6C3BFF] focus:ring-2 focus:ring-[#6C3BFF]/15 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-[#170b33] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@business.com"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#e4dbf5] text-sm text-[#170b33] placeholder:text-[#a695c2] focus:outline-none focus:border-[#6C3BFF] focus:ring-2 focus:ring-[#6C3BFF]/15 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-[#170b33] mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what you need help with..."
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#e4dbf5] text-sm text-[#170b33] placeholder:text-[#a695c2] focus:outline-none focus:border-[#6C3BFF] focus:ring-2 focus:ring-[#6C3BFF]/15 transition-colors resize-none"
              />
            </div>

            <Magnetic className="block w-full">
              <button type="submit" className="btn-primary w-full justify-center">
                Send Message <Send size={15} />
              </button>
            </Magnetic>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-xs text-[#5d4483]">
              <span className="flex items-center gap-1.5">
                <Mail size={13} className="text-[#170b33]" />
                {EMAIL}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-[#170b33]" />
                Bangalore, India
              </span>
            </div>
          </form>
        </BlurReveal>
      </div>
    </section>
  );
}
