"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import GlowButton from "../ui/GlowButton";

export default function SolutionsCTA() {
  return (
    <section className="relative overflow-hidden py-36">


      {/* Background Glow */}

      <div className="
        pointer-events-none
        absolute
        left-1/2
        top-0
        h-[600px]
        w-[600px]
        -translate-x-1/2
        rounded-full
        bg-cyan-500/10
        blur-[160px]
      "/>



      <div className="relative mx-auto max-w-5xl px-8">


        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:.7
          }}


          whileHover={{
            y:-6
          }}

          className="
            rounded-[42px]
            border
            border-cyan-500/20
            bg-gradient-to-br
            from-cyan-500/10
            via-slate-900
            to-slate-950
            p-16
            text-center
            backdrop-blur-2xl
            shadow-[0_40px_120px_rgba(0,0,0,0.45)]
          "

        >


          <span className="
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
          ">

            READY TO START

          </span>



          <h2 className="
            mt-8
            text-5xl
            font-black
            leading-tight
            text-white
            lg:text-6xl
          ">


            Ready To Transform


            <br/>


            <span className="
              bg-gradient-to-r
              from-cyan-300
              via-white
              to-blue-400
              bg-clip-text
              text-transparent
            ">

              Your Business?

            </span>


          </h2>




          <p className="
            mx-auto
            mt-8
            max-w-3xl
            text-xl
            leading-9
            text-slate-300
          ">

            Every business has unique challenges.
Let's identify where KORTEX, automation, connected systems and business intelligence can create the greatest impact for your operations.

          </p>




          <div className="mt-12">


            <Link
  href="https://calendly.com/mohan-korevity/30min"
  target="_blank"
  rel="noopener noreferrer"
>
  <GlowButton>
    Schedule A Free Strategy Call
  </GlowButton>
</Link>


          </div>



        </motion.div>


      </div>


    </section>
  );
}