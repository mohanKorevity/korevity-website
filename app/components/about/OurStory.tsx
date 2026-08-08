"use client";

import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section
  id="our-story"
  className="relative py-36"
>

      <div className="mx-auto max-w-6xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl"
        >

          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-cyan-300">
            WHY KOREVITY EXISTS
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">

            Technology Should

            <span className="mt-3 block bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              Make Business Easier.
            </span>

          </h2>

          <div className="mt-14 space-y-8 text-xl leading-10 text-slate-400">

            <p>
              Businesses today have access to more technology than ever before.
              Yet many teams still spend hours updating spreadsheets,
              manually moving information between systems,
              and searching for answers hidden across different software.
            </p>

            <p>
              Instead of saving time, technology often creates more complexity.
              Teams become overwhelmed with disconnected tools,
              duplicated work and data they can't fully trust.
            </p>

            <p>
              KoreVity was created to change that.
            </p>

           <p>
  We bring business knowledge, systems, data and workflows together through the KoreVity platform,
  helping teams reduce manual work, uncover insights
  and operate with greater clarity.
</p>

            <p className="text-2xl font-semibold text-white">
              Our goal isn't to sell more software.

              <br />

              Our goal is to help businesses make better decisions,
              operate more efficiently,
              and grow with confidence.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}