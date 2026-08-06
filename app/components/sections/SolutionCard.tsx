"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock3,
  BarChart4,
  Network,
  BrainCircuit,
  Sparkles,
  TrendingUp,
  ArrowRight,
} from "lucide-react";


type Props = {
  title: string;
  description: string;
  icon: string;
  large?: boolean;
  gradient: string;
  glow: string;
};



const icons = {
  automation: Clock3,
  analytics: BarChart4,
  integration: Network,
  intelligence: BrainCircuit,
  ai: Sparkles,
  growth: TrendingUp,
};



export default function SolutionCard({
  title,
  description,
  icon,
  large = false,
  gradient,
  glow,
}: Props) {


  const Icon =
    icons[icon as keyof typeof icons] || Sparkles;



  return (

    <motion.div

      whileHover={{
        y:-8,
        scale:1.01,
      }}

      transition={{
        duration:0.35,
      }}


      className={`
  group
  relative
  overflow-hidden

  rounded-[32px]

  border
  border-white/10

  bg-slate-900/60

  backdrop-blur-xl

  p-8

  ${large ? "min-h-[340px]" : "min-h-[280px]"}
`}
    >



      {/* Glow Background */}


      <div
        className={`
          absolute
          -right-20
          -top-20

          h-48
          w-48

          rounded-full

          ${glow}

          opacity-20

          blur-3xl

          transition

          duration-500

          group-hover:opacity-40
        `}
      />




      {/* Hover Layer */}


      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br

          from-cyan-500/0

          to-blue-500/0

          transition-all

          duration-500

          group-hover:from-cyan-500/5

          group-hover:to-blue-500/10
        "
      />






      {/* Top Line */}


      <div
        className={`
          absolute
          left-0
          top-0

          h-[2px]

          w-0

          bg-gradient-to-r

          ${gradient}

          transition-all

          duration-500

          group-hover:w-full
        `}
      />







      <div
        className="
          relative
          z-10
          flex
          h-full
          flex-col
        "
      >




        {/* Icon */}


        <div
          className={`
            mb-8

            flex

            h-16

            w-16

            items-center

            justify-center

            rounded-2xl

            bg-gradient-to-br

            ${gradient}

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
            text-3xl
            font-bold
            leading-tight
            text-white

            transition-colors

            group-hover:text-cyan-300
          "
        >

          {title}

        </h3>







        <p
          className="
            mt-6

            flex-1

            text-lg

            leading-8

            text-slate-400
          "
        >

          {description}

        </p>







        <Link
  href="/solutions"
  className="
    mt-8
    inline-flex
    items-center
    gap-2
    font-medium
    text-cyan-400
    transition-all
    duration-300
    group-hover:gap-4
    hover:text-cyan-300
  "
>
  Explore Our Solutions
  <ArrowRight className="h-4 w-4" />
</Link>




      </div>



    </motion.div>


  );

}