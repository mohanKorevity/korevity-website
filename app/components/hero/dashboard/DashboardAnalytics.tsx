"use client";

import { motion } from "framer-motion";

const points = [
  { month: "Jan", x: 20, y: 130 },
  { month: "Feb", x: 60, y: 116 },
  { month: "Mar", x: 100, y: 103 },
  { month: "Apr", x: 140, y: 88 },
  { month: "May", x: 180, y: 72 },
  { month: "Jun", x: 220, y: 57 },
  { month: "Jul", x: 260, y: 41 },
  { month: "Aug", x: 300, y: 25 },
];

const linePath = points
  .map((point, index) => {
    return `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`;
  })
  .join(" ");

const areaPath = `
  ${linePath}
  L 300 150
  L 20 150
  Z
`;

export default function DashboardAnalytics() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay: 0.3,
      }}
      whileHover={{
        y: -6,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl

        border
        border-white/10

        bg-gradient-to-br
        from-slate-900/80
        via-slate-900/60
        to-slate-950/90

        p-6

        backdrop-blur-2xl

        transition-all
        duration-300

        hover:border-cyan-400/30

        shadow-xl
      "
    >
      {/* Static Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20

          h-64
          w-64

          rounded-full

          bg-cyan-500/20

          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
        "
      >
        {/* Header */}

        <div className="mb-6 flex items-start justify-between">
          <div>
            <h3
              className="
                text-2xl
                font-bold
                tracking-tight
                text-white
              "
            >
              Business Performance
            </h3>

            <p
              className="
                mt-1
                text-sm
                text-slate-400
              "
            >
              A simple view of trends, performance and business progress.
            </p>
          </div>

          <div
            className="
              rounded-full

              border
              border-cyan-400/20

              bg-cyan-400/10

              px-4
              py-2

              text-xs
              font-semibold

              text-cyan-300

              shadow-lg
              shadow-cyan-500/10
            "
          >
            Executive View
          </div>
        </div>

        {/* Trend Card */}

        <div
          className="
            mb-6

            flex
            items-center
            justify-between

            rounded-2xl

            border
            border-white/10

            bg-white/[0.04]

            px-5
            py-4

            transition

            hover:bg-white/[0.06]
          "
        >
          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-wider
                text-slate-400
              "
            >
              Performance Trend
            </p>

            <p
              className="
                mt-1
                text-lg
                font-bold
                text-white
              "
            >
              Improving
            </p>
          </div>

          <div
            className="
              rounded-full

              bg-gradient-to-r
              from-emerald-400/20
              to-green-500/20

              px-4
              py-2

              text-sm
              font-bold

              text-emerald-400
            "
          >
            +43%
          </div>
        </div>

        {/* Lightweight SVG Chart */}

        <div className="h-52 w-full rounded-2xl">
          <svg
            viewBox="0 0 320 180"
            className="h-full w-full"
            role="img"
            aria-label="Business performance increasing from January to August"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="performanceGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#22d3ee"
                  stopOpacity="0.45"
                />

                <stop
                  offset="100%"
                  stopColor="#22d3ee"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>

            {/* Horizontal grid lines */}

            {[35, 65, 95, 125, 150].map((y) => (
              <line
                key={y}
                x1="20"
                y1={y}
                x2="300"
                y2={y}
                stroke="#1e293b"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            ))}

            {/* Area */}

            <path
              d={areaPath}
              fill="url(#performanceGradient)"
            />

            {/* Performance line */}

            <path
              d={linePath}
              fill="none"
              stroke="#38bdf8"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Data points */}

            {points.map((point) => (
              <circle
                key={point.month}
                cx={point.x}
                cy={point.y}
                r="4"
                fill="#22d3ee"
                stroke="#020617"
                strokeWidth="2"
              />
            ))}

            {/* Month labels */}

            {points.map((point) => (
              <text
                key={`${point.month}-label`}
                x={point.x}
                y="174"
                textAnchor="middle"
                fill="#64748b"
                fontSize="10"
              >
                {point.month}
              </text>
            ))}
          </svg>
        </div>
      </div>
    </motion.div>
  );
}