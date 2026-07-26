"use client";

import { motion } from "framer-motion";
import { Factory } from "lucide-react";

export default function IndustrySpotlight() {
  return (
    <section className="relative py-36">

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600">

            <Factory className="h-12 w-12 text-white" />

          </div>

          <span className="text-sm font-semibold tracking-[0.2em] text-cyan-300">
            INDUSTRY SPOTLIGHT
          </span>

          <h2 className="mt-6 text-5xl font-black text-white leading-tight">

            Manufacturing

            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              Smarter Operations
            </span>

          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-400">

            Manufacturing businesses generate massive amounts of production,
            inventory and operational data.

            KoreVity transforms that data into real-time dashboards,
            predictive insights and intelligent automation that improve
            productivity across the entire organization.

          </p>

          <div className="mt-10 space-y-4">

            {[
              "Production Monitoring",
              "Inventory Intelligence",
              "Machine Performance",
              "Quality Analytics",
              "Executive Reporting",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 text-lg text-slate-300"
              >
                <div className="h-3 w-3 rounded-full bg-cyan-400" />
                {item}
              </div>
            ))}

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[36px] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-2xl"
        >

          <div className="flex h-[450px] items-center justify-center rounded-3xl border border-dashed border-cyan-500/30 bg-slate-950/70">

            <span className="text-xl text-slate-500">
              Manufacturing Dashboard Preview
            </span>

          </div>

        </motion.div>

      </div>

    </section>
  );
}