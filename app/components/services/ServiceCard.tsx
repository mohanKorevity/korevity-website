"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
  gradient: string;
  glow: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
  gradient,
  glow,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{ duration: 0.35 }}
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-white/10
        bg-slate-900/60
        backdrop-blur-xl
        p-8

        transition-all
        duration-500

        hover:border-cyan-400/30
      "
    >
      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-blue-500/0 transition-all duration-700 group-hover:from-cyan-500/5 group-hover:to-blue-500/10" />

      <div className="relative z-10">

        {/* Icon */}

        <div
          className={`
            mb-8
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-3xl
            border
            border-white/10

            bg-gradient-to-br
            ${gradient}

            ${glow}

            transition-all
            duration-500

            group-hover:scale-110
            group-hover:rotate-3
          `}
        >
          {icon}
        </div>

        {/* Title */}

        <h3 className="text-3xl font-bold text-white">
          {title}
        </h3>

        {/* Description */}

        <p className="mt-6 text-lg leading-8 text-slate-400">
          {description}
        </p>

        {/* Link */}

        <Link
  href="/solutions"
  className="
    mt-8
    inline-flex
    items-center
    gap-2
    text-sm
    font-semibold
    text-cyan-400
    transition-all
    duration-300
    group-hover:gap-4
    hover:text-cyan-300
  "
>
  Discover Solution
  <ArrowRight className="h-4 w-4" />
</Link>

      </div>
    </motion.div>
  );
}