"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Database,
  Bot,
  Handshake,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Simplicity",
    description:
      "We believe technology should remove complexity—not create it. Every solution we build is designed to be intuitive, practical and easy for teams to adopt.",

    gradient: "from-yellow-400 via-orange-500 to-red-500",

    glow: "bg-orange-500/40",
  },

  {
    icon: Database,
    title: "Clarity",
    description:
      "Reliable information leads to confident decisions. We help businesses replace scattered data with clear, meaningful insights that everyone can trust.",

    gradient: "from-cyan-400 via-blue-500 to-indigo-600",

    glow: "bg-blue-500/40",
  },

  {
    icon: Bot,
    title: "Efficiency",
    description:
      "Time is one of your most valuable resources. We automate repetitive work so your people can focus on innovation, customers and business growth.",

    gradient: "from-emerald-400 via-green-500 to-teal-600",

    glow: "bg-emerald-500/40",
  },

  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We build long-term relationships, working alongside our clients as their business evolves and new opportunities emerge.",

    gradient: "from-purple-400 via-pink-500 to-rose-500",

    glow: "bg-purple-500/40",
  },
];

export default function Values() {
  return (
    <section className="relative overflow-hidden py-36">

      {/* Background */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          left-1/2
          top-20
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/10
          blur-[160px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-8">

        {/* Heading */}

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
          className="mx-auto max-w-4xl text-center"
        >

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
            OUR VALUES
          </span>

          <h2
            className="
              mt-8
              text-5xl
              font-black
              text-white
              lg:text-6xl
            "
          >

            What Drives

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
              Everything We Do.
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
            Our principles guide how we design technology,
            solve problems and build long-term partnerships.
          </p>

        </motion.div>

        {/* Cards */}

        <div
          className="
            mt-24
            grid
            gap-8
            md:grid-cols-2
          "
        >

          {values.map((value, index) => {

            const Icon = value.icon;

            return (

              <motion.div
                key={value.title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -12,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-white/10
                  bg-slate-900/70
                  p-10
                  backdrop-blur-xl
                "
              >

                {/* Animated Glow */}

                <motion.div
                  animate={{
                    scale: [1, 1.35, 1],
                    opacity: [0.25, 0.65, 0.25],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay: index,
                  }}
                  className={`
                    absolute
                    -right-10
                    -top-10
                    h-60
                    w-60
                    rounded-full
                    blur-3xl
                    ${value.glow}
                  `}
                />

                {/* Gradient Line */}

                <div
                  className={`
                    absolute
                    left-0
                    top-0
                    h-1
                    w-full
                    bg-gradient-to-r
                    ${value.gradient}
                    opacity-80
                  `}
                />

                {/* Icon */}

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.4,
                  }}
                  className={`
                    relative
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-3xl
                    bg-gradient-to-br
                    ${value.gradient}
                    shadow-2xl
                  `}
                >

                  <Icon
                    className="
                      h-10
                      w-10
                      text-white
                    "
                  />

                </motion.div>

                <h3
                  className="
                    relative
                    mt-8
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  {value.title}
                </h3>

                <p
                  className="
                    relative
                    mt-5
                    leading-8
                    text-slate-400
                  "
                >
                  {value.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}