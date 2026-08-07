
import { Suspense } from "react";

import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";

import MouseGlow from "../components/ui/MouseGlow";
import BackgroundGlow from "../components/ui/BackgroundGlow";
import AnimatedBackground from "../components/ui/AnimatedBackground";

import ContactHero from "../components/contact/ContactHero";
import ContactOptions from "../components/contact/ContactOptions";
import ContactForm from "../components/contact/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-slate-950 text-white">

        <MouseGlow />

        <BackgroundGlow />

        <AnimatedBackground />


        <ContactHero />


        <ContactOptions />


        <Suspense fallback={null}>
  <ContactForm />
</Suspense>


      </main>


      <Footer />

    </>
  );
}