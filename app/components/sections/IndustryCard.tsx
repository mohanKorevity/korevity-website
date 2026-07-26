"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Factory,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Truck,
  GraduationCap,
  ArrowRight,
} from "lucide-react";


type Props = {
  icon: string;
  title: string;
  description: string;
};


const icons = {
  factory: Factory,
  health: HeartPulse,
  finance: Landmark,
  retail: ShoppingBag,
  logistics: Truck,
  education: GraduationCap,
};


const styles = {
  factory: {
    gradient: "from-orange-400 to-red-500",
    glow: "bg-orange-500/30",
  },

  health: {
    gradient: "from-rose-400 to-pink-500",
    glow: "bg-rose-500/30",
  },

  finance: {
    gradient: "from-emerald-400 to-green-600",
    glow: "bg-emerald-500/30",
  },

  retail: {
    gradient: "from-purple-400 to-violet-600",
    glow: "bg-purple-500/30",
  },

  logistics: {
    gradient: "from-blue-400 to-cyan-600",
    glow: "bg-blue-500/30",
  },

  education: {
    gradient: "from-yellow-400 to-orange-500",
    glow: "bg-yellow-500/30",
  },
};


export default function IndustryCard({
  icon,
  title,
  description,
}: Props) {


  const Icon =
    icons[icon as keyof typeof icons] || Factory;


  const style =
    styles[icon as keyof typeof styles] || styles.factory;



  return (

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

      whileHover={{
        y:-8,
        scale:1.02,
      }}

      transition={{
        duration:0.4,
      }}


      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-slate-900/60
        p-8
        backdrop-blur-xl
      "

    >


      {/* Hover Glow */}

      <div
        className={`
          absolute
          -right-20
          -top-20
          h-40
          w-40
          rounded-full
          blur-3xl
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
          ${style.glow}
        `}
      />



      {/* Background */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-white/[0.02]
          to-transparent
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
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
          className={`
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            ${style.gradient}
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
            transition
            group-hover:text-cyan-300
          "
        >
          {title}
        </h3>



        <p
          className="
            mt-4
            text-base
            leading-7
            text-slate-400
          "
        >
          {description}
        </p>




        <Link
  href="/industries"
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
  Explore Solutions
  <ArrowRight className="h-4 w-4" />
</Link>



      </div>


    </motion.div>

  );
}