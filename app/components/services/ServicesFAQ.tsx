"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do I need to replace my existing software?",
    answer:
      "No. We build solutions around the systems you already use whenever possible. Our goal is to connect and improve your existing technology, not replace it unnecessarily.",
  },
  {
    question: "Can you automate our manual business processes?",
    answer:
      "Yes. We specialize in identifying repetitive tasks and replacing them with intelligent workflows that save time, reduce errors and improve productivity.",
  },
  {
    question: "Do you provide AI solutions for small businesses?",
    answer:
      "Absolutely. AI isn't only for large enterprises. We build practical AI assistants and automations that deliver measurable value for businesses of all sizes.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Every project is different. Small automation projects can take a few weeks, while larger business intelligence platforms may take several months. We always provide a clear roadmap before work begins.",
  },
  {
    question: "Do you offer ongoing support after delivery?",
    answer:
      "Yes. We believe technology should continue improving as your business grows. We offer continuous support, enhancements and optimization after deployment.",
  },
];

export default function ServicesFAQ() {

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-36">

      <div className="mx-auto max-w-4xl px-8">


        {/* Heading */}

        <div className="mb-20 text-center">


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
            FAQ
          </span>



          <h2
            className="
              mt-8
              text-5xl
              font-black
              text-white
            "
          >

            Frequently Asked

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
              Questions
            </span>

          </h2>



          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-xl
              leading-9
              text-slate-400
            "
          >
            Here are some common questions about our approach, solutions and
            how we help businesses improve their operations through technology.
          </p>


        </div>



        {/* FAQ Items */}

        <div className="space-y-6">


          {faqs.map((faq, index) => (

            <div
              key={faq.question}
              className="
                rounded-3xl
                border
                border-white/10
                bg-slate-900/60
                backdrop-blur-xl
                transition
                duration-300
                hover:border-cyan-400/30
              "
            >


              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  p-8
                  text-left
                "
              >


                <h3
                  className="
                    text-xl
                    font-semibold
                    text-white
                  "
                >
                  {faq.question}
                </h3>



                <ChevronDown
                  className={`
                    transition
                    duration-300

                    ${
                      open === index
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />


              </button>



              <AnimatePresence>


                {open === index && (

                  <motion.div

                    initial={{
                      height: 0,
                      opacity: 0,
                    }}

                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}

                    exit={{
                      height: 0,
                      opacity: 0,
                    }}

                    transition={{
                      duration: 0.35,
                    }}

                    className="overflow-hidden"

                  >


                    <p
                      className="
                        px-8
                        pb-8
                        text-lg
                        leading-8
                        text-slate-400
                      "
                    >
                      {faq.answer}
                    </p>


                  </motion.div>

                )}


              </AnimatePresence>


            </div>

          ))}


        </div>


      </div>


    </section>
  );
}