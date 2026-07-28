"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function BeliefCard({
  icon,
  title,
  description,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 transition-all duration-500 group-hover:from-cyan-500/5 group-hover:to-blue-500/10" />

      <div className="relative z-10">

        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
          {icon}
        </div>

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-5 text-lg leading-8 text-slate-400">
          {description}
        </p>

        <div className="mt-8 flex items-center gap-2 text-cyan-400 transition-all duration-300 group-hover:gap-4">
          <span className="font-medium">
            Learn More About KoreVity
          </span>

          <ArrowRight className="h-4 w-4" />
        </div>

      </div>
    </motion.div>
  );
}