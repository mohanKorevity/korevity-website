"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
} from "lucide-react";

type Props = {
  industry: string;
  before: string[];
  after: string[];
  outcome: string;
  delay: number;
};

export default function TransformationCard({
  industry,
  before,
  after,
  outcome,
  delay,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.55,
        delay: delay * 0.08,
      }}
      whileHover={{
        y: -8,
      }}
      className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl"
    >
      {/* Hover Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-blue-500/0 transition-all duration-500 group-hover:from-cyan-500/5 group-hover:to-blue-500/10" />

      {/* Top Accent */}

      <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 transition-all duration-500 group-hover:w-full" />

      <div className="relative z-10">

        <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold tracking-wider text-cyan-300">
          {industry}
        </span>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto_1fr]">

          {/* BEFORE */}

          <div>

            <h4 className="mb-5 text-lg font-bold tracking-wide text-red-300">
              BEFORE
            </h4>

            <div className="space-y-4">

              {before.map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <XCircle className="mt-1 h-5 w-5 text-red-400" />

                  <span className="leading-7 text-slate-400">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Arrow */}

          <div className="hidden items-center justify-center lg:flex">

            <ArrowRight className="h-10 w-10 text-cyan-400" />

          </div>

          {/* AFTER */}

          <div>

            <h4 className="mb-5 text-lg font-bold tracking-wide text-emerald-300">
              AFTER
            </h4>

            <div className="space-y-4">

              {after.map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-400" />

                  <span className="leading-7 text-slate-300">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Outcome */}

        <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">

          <div className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
            Potential Outcome
          </div>

          <div className="mt-2 text-2xl font-bold text-white">
            {outcome}
          </div>

        </div>

      </div>

    </motion.div>
  );
}