"use client";

import { motion } from "framer-motion";

import {
  CheckCircle2,
  Database,
  Workflow,
  Link2,
  TrendingUp,
} from "lucide-react";


const systems = [

  {
    icon: Database,
    title: "Business Data",
    status: "Connected",
    gradient:"from-cyan-400 to-blue-600",
    glow:"bg-cyan-500/30",
  },


  {
    icon: Workflow,
    title: "Smart Automation",
    status: "Running",
    gradient:"from-purple-400 to-indigo-600",
    glow:"bg-purple-500/30",
  },


  {
    icon: Link2,
    title: "Connected Systems",
    status: "Integrated",
    gradient:"from-emerald-400 to-teal-600",
    glow:"bg-emerald-500/30",
  },


  {
    icon: TrendingUp,
    title: "Growth Insights",
    status: "Available",
    gradient:"from-orange-400 to-pink-600",
    glow:"bg-orange-500/30",
  },

];



export default function DashboardFooter() {

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
        delay:0.7,
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

        hover:border-cyan-400/30

        shadow-xl
      "

    >



      {/* Background glow */}


      <motion.div

        animate={{
          scale:[1,1.25,1],
          opacity:[0.2,0.45,0.2],
        }}

        transition={{
          duration:6,
          repeat:Infinity,
        }}

        className="
          absolute
          -left-20
          -bottom-20

          h-60
          w-60

          rounded-full

          bg-blue-500/20

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


          <div>


            <h3
              className="
                text-xl
                font-bold
                text-white
              "
            >
              Connected Business Ecosystem
            </h3>


            <p
              className="
                mt-1
                text-sm
                text-slate-400
              "
            >
              Your tools, data and workflows working together.
            </p>


          </div>





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
              border-emerald-500/30

              bg-emerald-500/10

              px-4
              py-2
            "
          >

            <span
              className="
                text-sm
                font-semibold
                text-emerald-400
              "
            >
              ● Connected
            </span>


          </motion.div>


        </div>







        {/* Systems */}



        <div className="mt-6 space-y-3">



          {
            systems.map((system,index)=>{


              const Icon = system.icon;



              return (


                <motion.div

                  key={system.title}

                  initial={{
                    opacity:0,
                    x:-20,
                  }}

                  animate={{
                    opacity:1,
                    x:0,
                  }}

                  transition={{
                    delay:0.8 + index*0.1,
                  }}


                  whileHover={{
                    x:6,
                  }}


                  className="
                    group/item
                    relative
                    overflow-hidden

                    flex
                    items-center
                    justify-between

                    rounded-2xl

                    border
                    border-white/10

                    bg-white/[0.04]

                    px-5
                    py-3

                    transition-all

                    hover:bg-white/[0.07]
                  "

                >



                  {/* hover glow */}


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

                      group-hover/item:opacity-100

                      ${system.glow}
                    `}
                  />





                  <div
                    className="
                      relative
                      z-10

                      flex
                      items-center
                      gap-4
                    "
                  >



                    <motion.div

                      animate={{
                        y:[0,-5,0],
                      }}

                      transition={{
                        duration:3,
                        repeat:Infinity,
                        delay:index*0.4,
                      }}

                      className={`
                        flex
                        h-11
                        w-11

                        items-center
                        justify-center

                        rounded-xl

                        bg-gradient-to-br

                        shadow-lg

                        ${system.gradient}
                      `}
                    >


                      <Icon
                        className="
                          h-5
                          w-5
                          text-white
                        "
                      />


                    </motion.div>




                    <p
                      className="
                        font-semibold
                        text-white
                      "
                    >
                      {system.title}
                    </p>


                  </div>







                  <div
                    className="
                      relative
                      z-10

                      flex
                      items-center
                      gap-2
                    "
                  >

                    <CheckCircle2

                      className="
                        h-5
                        w-5
                        text-emerald-400
                      "

                    />


                    <span
                      className="
                        text-sm
                        text-slate-300
                      "
                    >
                      {system.status}
                    </span>


                  </div>



                </motion.div>


              );

            })
          }



        </div>




      </div>




    </motion.div>

  );

}