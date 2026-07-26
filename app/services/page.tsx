"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";

import MouseGlow from "../components/ui/MouseGlow";
import BackgroundGlow from "../components/ui/BackgroundGlow";
import AnimatedBackground from "../components/ui/AnimatedBackground";

import ServicesHero from "../components/services/ServicesHero";
import ServicesGrid from "../components/services/ServicesGrid";
import ProcessTimeline from "../components/services/ProcessTimeline";
import IndustriesSection from "../components/services/IndustriesSection";
import TechStack from "../components/services/TechStack";
import ServicesFAQ from "../components/services/ServicesFAQ";
import ServicesCTA from "../components/services/ServicesCTA";

export default function ServicesPage() {
  
const searchParams = useSearchParams();
  useEffect(() => {
    

  if (searchParams.get("target") === "how-we-help") {

    const timer = setTimeout(() => {
      const section = document.getElementById("services-grid");

      if (section) {
        const y =
          section.getBoundingClientRect().top +
          window.pageYOffset -
          100;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }
}, [searchParams]);

  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-slate-950 text-white">

        <MouseGlow />
        <BackgroundGlow />
        <AnimatedBackground />

        <ServicesHero />

        <ServicesGrid />

        <ProcessTimeline />

        <IndustriesSection />

        <TechStack />

        <ServicesFAQ />

        <ServicesCTA />

      </main>

      <Footer />
    </>
  );
}