"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

import GlowButton from "../ui/GlowButton";
import Button from "../ui/Button";


const benefits = [
  "Understand where your business can improve",
  "Identify opportunities to save time and reduce complexity",
  "Get practical recommendations based on your goals",
];


export default function CTA() {
  return (
    <section className="relative overflow-hidden py-40">


      {/* Background Glow */}

      <div className="absolute inset-0">

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-cyan-500/10
            via-transparent
            to-blue-500/10
          "
        />


        <div
          className="
            absolute
            left-1/2
            top-0

            h-[700px]
            w-[700px]

            -translate-x-1/2

            rounded-full

            bg-cyan-500/10

            blur-[180px]
          "
        />

      </div>




      <div className="relative mx-auto max-w-7xl px-8">


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
          }}


          className="
            overflow-hidden
            rounded-[42px]

            border
            border-white/10

            bg-slate-900/70

            backdrop-blur-2xl
          "

        >



          <div
            className="
              grid
              items-center

              gap-16

              p-14

              lg:grid-cols-[1.15fr_0.85fr]
            "
          >



            {/* LEFT */}



            <div>


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
                START YOUR BUSINESS TRANSFORMATION
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

                Ready To Make Your Business


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
                  Work Smarter?
                </span>


              </h2>





              <p
                className="
                  mt-8

                  max-w-2xl

                  text-xl

                  leading-9

                  text-slate-400
                "
              >
                Let's understand your business challenges,
                identify opportunities and explore practical ways
                technology can help you operate better.
              </p>





              <div
  className="
    mt-12
    flex
    flex-wrap
    gap-5
  "
>
  <GlowButton href="/contact">
    <CalendarDays
      className="
        mr-2
        h-5
        w-5
      "
    />
    Start a Free Discussion
  </GlowButton>

  <Link href="/contact">
    <Button variant="secondary">
      Let's Talk

      <ArrowRight
        className="
          ml-2
          h-5
          w-5
        "
      />
    </Button>
  </Link>
</div>


            </div>







            {/* RIGHT CARD */}



            <motion.div

              whileHover={{
                y:-5,
              }}

              transition={{
                duration:0.3,
              }}


              className="
                rounded-[30px]

                border

                border-white/10

                bg-white/[0.03]

                p-8
              "

            >



              <h3
                className="
                  text-2xl

                  font-bold

                  text-white
                "
              >
                What You'll Get
              </h3>



              <p
                className="
                  mt-3

                  text-slate-400
                "
              >
                A practical conversation focused on improving your business.
              </p>




              <div
                className="
                  mt-8

                  space-y-6
                "
              >


                {benefits.map((benefit)=>(

                  <div
                    key={benefit}

                    className="
                      flex
                      items-start
                      gap-4
                    "
                  >

                    <CheckCircle2
                      className="
                        mt-1

                        h-6
                        w-6

                        text-cyan-400
                      "
                    />


                    <span
                      className="
                        text-lg

                        leading-8

                        text-slate-300
                      "
                    >
                      {benefit}
                    </span>


                  </div>


                ))}


              </div>






              <div
                className="
                  mt-10

                  rounded-2xl

                  border

                  border-cyan-500/20

                  bg-cyan-500/10

                  p-6
                "
              >

                <div
                  className="
                    text-sm

                    uppercase

                    tracking-wider

                    text-cyan-300
                  "
                >
                  No Pressure
                </div>



                <div
                  className="
                    mt-2

                    text-2xl

                    font-bold

                    text-white
                  "
                >
                  Just a conversation about your business goals.
                </div>


              </div>



            </motion.div>




          </div>


        </motion.div>


      </div>


    </section>
  );
}