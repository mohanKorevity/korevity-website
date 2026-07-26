"use client";

import { motion } from "framer-motion";

export default function HeroGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">


      {/* Vertical Grid */}

      {Array.from({ length: 10 }).map((_, i) => (

        <motion.div
          key={`vertical-${i}`}
          className="
            absolute
            top-0
            bottom-0
            w-px
            bg-white/[0.025]
          "
          style={{
            left: `${(i + 1) * 10}%`,
          }}

          animate={{
            opacity: [
              0.25,
              0.5,
              0.25,
            ],
          }}

          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

      ))}



      {/* Horizontal Grid */}

      {Array.from({ length: 7 }).map((_, i) => (

        <motion.div
          key={`horizontal-${i}`}
          className="
            absolute
            left-0
            right-0
            h-px
            bg-white/[0.025]
          "

          style={{
            top: `${(i + 1) * 12}%`,
          }}

          animate={{
            opacity: [
              0.2,
              0.45,
              0.2,
            ],
          }}

          transition={{
            duration: 10 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

      ))}



      {/* Intelligence Points */}

      {Array.from({ length: 8 }).map((_, i) => (

        <motion.div
          key={`point-${i}`}

          className="
            absolute
            h-1
            w-1
            rounded-full
            bg-cyan-400/40
            blur-[1px]
          "

          style={{
            left: `${15 + i * 10}%`,
            top: `${25 + (i % 4) * 15}%`,
          }}

          animate={{
            opacity: [
              0.2,
              0.8,
              0.2,
            ],

            scale: [
              1,
              1.5,
              1,
            ],
          }}

          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

      ))}



      {/* Dashboard Focus Glow */}

      <div
        className="
          absolute
          right-[10%]
          top-[35%]

          h-96
          w-96

          rounded-full

          bg-cyan-400/[0.03]

          blur-[120px]
        "
      />

    </div>
  );
}