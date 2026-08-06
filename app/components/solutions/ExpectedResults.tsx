"use client";

import { motion } from "framer-motion";
import {
  Clock,
  TrendingUp,
  ShieldCheck,
  Brain,
} from "lucide-react";

const results = [
  {
    icon: Clock,
    title: "Save Valuable Time",
    text: "Reduce time spent on manual reporting, repetitive tasks and routine administration through connected automation and intelligent workflows.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: TrendingUp,
    title: "Make Better Decisions",
    text: "Use connected data, live dashboards and KORTEX to identify patterns, uncover insights and provide recommendations that support faster decisions.",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: ShieldCheck,
    title: "Improve Reliability",
    text: "Automated workflows and connected systems reduce manual errors, improve consistency and create more reliable business processes.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: Brain,
    title: "Scale With Confidence",
    text: "Build connected systems, automation and intelligence that can evolve as your teams, workflows and operational needs grow.",
    color: "from-orange-500 to-red-500",
  },
];

export default function ExpectedResults() {
  return (
    <section className="relative py-36">

      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto mb-20 max-w-4xl text-center">

          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-cyan-300">
            EXPECTED RESULTS
          </span>

          <h2 className="mt-8 text-5xl font-black text-white lg:text-6xl">

            What Success

            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              Looks Like
            </span>

          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {results.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="rounded-[32px] border border-white/10 bg-slate-900/60 p-10 backdrop-blur-xl"
              >
                <div
                  className={`mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${item.color}`}
                >
                  <Icon className="h-10 w-10 text-white" />
                </div>

                <h3 className="text-3xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-400">
                  {item.text}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}