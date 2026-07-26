"use client";

import { motion } from "framer-motion";
import TransformationCard from "./TransformationCard";

const transformations = [
  {
    industry: "Manufacturing Company",
    before: [
      "Reports built manually every Friday",
      "Data scattered across spreadsheets",
      "Decisions based on outdated information",
    ],
    after: [
      "Live operational dashboard",
      "Automated reporting",
      "Real-time production visibility",
    ],
    outcome: "Save up to 14 hours every week",
  },
  {
    industry: "Construction Company",
    before: [
      "Project updates through WhatsApp",
      "Missing documents",
      "Slow communication across teams",
    ],
    after: [
      "Central project dashboard",
      "Automatic progress reporting",
      "Everything stored in one place",
    ],
    outcome: "Faster project visibility across every site",
  },
  {
    industry: "Retail Business",
    before: [
      "Manual inventory tracking",
      "Unexpected stock shortages",
      "Time-consuming stock counts",
    ],
    after: [
      "Live inventory dashboard",
      "Low-stock alerts",
      "Automated inventory reporting",
    ],
    outcome: "Better inventory control with fewer stock issues",
  },
  {
    industry: "Professional Services",
    before: [
      "Repetitive admin work",
      "Missed follow-ups",
      "Customer information spread across tools",
    ],
    after: [
      "Automated workflows",
      "Central CRM",
      "AI-powered follow-up assistance",
    ],
    outcome: "More time focused on serving clients",
  },
];

export default function CaseStudies() {
  return (
    <section className="relative py-36">

      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-cyan-300">
            EXAMPLE TRANSFORMATIONS
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">

            Imagine What's Possible

            <span className="mt-3 block bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              For Your Business.
            </span>

          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-400">
            Every business is different, but the challenges are often the same.
            Here are examples of how the right systems can transform day-to-day
            operations.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-24 space-y-8">

          {transformations.map((item, index) => (

            <TransformationCard
              key={item.industry}
              industry={item.industry}
              before={item.before}
              after={item.after}
              outcome={item.outcome}
              delay={index}
            />

          ))}

        </div>

        {/* Disclaimer */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-16 max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center"
        >

          <p className="text-sm leading-8 text-slate-400">
            <span className="font-semibold text-white">
              Note:
            </span>{" "}
            These are illustrative examples of the types of operational
            improvements KoreVity solutions are designed to deliver. Every
            business is unique, and outcomes will depend on your existing
            processes, systems and implementation.
          </p>

        </motion.div>

      </div>

    </section>
  );
}