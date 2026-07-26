"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Rocket,
  Users,
  Sparkles,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Business First",
    description:
      "We solve business problems first. Technology is simply the tool that gets you there.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Rocket,
    title: "Practical AI",
    description:
      "No hype. We implement AI that delivers measurable improvements in productivity and decision making.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: Users,
    title: "Built Around Your Team",
    description:
      "Solutions are designed around how your people actually work—not the other way around.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: Sparkles,
    title: "Designed To Scale",
    description:
      "Our solutions grow alongside your business, ensuring long-term value instead of short-term fixes.",
    color: "from-orange-500 to-red-500",
  },
];

export default function WhyChooseKoreVity() {
  return (
    <section className="relative py-36">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 max-w-4xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-cyan-300">
            WHY KOREVITY
          </span>

          <h2 className="mt-8 text-5xl font-black text-white lg:text-6xl">

            Why Businesses

            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              Choose KoreVity
            </span>

          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
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