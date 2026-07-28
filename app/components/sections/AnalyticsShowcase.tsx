"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  BarChart3,
  BrainCircuit,
  Workflow,
  ArrowRight,
} from "lucide-react";


const showcases = [

  {
    title: "Business Intelligence",

    description:
      "Transform your business data into clear dashboards, performance metrics and actionable insights.",

    features: [
      "Real-time KPI tracking",
      "Executive dashboards",
      "Performance reporting",
    ],

    icon: BarChart3,

    gradient:
      "from-cyan-400 via-blue-500 to-indigo-600",

    image:
      "/images/showcase/business-intelligence.webp",
  },


  {
    title: "AI-Powered Insights",

    description:
      "Use AI to analyze information, summarize documents and support faster business decisions.",

    features: [
      "Automated insights",
      "Document intelligence",
      "Decision support",
    ],

    icon: BrainCircuit,

    gradient:
      "from-purple-400 via-fuchsia-500 to-indigo-600",

    image:
      "/images/showcase/ai-insights.webp",
  },


  {
    title: "Workflow Automation",

    description:
      "Reduce repetitive work by connecting systems and automating everyday business processes.",

    features: [
      "Automated workflows",
      "System connections",
      "Process optimization",
    ],

    icon: Workflow,

    gradient:
      "from-emerald-400 via-green-500 to-teal-600",

    image:
      "/images/showcase/workflow-automation.webp",
  },

];



export default function AnalyticsShowcase() {


  return (


    <section
      className="
        relative
        py-32
      "
    >


      <div
        className="
          mx-auto
          max-w-7xl
          px-8
        "
      >



        {/* HEADER */}


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

          className="
            mx-auto
            max-w-4xl
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

            BUSINESS INTELLIGENCE

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

            See How KoreVity Turns

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

              Data Into Decisions.

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

            From dashboards to automation, we help businesses
            understand performance, discover opportunities and
            improve operations.

          </p>


        </motion.div>






        {/* CARDS */}



        <div
          className="
            mt-20

            grid

            gap-8

            lg:grid-cols-3
          "
        >



          {
            showcases.map((item,index)=>{


              const Icon = item.icon;



              return (


                <motion.div


                  key={item.title}


                  initial={{
                    opacity:0,
                    y:50,
                  }}


                  whileInView={{
                    opacity:1,
                    y:0,
                  }}


                  viewport={{
                    once:true,
                  }}


                  transition={{
                    duration:0.7,
                    delay:index * 0.12,
                  }}


                  className="
  group
  relative
  overflow-hidden
  rounded-[32px]
  border
  border-white/10
  bg-slate-900/60
  backdrop-blur-xl
  transition-all
  duration-500
  hover:-translate-y-3
  hover:shadow-[0_20px_50px_rgba(6,182,212,0.18)]
"

                >




                  {/* Glow */}

                  <div
                    className="
                      absolute

                      inset-0

                      bg-gradient-to-br

                      from-cyan-500/0

                      via-transparent

                      to-blue-500/0

                      opacity-0

                      transition

                      duration-500

                      group-hover:opacity-100
                    "
                  />






                  {/* IMAGE */}
                  <div
  className="
    relative
    h-64
    overflow-hidden
    bg-slate-950
  "
>
  <Image
  src={item.image}
  alt={item.title}
  fill
  sizes="(max-width:768px)100vw,(max-width:1280px)50vw,33vw"
  className="
    object-cover
    transition-all
    duration-700
    group-hover:scale-110
    group-hover:brightness-110
    group-hover:contrast-110
    group-hover:saturate-125
  "
/>

  <div
    className="
      absolute
      inset-0
      bg-gradient-to-t
      from-slate-950
      via-slate-950/40
      to-transparent
    "
  />
</div>








                  {/* CONTENT */}

<div
  className="
    pointer-events-none
    absolute
    inset-0
    overflow-hidden
  "
>
  <div
    className="
      absolute
      left-[-120%]
      top-0
      h-full
      w-1/3
      bg-gradient-to-r
      from-transparent
      via-white/10
      to-transparent
      transition-all
      duration-1000
      group-hover:left-[140%]
    "
  />
</div>

                  <div
                    className="
                      relative

                      z-10

                      p-8
                    "
                  >



                    <div
                      className={`
                        flex

                        h-16

                        w-16

                        items-center

                        justify-center

                        rounded-2xl

                        bg-gradient-to-br

                        ${item.gradient}

                        shadow-xl
                      `}
                    >


                      <Icon
                        className="
                          h-8
                          w-8
                          text-white
                        "
                      />


                    </div>






                    <h3
                      className="
                        mt-8

                        text-2xl

                        font-bold

                        text-white
                      "
                    >

                      {item.title}

                    </h3>






                    <p
                      className="
                        mt-4

                        leading-7

                        text-slate-400
                      "
                    >

                      {item.description}

                    </p>






                    <ul
                      className="
                        mt-6

                        space-y-3
                      "
                    >


                      {
                        item.features.map(feature=>(

                          <li
                            key={feature}

                            className="
                              flex

                              items-center

                              gap-3

                              text-sm

                              text-slate-300
                            "
                          >

                            <motion.span
  className="
    h-2
    w-2
    rounded-full
    bg-cyan-400
  "
  animate={{
    scale: [1, 1.35, 1],
    opacity: [0.6, 1, 0.6],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
/>


                            {feature}


                          </li>

                        ))
                      }


                    </ul>






                    <Link
  href="/services"
  className="
    mt-8
    inline-flex
    items-center
    gap-2
    text-sm
    font-semibold
    text-cyan-400
    transition-all
    duration-300
    group-hover:gap-4
    hover:text-cyan-300
  "
>
  View Service

  <motion.div
  animate={{
    x: [0, 3, 0],
  }}
  transition={{
    duration: 1.4,
    repeat: Infinity,
  }}
>
  <ArrowRight className="h-4 w-4" />
</motion.div>
</Link>



                  </div>




                </motion.div>


              );


            })
          }




        </div>





      </div>


    </section>


  );

}