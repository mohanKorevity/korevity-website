"use client";

import { motion } from "framer-motion";


export default function BackgroundGlow() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        overflow-hidden
      "
    >


      {/* Top Left Blue Glow */}

      <motion.div

        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
        }}

        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
          absolute
          left-10
          top-20

          h-96
          w-96

          rounded-full

          bg-blue-500/10

          blur-[150px]
        "

      />



      {/* Bottom Right Cyan Glow */}

      <motion.div

        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}

        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
          absolute
          bottom-20
          right-10

          h-[450px]
          w-[450px]

          rounded-full

          bg-cyan-400/10

          blur-[170px]
        "

      />




      {/* Center Purple Depth Glow */}

      <motion.div

        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.8, 0.5],
        }}

        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
          absolute

          left-1/2
          top-1/2

          h-[320px]
          w-[320px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-indigo-500/10

          blur-[140px]
        "

      />



    </div>
  );
}