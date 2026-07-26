"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type HeroFloatingCardProps = {
  title: string;
  value: string;
  icon: ReactNode;
  className?: string;
};

export default function HeroFloatingCard({
  title,
  value,
  icon,
  className = "",
}: HeroFloatingCardProps) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.05,
      }}
      className={`
        absolute
        rounded-2xl
        border
        border-white/10
        bg-slate-900/70
        backdrop-blur-xl
        p-5
        shadow-[0_20px_60px_rgba(0,0,0,0.45)]
        ${className}
      `}
    >
      <div className="flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
          {icon}
        </div>

        <div>

          <p className="text-xs uppercase tracking-wider text-slate-400">
            {title}
          </p>

          <h3 className="mt-1 text-2xl font-black text-white">
            {value}
          </h3>

        </div>

      </div>
    </motion.div>
  );
}