"use client";

import { motion } from "framer-motion";

const data = [
  150,
  138,
  144,
  118,
  126,
  96,
  82,
  64,
];

const width = 420;
const height = 200;
const padding = 20;

const step = (width - padding * 2) / (data.length - 1);

const points = data
  .map((value, index) => {
    const x = padding + index * step;
    const y = value;
    return `${x},${y}`;
  })
  .join(" ");

const area = `${points} ${width - padding},${height} ${padding},${height}`;

export default function HeroChart() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 p-6">

      {/* Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />

      {/* Header */}

      <div className="relative mb-6 flex items-center justify-between">

        <div>

          <h3 className="text-lg font-bold text-white">
            Revenue Analytics
          </h3>

          <p className="text-sm text-slate-400">
            Last 30 Days
          </p>

        </div>

        <div className="rounded-full bg-emerald-500/15 px-4 py-1 text-sm font-semibold text-emerald-400">
          +18%
        </div>

      </div>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="relative h-56 w-full"
      >
        <defs>

          <linearGradient
            id="line"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              stopColor="#22d3ee"
            />

            <stop
              offset="100%"
              stopColor="#3b82f6"
            />

          </linearGradient>

          <linearGradient
            id="fill"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="#22d3ee"
              stopOpacity="0.35"
            />

            <stop
              offset="100%"
              stopColor="#22d3ee"
              stopOpacity="0"
            />

          </linearGradient>

        </defs>

        {/* Grid */}

        {[40, 80, 120, 160].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2={width}
            y2={y}
            stroke="rgba(255,255,255,.06)"
          />
        ))}

        {/* Area */}

        <polygon
          points={area}
          fill="url(#fill)"
        />

        {/* Animated Line */}

        <motion.polyline
          points={points}
          fill="none"
          stroke="url(#line)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
          }}
          transition={{
            duration: 2,
          }}
        />

        {/* Dots */}

        {data.map((value, index) => {
          const x = padding + index * step;

          return (
            <motion.circle
              key={index}
              cx={x}
              cy={value}
              r="5"
              fill="#22d3ee"
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                delay: index * 0.12,
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}