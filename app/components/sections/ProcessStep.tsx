"use client";

import { motion } from "framer-motion";
import {
  Compass,
  PenTool,
  Rocket,
  HeartHandshake,
} from "lucide-react";


type Props = {
  number: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  glow: string;
  delay: number;
};


const icons = {
  discover: Compass,
  design: PenTool,
  build: Rocket,
  grow: HeartHandshake,
};


export default function ProcessStep({
  number,
  title,
  description,
  icon,
  gradient,
  glow,
  delay,
}: Props) {


  const Icon =
    icons[icon as keyof typeof icons] || Compass;



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
        duration:0.6,
        delay:delay * 0.12,
      }}


      className="
        group
        relative
        flex
        flex-col
        items-center
        text-center
      "

    >



      {/* Timeline Connector */}

      <div
        className="
          absolute
          left-1/2
          top-8

          hidden

          h-[2px]

          w-full

          -translate-y-1/2

          bg-gradient-to-r
          from-cyan-500/30
          via-blue-500/20
          to-transparent

          lg:block
        "
      />




      {/* Number Circle */}

      <div
        className="
          relative
          z-20

          mb-8

          flex
          h-16
          w-16

          items-center
          justify-center

          rounded-full

          border
          border-white/10

          bg-slate-950

          shadow-[0_0_35px_rgba(34,211,238,0.25)]

          transition-all
          duration-500

          group-hover:scale-110
        "
      >

        <span
          className="
            text-lg
            font-bold
            text-cyan-300
          "
        >
          {number}
        </span>

      </div>






      {/* Icon Container */}

      <div
        className={`
          relative

          mb-7

          flex

          h-20
          w-20

          items-center
          justify-center

          overflow-hidden

          rounded-3xl

          bg-gradient-to-br
          ${gradient}

          shadow-2xl

          transition-all
          duration-500

          group-hover:scale-110
          group-hover:-rotate-3
        `}
      >


        {/* Glow */}

        <div
          className={`
            absolute

            inset-0

            blur-xl

            opacity-60

            ${glow}
          `}
        />


        <Icon
          className="
            relative
            z-10

            h-9
            w-9

            text-white
          "
        />


      </div>







      {/* Content */}


      <h3
        className="
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



      <p
        className="
          mt-5

          max-w-xs

          text-base

          leading-8

          text-slate-400
        "
      >
        {description}
      </p>



      {/* Bottom Accent */}

      <div
        className={`
          mt-8

          h-[2px]

          w-0

          bg-gradient-to-r

          ${gradient}

          transition-all

          duration-500

          group-hover:w-24
        `}
      />


    </motion.div>

  );
}