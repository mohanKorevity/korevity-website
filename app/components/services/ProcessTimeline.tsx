"use client";

import { motion } from "framer-motion";

import {
  Search,
  PenTool,
  Wrench,
  Rocket,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn how your business operates, identify bottlenecks and uncover opportunities where automation, AI and better systems can create the biggest impact.",
    icon: Search,
    color: "from-cyan-500 to-blue-600",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We design dashboards, automations and AI workflows specifically around your business processes instead of forcing generic software.",
    icon: PenTool,
    color: "from-violet-500 to-fuchsia-600",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We build and configure your complete solution while keeping you involved through every milestone.",
    icon: Wrench,
    color: "from-emerald-500 to-teal-600",
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "We integrate your solution into your existing business, train your team and ensure everything runs smoothly.",
    icon: Rocket,
    color: "from-orange-500 to-red-500",
  },
  {
    number: "05",
    title: "Optimize",
    description:
      "Technology should improve over time. We continuously refine dashboards, automations and AI as your business grows.",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="relative py-36">

      <div className="mx-auto max-w-6xl px-8">


        {/* Heading */}

        <div className="mb-24 text-center">

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
            OUR PROCESS
          </span>


          <h2
            className="
              mt-8
              text-5xl
              font-black
              text-white
              lg:text-6xl
            "
          >

            How We Deliver

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
              Real Business Results
            </span>

          </h2>


          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-xl
              leading-9
              text-slate-400
            "
          >
            From understanding your challenges to continuously improving your
            systems, we build technology that creates measurable business value.
          </p>


        </div>



        {/* Timeline */}

        <div className="relative">


          {/* Center Line */}

          <div
            className="
              absolute
              left-1/2
              top-0
              hidden
              h-full
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-cyan-500/50
              via-blue-500/20
              to-transparent
              lg:block
            "
          />



          {steps.map((step, index) => {

            const Icon = step.icon;


            return (

              <motion.div
                key={step.number}

                initial={{
                  opacity: 0,
                  y: 50,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}

                className={`
                  mb-20
                  flex
                  items-center

                  ${
                    index % 2 === 0
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  }
                `}
              >


                <div className="w-full lg:w-1/2">


                  <div
                    className="
                      rounded-[30px]
                      border
                      border-white/10
                      bg-slate-900/60
                      p-8
                      backdrop-blur-xl
                    "
                  >


                    <div
                      className={`
                        mb-6
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        rounded-3xl
                        bg-gradient-to-br
                        ${step.color}
                      `}
                    >

                      <Icon className="h-10 w-10 text-white" />

                    </div>



                    <p
                      className="
                        text-sm
                        font-bold
                        tracking-[0.25em]
                        text-cyan-300
                      "
                    >
                      STEP {step.number}
                    </p>



                    <h3
                      className="
                        mt-3
                        text-3xl
                        font-bold
                        text-white
                      "
                    >
                      {step.title}
                    </h3>



                    <p
                      className="
                        mt-6
                        text-lg
                        leading-8
                        text-slate-400
                      "
                    >
                      {step.description}
                    </p>


                  </div>


                </div>



                {/* Timeline Dot */}

                <div
                  className="
                    hidden
                    w-20
                    justify-center
                    lg:flex
                  "
                >

                  <div
                    className="
                      h-5
                      w-5
                      rounded-full
                      bg-cyan-400
                      shadow-[0_0_25px_rgba(34,211,238,0.7)]
                    "
                  />

                </div>



                <div className="hidden lg:block w-1/2" />


              </motion.div>

            );

          })}


        </div>


      </div>


    </section>
  );
}