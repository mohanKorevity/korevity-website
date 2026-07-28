"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden pt-44 pb-28">


      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
            absolute
            left-1/2
            top-0
            h-[650px]
            w-[650px]
            -translate-x-1/2
            rounded-full
            bg-cyan-500/10
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            right-0
            top-40
            h-[400px]
            w-[400px]
            rounded-full
            bg-blue-500/10
            blur-[150px]
          "
        />

      </div>



      <div className="relative mx-auto max-w-7xl px-6">


        <motion.div
          initial={{
            opacity:0,
            y:40,
          }}

          animate={{
            opacity:1,
            y:0,
          }}

          transition={{
            duration:0.8,
          }}

          className="mx-auto max-w-5xl text-center"
        >



          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-5
              py-2
              text-sm
              font-semibold
              tracking-[0.18em]
              text-cyan-300
            "
          >

            <Sparkles className="h-4 w-4" />

            CONTACT KOREVITY

          </span>




          <h1
            className="
              mt-8
              text-6xl
              font-black
              leading-tight
              text-white
              lg:text-7xl
            "
          >

            Let's Build Your


            <span
              className="
                mt-3
                block
                bg-gradient-to-r
                from-cyan-300
                via-white
                to-blue-400
                bg-clip-text
                text-transparent
              "
            >
              Intelligent Future
            </span>


          </h1>




          <p
            className="
              mx-auto
              mt-10
              max-w-3xl
              text-xl
              leading-9
              text-slate-400
            "
          >

            Tell us about your business challenges.

            We will identify opportunities where
            Business Intelligence, Automation and AI
            can create measurable improvements.

          </p>




          <p
            className="
              mt-8
              text-sm
              font-medium
              tracking-wide
              text-slate-400
            "
          >
            No pressure. Just a conversation about improving your business.
          </p>



        </motion.div>


      </div>


    </section>
  );
}