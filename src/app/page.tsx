import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Clients } from "@/components/sections/clients";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { TechStack } from "@/components/sections/tech-stack";
import { Stats } from "@/components/sections/stats";
import { Industries } from "@/components/sections/industries";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { Blog } from "@/components/sections/blog";
// import { Careers } from "@/components/sections/careers";
import { CTA } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Clients />
        <About />
        <Services />
        <Portfolio />
        <TechStack />
        <Stats />
        <Industries />
        <Process />
        <Testimonials />
        <Blog />
        {/* <Careers /> */}
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
