"use client";

import {
  ArrowUpRight,
  Clock3,
  Activity,
} from "lucide-react";


const metrics = [
  {
    icon: Clock3,
    title: "Efficiency",
    value: "Less Manual Work",
    description:
      "Automate repetitive tasks and save valuable team time.",
    color: "text-cyan-400",
  },

  {
    icon: ArrowUpRight,
    title: "Visibility",
    value: "Real-Time Insights",
    description:
      "Understand performance without chasing spreadsheets.",
    color: "text-emerald-400",
  },

  {
    icon: Activity,
    title: "Operations",
    value: "Running Smarter",
    description:
      "Monitor workflows and identify improvement opportunities.",
    color: "text-violet-400",
  },
];


export default function DashboardMetrics() {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-3">

      {metrics.map((metric) => {

        const Icon = metric.icon;


        return (

          <div
            key={metric.title}
            className="
              group
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              p-5
              backdrop-blur-xl

              transition-all
              duration-300

              hover:border-cyan-400/30
              hover:bg-white/[0.07]
            "
          >


            {/* Top */}

            <div className="flex items-center justify-between">

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-white/5
                "
              >

                <Icon
                  className={`
                    h-5
                    w-5
                    ${metric.color}
                  `}
                />

              </div>


              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-emerald-400
                  shadow-[0_0_12px_rgba(52,211,153,0.8)]
                "
              />

            </div>



            {/* Content */}

            <p
              className="
                mt-5
                text-xs
                uppercase
                tracking-wider
                text-slate-500
              "
            >
              {metric.title}
            </p>


            <h3
              className="
                mt-2
                text-lg
                font-bold
                text-white
              "
            >
              {metric.value}
            </h3>


            <p
              className="
                mt-3
                text-sm
                leading-6
                text-slate-400
              "
            >
              {metric.description}
            </p>


          </div>

        );

      })}

    </div>
  );
}