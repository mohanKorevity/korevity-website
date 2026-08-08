"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import LazyHeroVideo from "./LazyHeroVideo";
import HeroStats from "./HeroStats";
import HeroDashboard from "./HeroDashboard";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-slate-950
        pt-28
        pb-20
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-6

          grid
          items-start

          gap-12

          lg:grid-cols-2
        "
      >
        {/* LEFT CONTENT */}

<div
  className="
    pt-12
    lg:pt-16
  "
>
  <div
    className="
      inline-flex
      rounded-full
      border
      border-cyan-400/20
      bg-cyan-400/10
      px-5
      py-2
      text-xs
      font-semibold
      uppercase
      tracking-[0.25em]
      text-cyan-400
    "
  >
    Technology That Helps You Grow
  </div>

          <h1
            className="
              mt-8
              max-w-3xl

              text-6xl
              font-black
              leading-[0.95]

              tracking-tight

              text-white

              md:text-7xl
            "
          >
            Your Business
            <br />

            <span
              className="
                bg-gradient-to-r
                from-cyan-300
                via-blue-400
                to-blue-500

                bg-clip-text
                text-transparent
              "
            >
              Deserves
            </span>

            <br />

            Better Systems.
          </h1>

          <p
            className="
              mt-8
              max-w-xl

              text-lg
              leading-8
              text-slate-400
            "
          >
            We help you simplify operations, automate everyday work and bring
            your business information together — so your team can work smarter
            and you can focus on growth.
          </p>

          <div
            className="
              mt-10
              flex
              gap-5
            "
          >
            <Link
  href="https://calendly.com/mohan-korevity/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    relative
    overflow-hidden

    inline-flex
    items-center
    justify-center

    rounded-xl

    bg-gradient-to-r
    from-cyan-500
    via-blue-500
    to-indigo-600

    px-8
    py-5

    font-bold
    text-white

    shadow-lg
    shadow-cyan-500/30

    transition-all
    duration-300

    hover:-translate-y-1
    hover:scale-[1.03]

    hover:shadow-xl
    hover:shadow-cyan-500/50

    active:scale-95
  "
>
  <span
    className="
      absolute
      inset-0
      -translate-x-full
      bg-gradient-to-r
      from-transparent
      via-white/40
      to-transparent
      transition-transform
      duration-700
      group-hover:translate-x-full
    "
  />

  <span
    className="
      absolute
      inset-0
      rounded-xl
      bg-cyan-300/20
      opacity-0
      blur-xl
      transition-opacity
      duration-300
      group-hover:opacity-100
    "
  />

  <span className="relative z-10">
    Book a Free Strategy Call
  </span>
</Link>

            <a
              href="#services"
              className="
                inline-flex
                items-center
                justify-center

                rounded-xl
                border
                border-white/10

                px-7
                py-4

                font-semibold

                text-white

                transition

                hover:border-cyan-400/40
              "
            >
              See How We Work
            </a>
          </div>

          <div className="mt-12">
            <HeroStats />
            {/* Executive AI Operations Preview */}

<div className="mt-10 max-w-[640px]">

  <div
    className="
      overflow-hidden
      rounded-[30px]
      border
      border-cyan-500/20
      bg-slate-900/40
      shadow-2xl
      shadow-cyan-500/20
      backdrop-blur-xl
    "
  >

    {/* Header */}

    <div
      className="
        flex
        items-center
        justify-between
        border-b
        border-cyan-500/10
        px-6
        py-4
      "
    >

      <div>

        <p className="text-xs uppercase tracking-[0.22em] text-cyan-400">
          Executive AI Operations Center
        </p>

        <p className="mt-1 text-sm text-slate-400">
          Live Business Intelligence Preview
        </p>

      </div>

      <div
  className="
    flex
    items-center
    gap-2
    rounded-full
    border
    border-emerald-500/30
    bg-emerald-500/10
    px-4
    py-2
  "
>

  <span
    className="
      h-2.5
      w-2.5
      rounded-full
      bg-emerald-400
      shadow-[0_0_10px_rgba(74,222,128,0.9)]
      animate-pulse
    "
  />

  <span
    className="
      text-xs
      font-bold
      tracking-[0.15em]
      text-emerald-300
    "
  >
    LIVE
  </span>

</div>

    </div>

    {/* Video */}

    <LazyHeroVideo />

  </div>

</div>
          </div>

          <div
  className="
    mt-14
    w-full
    max-w-[720px]
    rounded-[32px]
    border
    border-cyan-500/20
    bg-slate-900/40
    p-10
    backdrop-blur-xl
    lg:p-12
  "
>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">
              What Makes KoreVity Different
            </p>

            <h2 className="mt-6 text-4xl font-black leading-tight text-white">
              More Than Automation.
              <br />
              More Than Analytics.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Dashboards show you what happened. Automation moves work between
              systems. AI helps you understand information.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              <span className="font-semibold text-white">
                KoreVity connects them.
              </span>{" "}
              KoreVity brings business knowledge, operational data, existing systems and intelligent workflows together — helping identify opportunities, strengthen decision-making and continuously improve how your business operates.
            </p>
          </div>
          
        </div>
        {/* DASHBOARD */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.3,
          }}
          className="
            flex
            justify-center

            lg:justify-end

            mt-3
            lg:mt-3
          "
        >
          <HeroDashboard />
        </motion.div>
      </div>
    </section>
  );
}