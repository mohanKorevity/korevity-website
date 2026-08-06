"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  faqs: FAQ[];
};

export default function FAQSection({
  id,
  eyebrow,
  title,
  description,
  faqs,
}: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id={id}
      className="
        relative
        scroll-mt-32
        py-28
      "
    >
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          className="mx-auto mb-16 max-w-3xl text-center"
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
            {eyebrow}
          </span>

          <h2
            className="
              mt-7
              text-4xl
              font-black
              leading-tight
              text-white
              lg:text-5xl
            "
          >
            {title}
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-slate-400
            "
          >
            {description}
          </p>
        </motion.div>

        {/* Questions */}

        <div className="space-y-5">

          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <motion.div
                key={faq.question}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                }}
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-slate-900/60
                  backdrop-blur-xl
                  transition-colors
                  duration-300
                  hover:border-cyan-400/30
                "
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    p-7
                    text-left
                  "
                >
                  <span
                    className="
                      text-lg
                      font-semibold
                      leading-7
                      text-white
                      lg:text-xl
                    "
                  >
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`
                      h-5
                      w-5
                      shrink-0
                      text-cyan-400
                      transition-transform
                      duration-300

                      ${
                        isOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />
                </button>

                <AnimatePresence initial={false}>

                  {isOpen && (
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
                        duration: 0.3,
                      }}
                      className="overflow-hidden"
                    >
                      <div
                        className="
                          border-t
                          border-white/5
                          px-7
                          pb-7
                          pt-6
                          text-lg
                          leading-8
                          text-slate-400
                        "
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}