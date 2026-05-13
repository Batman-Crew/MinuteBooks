"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";

const openings = [
  {
    title: "Full-Stack Developer",
    type: "Full-time",
    location: "Remote / Bangalore",
    experience: "2–4 years",
    description: "Build and maintain scalable web applications using React, Next.js, and Node.js. Work closely with clients and the core team on exciting product challenges.",
    tags: ["React", "Next.js", "Node.js", "TypeScript"],
  },
  {
    title: "Mobile App Developer",
    type: "Full-time",
    location: "Remote",
    experience: "2–5 years",
    description: "Develop cross-platform mobile applications using React Native and Flutter. Own features end-to-end from design spec to App Store deployment.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    title: "UI/UX Designer",
    type: "Part-time / Contract",
    location: "Remote",
    experience: "1–3 years",
    description: "Create beautiful, user-centered interfaces for web and mobile products. Collaborate with developers and clients to bring designs to life.",
    tags: ["Figma", "Prototyping", "Design Systems", "User Research"],
  },
  {
    title: "AI/ML Engineer",
    type: "Full-time",
    location: "Remote / Bangalore",
    experience: "2–4 years",
    description: "Integrate LLM-powered features, build RAG pipelines, and develop intelligent automation workflows for our client products.",
    tags: ["Python", "LangChain", "OpenAI", "FastAPI"],
  },
];

const perks = [
  { icon: "🌍", label: "100% Remote-friendly" },
  { icon: "📈", label: "Growth & learning budget" },
  { icon: "🤝", label: "Collaborative culture" },
  { icon: "⏰", label: "Flexible hours" },
  { icon: "💰", label: "Competitive pay" },
  { icon: "🏖️", label: "Unlimited PTO" },
];

export function Careers() {
  return (
    <section id="careers" className="py-28 lg:py-36 relative bg-white">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div className="animate-fade-in-left">
            <span className="tag-pill mb-4 inline-block">Careers</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#33092B] mb-5">
              Join the team
              <br />
              <span className="gradient-text-accent">building tomorrow.</span>
            </h2>
            <p className="text-[#96568B] text-lg leading-relaxed mb-6">
              We&apos;re a small, mighty team of engineers and designers who love
              shipping products that make a difference. If you&apos;re passionate
              about great code and great craft — we want to hear from you.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {perks.map((perk) => (
                <div key={perk.label} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-[#E3D3E0] bg-[#FAF4F9] text-sm">
                  <span className="text-base">{perk.icon}</span>
                  <span className="text-[#96568B] text-xs font-medium">{perk.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in-right [animation-delay:150ms]">
            <div className="relative rounded-2xl overflow-hidden aspect-4/3 shadow-xl shadow-[#7D3B71]/12">
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                alt="Minute Books team culture"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-br from-[#7D3B71]/15 to-[#4A1440]/10" />
            </div>
            <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white border border-[#E3D3E0] rounded-2xl px-5 py-4 shadow-lg shadow-[#7D3B71]/10">
              <p className="text-lg font-bold text-[#33092B]">4 open positions</p>
              <p className="text-xs text-[#96568B] mt-0.5">Remote-friendly roles</p>
            </div>
          </div>
        </div>

        {/* Job listings */}
        <h3 className="text-xl font-bold mb-6 text-[#33092B] animate-fade-in-up">Open Positions</h3>
        <div className="flex flex-col gap-4">
          {openings.map((job, i) => (
            <div
              key={job.title}
              className="group glass-card-hover rounded-2xl p-6 sm:p-7 animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h4 className="font-bold text-base text-[#33092B]">{job.title}</h4>
                    <span className="tag-pill text-xs">{job.type}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 mb-3 text-xs text-[#96568B]">
                    <span className="flex items-center gap-1"><MapPin size={11} /> {job.location}</span>
                    <span className="flex items-center gap-1"><Briefcase size={11} /> {job.experience}</span>
                  </div>
                  <p className="text-sm text-[#96568B] leading-relaxed mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs border border-[#E3D3E0] bg-white text-[#96568B]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={`mailto:Vishwatechmania@gmail.com?subject=Application for ${job.title}`}
                  className="btn-primary text-sm shrink-0 self-start sm:self-center"
                >
                  Apply Now <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#96568B] text-sm mt-10 animate-fade-in-up">
          Don&apos;t see a fit? Send your resume to{" "}
          <a href="mailto:Vishwatechmania@gmail.com" className="text-[#7D3B71] hover:text-[#632558] font-semibold hover:underline transition-colors">
            Vishwatechmania@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
