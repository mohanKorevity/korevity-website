"use client";

import { motion } from "framer-motion";
import { Target, Sparkles } from "lucide-react";

export default function Mission() {
  return (
    <section className="relative py-36">

      <div className="mx-auto max-w-7xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-slate-900/70
            backdrop-blur-xl
            p-14
          "
        >

          {/* Background Glow */}

          <div
            className="
              absolute
              right-0
              top-0
              h-80
              w-80
              rounded-full
              bg-cyan-500/10
              blur-[120px]
            "
          />

          <div className="relative">

            <div
              className="
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-3xl
                bg-gradient-to-br
                from-cyan-400
                via-blue-500
                to-purple-600
                shadow-xl
                shadow-cyan-500/30
              "
            >
              <Target className="h-12 w-12 text-white" />
            </div>

            <span
              className="
                mt-10
                inline-flex
                items-center
                gap-2
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
              <Sparkles className="h-4 w-4" />

              OUR MISSION
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
              Build Technology

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
                That People Actually Use.
              </span>
            </h2>

            <p
              className="
                mt-10
                max-w-5xl
                text-xl
                leading-9
                text-slate-300
              "
            >
              We build practical Business Intelligence, AI and automation solutions that solve real business problems—not technology for technology's sake.
            </p>

            <div className="mt-14 grid gap-8 md:grid-cols-3">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                <h3 className="text-xl font-bold text-cyan-300">
                  Simplify
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  Remove unnecessary complexity so technology becomes
                  easier for everyone to use.
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                <h3 className="text-xl font-bold text-cyan-300">
                  Automate
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  Replace repetitive manual work with intelligent
                  workflows that save time every day.
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                <h3 className="text-xl font-bold text-cyan-300">
                  Grow
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  Give business leaders the visibility and confidence
                  to make smarter decisions and scale sustainably.
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}