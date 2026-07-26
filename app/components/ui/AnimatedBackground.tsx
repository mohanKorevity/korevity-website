"use client";

import { motion } from "framer-motion";


export default function AnimatedBackground() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        overflow-hidden
      "
    >


      {/* Left Floating Blue Orb */}

      <motion.div

        className="
          absolute
          -left-32
          top-20

          h-[420px]
          w-[420px]

          rounded-full

          bg-blue-500/10

          blur-[160px]
        "

        animate={{
          x: [0, 120, 0],
          y: [0, -60, 0],
          opacity: [0.4, 0.8, 0.4],
        }}

        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}

      />



      {/* Right Cyan Orb */}

      <motion.div

        className="
          absolute
          -right-32
          top-40

          h-[520px]
          w-[520px]

          rounded-full

          bg-cyan-400/10

          blur-[190px]
        "

        animate={{
          x: [0, -120, 0],
          y: [0, 80, 0],
          opacity: [0.5, 0.9, 0.5],
        }}

        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}

      />



      {/* Bottom Intelligence Glow */}

      <motion.div

        className="
          absolute
          bottom-[-120px]
          left-1/2

          h-[380px]
          w-[380px]

          -translate-x-1/2

          rounded-full

          bg-indigo-500/10

          blur-[170px]
        "

        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.35, 0.7, 0.35],
        }}

        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}

      />


      {/* Very subtle center AI glow */}

      <motion.div

        className="
          absolute
          left-1/2
          top-1/3

          h-64
          w-64

          -translate-x-1/2

          rounded-full

          bg-cyan-300/5

          blur-[120px]
        "

        animate={{
          scale: [1, 1.25, 1],
        }}

        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}

      />


    </div>
  );
}