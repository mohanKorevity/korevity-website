"use client";

import { motion } from "framer-motion";
import SolutionCard from "./SolutionCard";

const solutions = [
  {
    title: "Know Exactly What's Happening In Your Business",
    description:
      "Get a clear view of your sales, operations and performance with dashboards and insights that help you understand your business and make confident decisions.",
    icon: "analytics",
    large: true,

    gradient:
      "from-cyan-400 via-blue-500 to-indigo-600",

    glow:
      "bg-cyan-500/40",
  },


  {
    title: "Stop Losing Time To Manual Work",
    description:
      "Reduce repetitive tasks and streamline everyday processes so your team spends less time managing work and more time growing the business.",
    icon: "automation",

    gradient:
      "from-purple-400 via-fuchsia-500 to-indigo-600",

    glow:
      "bg-purple-500/40",
  },


  {
    title: "Bring Your Tools Together",
    description:
      "Connect the tools your business already uses so information flows smoothly and your team always has access to what they need.",
    icon: "integration",
    large: true,

    gradient:
      "from-emerald-400 via-green-500 to-teal-600",

    glow:
      "bg-emerald-500/40",
  },


  {
    title: "Build For What's Next",
    description:
      "Create flexible systems that adapt as your business grows, without constantly starting over.",
    icon: "growth",

    gradient:
      "from-orange-400 via-red-500 to-pink-600",

    glow:
      "bg-orange-500/40",
  },
];


export default function Solutions() {
  return (
    <section className="relative py-36">


      <div className="mx-auto max-w-7xl px-8">


        {/* Heading */}

        <motion.div

          initial={{
            opacity:0,
            y:35,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          viewport={{
            once:true,
          }}

          transition={{
            duration:0.6,
          }}

          className="mx-auto max-w-3xl text-center"

        >


          <span
            className="
              inline-flex
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-5
              py-2
              text-sm
              font-semibold
              tracking-[0.18em]
              text-cyan-300
            "
          >
            REAL BUSINESS SOLUTIONS
          </span>



          <h2
            className="
              mt-8
              text-5xl
              font-black
              leading-tight
              text-white
              lg:text-6xl
            "
          >

            Technology That Solves

            <br />


            <span
              className="
                bg-gradient-to-r
                from-cyan-300
                via-white
                to-blue-400

                bg-clip-text
                text-transparent
              "
            >
              Real Business Problems.
            </span>


          </h2>




          <p
            className="
              mt-8
              text-xl
              leading-9
              text-slate-400
            "
          >
            Every business faces challenges with visibility,
            efficiency and managing everyday work.
            KoreVity helps businesses build smarter ways of working.
          </p>


        </motion.div>




        {/* Solution Cards */}


        <div
          className="
            mt-24

            grid
            gap-8

            lg:grid-cols-2
          "
        >


          {solutions.map((solution,index)=>(


            <motion.div

              key={solution.title}

              initial={{
                opacity:0,
                y:35,
              }}

              whileInView={{
                opacity:1,
                y:0,
              }}

              viewport={{
                once:true,
              }}

              transition={{
                delay:index * 0.08,
                duration:0.5,
              }}

            >

              <SolutionCard

                title={solution.title}

                description={solution.description}

                icon={solution.icon}

                large={solution.large}

                gradient={solution.gradient}

                glow={solution.glow}

              />


            </motion.div>


          ))}


        </div>


      </div>


    </section>
  );
}