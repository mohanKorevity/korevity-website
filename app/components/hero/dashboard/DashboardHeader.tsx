"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";


export default function DashboardHeader() {

  return (

    <motion.div

      initial={{
        opacity:0,
        y:20,
      }}

      animate={{
        opacity:1,
        y:0,
      }}

      transition={{
  duration: 0.45,
  ease: "easeOut",
}}

      className="
        flex
        items-start
        justify-between
        gap-6
      "
    >



      <div>




        {/* Badge */}


        <div
          className="
            flex
            items-center
            gap-3
          "
        >


          <motion.div

            animate={{
              rotate:[0,10,-10,0],
              scale:[1,1.1,1],
            }}

            transition={{
  duration: 2.8,
  repeat: Infinity,
  ease: "easeInOut",
}}

            className="
              flex
              h-9
              w-9

              items-center
              justify-center

              rounded-xl

              bg-gradient-to-br
              from-cyan-400
              via-blue-500
              to-indigo-600

              shadow-lg
              shadow-cyan-500/30
            "
          >

            <Sparkles
              className="
                h-5
                w-5
                text-white
              "
            />


          </motion.div>




          <span
            className="
              rounded-full

              border
              border-cyan-400/20

              bg-cyan-400/10

              px-4
              py-2

              text-xs

              font-semibold

              uppercase

              tracking-[0.22em]

              text-cyan-300
            "
          >
            Business Command Center
          </span>


        </div>







        {/* Title */}



        <h2
          className="
            mt-5

            text-3xl

            font-black

            tracking-tight

            text-white
          "
        >

          Your Business at a Glance

        </h2>





        <p
          className="
            mt-3

            max-w-md

            text-sm

            leading-6

            text-slate-400
          "
        >
          A clear view of your operations,
          performance and opportunities for growth.
        </p>




      </div>









      {/* Live Status */}



      <motion.div

        animate={{
          y:[0,-4,0],
        }}

        transition={{
  duration: 2.2,
  repeat: Infinity,
  ease: "easeInOut",
}}

        className="
          flex

          items-center

          gap-3

          rounded-full

          border

          border-emerald-400/20

          bg-emerald-400/10

          px-4

          py-2

          backdrop-blur-xl
        "
      >



        <motion.span

          animate={{
            scale:[1,1.5,1],
            opacity:[0.6,1,0.6],
          }}

          transition={{
  duration: 1.2,
  repeat: Infinity,
}}

          className="
            h-2.5
            w-2.5

            rounded-full

            bg-emerald-400

            shadow-[0_0_15px_rgba(52,211,153,0.9)]
          "
        />



        <span
          className="
            text-sm

            font-semibold

            text-emerald-300
          "
        >
          Real-Time
        </span>



      </motion.div>




    </motion.div>

  );
}