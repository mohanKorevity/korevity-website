"use client";

import { motion } from "framer-motion";

const technologies = [
  "Power BI",
  "Microsoft Fabric",
  "Azure",
  "Python",
  "SQL",
  "OpenAI",
  "Power Automate",
  "n8n",
  "REST APIs",
  "Excel",
  "SharePoint",
  "Microsoft 365",
];

export default function TechStack() {
  return (
    <section className="relative py-36">

      <div className="mx-auto max-w-7xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-cyan-300">
            TECHNOLOGY STACK
          </span>

          <h2 className="mt-8 text-5xl font-black text-white lg:text-6xl">

            Powered By

            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              Modern Business Technology
            </span>

          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-400">
            We combine trusted enterprise platforms with modern AI capabilities to build secure, scalable systems that improve how your business operates.
          </p>

        </motion.div>

        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {technologies.map((tech, index) => (

            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
  delay: index * 0.05,
  duration: 0.5,
}}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              className="
                rounded-2xl
                border
                border-white/10
                bg-slate-900/60
                px-6
                py-8
                text-center
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-cyan-400/30
                hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
              "
            >

              <p className="text-lg font-semibold text-white">
                {tech}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}