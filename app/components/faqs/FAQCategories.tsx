"use client";

import { motion } from "framer-motion";
import {
  Building2,
  BrainCircuit,
  ChartNoAxesCombined,
  Workflow,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const categories = [
  {
    title: "About KoreVity",
    href: "#about-korevity",
    icon: Building2,
    gradient: "from-cyan-400 to-blue-600",
    glow: "shadow-[0_0_30px_rgba(34,211,238,0.25)]",
  },
  {
    title: "KoreVity Platform",
href: "#korevity-platform",
    icon: BrainCircuit,
    gradient: "from-violet-500 to-purple-600",
    glow: "shadow-[0_0_30px_rgba(139,92,246,0.25)]",
  },
  {
    title: "Business Intelligence",
    href: "#business-intelligence",
    icon: ChartNoAxesCombined,
    gradient: "from-emerald-400 to-green-600",
    glow: "shadow-[0_0_30px_rgba(52,211,153,0.25)]",
  },
  {
    title: "Automation & Integrations",
    href: "#automation-integrations",
    icon: Workflow,
    gradient: "from-orange-400 to-amber-500",
    glow: "shadow-[0_0_30px_rgba(251,146,60,0.25)]",
  },
  {
    title: "Implementation & Security",
    href: "#implementation-security",
    icon: ShieldCheck,
    gradient: "from-blue-500 to-indigo-600",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.25)]",
  },
  {
    title: "Getting Started",
    href: "#getting-started",
    icon: Rocket,
    gradient: "from-pink-500 to-rose-600",
    glow: "shadow-[0_0_30px_rgba(236,72,153,0.25)]",
  },
];

export default function FAQCategories() {
  return (
    <section className="relative pb-20">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            grid
            gap-5
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.a
                key={category.title}
                href={category.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -5,
                  scale: 1.01,
                }}
                className="
                  group
                  flex
                  items-center
                  gap-5
                  rounded-3xl
                  border
                  border-white/10
                  bg-slate-900/60
                  p-6
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-cyan-400/30
                "
              >

                <div
  className={`
    flex
    h-14
    w-14
    shrink-0
    items-center
    justify-center
    rounded-2xl
    bg-gradient-to-br
    ${category.gradient}
    ${category.glow}
    transition-all
    duration-300
    group-hover:scale-110
  `}
>
  <Icon className="h-7 w-7 text-white" />
</div>

                <div>
                  <p className="text-lg font-semibold text-white">
                    {category.title}
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    View questions
                  </p>
                </div>

              </motion.a>
            );
          })}

        </motion.div>

      </div>

    </section>
  );
}