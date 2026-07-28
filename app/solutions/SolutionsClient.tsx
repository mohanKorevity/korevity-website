"use client";

import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";

import MouseGlow from "../components/ui/MouseGlow";
import BackgroundGlow from "../components/ui/BackgroundGlow";
import AnimatedBackground from "../components/ui/AnimatedBackground";

import SolutionsHero from "../components/solutions/SolutionsHero";
import ProblemSolutions from "../components/solutions/ProblemSolutions";
import BeforeAfter from "../components/solutions/BeforeAfter";
import ExpectedResults from "../components/solutions/ExpectedResults";
import WhyChooseKoreVity from "../components/solutions/WhyChooseKoreVity";
import SolutionsCTA from "../components/solutions/SolutionsCTA";

export default function SolutionsClient() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-slate-950 text-white">

        <MouseGlow />
        <BackgroundGlow />
        <AnimatedBackground />

        <SolutionsHero />

        <ProblemSolutions />

        <BeforeAfter />

        <ExpectedResults />

        <WhyChooseKoreVity />

        <SolutionsCTA />

      </main>

      <Footer />
    </>
  );
}