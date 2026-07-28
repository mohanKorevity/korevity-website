"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import GlowButton from "../ui/GlowButton";

export default function SolutionsHero() {
  return (
    <section className="relative overflow-hidden pt-44 pb-36">

      <div className="mx-auto max-w-7xl px-8">

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-5xl text-center"
        >

          <span
            className="
              inline-flex
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-6
              py-2
              text-sm
              font-semibold
              tracking-[0.2em]
              text-cyan-300
            "
          >
            BUSINESS SOLUTIONS
          </span>


          <h1
            className="
              mt-10
              text-6xl
              font-black
              leading-tight
              text-white
              lg:text-7xl
            "
          >

            Transforming Challenges

            <br />

            <span
              className="
                bg-gradient-to-r
                from-cyan-300
                via-white
                to-blue-400

                bg-clip-text
                text-transparent
              "
            >
              Into Smarter Solutions
            </span>

          </h1>


          <p
            className="
              mx-auto
              mt-10
              max-w-4xl
              text-2xl
              leading-10
              text-slate-400
            "
          >

            Technology should simplify your operations, not complicate them.

            <br />

            KoreVity helps businesses improve efficiency, connect systems,
            automate repetitive work and unlock better decisions through
            Business Intelligence, Automation and AI.

          </p>


          <div
            className="
              mt-14
              flex
              flex-col
              items-center
              justify-center
              gap-6

              sm:flex-row
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
  Let's Solve Your Challenge
</GlowButton>




            <a
  href="#transformation"
  className="
    rounded-xl
    border
    border-white/10
    px-8
    py-4
    font-semibold
    text-white
    transition
    hover:border-cyan-400/40
    hover:bg-white/5
  "
>
  Explore Solutions
</a>


          </div>


        </motion.div>

      </div>

    </section>
  );
}