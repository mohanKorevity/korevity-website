"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {

    

  return (
    <section className="relative py-36">

      <div className="mx-auto max-w-6xl px-6">


        <motion.div
          initial={{
            opacity:0,
            y:40,
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
          }}

          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-cyan-500/20
            bg-gradient-to-br
            from-cyan-500/10
            via-slate-900
            to-blue-950
            p-10
            text-center
            backdrop-blur-2xl
            lg:p-16
          "
        >


          {/* Glow Effects */}

          <div
            className="
              absolute
              -left-24
              top-0
              h-72
              w-72
              rounded-full
              bg-cyan-500/20
              blur-3xl
            "
          />


          <div
            className="
              absolute
              -right-24
              bottom-0
              h-72
              w-72
              rounded-full
              bg-blue-500/20
              blur-3xl
            "
          />



          <div className="relative z-10">


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
              START YOUR JOURNEY
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

              Ready To Build

              <span
                className="
                  mt-3
                  block
                  bg-gradient-to-r
                  from-cyan-300
                  via-white
                  to-blue-400
                  bg-clip-text
                  text-transparent
                "
              >
                Smarter Business Systems?
              </span>

            </h2>



            <p
              className="
                mx-auto
                mt-8
                max-w-3xl
                text-xl
                leading-9
                text-slate-300
              "
            >
              Let's discuss your challenges, identify opportunities
              and build intelligent solutions that help your business
              grow with confidence.
            </p>



            <motion.div
              initial={{
                opacity:0,
                y:20,
              }}

              whileInView={{
                opacity:1,
                y:0,
              }}

              viewport={{
                once:true,
              }}

              transition={{
                delay:0.2,
              }}

              className="
                mt-12
                flex
                flex-col
                items-center
                justify-center
                gap-6
                sm:flex-row
              "
            >


              <Link
  href="https://calendly.com/mohan-korevity/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="
    rounded-2xl
    bg-gradient-to-r
    from-cyan-500
    to-blue-600
    px-10
    py-5
    text-lg
    font-semibold
    text-white
    shadow-[0_0_35px_rgba(34,211,238,0.35)]
    transition
    duration-300
    hover:scale-105
  "
>
  Book A Free Consultation
</Link>



              <button
  onClick={() => {
    window.location.href = "/services?scroll=services";
  }}
  className="
    flex
    items-center
    gap-3
    rounded-2xl
    border
    border-white/10
    px-10
    py-5
    text-lg
    font-semibold
    text-white
    transition
    duration-300
    hover:border-cyan-400
    hover:text-cyan-300
  "
>
  Explore Services
  <ArrowRight className="h-5 w-5" />
</button>


            </motion.div>


          </div>


        </motion.div>


      </div>


    </section>
  );
}