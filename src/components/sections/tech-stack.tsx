"use client";

const technologies = [
  { name: "React", emoji: "⚛️" },
  { name: "Next.js", emoji: "▲" },
  { name: "TypeScript", emoji: "🔷" },
  { name: "Node.js", emoji: "🟢" },
  { name: "Python", emoji: "🐍" },
  { name: "Flutter", emoji: "💙" },
  { name: "React Native", emoji: "📱" },
  { name: "PostgreSQL", emoji: "🐘" },
  { name: "MongoDB", emoji: "🍃" },
  { name: "Redis", emoji: "🔴" },
  { name: "AWS", emoji: "☁️" },
  { name: "Docker", emoji: "🐳" },
  { name: "Firebase", emoji: "🔥" },
  { name: "Tailwind CSS", emoji: "🎨" },
  { name: "GraphQL", emoji: "◼" },
  { name: "REST APIs", emoji: "🔗" },
  { name: "OpenAI", emoji: "🤖" },
  { name: "Figma", emoji: "🖌️" },
];

export function TechStack() {
  const row1 = [...technologies.slice(0, 9), ...technologies.slice(0, 9)];
  const row2 = [...technologies.slice(9), ...technologies.slice(9)];

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center animate-fade-in-up">
          <span className="tag-pill mb-4 inline-block">Technologies</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#170b33]">
            Our Tech Stack
          </h2>
        </div>
      </div>

      {/* Row 1 */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="flex gap-3 w-max animate-marquee">
          {[...row1, ...row1].map((tech, i) => (
            <div
              key={`r1-${i}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#e4dbf5] bg-[#faf8fd] whitespace-nowrap hover:border-[#a695c2] hover:bg-[#f2ecfa] transition-colors cursor-default"
            >
              <span className="text-sm">{tech.emoji}</span>
              <span className="text-sm text-[#5d4483] font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — reverse */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="flex gap-3 w-max animate-marquee-reverse">
          {[...row2, ...row2].map((tech, i) => (
            <div
              key={`r2-${i}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#e4dbf5] bg-[#faf8fd] whitespace-nowrap hover:border-[#a695c2] hover:bg-[#f2ecfa] transition-colors cursor-default"
            >
              <span className="text-sm">{tech.emoji}</span>
              <span className="text-sm text-[#5d4483] font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
