"use client";

import { motion } from "framer-motion";

import {
  Factory,
  HeartPulse,
  ShoppingBag,
  Truck,
  Building2,
  Briefcase,
} from "lucide-react";

const industries = [
  {
    title: "Manufacturing",
    description:
      "Connect production and operational data into dashboards, reporting and automated workflows for clearer visibility across manufacturing operations.",
    icon: Factory,
    gradient: "from-cyan-400 via-blue-500 to-indigo-600",
    border: "hover:border-cyan-400/30",
    glow: "shadow-cyan-500/30",
  },
  {
    title: "Healthcare",
    description:
      "Improve administrative reporting, connect operational information and automate routine workflows while keeping the focus on non-clinical business operations.",
    icon: HeartPulse,
    gradient: "from-emerald-400 via-green-500 to-teal-600",
    border: "hover:border-emerald-400/30",
    glow: "shadow-emerald-500/30",
  },
  {
    title: "Retail & E-Commerce",
    description:
      "Connect sales, customer and inventory data to improve reporting, operational visibility and everyday retail decision-making.",
    icon: ShoppingBag,
    gradient: "from-purple-400 via-fuchsia-500 to-indigo-600",
    border: "hover:border-purple-400/30",
    glow: "shadow-purple-500/30",
  },
  {
    title: "Logistics",
    description:
      "Connect shipment and operational data, improve KPI visibility and automate routine workflows across logistics operations.",
    icon: Truck,
    gradient: "from-orange-400 via-amber-500 to-red-500",
    border: "hover:border-orange-400/30",
    glow: "shadow-orange-500/30",
  },
  {
    title: "Construction",
    description:
      "Bring project, resource and operational information together for clearer reporting, performance tracking and workflow visibility.",
    icon: Building2,
    gradient: "from-blue-400 via-sky-500 to-cyan-500",
    border: "hover:border-blue-400/30",
    glow: "shadow-blue-500/30",
  },
  {
    title: "Professional Services",
    description:
      "Connect client, project and financial information to improve reporting, automate routine processes and give teams clearer operational visibility.",
    icon: Briefcase,
    gradient: "from-rose-400 via-pink-500 to-red-500",
    border: "hover:border-rose-400/30",
    glow: "shadow-rose-500/30",
  },
];

export default function IndustriesSection() {
  return (
    <section className="relative py-36">
      <div className="mx-auto max-w-7xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-cyan-300">
            INDUSTRIES
          </span>

          <h2 className="mt-8 text-5xl font-black text-white lg:text-6xl">
            Built Around
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              Your Industry
            </span>
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-400">
  Every business operates differently. We adapt dashboards, automation,
  integrations and intelligent capabilities around your workflows, systems
  and operational priorities.
</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                whileHover={{ y: -8 }}
                className={`
                  group
                  rounded-[30px]
                  border
                  border-white/10
                  bg-slate-900/60
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  ${industry.border}
                `}
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
                    ${industry.gradient}
                    shadow-xl
                    ${industry.glow}
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:-rotate-3
                  `}
                >
                  <Icon className="h-9 w-9 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                  {industry.title}
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-400">
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
} 