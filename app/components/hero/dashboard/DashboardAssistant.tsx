"use client";

import { motion } from "framer-motion";

import {
  Bot,
  ArrowRight,
  Sparkles,
} from "lucide-react";


const suggestions = [
  {
    title: "Automation Opportunity",
    text: "3 repetitive workflows could be simplified and automated.",
    color: "from-cyan-400 to-blue-500",
    glow: "bg-cyan-500/30",
  },

  {
    title: "Customer Operations",
    text: "Response efficiency is improving through connected workflows.",
    color: "from-purple-400 to-indigo-600",
    glow: "bg-purple-500/30",
  },

  {
    title: "Business Performance",
    text: "Sales activity shows positive momentum this period.",
    color: "from-emerald-400 to-green-600",
    glow: "bg-emerald-500/30",
  },
];



export default function DashboardAssistant() {

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
        delay:0.5,
      }}

      whileHover={{
        y:-5,
      }}

      className="
        group
        relative
        mt-8
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


      {/* AI Glow */}


      <motion.div

        animate={{
          scale:[1,1.3,1],
          opacity:[0.2,0.55,0.2],
        }}

        transition={{
          duration:5,
          repeat:Infinity,
          ease:"easeInOut",
        }}

        className="
          absolute
          -right-20
          -top-20

          h-56
          w-56

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


        <div className="flex items-center justify-between">


          <div className="flex items-center gap-3">



            <motion.div

              animate={{
                y:[0,-6,0],
                rotate:[0,4,-4,0],
              }}

              transition={{
                duration:4,
                repeat:Infinity,
                ease:"easeInOut",
              }}

              className="
                flex
                h-14
                w-14

                items-center
                justify-center

                rounded-2xl

                bg-gradient-to-br
                from-cyan-400
                via-blue-500
                to-indigo-600

                shadow-xl
                shadow-cyan-500/30
              "
            >


              <Bot
                className="
                  h-7
                  w-7
                  text-white
                "
              />


            </motion.div>




            <div>


              <div className="flex items-center gap-2">


                <h3
                  className="
                    text-xl
                    font-bold
                    text-white
                  "
                >
                  AI Business Advisor
                </h3>


                <Sparkles
                  className="
                    h-4
                    w-4
                    text-cyan-300
                  "
                />


              </div>


              <p
                className="
                  text-sm
                  text-slate-400
                "
              >
                Turning business data into useful actions.
              </p>


            </div>


          </div>





          {/* Status */}


          <motion.div

            animate={{
              opacity:[0.6,1,0.6],
            }}

            transition={{
              duration:2,
              repeat:Infinity,
            }}

            className="
              rounded-full

              border
              border-cyan-400/20

              bg-cyan-400/10

              px-3
              py-1

              text-xs
              font-semibold

              text-cyan-300
            "
          >

            AI Active

          </motion.div>



        </div>







        {/* Insights */}



        <div className="mt-6 space-y-3">


          {
            suggestions.map((item,index)=>(


              <motion.div

                key={item.title}

                initial={{
                  opacity:0,
                  x:-20,
                }}

                animate={{
                  opacity:1,
                  x:0,
                }}

                transition={{
                  delay:0.6 + index*0.1,
                }}

                whileHover={{
                  x:6,
                }}

                className="
                  group/card

                  relative
                  overflow-hidden

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/[0.04]

                  p-4

                  transition-all

                  hover:bg-white/[0.07]
                  hover:border-white/20
                "
              >



                {/* card glow */}


                <div

                  className={`
                    absolute
                    -right-8
                    -top-8

                    h-24
                    w-24

                    rounded-full

                    blur-3xl

                    opacity-0

                    transition

                    group-hover/card:opacity-100

                    ${item.glow}
                  `}

                />





                <div
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    gap-3
                  "
                >


                  <div
                    className={`
                      h-3
                      w-3
                      rounded-full
                      bg-gradient-to-r
                      ${item.color}

                      shadow-lg
                    `}
                  />



                  <p
                    className="
                      text-sm
                      font-bold
                      text-white
                    "
                  >
                    {item.title}
                  </p>


                </div>




                <p
                  className="
                    relative
                    z-10

                    mt-2

                    pl-6

                    text-sm

                    leading-6

                    text-slate-400
                  "
                >
                  {item.text}
                </p>



              </motion.div>


            ))
          }


        </div>







        {/* Action */}



        <motion.button

          whileHover={{
            x:6,
          }}

          className="
            group/button

            mt-6

            flex
            items-center
            gap-2

            text-sm

            font-semibold

            text-cyan-400

            transition

            hover:text-cyan-300
          "
        >

          View AI Recommendations


          <ArrowRight
            className="
              h-4
              w-4

              transition-transform

              group-hover/button:translate-x-1
            "
          />


        </motion.button>



      </div>



    </motion.div>

  );
}