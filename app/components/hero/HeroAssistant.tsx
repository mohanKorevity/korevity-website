"use client";

import { motion } from "framer-motion";
import { Bot, Sparkles, ArrowUpRight } from "lucide-react";

export default function HeroAssistant() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.3,
      }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 backdrop-blur-xl"
    >
      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30">
            <Bot size={24} />
          </div>

          <div>

            <h3 className="font-bold text-white">
              KoreVity AI Copilot
            </h3>

            <div className="mt-1 flex items-center gap-2">

              <span className="h-2 w-2 rounded-full bg-emerald-400" />

              <p className="text-sm text-emerald-400">
                Online
              </p>

            </div>

          </div>

        </div>

        <Sparkles className="text-cyan-400" size={20} />

      </div>

      {/* Messages */}

      <div className="space-y-4 p-6">

        <Message
          title="Revenue Forecast"
          text="Projected monthly revenue increased by 18.2% based on current sales velocity."
        />

        <Message
          title="Automation Insight"
          text="Three repetitive workflows can be automated, saving approximately 26 hours every week."
        />

        <Message
          title="Sales Opportunity"
          text="12 high-value leads detected with an estimated conversion probability above 82%."
        />

      </div>

      {/* Footer */}

      <div className="flex items-center justify-between border-t border-white/10 bg-slate-900/60 px-6 py-4">

        <p className="text-sm text-slate-400">
          Updated just now
        </p>

        <button className="flex items-center gap-2 rounded-xl bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-500/20">

          Open AI Console

          <ArrowUpRight size={16} />

        </button>

      </div>

    </motion.div>
  );
}

interface MessageProps {
  title: string;
  text: string;
}

function Message({
  title,
  text,
}: MessageProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
    >
      <h4 className="font-semibold text-cyan-400">
        {title}
      </h4>

      <p className="mt-3 text-sm leading-7 text-slate-300">
        {text}
      </p>
    </motion.div>
  );
}