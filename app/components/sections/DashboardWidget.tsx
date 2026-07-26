"use client";

import { motion } from "framer-motion";

type DashboardWidgetProps = {
  title: string;
  value: string;
  change: string;
  color: string;
};

export default function DashboardWidget({
  title,
  value,
  change,
  color,
}: DashboardWidgetProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-slate-900/70
        p-6
        backdrop-blur-xl
      "
    >
      {/* Glow */}

      <div
        className={`
          absolute
          -right-10
          -top-10
          h-28
          w-28
          rounded-full
          blur-3xl
          opacity-20
          ${color}
        `}
      />

      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h3 className="mt-3 text-3xl font-black text-white">
        {value}
      </h3>

      <div className="mt-4 flex items-center justify-between">

        <span className="text-sm font-semibold text-emerald-400">
          {change}
        </span>

        <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

      </div>

    </motion.div>
  );
}