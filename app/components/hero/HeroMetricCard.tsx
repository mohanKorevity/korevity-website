"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  title: string;
  value: string;
  change: string;
  icon: ReactNode;
  gradient: string;
}

export default function HeroMetricCard({
  title,
  value,
  change,
  icon,
  gradient,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        p-5
        transition-all
        duration-300
        hover:border-cyan-400/30
        hover:bg-white/[0.05]
      "
    >
      {/* glow */}

      <div
        className={`
          absolute
          inset-0
          opacity-0
          blur-3xl
          transition
          duration-500
          group-hover:opacity-20
          bg-gradient-to-br
          ${gradient}
        `}
      />

      <div className="relative flex items-start justify-between">

        <div>

          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h3 className="mt-3 text-5xl font-bold tracking-tight">
            {value}
          </h3>

          <p className="mt-3 text-sm font-semibold text-emerald-400">
            {change}
          </p>

        </div>

        <div
          className={`
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            ${gradient}
            shadow-lg
          `}
        >
          {icon}
        </div>

      </div>

    </motion.div>
  );
}