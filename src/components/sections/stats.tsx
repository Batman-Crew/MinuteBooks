"use client";

const stats = [
  { value: "50+", label: "Projects Delivered", description: "Across web, mobile, and AI domains" },
  { value: "98%", label: "Client Satisfaction", description: "Based on post-project reviews" },
  { value: "48h", label: "Average Go-Live", description: "From final approval to deployment" },
  { value: "10+", label: "Countries Served", description: "Remote-first, globally trusted" },
];

export function Stats() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#7D3B71]">
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4A1440]/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#96568B]/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="font-semibold text-sm text-[#E3D3E0] mb-1">{stat.label}</div>
              <div className="text-xs text-[#C99BC1] leading-relaxed">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
