"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  BarChart3,
  Network,
  Bot,
  Target,
  Handshake,
} from "lucide-react";

type Props = {
  title: string;
  description: string;
  icon: string;
};

const icons = {
  time: Clock3,
  analytics: BarChart3,
  systems: Network,
  ai: Bot,
  strategy: Target,
  partnership: Handshake,
};

export default function ServiceCard({
  title,
  description,
  icon,
}: Props) {
  const Icon = icons[icon as keyof typeof icons] || Clock3;

  const iconStyles = {
    time: {
      bg: "bg-cyan-500/15",
      border: "border-cyan-400/20",
      text: "text-cyan-300",
      glow: "shadow-cyan-500/30",
    },
    analytics: {
      bg: "bg-emerald-500/15",
      border: "border-emerald-400/20",
      text: "text-emerald-300",
      glow: "shadow-emerald-500/30",
    },
    systems: {
      bg: "bg-blue-500/15",
      border: "border-blue-400/20",
      text: "text-blue-300",
      glow: "shadow-blue-500/30",
    },
    ai: {
      bg: "bg-violet-500/15",
      border: "border-violet-400/20",
      text: "text-violet-300",
      glow: "shadow-violet-500/30",
    },
    strategy: {
      bg: "bg-orange-500/15",
      border: "border-orange-400/20",
      text: "text-orange-300",
      glow: "shadow-orange-500/30",
    },
    partnership: {
      bg: "bg-rose-500/15",
      border: "border-rose-400/20",
      text: "text-rose-300",
      glow: "shadow-rose-500/30",
    },
  };

  const style =
    iconStyles[icon as keyof typeof iconStyles] || iconStyles.time;

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.01,
      }}
      transition={{
        duration: 0.35,
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-7 backdrop-blur-xl"
    >
      {/* Hover Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-blue-500/0 transition-all duration-500 group-hover:from-cyan-500/5 group-hover:via-cyan-500/5 group-hover:to-blue-500/10" />

      {/* Top Border Glow */}

      <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 transition-all duration-500 group-hover:w-full" />

      <div className="relative z-10 flex h-full flex-col">

        <div
          className={`
            mb-7 flex h-14 w-14 items-center justify-center
            rounded-2xl border
            ${style.bg}
            ${style.border}
            ${style.text}
            shadow-xl
            ${style.glow}
            transition-all duration-500
            group-hover:scale-110
            group-hover:-rotate-3
          `}
        >
          <Icon className="h-7 w-7" />
        </div>

        <h3 className="text-3xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
          {title}
        </h3>

        <p className="mt-5 flex-1 text-lg leading-8 text-slate-400">
          {description}
        </p>

        

      </div>
    </motion.div>
  );
}