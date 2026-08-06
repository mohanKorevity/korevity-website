"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do I need to replace my existing software?",
    answer:
      "No. KoreVity is designed to work with your existing systems wherever practical. We connect and improve the tools you already use through integrations, automation, business intelligence and KORTEX rather than replacing them unnecessarily.",
  },
  {
    question: "Can you automate our existing business processes?",
    answer:
      "Yes. We identify repetitive tasks, approvals, notifications and system handoffs that can be automated, then design workflows around the way your business already operates.",
  },
  {
    question: "How does KORTEX fit into your services?",
    answer:
      "KORTEX is KoreVity's intelligence layer. It brings business knowledge, connected information and AI capabilities together so teams can find information, understand what's happening and receive useful insights and recommendations.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Implementation depends on the systems, workflows and capabilities involved. Before work begins, we define the scope, key milestones and implementation roadmap so you understand what will be delivered and how the project will progress.",
  },
  {
    question: "What happens after implementation?",
    answer:
      "We can continue supporting and improving your environment after launch, including dashboards, integrations, automations and KORTEX capabilities as your business needs evolve.",
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