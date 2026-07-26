"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  BrainCircuit,
} from "lucide-react";


const items = [

  {
    icon: Clock3,

    title: "Less Manual Work",

    description:
      "Automate repetitive tasks and free your team to focus on growth.",

    gradient:
      "from-cyan-400 via-blue-500 to-indigo-600",

    glow:
      "bg-cyan-500/40",
  },


  {
    icon: BrainCircuit,

    title: "Smarter Decisions",

    description:
      "Turn business data into clear insights you can act on.",

    gradient:
      "from-purple-400 via-fuchsia-500 to-indigo-600",

    glow:
      "bg-purple-500/40",
  },


  {
    icon: CheckCircle2,

    title: "Long-Term Partner",

    description:
      "Support, improvement and guidance as your business grows.",

    gradient:
      "from-emerald-400 via-green-500 to-teal-600",

    glow:
      "bg-emerald-500/40",
  },

];



export default function HeroStats() {

  return (

    <div
      className="
        grid
        gap-4
        md:grid-cols-3
      "
    >

      {
        items.map((item,index)=>{

          const Icon = item.icon;


          return (

            <motion.div

              key={item.title}


              initial={{
                opacity:0,
                y:25,
              }}


              animate={{
                opacity:1,
                y:0,
              }}


              transition={{
                delay:0.65 + index * 0.12,
                duration:0.5,
              }}


              whileHover={{
                y:-8,
                scale:1.03,
              }}


              className="
                group
                relative
                overflow-hidden

                rounded-2xl

                border
                border-white/10

                bg-slate-900/60

                px-5
                py-5

                backdrop-blur-xl

                transition-all
                duration-300

                hover:border-white/20
              "

            >



              {/* Glow */}

              <motion.div

                animate={{
                  scale:[1,1.25,1],
                  opacity:[0.25,0.55,0.25],
                }}

                transition={{
                  duration:5,
                  repeat:Infinity,
                  delay:index,
                }}

                className={`
                  absolute

                  -right-10
                  -top-10

                  h-28
                  w-28

                  rounded-full

                  blur-3xl

                  ${item.glow}
                `}

              />





              {/* Icon */}


              <motion.div

                animate={{
                  y:[0,-5,0],
                  rotate:[0,3,-3,0],
                }}

                transition={{
                  duration:4,
                  repeat:Infinity,
                  delay:index*0.4,
                  ease:"easeInOut",
                }}


                className={`
                  relative

                  flex

                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-xl

                  bg-gradient-to-br

                  shadow-lg

                  ${item.gradient}
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





              <h3

                className="
                  relative

                  mt-5

                  text-sm

                  font-bold

                  text-white
                "

              >

                {item.title}

              </h3>





              <p

                className="
                  relative

                  mt-3

                  text-xs

                  leading-6

                  text-slate-400
                "

              >

                {item.description}

              </p>





              {/* Hover Line */}

              <motion.div

                initial={{
                  width:0,
                }}

                whileHover={{
                  width:"100%",
                }}

                className="
                  absolute

                  bottom-0
                  left-0

                  h-[2px]

                  bg-gradient-to-r

                  from-cyan-400
                  via-blue-500
                  to-purple-500
                "

              />



            </motion.div>

          );

        })
      }


    </div>

  );

}