"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PlatformTeaser() {
  return (
    <section className="relative bg-slate-950 pt-20 pb-28">
      <div className="mx-auto max-w-6xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-12 text-center backdrop-blur-xl"
        >
          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-cyan-300">
            EXPLORE THE PLATFORM
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white">
            See KoreVity
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              In Action
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-400">
  See how KORTEX connects business knowledge, live systems,
  operational intelligence and AI inside one intelligent workspace.
</p>

          <div className="mt-10">
            <Link
              href="/platform"
              className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.35)]"
            >
              Explore KORTEX
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}