"use client";

import { motion } from "framer-motion";
import {
  Quote,
  CheckCircle2,
} from "lucide-react";


type Props = {
  title: string;
  quote: string;
  delay: number;
};



export default function TestimonialCard({
  title,
  quote,
  delay,
}: Props) {


  return (

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
        duration:0.55,
        delay:delay * 0.12,
      }}


      whileHover={{
        y:-10,
        scale:1.02,
      }}


      className="
        group
        relative
        overflow-hidden

        rounded-[34px]

        border
        border-white/10

        bg-slate-900/60

        p-8

        backdrop-blur-xl

        transition-all
        duration-500
      "

    >



      {/* Top Gradient Line */}


      <div
        className="
          absolute
          left-0
          top-0

          h-[2px]

          w-0

          bg-gradient-to-r

          from-cyan-400

          via-blue-400

          to-violet-500

          transition-all

          duration-500

          group-hover:w-full
        "
      />






      {/* Hover Glow */}


      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br

          from-cyan-500/0

          via-transparent

          to-blue-500/0

          transition-all

          duration-500

          group-hover:from-cyan-500/5

          group-hover:to-blue-500/10
        "
      />







      <div
        className="
          relative
          z-10
        "
      >





        {/* Icon */}



        <div
          className="
            flex

            h-16

            w-16

            items-center

            justify-center

            rounded-2xl

            border

            border-cyan-400/20

            bg-gradient-to-br

            from-cyan-500

            to-blue-600

            shadow-xl

            shadow-cyan-500/20
          "
        >

          <Quote
            className="
              h-8
              w-8
              text-white
            "
          />

        </div>







        {/* Title */}



        <h3
          className="
            mt-8

            text-2xl

            font-bold

            text-white

            transition-colors

            duration-300

            group-hover:text-cyan-300
          "
        >

          {title}

        </h3>








        {/* Quote */}



        <p
          className="
            mt-6

            text-lg

            italic

            leading-9

            text-slate-300
          "
        >

          "{quote}"

        </p>








        {/* Trust Indicator */}



        <div
          className="
            mt-8

            flex

            items-center

            gap-2

            border-t

            border-white/10

            pt-5

            text-sm

            text-slate-400
          "
        >

          <CheckCircle2
            className="
              h-4
              w-4
              text-emerald-400
            "
          />


          <span>
            Built on trust and measurable outcomes
          </span>


        </div>





      </div>




    </motion.div>


  );

}