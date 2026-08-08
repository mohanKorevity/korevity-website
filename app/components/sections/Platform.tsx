"use client";

import { motion } from "framer-motion";
import PlatformCard from "./PlatformCard";
import { Brain } from "lucide-react";
const platformPillars = [
  {
    title: "Business Knowledge Engine",
    description:
  "Turn documents, SOPs, emails, policies and business knowledge into one searchable intelligence layer your teams can use every day.",
    icon: "knowledge",
    features: [
      "Document Intelligence",
      "Business Knowledge",
      "Instant Search",
    ],
  },

  {
    title: "Intelligent Automation",
    description:
      "Connect your existing software and automate repetitive business processes while keeping the systems your teams already use.",
    icon: "automation",
    features: [
      "Workflow Automation",
      "System Integrations",
      "Process Orchestration",
    ],
  },

  {
    title: "Operational Intelligence",
    description:
      "Bring connected business data into live dashboards and KPIs for clearer visibility across teams, processes and operations.",
    icon: "operations",
    features: [
      "Power BI Dashboards",
      "Live KPIs",
      "Operational Visibility",
    ],
  },

  {
    title: "AI Business Advisor",
    description:
        "Use connected business data and knowledge to surface insights, summarize information and provide recommendations for decisions.",
    icon: "ai",
    features: [
      "AI Insights",
      "Decision Support",
      "Business Recommendations",
    ],
  },
];
export default function Platform() {
  return (
    <section
      id="platform"
      className="relative bg-slate-950 py-36"
    >
      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl text-center"
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
            THE KOREVITY PLATFORM
          </span>

          <h2
            className="
              mt-8
              text-5xl
              font-black
              leading-[1.05]
              tracking-tight
              text-white
              lg:text-6xl
            "
          >
            We don't replace the software
            <br />

            <span
              className="
                bg-gradient-to-r
                from-cyan-300
                via-white
                to-blue-400
                bg-clip-text
                text-transparent
              "
            >
              you already use.
            </span>
          </h2>

          <h3
            className="
              mt-6
              text-3xl
              font-semibold
              text-slate-200
              lg:text-4xl
            "
          >
            We make it intelligent.
          </h3>

          <p
            className="
              mx-auto
              mt-8
              max-w-4xl
              text-xl
              leading-9
              text-slate-400
            "
          >
            KoreVity transforms disconnected software into one intelligent
operations platform. By combining{" "}
            <span className="font-semibold text-white">
              Business Knowledge
            </span>
            ,{" "}
            <span className="font-semibold text-white">
              AI
            </span>
            ,{" "}
            <span className="font-semibold text-white">
              Intelligent Automation
            </span>{" "}
            and{" "}
            <span className="font-semibold text-white">
              Operational Intelligence
            </span>
            , we help businesses work smarter without replacing the systems
            they already trust.
          </p>
        </motion.div>

       <div
  className="
    relative
    mt-24
    grid
    gap-8
    md:grid-cols-2
  "
>
  
  {platformPillars.map((pillar, index) => (
  <motion.div
    key={pillar.title}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.6,
      delay: index * 0.08,
    }}
  >
    <PlatformCard
      title={pillar.title}
      description={pillar.description}
      icon={pillar.icon}
      features={pillar.features}
    />
  </motion.div>
  
))}
<div
  className="
    pointer-events-none
    absolute
    left-1/2
    top-1/2
    hidden
    h-40
    w-40
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    border
    border-cyan-500/30
    bg-cyan-500/5
    blur-3xl
    lg:block
  "
/>
<motion.div
 initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
animate={{
  scale: [1, 1.04, 1],
}}
  transition={{
    opacity: { duration: 0.8 },
    scale: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  viewport={{ once: true }}
  className="
    absolute
    left-1/2
    top-1/2
    hidden
    -translate-x-1/2
    -translate-y-1/2
    lg:flex
    flex-col
    items-center
    justify-center
    h-40
    w-40
    rounded-full
    border
    border-cyan-400/40
    bg-slate-900/90
    backdrop-blur-xl
    shadow-[0_0_60px_rgba(6,182,212,0.25)]
    z-20
  "
>
  <div
  className="
    relative
    flex
    h-16
    w-16
    items-center
    justify-center
    rounded-2xl

    bg-gradient-to-br
    from-cyan-400
    to-blue-600
    

    shadow-[0_0_30px_rgba(6,182,212,0.45)]
  "
>
    <Brain
      size={34}
      className="text-cyan-300"
    />
    <motion.div
  className="
    absolute
    inset-0
    rounded-full
    border
    border-cyan-400/40
  "
  animate={{
    scale: [1, 1.6],
    opacity: [0.6, 0],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeOut",
  }}
/>
  </div>

  <p
    className="
      mt-4
      text-center
      text-xs
      font-bold
      tracking-[0.18em]
      text-cyan-300
    "
  >
    KOREVITY
  </p>

  <p
    className="
      text-center
      text-[11px]
      text-slate-400
    "
  >
    Intelligence Core
  </p>
</motion.div>
</div>

      </div>
    </section>
  );
}