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
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";

export default function Home() {
  return (
    <>
      <Navbar />
      <FlowArt aria-label="Minute Books — page sections">

        {/* Hero + Clients brand scroller as one story panel */}
        <FlowSection aria-label="Hero" style={{ padding: 0, backgroundColor: "#fafafa" }}>
          <Hero />
          <Clients />
        </FlowSection>

        {/* About + Stats as one story panel */}
        <FlowSection aria-label="About" style={{ padding: 0, backgroundColor: "#fafafa" }}>
          <About />
          <Stats />
        </FlowSection>

        {/* Services + TechStack marquee as one story panel */}
        <FlowSection aria-label="Services" style={{ padding: 0, backgroundColor: "#ffffff" }}>
          <Services />
          <TechStack />
        </FlowSection>

        <FlowSection aria-label="Portfolio" style={{ padding: 0, backgroundColor: "#fafafa" }}>
          <Portfolio />
        </FlowSection>

        <FlowSection aria-label="Industries" style={{ padding: 0, backgroundColor: "#ffffff" }}>
          <Industries />
        </FlowSection>

        <FlowSection aria-label="Process" style={{ padding: 0, backgroundColor: "#fafafa" }}>
          <Process />
        </FlowSection>

        <FlowSection aria-label="Testimonials" style={{ padding: 0, backgroundColor: "#ffffff" }}>
          <Testimonials />
        </FlowSection>

        <FlowSection aria-label="Blog" style={{ padding: 0, backgroundColor: "#fafafa" }}>
          <Blog />
        </FlowSection>

        <FlowSection aria-label="CTA" style={{ padding: 0, backgroundColor: "#fafafa" }}>
          <CTA />
        </FlowSection>

        <FlowSection aria-label="Contact" style={{ padding: 0, backgroundColor: "#ffffff" }}>
          <Contact />
        </FlowSection>

      </FlowArt>
      <Footer />
    </>
  );
}
