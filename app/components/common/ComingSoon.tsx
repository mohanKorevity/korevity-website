"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Mail } from "lucide-react";

export default function ComingSoon() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[160px]" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-center"
        >
          {/* Badge */}
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
            COMING SOON
          </span>

          <h1
            className="
              mt-8
              text-5xl
              font-black
              leading-tight
              text-white
              lg:text-6xl
            "
          >
            This Resource Is
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              Coming Soon.
            </span>
          </h1>

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
            We're currently building this resource.

            <br />
            <br />

            We're focusing on delivering the highest quality Business
            Intelligence, AI Automation and business technology content to
            help businesses work smarter.

            <br />
            <br />

            Be the first to know when it launches.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
            <Link
              href="/"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:scale-105
              "
            >
              <ArrowLeft className="h-5 w-5" />
              Back To Home
            </Link>

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-white/10
                bg-white/5
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:border-cyan-400
                hover:text-cyan-300
              "
            >
              <Mail className="h-5 w-5" />
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}