"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  "Sales Dashboard Updated",
  "Customer Insights Generated",
  "Invoice Automation Running",
  "Marketing Report Complete",
  "Workflow Optimized",
];

export default function ActivityFeed() {
  return (
    <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-xl">

      <div className="mb-6 flex items-center gap-3">

        <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

        <h3 className="font-semibold text-white">
          Live AI Activity
        </h3>

      </div>

      <div className="space-y-4">

        {items.map((item, index) => (

          <motion.div
            key={item}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.15,
            }}
            className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-3"
          >

            <CheckCircle2
              size={18}
              className="text-green-400"
            />

            <span className="text-slate-300">
              {item}
            </span>

          </motion.div>

        ))}

      </div>

    </div>
  );
}