"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import GlowButton from "../ui/GlowButton";
import Button from "../ui/Button";

const pillars = [
  {
    title: "KORTEX Intelligence",
    subtitle: "Knowledge Into Action",
    color: "text-cyan-300",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    title: "Intelligent Automation",
    subtitle: "Less Manual Work",
    color: "text-blue-300",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    title: "Connected Operations",
    subtitle: "Systems Working Together",
    color: "text-emerald-300",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-24">

      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
            absolute
            left-1/2
            top-0
            h-[700px]
            w-[700px]
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

      <div
        className="
          relative
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-12
          px-6
          lg:grid-cols-2
        "
      >

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
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
            ABOUT KOREVITY
          </span>

          <h1
            className="
              mt-8
              text-5xl
              font-black
              leading-tight
              text-white
              lg:text-7xl
            "
          >
            Helping Businesses

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
              Work Smarter.
            </span>

            <span>Not Harder.</span>
          </h1>

          <p
  className="
    mt-10
    max-w-2xl
    text-xl
    leading-9
    text-slate-400
  "
>
  Growing businesses shouldn't be held back by manual work, disconnected systems or scattered knowledge and data.

  <br />
  <br />

KoreVity brings knowledge, systems, automation and intelligence together through KORTEX—helping teams work smarter, uncover insights and make better decisions.</p>

          <div
            className="
              mt-08
              flex
              flex-wrap
              gap-5
            "
          >

            <Link href="/services?target=how-we-help">
              <GlowButton>
                See How We Can Help
              </GlowButton>
            </Link>

            <a href="#our-story">

              <Button variant="secondary">

                Why We Exist

                <ArrowRight className="ml-2 h-5 w-5" />

              </Button>

            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >

          <div
            className="
              rounded-[40px]
              border
              border-white/10
              bg-slate-900/60
              p-6
              backdrop-blur-2xl
              shadow-[0_0_60px_rgba(34,211,238,0.08)]
            "
          >

            <div className="grid gap-6">

              {pillars.map((pillar, index) => (

                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.15 }}
                  whileHover={{
                    scale: 1.03,
                    y: -5,
                  }}
                  className={`
                    rounded-3xl
                    border
                    ${pillar.border}
                    ${pillar.bg}
                    p-8
                    transition
                  `}
                >

                  <div
                    className={`
                      text-5xl
                      font-black
                      ${pillar.color}
                    `}
                  >
                    {pillar.title}
                  </div>

                  <div className="mt-2 text-xl text-white">
                    {pillar.subtitle}
                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}