"use client";


import { motion } from "framer-motion";

import {
  BarChart3,
  Bot,
  Database,
  Workflow,
  Cpu,
  LineChart,
} from "lucide-react";

import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Business Intelligence",
    description:
      "Connect business data into dashboards, KPIs and reports that give leaders clearer visibility into performance, trends and operations.",
    icon: <BarChart3 className="h-9 w-9 text-white" />,
    gradient: "from-cyan-400 via-sky-500 to-blue-600",
    glow: "shadow-[0_0_45px_rgba(34,211,238,0.35)]",
  },
  {
  title: "Business Knowledge & Intelligence",
  description:
    "Turn company documents, policies, SOPs and connected business information into an intelligent knowledge workspace your team can use every day.",
  icon: <Bot className="h-9 w-9 text-white" />,
  gradient: "from-violet-500 via-fuchsia-500 to-purple-700",
  glow: "shadow-[0_0_45px_rgba(168,85,247,0.35)]",
},
  {
  title: "Data Integration",
  description:
    "Connect your existing business systems and data sources so information can flow reliably across dashboards, workflows and the KoreVity environment.",
  icon: <Database className="h-9 w-9 text-white" />,
  gradient: "from-emerald-400 via-green-500 to-teal-600",
  glow: "shadow-[0_0_45px_rgba(16,185,129,0.35)]",
},
  {
  title: "Workflow Automation",
  description:
    "Automate repetitive tasks, approvals, notifications and system handoffs so everyday business processes move faster with less manual work.",
  icon: <Workflow className="h-9 w-9 text-white" />,
  gradient: "from-orange-400 via-amber-500 to-yellow-600",
  glow: "shadow-[0_0_45px_rgba(245,158,11,0.35)]",
},
  {
  title: "AI Assistants & Agents",
  description:
    "Build task-focused AI assistants and agents that work with your business knowledge and connected systems to answer questions, retrieve information and support specific business tasks.",
  icon: <Cpu className="h-9 w-9 text-white" />,
  gradient: "from-pink-500 via-rose-500 to-red-600",
  glow: "shadow-[0_0_45px_rgba(236,72,153,0.35)]",
},
  {
  title: "AI-Powered Insights",
  description:
    "Analyze connected business data to identify trends, anomalies and opportunities, then surface insights and recommendations for better decisions.",
  icon: <LineChart className="h-9 w-9 text-white" />,
  gradient: "from-blue-500 via-indigo-500 to-cyan-500",
  glow: "shadow-[0_0_45px_rgba(59,130,246,0.35)]",
},
];

export default function ServicesGrid() {

 
    
  return (
    <section
  id="services-grid"
  className="relative py-36"
>
      <div className="mx-auto max-w-7xl px-8">

        <motion.div
  initial={{ opacity: 0, y: 35 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mx-auto mb-20 max-w-3xl text-center scroll-mt-32"
>

          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-cyan-300">
            HOW WE HELP
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">
            Solutions Designed
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              Around Your Business
            </span>
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-400">
            Every service is focused on solving real business challenges —
            saving time, improving visibility and helping you grow with confidence.
          </p>

        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => (

            <motion.div
              key={service.title}
              className="h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
            >
              <ServiceCard {...service} />
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}