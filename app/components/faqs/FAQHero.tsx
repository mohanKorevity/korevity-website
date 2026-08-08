"use client";

import { motion } from "framer-motion";
import { HelpCircle, Search, ShieldCheck } from "lucide-react";

export default function FAQHero() {
  return (
    <section className="relative overflow-hidden pt-44 pb-28">

      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0">

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
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
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
            <HelpCircle className="h-4 w-4" />
            FREQUENTLY ASKED QUESTIONS
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
            Everything You Need

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
              To Know About KoreVity
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
            Learn how KoreVity, business intelligence, automation
            and connected systems work together — from implementation
            and security to pricing, support and everyday use.
          </p>

          <div
            className="
              mx-auto
              mt-14
              grid
              max-w-3xl
              gap-4
              sm:grid-cols-3
            "
          >

            <div
              className="
                flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                px-5
                py-4
                text-slate-300
              "
            >
              <Search className="h-5 w-5 text-cyan-400" />
              Clear Answers
            </div>

            <div
              className="
                flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                px-5
                py-4
                text-slate-300
              "
            >
              <HelpCircle className="h-5 w-5 text-cyan-400" />
              Practical Guidance
            </div>

            <div
              className="
                flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                px-5
                py-4
                text-slate-300
              "
            >
              <ShieldCheck className="h-5 w-5 text-cyan-400" />
              No Technical Jargon
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}