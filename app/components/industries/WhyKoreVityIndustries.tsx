"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Workflow,
  BarChart3,
  Layers3,
} from "lucide-react";

const strengths = [
  {
    icon: BrainCircuit,
    title: "Industry-Aware AI",
    description:
      "KORTEX works with your business knowledge, connected data and workflows to identify patterns, uncover insights and provide relevant recommendations.",
    color: "from-cyan-500 to-blue-600",
    glow: "shadow-[0_0_45px_rgba(34,211,238,0.25)]",
  },
  {
    icon: Workflow,
    title: "Connected Operations",
    description:
      "Connect existing systems, data and workflows so information can move across teams and operations with less manual effort.",
    color: "from-purple-500 to-indigo-600",
    glow: "shadow-[0_0_45px_rgba(168,85,247,0.25)]",
  },
  {
    icon: BarChart3,
    title: "Decision Intelligence",
    description:
      "Combine live business data, dashboards and KORTEX insights to give leaders clearer visibility and stronger decision support.",
    color: "from-emerald-500 to-green-600",
    glow: "shadow-[0_0_45px_rgba(16,185,129,0.25)]",
  },
  {
    icon: Layers3,
    title: "Scalable Solutions",
    description:
      "Expand your connected systems, automation and intelligence capabilities as your teams, workflows and operational needs evolve.",
    color: "from-orange-500 to-red-500",
    glow: "shadow-[0_0_45px_rgba(249,115,22,0.25)]",
  },
];

export default function WhyKoreVityIndustries() {
  return (
    <section className="relative py-36">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
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
          }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >

          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-cyan-300">
            WHY KOREVITY
          </span>


          <h2 className="mt-8 text-5xl font-black text-white lg:text-6xl">

            One Technology Partner

            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              Across Every Industry
            </span>

          </h2>


          <p className="mt-8 text-xl leading-9 text-slate-400">

            Across industries, KoreVity combines KORTEX, connected systems,
  automation and business intelligence to help organizations improve
  visibility, streamline operations and make better-informed decisions.

          </p>

        </motion.div>


        <div className="grid gap-8 md:grid-cols-2">


          {strengths.map((item, index) => {

            const Icon = item.icon;


            return (

              <motion.div

                key={item.title}

                initial={{
                  opacity: 0,
                  y: 35,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}

                whileHover={{
                  y: -10,
                }}

                className="
                  group
                  rounded-[32px]
                  border
                  border-white/10
                  bg-slate-900/60
                  p-10
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-cyan-400/30
                "

              >

                <div
                  className={`
                    mb-8
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-3xl
                    bg-gradient-to-br
                    ${item.color}
                    ${item.glow}
                  `}
                >

                  <Icon className="h-10 w-10 text-white" />

                </div>


                <h3 className="text-3xl font-bold text-white">

                  {item.title}

                </h3>


                <p className="mt-5 text-lg leading-8 text-slate-400">

                  {item.description}

                </p>


              </motion.div>

            );

          })}


        </div>


      </div>

    </section>
  );
}