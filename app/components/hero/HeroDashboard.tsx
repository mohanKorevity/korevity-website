"use client";

import { motion } from "framer-motion";

import DashboardHeader from "./dashboard/DashboardHeader";
import DashboardMetrics from "./dashboard/DashboardMetrics";
import DashboardAnalytics from "./dashboard/DashboardAnalytics";
import DashboardAssistant from "./dashboard/DashboardAssistant";
import DashboardFooter from "./dashboard/DashboardFooter";

export default function HeroDashboard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.9,
        delay: 0.25,
      }}
      whileHover={{
        scale: 1.012,
        y: -3,
      }}
      className="
        group
        relative

        w-full
        max-w-[460px]

        overflow-hidden

        rounded-[36px]

        p-[1px]

        bg-gradient-to-br
        from-cyan-400/40
        via-blue-500/20
        to-purple-500/40

        shadow-[0_40px_120px_rgba(0,0,0,0.55)]
      "
    >
      {/* Static Border Glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-[-40%]

          bg-gradient-to-r
          from-transparent
          via-cyan-400/20
          to-transparent

          blur-3xl
        "
      />

      {/* Dashboard Container */}

      <div
        className="
          relative

          overflow-hidden

          rounded-[35px]

          border
          border-white/10

          bg-gradient-to-br
          from-slate-900/90
          via-slate-900/80
          to-slate-950/95

          backdrop-blur-3xl

          p-5
        "
      >
        {/* Static Cyan Glow */}

        <div
          className="
            pointer-events-none

            absolute

            -right-24
            -top-24

            h-72
            w-72

            rounded-full

            bg-cyan-500/20

            blur-[120px]
          "
        />

        {/* Static Blue Glow */}

        <div
          className="
            pointer-events-none

            absolute

            -bottom-24
            -left-24

            h-64
            w-64

            rounded-full

            bg-blue-500/20

            blur-[120px]
          "
        />

        {/* Moving Light Sweep */}

        <span
          className="
            pointer-events-none

            absolute
            inset-0

            -translate-x-full

            bg-gradient-to-r

            from-transparent
            via-white/10
            to-transparent

            transition-transform
            duration-1000

            group-hover:translate-x-full
          "
        />

        {/* Inner Border */}

        <div
          className="
            pointer-events-none

            absolute
            inset-0

            rounded-[35px]

            border
            border-white/5
          "
        />

        {/* Dashboard Content */}

        <div
          className="
            relative
            z-10

            space-y-4
          "
        >
          <DashboardHeader />

          <DashboardMetrics />

          <DashboardAnalytics />

          <DashboardAssistant />

          <DashboardFooter />
        </div>
      </div>
    </motion.div>
  );
}