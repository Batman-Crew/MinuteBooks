"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, Lightbulb, Rocket, Users } from "lucide-react";
import aboutImg1 from "@/Images/Rectangle 141720.png";
import aboutImg2 from "@/Images/Rectangle 141721.png";
import aboutImg3 from "@/Images/Rectangle 141722.png";
import techImg from "@/Images/technology 2.png";

const values = [
  {
    icon: Code2,
    title: "Technical Excellence",
    description: "Clean, scalable code built with modern frameworks and industry best practices.",
    color: "bg-[#170b33]/10 group-hover:bg-[#170b33]/18",
    iconColor: "text-[#170b33]",
  },
  {
    icon: Lightbulb,
    title: "Creative Solutions",
    description: "We combine creativity with technology to solve your most complex problems.",
    color: "bg-[#5d4483]/10 group-hover:bg-[#5d4483]/18",
    iconColor: "text-[#5d4483]",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Agile development with clear timelines and consistent communication.",
    color: "bg-[#7c6699]/15 group-hover:bg-[#7c6699]/25",
    iconColor: "text-[#170b33]",
  },
  {
    icon: Users,
    title: "Client Focused",
    description: "Your vision drives every decision. We build what matters to you.",
    color: "bg-[#2e1a56]/10 group-hover:bg-[#2e1a56]/18",
    iconColor: "text-[#2e1a56]",
  },
];

export function About() {
  return (
    <section id="about" className="py-28 lg:py-36 relative bg-[#faf8fd]">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="tag-pill mb-4 inline-block">About Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#170b33] mb-4">
            We build digital products
            <br className="hidden sm:block" />
            <span className="gradient-text-accent"> that matter.</span>
          </h2>
          <p className="text-[#5d4483] text-lg max-w-2xl mx-auto leading-relaxed">
            A passionate team of developers and digital strategists helping
            businesses transform ideas into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image collage */}
          <div className="relative animate-fade-in-left order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3">
              {/* Tall left image */}
              <div className="relative rounded-2xl overflow-hidden row-span-2 h-80 shadow-lg">
                <Image src={aboutImg1} alt="Project work" fill className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-[#170b33]/20 to-transparent" />
              </div>
              {/* Top right image */}
              <div className="relative rounded-2xl overflow-hidden h-[152px] shadow-lg">
                <Image src={aboutImg2} alt="Team collaboration" fill className="object-cover" />
              </div>
              {/* Bottom right — tech image */}
              <div className="relative rounded-2xl overflow-hidden h-[152px] shadow-lg">
                <Image src={aboutImg3} alt="Technology stack" fill className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-[#170b33]/20 to-transparent" />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white border border-[#e4dbf5] rounded-2xl px-5 py-4 shadow-lg shadow-[#170b33]/10">
              <p className="text-2xl font-bold text-[#170b33]">5+ Years</p>
              <p className="text-xs text-[#5d4483] mt-0.5">Building great products</p>
            </div>

            {/* Tech floating thumbnail */}
            <div className="absolute -top-5 -left-5 w-20 h-20 rounded-xl overflow-hidden border-2 border-white shadow-lg rotate-3">
              <Image src={techImg} alt="Technology" fill className="object-cover" />
            </div>

            <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#7c6699]/15 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 animate-fade-in-right [animation-delay:150ms]">
            <p className="text-[#5d4483] leading-relaxed text-lg mb-6">
              We are based in{" "}
              <span className="text-[#170b33] font-semibold">Bangalore, India</span>{" "}
              and serve clients worldwide. We believe in starting simple and
              scaling smart. Every project begins with understanding your goals
              and ends with delivering results that exceed expectations.
            </p>
            <p className="text-[#5d4483] leading-relaxed mb-10">
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
                  <h3 className="font-semibold text-sm mb-1 text-[#170b33]">{value.title}</h3>
                  <p className="text-xs text-[#5d4483] leading-relaxed">{value.description}</p>
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
