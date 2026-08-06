import Navbar from "./components/sections/Navbar";
import Hero from "./components/hero/Hero";
import type { Metadata } from "next";
import Platform from "./components/sections/Platform";
import TrustedBy from "./components/sections/TrustedBy";
import Services from "./components/sections/Services";
import Stats from "./components/sections/Stats";
import WhyChoose from "./components/sections/WhyChoose";
import Process from "./components/sections/Process";
import Solutions from "./components/sections/Solutions";
import AnalyticsShowcase from "./components/sections/AnalyticsShowcase";
import Industries from "./components/sections/Industries";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import CTA from "./components/sections/CTA";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import ProductShowcase from "./components/showcase/ProductShowcase";
import BackgroundGlow from "./components/ui/BackgroundGlow";
import AnimatedBackground from "./components/ui/AnimatedBackground";
import MouseGlow from "./components/ui/MouseGlow";
import PlatformTeaser from "./components/sections/PlatformTeaser";

export const metadata: Metadata = {
  title: "Business Intelligence and AI Automation",
  description:
    "Helping businesses work smarter with Business Intelligence, AI Automation and intelligent digital solutions.",
};
export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-slate-950 text-white">
        <MouseGlow />
        <BackgroundGlow />
<AnimatedBackground />

        <Hero />

        <TrustedBy />

        <Platform />

        <PlatformTeaser />


        <Services />

        <Stats />

        <WhyChoose />

        <Process />

        <Solutions />

        <AnalyticsShowcase />

        <Industries />

        <Testimonials />

        <FAQ />

        <CTA />

        <Contact />
      </main>

      <Footer />
    </>
  );
}