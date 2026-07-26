"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

type Props = {
  question: string;
  answer: string;
};

export default function FAQItem({
  question,
  answer,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/60 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-8 text-left"
      >
        <h3 className="pr-6 text-xl font-semibold text-white">
          {question}
        </h3>

        <motion.div
          animate={{
            rotate: open ? 45 : 0,
          }}
          transition={{
            duration: 0.25,
          }}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10"
        >
          <Plus className="h-6 w-6 text-cyan-400" />
        </motion.div>
      </button>

      <AnimatePresence>

        {open && (

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
            <div className="px-8 pb-8">

              <div className="mb-6 h-px bg-white/10" />

              <p className="text-lg leading-9 text-slate-400">
                {answer}
              </p>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </div>
  );
}