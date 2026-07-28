"use client";

import { motion } from "framer-motion";

const activities = [
  {
    title: "Sales Forecast Updated",
    status: "AI Prediction",
    color: "bg-cyan-400",
  },
  {
    title: "Invoice Automation",
    status: "Completed",
    color: "bg-emerald-400",
  },
  {
    title: "CRM Synchronization",
    status: "Running",
    color: "bg-blue-400",
  },
  {
    title: "Marketing Campaign",
    status: "Optimized",
    color: "bg-purple-400",
  },
];

export default function DashboardActivity() {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl">

      <div className="mb-6 flex items-center justify-between">

        <h3 className="text-lg font-bold text-white">
          AI Activity
        </h3>

        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
          LIVE
        </span>

      </div>

      <div className="space-y-4">

        {activities.map((activity, index) => (
          <motion.div
            key={activity.title}
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * 0.15,
            }}
            className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 p-4"
          >
            <div className="flex items-center gap-4">

              <div
                className={`h-3 w-3 rounded-full ${activity.color}`}
              />

              <div>

                <p className="font-medium text-white">
                  {activity.title}
                </p>

                <p className="text-sm text-slate-400">
                  {activity.status}
                </p>

              </div>

            </div>

            <span className="text-xs text-slate-400">
              Just now
            </span>

          </motion.div>
        ))}

      </div>

    </div>
  );
}