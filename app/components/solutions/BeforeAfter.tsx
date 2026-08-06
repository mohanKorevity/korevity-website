"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const comparisons = [
  {
    before: "Hours creating reports manually",
    after: "Live dashboards and reporting updated automatically",
  },
  {
    before: "Knowledge and data scattered across systems",
    after: "Connected business knowledge and information through KORTEX",
  },
  {
    before: "Manual repetitive processes",
    after: "Automated workflows handling routine business tasks",
  },
  {
    before: "Decisions based on guesswork and assumptions",
    after: "Connected data, insights and recommendations supporting decisions",
  },
  {
    before: "Employees buried in admin work",
    after: "Teams focused on higher-value work and priorities",
  },
  {
    before: "Disconnected business systems",
    after: "Integrated systems sharing information across workflows",
  },
];

export default function BeforeAfter() {
  return (
    <section
  id="transformation"
  className="relative py-36"
>

      <div className="mx-auto max-w-7xl px-8">

        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mb-20 max-w-4xl text-center"
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
            BUSINESS TRANSFORMATION
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

            Imagine The Difference

            <br />

            <span
              className="
                bg-gradient-to-r
                from-cyan-300
                via-white
                to-blue-400
                bg-clip-text
                text-transparent
              "
            >
              Before vs After KoreVity
            </span>

          </h2>


          <p
            className="
              mt-8
              text-xl
              leading-9
              text-slate-400
            "
          >
            See how intelligent systems transform everyday business challenges
            into faster, smarter and more scalable operations.
          </p>


        </motion.div>



        {/* COMPARISON TABLE */}

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
            overflow-hidden
            rounded-[36px]
            border
            border-white/10
            bg-slate-900/60
            backdrop-blur-xl
            shadow-2xl
          "

        >


          {/* HEADER ROW */}

          <div
            className="
              hidden
              grid-cols-2
              border-b
              border-white/10
              md:grid
            "
          >

            <div className="p-8 text-center">

              <h3
                className="
                  text-3xl
                  font-bold
                  text-red-400
                "
              >
                Before
              </h3>

            </div>


            <div className="p-8 text-center">

              <h3
                className="
                  text-3xl
                  font-bold
                  text-cyan-400
                "
              >
                After
              </h3>

            </div>

          </div>



          {comparisons.map((item,index)=>(

            <motion.div

              key={item.before}

              initial={{
                opacity:0,
              }}

              whileInView={{
                opacity:1,
              }}

              viewport={{
                once:true,
              }}

              transition={{
                delay:index*0.08,
              }}

              whileHover={{
                backgroundColor:"rgba(255,255,255,0.03)",
              }}

              className="
                grid
                gap-4
                border-b
                border-white/5
                p-6
                transition
                md:grid-cols-[1fr_auto_1fr]
                md:p-0
                last:border-none
              "

            >


              <div
                className="
                  p-6
                  text-lg
                  text-slate-400
                  md:text-right
                "
              >
                {item.before}
              </div>



              <div
                className="
                  flex
                  justify-center
                  md:items-center
                "
              >

                <ArrowRight
                  className="
                    h-6
                    w-6
                    text-cyan-400
                  "
                />

              </div>



              <div
                className="
                  p-6
                  text-lg
                  font-medium
                  text-white
                "
              >
                {item.after}
              </div>


            </motion.div>

          ))}


        </motion.div>


      </div>


    </section>
  );
}