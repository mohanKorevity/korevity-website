"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import GlowButton from "../ui/GlowButton";

export default function IndustriesHero() {
  return (
    <section className="relative overflow-hidden pt-44 pb-36">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mx-auto max-w-5xl text-center"
        >

          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-cyan-300">

            INDUSTRIES

          </span>


          <h1 className="mt-8 text-6xl font-black leading-tight text-white lg:text-7xl">

            AI & Business Intelligence

            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">

              Tailored For Every Industry

            </span>

          </h1>


          <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-slate-400">

            Every industry has unique challenges.
            We design intelligent solutions that improve visibility,
            automate operations and help businesses make smarter decisions.

          </p>


          <div className="mt-14 flex flex-col items-center justify-center gap-6 sm:flex-row">

  <GlowButton
  href="https://calendly.com/mohan-korevity/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="
    shadow-[0_0_45px_rgba(34,211,238,0.35)]
    transition-all
    duration-300
    hover:shadow-[0_0_70px_rgba(34,211,238,0.55)]
  "
>
  Discuss Your Industry Challenge
</GlowButton>

  <a
    href="#industries-grid"
    className="
      rounded-xl
      border
      border-white/10
      px-8
      py-4
      font-semibold
      text-white
      transition
      hover:border-cyan-400
      hover:bg-white/5
    "
  >
    Explore Industries
  </a>

</div>


        </motion.div>


      </div>


    </section>
  );
}