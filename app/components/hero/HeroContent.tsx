"use client";

import { motion } from "framer-motion";
import GlowButton from "../ui/GlowButton";
import Button from "../ui/Button";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="relative z-10 max-w-2xl">

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-cyan-500/20
            bg-cyan-500/10
            px-5
            py-2
            text-sm
            font-semibold
            tracking-[0.15em]
            sm:tracking-[0.22em]
            text-cyan-300
          "
        >
          TECHNOLOGY THAT HELPS YOU GROW
        </span>
      </motion.div>


      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.15,
          duration: 0.7,
        }}
        className="
          mt-8
          text-[2.8rem]
          sm:text-[3.3rem]
          lg:text-[4.8rem]
          xl:text-[5.1rem]
          font-black
          leading-[1.05]
          tracking-[-0.045em]
          text-white
        "
      >

        Your Business

        <span
          className="
            mt-2
            block
            bg-gradient-to-r
            from-cyan-300
            via-white
            to-blue-400
            bg-clip-text
            text-transparent
          "
        >
          Deserves
        </span>


        <span
          className="
            mt-1
            block
            pb-2
            bg-gradient-to-r
            from-cyan-300
            via-white
            to-blue-400
            bg-clip-text
            text-transparent
          "
        >
          Better Systems.
        </span>

      </motion.h1>


      {/* Description */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.35,
          duration: 0.7,
        }}
        className="
          mt-7
          space-y-5
          text-base
          sm:text-[19px]
          leading-8
          text-slate-400
        "
      >

        <p>
          We help you simplify operations, automate everyday work and bring
          your business information together — so your team can work smarter
          and you can focus on growth.
        </p>

      </motion.div>



      {/* CTA Buttons */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.7,
        }}
        className="
          mt-10
          flex
          flex-col
          sm:flex-row
          gap-5
        "
      >


        {/* Enhanced Glow CTA */}

        <div
          className="
            rounded-xl
            shadow-[0_0_45px_rgba(34,211,238,0.35)]
            transition-all
            duration-300
            hover:shadow-[0_0_70px_rgba(34,211,238,0.55)]
          "
        >

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
  Book a Free Strategy Call
</GlowButton>

        </div>



        <Button variant="secondary">
          See How We Work
        </Button>


      </motion.div>



      {/* Stats */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.65,
        }}
        className="mt-12"
      >

        <HeroStats />

      </motion.div>


    </div>
  );
}