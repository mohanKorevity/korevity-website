"use client";

import { motion } from "framer-motion";

import {
  ShieldCheck,
  Handshake,
  Lightbulb,
  HeartHandshake,
} from "lucide-react";

import TestimonialCard from "./TestimonialCard";


const testimonials = [

  {
    title: "Our Approach",

    quote:
      "We recommend technology only when it solves a real business problem, improves how your team works or creates measurable value.",
  },


  {
    title: "What You Can Expect",

    quote:
      "You'll know what is being built, why it matters and what outcome it is intended to create. Clear communication stays part of the project from start to finish.",
  },


  {
    title: "Built For Real Results",

    quote:
      "We focus on practical improvements that reduce manual work, improve visibility, connect information and support better business decisions.",
  },

];





const values = [
  {
    icon: ShieldCheck,
    title: "Transparent Advice",
    description:
      "Clear recommendations focused on what your business actually needs.",
  },

  {
    icon: Lightbulb,
    title: "Practical Solutions",
    description:
      "Technology designed to solve real operational challenges.",
  },

  {
    icon: HeartHandshake,
    title: "Long-Term Support",
    description:
      "Ongoing improvement as your systems and business evolve.",
  },

  {
    icon: Handshake,
    title: "Business Partnership",
    description:
      "A collaborative approach built around your goals and priorities.",
  },
];





export default function Testimonials() {


  return (

    <section
      className="
        relative
        py-36
      "
    >


      <div
        className="
          mx-auto
          max-w-7xl
          px-8
        "
      >



        {/* HEADER */}



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
            mx-auto
            max-w-4xl
            text-center
          "

        >



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

            TRUST & PARTNERSHIP

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

            The Right Partner


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

              Makes All The Difference.

            </span>


          </h2>






          <p
            className="
              mx-auto

              mt-8

              max-w-3xl

              text-xl

              leading-9

              text-slate-400
            "
          >

              
            The right technology partner starts by understanding your goals, your workflows and the way your business operates — not just by implementing tools.

          </p>



        </motion.div>









        {/* TESTIMONIAL CARDS */}



        <div
          className="
            mt-24

            grid

            gap-8

            lg:grid-cols-3
          "
        >



          {
            testimonials.map((item,index)=>(


              <TestimonialCard

                key={item.title}

                title={item.title}

                quote={item.quote}

                delay={index}

              />


            ))
          }



        </div>









        {/* VALUES / TRUST BAR */}





        <motion.div


          initial={{
            opacity:0,
            y:25,
          }}


          whileInView={{
            opacity:1,
            y:0,
          }}


          viewport={{
            once:true,
          }}


          transition={{
            duration:0.5,
            delay:0.2,
          }}


          className="
            mt-20

            rounded-[32px]

            border

            border-white/10

            bg-white/[0.03]

            p-8

            backdrop-blur-xl
          "

        >



          <div
            className="
              grid

              gap-8

              md:grid-cols-2

              xl:grid-cols-4
            "
          >




            {
              values.map((value)=>{


                const Icon = value.icon;


                return (


                  <div

                    key={value.title}

                    className="
                      flex
                      items-start
                      gap-4
                    "

                  >




                    <div
                      className="
                        flex

                        h-12

                        w-12

                        shrink-0

                        items-center

                        justify-center

                        rounded-xl

                        border

                        border-cyan-400/20

                        bg-cyan-500/10
                      "
                    >

                      <Icon
                        className="
                          h-6
                          w-6
                          text-cyan-400
                        "
                      />


                    </div>






                    <div>


                      <h4
                        className="
                          font-semibold
                          text-white
                        "
                      >

                        {value.title}

                      </h4>



                      <p
                        className="
                          mt-1

                          text-sm

                          leading-5

                          text-slate-400
                        "
                      >

                        {value.description}

                      </p>



                    </div>



                  </div>


                );


              })
            }



          </div>



        </motion.div>





      </div>



    </section>


  );

}