"use client";

import { motion } from "framer-motion";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";


const data = [
  { month: "Jan", performance: 45 },
  { month: "Feb", performance: 52 },
  { month: "Mar", performance: 58 },
  { month: "Apr", performance: 64 },
  { month: "May", performance: 70 },
  { month: "Jun", performance: 76 },
  { month: "Jul", performance: 82 },
  { month: "Aug", performance: 88 },
];


export default function DashboardAnalytics() {

  return (

    <motion.div

      initial={{
        opacity:0,
        y:30,
      }}

      animate={{
        opacity:1,
        y:0,
      }}

      transition={{
        duration:0.7,
        delay:0.3,
      }}

      whileHover={{
        y:-6,
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


      {/* Animated Glow */}


      <motion.div

        animate={{
          scale:[1,1.25,1],
          opacity:[0.2,0.5,0.2],
        }}

        transition={{
          duration:6,
          repeat:Infinity,
          ease:"easeInOut",
        }}

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



          <motion.div

            animate={{
              y:[0,-4,0],
            }}

            transition={{
              duration:3,
              repeat:Infinity,
              ease:"easeInOut",
            }}

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

          </motion.div>


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
                text-slate-500
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





        {/* Chart */}


        <div
          className="
            h-52
            rounded-2xl
          "
        >

          <ResponsiveContainer
            width="100%"
            height="100%"
          >


            <AreaChart

              data={data}

              margin={{
                top:20,
                right:10,
                left:-20,
                bottom:0,
              }}

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
                    stopOpacity={0.55}
                  />


                  <stop
                    offset="100%"
                    stopColor="#22d3ee"
                    stopOpacity={0}
                  />


                </linearGradient>


              </defs>





              <CartesianGrid

                stroke="#1e293b"

                strokeDasharray="4 4"

                vertical={false}

              />





              <XAxis

                dataKey="month"

                tick={{
                  fill:"#64748b",
                  fontSize:12,
                }}

                axisLine={false}

                tickLine={false}

              />



              <YAxis hide />





              <Tooltip

                contentStyle={{

                  background:"#020617",

                  border:"1px solid #1e293b",

                  borderRadius:"14px",

                  color:"#fff",

                }}

                formatter={(value)=>[
                  `${value}%`,
                  "Business Growth",
                ]}

              />





              <Area

                type="monotone"

                dataKey="performance"

                stroke="#38bdf8"

                strokeWidth={3}

                fill="url(#performanceGradient)"


                dot={{
                  r:4,
                  fill:"#22d3ee",
                  stroke:"#020617",
                  strokeWidth:2,
                }}


                activeDot={{
                  r:7,
                }}


                animationDuration={1800}

              />



            </AreaChart>


          </ResponsiveContainer>


        </div>



      </div>



    </motion.div>

  );
}