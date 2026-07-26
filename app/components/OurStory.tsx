"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Target,
  TrendingUp,
  Handshake,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Business First",
    text: "Technology should solve business problems, not create new ones.",
  },
  {
    icon: Target,
    title: "Practical AI",
    text: "We focus on solutions that deliver measurable business value.",
  },
  {
    icon: TrendingUp,
    title: "Real Growth",
    text: "Every project is designed to improve efficiency and decision-making.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    text: "We grow with our clients instead of disappearing after delivery.",
  },
];

export default function OurStory() {
  return (
    <section
      id="our-story"
      className="relative py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-20 lg:grid-cols-2 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
              OUR STORY
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
              Technology Should

              <br />

              <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
                Help Businesses Grow.
              </span>

            </h2>

            <p
              className="
                mt-8
                text-xl
                leading-9
                text-slate-400
              "
            >
              KoreVity was created with one simple belief:
              businesses shouldn't need to struggle with disconnected systems,
              manual processes and scattered information just to grow.
            </p>

            <p
              className="
                mt-6
                text-lg
                leading-8
                text-slate-400
              "
            >
              We combine Business Intelligence, Artificial Intelligence and
              Automation to simplify operations, improve visibility and help
              leaders make better decisions with confidence.
            </p>

            <p
              className="
                mt-6
                text-lg
                leading-8
                text-slate-400
              "
            >
              Rather than selling complicated technology, we focus on building
              practical solutions that save time, reduce repetitive work and
              support long-term business growth.
            </p>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              rounded-[36px]
              border
              border-white/10
              bg-slate-900/60
              p-8
              backdrop-blur-xl
            "
          >

            <div className="grid gap-6">

              {values.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{
                      x: 6,
                    }}
                    className="
                      flex
                      gap-5
                      rounded-2xl
                      border
                      border-white/5
                      bg-white/[0.02]
                      p-6
                    "
                  >

                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-xl
                        bg-cyan-500/10
                        text-cyan-300
                      "
                    >
                      <Icon className="h-7 w-7" />
                    </div>

                    <div>

                      <h3
                        className="
                          text-xl
                          font-bold
                          text-white
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          leading-7
                          text-slate-400
                        "
                      >
                        {item.text}
                      </p>

                    </div>

                  </motion.div>
                );
              })}

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}