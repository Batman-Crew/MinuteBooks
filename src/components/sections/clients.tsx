"use client";

const clients = [
  "TechStart",
  "StyleHub",
  "LearnPro",
  "GreenVentures",
  "DataFlow",
  "CloudSphere",
  "NexaRetail",
  "Buildify",
  "HealthLink",
  "FinEdge",
  "OmniCommerce",
  "SwiftApps",
];

export function Clients() {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-14 relative overflow-hidden border-y border-[#E3D3E0] bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-xs font-semibold text-[#B076A5] uppercase tracking-widest">
          Trusted by teams worldwide
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 w-max animate-marquee">
          {[...doubled, ...doubled].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center justify-center px-7 py-3 rounded-xl border border-[#E3D3E0] bg-[#FAF4F9] whitespace-nowrap min-w-32.5"
            >
              <span className="text-sm font-semibold text-[#96568B] tracking-wide">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
