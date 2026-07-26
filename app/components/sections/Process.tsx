"use client";

import { motion } from "framer-motion";
import ProcessStep from "./ProcessStep";


const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn how your business operates, identify bottlenecks and understand where technology can create the biggest impact.",
    icon: "discover",
    gradient:
      "from-cyan-400 via-blue-500 to-indigo-600",
    glow:
      "bg-cyan-500/40",
  },

  {
    number: "02",
    title: "Design",
    description:
      "Every solution is designed around your workflows instead of forcing your team to adapt to generic software.",
    icon: "design",
    gradient:
      "from-purple-400 via-fuchsia-500 to-indigo-600",
    glow:
      "bg-purple-500/40",
  },

  {
    number: "03",
    title: "Build & Launch",
    description:
      "We build, automate and thoroughly test everything so your team can start using it with confidence.",
    icon: "build",
    gradient:
      "from-emerald-400 via-green-500 to-teal-600",
    glow:
      "bg-emerald-500/40",
  },

  {
    number: "04",
    title: "Optimize & Grow",
    description:
      "After launch, we monitor performance, improve workflows and help your systems evolve as your business needs change.",
    icon: "grow",
    gradient:
      "from-orange-400 via-red-500 to-pink-600",
    glow:
      "bg-orange-500/40",
  },
];


export default function Process() {

  return (

    <section className="relative py-32">


      <div className="mx-auto max-w-7xl px-8">


        {/* Heading */}

        <motion.div

          initial={{
            opacity:0,
            y:30,
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

          className="
            mx-auto
            mb-24
            max-w-3xl
            text-center
          "

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
            HOW WE WORK
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

            A Simple Process


            <span
              className="
                mt-3

                block

                bg-gradient-to-r

                from-cyan-300

                via-white

                to-blue-400

                bg-clip-text

                text-transparent
              "
            >
              Built Around Your Business.
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
            We don't believe in one-size-fits-all solutions.
            We first understand your business, design the right
            approach, implement it with you and continue improving
            as your needs grow.
          </p>



        </motion.div>





        {/* Steps */}

        <div
          className="
            grid

            gap-20

            lg:grid-cols-4
          "
        >


          {steps.map((step,index)=>(


            <ProcessStep

              key={step.number}

              number={step.number}

              title={step.title}

              description={step.description}

              icon={step.icon}

              gradient={step.gradient}

              glow={step.glow}

              delay={index}

            />


          ))}



        </div>


      </div>


    </section>

  );
}