"use client";

import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";

import MouseGlow from "../components/ui/MouseGlow";
import BackgroundGlow from "../components/ui/BackgroundGlow";
import AnimatedBackground from "../components/ui/AnimatedBackground";


import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import Mission from "../components/about/Mission";
import Values from "../components/about/Values";
import WorkProcess from "../components/about/WorkProcess";
import WhyKoreVity from "../components/about/WhyKoreVity";
import AboutCTA from "../components/about/AboutCTA";



export default function AboutClient() {
  return (

    <>

      <Navbar />


      <main
        className="
          relative
          overflow-hidden
          bg-slate-950
          text-white
        "
      >


        {/* Global Effects */}

        <MouseGlow />

        <BackgroundGlow />

        <AnimatedBackground />



        {/* Page Content */}

        <div className="relative z-10">


          <AboutHero />


          <OurStory />


          <Mission />


          <Values />


          <WorkProcess />


          <WhyKoreVity />


          <AboutCTA />


        </div>


      </main>


      <Footer />


    </>

  );

}