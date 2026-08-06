"use client";

import { motion } from "framer-motion";
import {
  Database,
  Clock,
  FileWarning,
  TrendingDown,
} from "lucide-react";

const challenges = [
  {
    icon: Database,
    title: "Disconnected Data",
    description:
      "Business knowledge and data are spread across documents, spreadsheets, systems and teams, making it difficult to see the complete picture.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Clock,
    title: "Time-Consuming Processes",
    description:
      "Repetitive tasks, approvals and manual handoffs consume valuable time and slow down everyday operations.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: FileWarning,
    title: "Limited Insights",
    description:
      "Disconnected information makes it harder to identify patterns, uncover insights and understand what needs attention.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: TrendingDown,
    title: "Missed Opportunities",
    description:
      "Delayed information and inefficient workflows can make improvement opportunities harder to identify and act on.",
    color: "from-emerald-500 to-green-600",
  },
];

export default function IndustryChallenges() {
  return (
    <section className="relative py-32">

      <div className="mx-auto max-w-7xl px-6">


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >

          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-cyan-300">
            BUSINESS CHALLENGES
          </span>


          <h2 className="mt-8 text-5xl font-black text-white lg:text-6xl">

            Different Industries.

            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              Similar Operational Challenges.
            </span>

          </h2>


          <p className="mt-8 text-xl leading-9 text-slate-400">
            Across industries, businesses face similar challenges with disconnected
information, manual work and limited visibility. KoreVity connects knowledge,
data, systems and workflows to help overcome them.
          </p>

        </motion.div>


        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">


          {challenges.map((item, index) => {

            const Icon = item.icon;


            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  rounded-[30px]
                  border
                  border-white/10
                  bg-slate-900/60
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-cyan-400/30
                  hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]
                "
              >

                <div
                  className={`
                    mb-7
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    ${item.color}
                  `}
                >

                  <Icon className="h-9 w-9 text-white" />

                </div>


                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>


                <p className="mt-4 leading-7 text-slate-400">
                  {item.description}
                </p>


              </motion.div>

            );

          })}


        </div>

      </div>

    </section>
  );
}