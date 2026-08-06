"use client";

import { motion } from "framer-motion";
import {
  Search,
  ClipboardCheck,
  Wrench,
  Rocket,
  LifeBuoy,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "We begin by understanding your workflows, systems, data, team needs and the operational challenges holding your business back.",
    color: "from-cyan-400 to-blue-600",
  },
  {
    icon: ClipboardCheck,
    title: "Strategize",
    description:
      "We create a roadmap around the right combination of KORTEX, automation, integrations and business intelligence for your goals.",
    color: "from-violet-400 to-purple-600",
  },
  {
    icon: Wrench,
    title: "Build",
    description:
      "We build and connect the dashboards, workflows, integrations and KORTEX capabilities around the way your business operates.",
    color: "from-emerald-400 to-green-600",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "We test and deploy the complete solution, support adoption and help your team start using the new connected environment confidently.",
    color: "from-orange-400 to-red-500",
  },
  {
    icon: LifeBuoy,
    title: "Grow",
    description:
      "After launch, we continue refining workflows, expanding capabilities and improving the environment as your business evolves.",
    color: "from-yellow-400 to-orange-500",
  },
];

export default function WorkProcess() {
  return (
    <section className="relative py-36">

      <div className="mx-auto max-w-6xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-cyan-300">
            HOW WE WORK
          </span>

          <h2 className="mt-8 text-5xl font-black text-white lg:text-6xl">

            From Conversation

            <span className="mt-3 block bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">

              To Long-Term Partnership

            </span>

          </h2>

          <p className="mx-auto mt-8 text-xl leading-9 text-slate-400">

            Every engagement follows a structured approach designed to deliver
            meaningful business outcomes.

          </p>

        </motion.div>

        <div className="relative mt-24">

          {/* Vertical Line */}

          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-blue-500/20 to-transparent" />

          <div className="space-y-12">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (

                <motion.div
                  key={step.title}
                  initial={{ opacity:0, x:-40 }}
                  whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true }}
                  transition={{
                    duration:.5,
                    delay:index*0.1,
                  }}
                  className="relative flex gap-8"
                >

                  {/* Icon */}

                  <div
                    className={`
                      relative
                      z-10
                      flex
                      h-16
                      w-16
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      ${step.color}
                      shadow-xl
                    `}
                  >

                    <Icon className="h-8 w-8 text-white" />

                  </div>

                  {/* Card */}

                  <div className="flex-1 rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl">

                    <div className="mb-3 text-sm font-bold tracking-[0.25em] text-cyan-300">

                      STEP {index + 1}

                    </div>

                    <h3 className="text-3xl font-bold text-white">

                      {step.title}

                    </h3>

                    <p className="mt-4 text-lg leading-8 text-slate-400">

                      {step.description}

                    </p>

                  </div>

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}