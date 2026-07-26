"use client";

import { motion } from "framer-motion";

const points = [
  "0,130",
  "45,105",
  "90,112",
  "135,78",
  "180,86",
  "225,42",
  "270,58",
  "315,20",
];

export default function DashboardChart() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h3 className="font-semibold text-white">
            Revenue Trend
          </h3>

          <p className="text-sm text-slate-400">
            Last 30 Days
          </p>

        </div>

        <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-semibold text-emerald-400">
          +24%
        </span>

      </div>

      <svg
        viewBox="0 0 320 140"
        className="h-44 w-full"
      >
        <defs>

          <linearGradient
            id="chartLine"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>

          <linearGradient
            id="chartFill"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>

        </defs>

        <motion.polyline
          fill="none"
          stroke="url(#chartLine)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points.join(" ")}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
          }}
        />

        <polygon
          points={`${points.join(" ")} 315,140 0,140`}
          fill="url(#chartFill)"
        />

      </svg>

    </div>
  );
}