"use client";

import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";

import MouseGlow from "../components/ui/MouseGlow";
import BackgroundGlow from "../components/ui/BackgroundGlow";
import AnimatedBackground from "../components/ui/AnimatedBackground";

import IndustriesHero from "../components/industries/IndustriesHero";
import IndustriesGrid from "../components/industries/IndustriesGrid";
import IndustrySpotlight from "../components/industries/IndustrySpotlight";
import IndustryChallenges from "../components/industries/IndustryChallenges";
import WhyKoreVityIndustries from "../components/industries/WhyKoreVityIndustries";
import IndustriesCTA from "../components/industries/IndustriesCTA";

export default function IndustriesClient() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-slate-950 text-white">

        <MouseGlow />

        <BackgroundGlow />

        <AnimatedBackground />


        <IndustriesHero />


        <IndustriesGrid />


        <IndustrySpotlight />


        <IndustryChallenges />


        <WhyKoreVityIndustries />


        <IndustriesCTA />


      </main>


      <Footer />

    </>
  );
}