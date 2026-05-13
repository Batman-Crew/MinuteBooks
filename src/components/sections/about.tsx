"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, Lightbulb, Rocket, Users } from "lucide-react";

const values = [
  {
    icon: Code2,
    title: "Technical Excellence",
    description: "Clean, scalable code built with modern frameworks and industry best practices.",
    color: "bg-[#7D3B71]/10 group-hover:bg-[#7D3B71]/18",
    iconColor: "text-[#7D3B71]",
  },
  {
    icon: Lightbulb,
    title: "Creative Solutions",
    description: "We combine creativity with technology to solve your most complex problems.",
    color: "bg-[#96568B]/10 group-hover:bg-[#96568B]/18",
    iconColor: "text-[#96568B]",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Agile development with clear timelines and consistent communication.",
    color: "bg-[#B076A5]/15 group-hover:bg-[#B076A5]/25",
    iconColor: "text-[#7D3B71]",
  },
  {
    icon: Users,
    title: "Client Focused",
    description: "Your vision drives every decision. We build what matters to you.",
    color: "bg-[#632558]/10 group-hover:bg-[#632558]/18",
    iconColor: "text-[#632558]",
  },
];

export function About() {
  return (
    <section id="about" className="py-28 lg:py-36 relative bg-[#FAF4F9]">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="tag-pill mb-4 inline-block">About Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#33092B] mb-4">
            We build digital products
            <br className="hidden sm:block" />
            <span className="gradient-text-accent"> that matter.</span>
          </h2>
          <p className="text-[#96568B] text-lg max-w-2xl mx-auto leading-relaxed">
            A passionate team of developers and digital strategists helping
            businesses transform ideas into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-fade-in-left order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-4/3 shadow-xl shadow-[#7D3B71]/12">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                alt="Minute Books team collaborating"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-br from-[#7D3B71]/15 to-[#4A1440]/10" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white border border-[#E3D3E0] rounded-2xl px-5 py-4 shadow-lg shadow-[#7D3B71]/10">
              <p className="text-2xl font-bold text-[#33092B]">5+ Years</p>
              <p className="text-xs text-[#96568B] mt-0.5">Building great products</p>
            </div>

            <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#B076A5]/15 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 animate-fade-in-right [animation-delay:150ms]">
            <p className="text-[#96568B] leading-relaxed text-lg mb-6">
              We are based in{" "}
              <span className="text-[#33092B] font-semibold">Bangalore, India</span>{" "}
              and serve clients worldwide. We believe in starting simple and
              scaling smart. Every project begins with understanding your goals
              and ends with delivering results that exceed expectations.
            </p>
            <p className="text-[#96568B] leading-relaxed mb-10">
              From building custom mobile applications to delivering scalable web
              platforms, we combine creativity with technology to empower brands
              in the digital era. Whether you&apos;re a startup with an idea or an
              enterprise looking to modernize — we&apos;ve got you.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="glass-card-hover rounded-xl p-5 group"
                >
                  <div className={`h-9 w-9 rounded-lg ${value.color} flex items-center justify-center mb-3 transition-colors`}>
                    <value.icon size={18} className={value.iconColor} />
                  </div>
                  <h3 className="font-semibold text-sm mb-1 text-[#33092B]">{value.title}</h3>
                  <p className="text-xs text-[#96568B] leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>

            <Link href="#contact" className="btn-primary inline-flex">
              Work with us <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
