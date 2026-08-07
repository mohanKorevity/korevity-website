import type { Metadata } from "next";
import { Suspense } from "react";
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

import ServicesTargetScroll from "../components/services/ServicesTargetScroll";

export const metadata: Metadata = {
  alternates: {
    canonical: "/services",
  },

  title: "Business Intelligence Services",

  description:
    "Business Intelligence, AI Automation, dashboards, analytics and workflow automation services that help businesses work smarter.",
};

export default function Page() {
  return (
    <>
    <Navbar />
      <Suspense fallback={null}>
        <ServicesTargetScroll />
      </Suspense>

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