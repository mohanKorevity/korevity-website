"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import GlowButton from "../ui/GlowButton";

export default function IndustriesCTA() {
  return (
    <section className="relative py-36">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          whileHover={{
            y: -4,
          }}
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-gradient-to-br
            from-slate-900
            via-slate-950
            to-blue-950
            px-8
            py-20
            text-center
            shadow-2xl
            transition-all
            duration-500
            hover:border-cyan-400/30
            lg:px-20
          "
        >

          {/* Animated Glow Background */}

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="
              absolute
              -left-20
              top-0
              h-72
              w-72
              rounded-full
              bg-cyan-500/20
              blur-3xl
            "
          />


          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
            }}
            className="
              absolute
              -right-20
              bottom-0
              h-72
              w-72
              rounded-full
              bg-blue-500/20
              blur-3xl
            "
          />


          <div className="relative z-10">


            <span
              className="
                inline-flex
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
              GET STARTED
            </span>


            <h2
              className="
                mt-8
                text-5xl
                font-black
                leading-tight
                text-white
                lg:text-6xl
              "
            >

              Ready To Transform

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
                Your Industry?
              </span>

            </h2>


            <p
              className="
                mx-auto
                mt-8
                max-w-3xl
                text-xl
                leading-9
                text-slate-400
              "
            >
              Let's identify where KORTEX, connected systems, automation and business intelligence can improve visibility, streamline operations and create measurable value in your industry.
            </p>


            <motion.div
              className="mt-10 flex justify-center"
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 0.3,
              }}
            >

              <Link
  href="https://calendly.com/mohan-korevity/30min"
  target="_blank"
  rel="noopener noreferrer"
>
  <GlowButton>
    Book A Strategy Call
  </GlowButton>
</Link>

            </motion.div>


          </div>


        </motion.div>

      </div>

    </section>
  );
}