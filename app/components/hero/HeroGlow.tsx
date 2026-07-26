"use client";

import { motion } from "framer-motion";

export default function HeroGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">


      {/* Left Ambient Glow */}

      <motion.div
        className="
          absolute
          -left-64
          top-[-140px]

          h-[650px]
          w-[650px]

          rounded-full

          bg-cyan-400/8

          blur-[180px]
        "

        animate={{
          x: [0, 35, 0],
          y: [0, 25, 0],
          scale: [1, 1.06, 1],
        }}

        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      {/* Dashboard Side Glow */}

      <motion.div
        className="
          absolute

          -right-72
          top-[80px]

          h-[720px]
          w-[720px]

          rounded-full

          bg-blue-500/12

          blur-[200px]
        "

        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
          scale: [1.05, 1, 1.05],
        }}

        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      {/* Bottom Depth Glow */}

      <motion.div
        className="
          absolute

          left-1/2
          bottom-[-350px]

          h-[700px]
          w-[700px]

          -translate-x-1/2

          rounded-full

          bg-cyan-500/6

          blur-[230px]
        "

        animate={{
          scale: [1, 1.08, 1],
        }}

        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      {/* Subtle Center Pulse */}

      <motion.div
        className="
          absolute

          left-1/2
          top-[45%]

          h-[220px]
          w-[220px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-cyan-300/5

          blur-[130px]
        "

        animate={{
          opacity: [0.25, 0.45, 0.25],
          scale: [1, 1.1, 1],
        }}

        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


    </div>
  );
}