"use client";

import { motion } from "framer-motion";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="relative overflow-hidden py-36">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[150px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-8">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-20 lg:grid-cols-[0.9fr_1.1fr]"
        >

          {/* Left */}

          <ContactInfo />

          {/* Right */}

          <ContactForm />

        </motion.div>

      </div>

    </section>
  );
}