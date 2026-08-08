"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "How do I know if KoreVity is right for my business?",
    answer:
      "KoreVity is a good fit when your team is spending too much time on manual work, disconnected systems, scattered business information or reporting that takes too long. We first understand your workflows, systems and goals before recommending what should be connected, automated or improved.",
  },
  {
    question: "Do I need to replace the software I already use?",
    answer:
      "Usually not. KoreVity is designed to work around the systems you already use. We first look at how your existing ERP, CRM, documents, dashboards and other business tools can be connected before recommending anything new.",
  },
  {
    question: "What is KoreVity?",
    answer:
      "KoreVity is an Intelligent Operations Platform that brings together connected business knowledge, operational data and approved systems so employees can ask questions, understand what is happening and receive relevant business answers based on the information available to them.",
  },
  {
    question: "Can KoreVity automate our existing business processes?",
    answer:
      "Yes. We can identify repetitive tasks, approvals, notifications and system handoffs that are suitable for automation. The exact workflows depend on your existing software, available integrations, permissions and the way your business operates.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Timelines depend on the number of systems, workflows and capabilities involved. A focused implementation may take a few weeks, while a broader connected workspace can take longer. Before work begins, we define the scope, implementation stages and expected timeline.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We can continue supporting and improving your dashboards, automations, integrations and KoreVity environment as your business evolves. This can include workflow refinements, new integrations, reporting improvements and additional use cases."
  },
];

export default function FAQ() {
  return (
    <section className="relative py-36">

      <div className="mx-auto max-w-5xl px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-cyan-300">
            COMMON QUESTIONS
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">

            Questions Before

            <span className="mt-3 block bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              Getting Started.
            </span>

          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-400">
            Choosing the right partner is an important decision.
Here are answers to some common questions before getting started.
          </p>

        </motion.div>

        {/* FAQ Items */}

        <div className="mt-20 space-y-6">

          {faqs.map((faq) => (

            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />

          ))}

        </div>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="mt-12 flex justify-center"
>
  <Link
    href="/faqs"
    className="
      group
      inline-flex
      items-center
      gap-2
      text-lg
      font-semibold
      text-cyan-400
      transition
      duration-300
      hover:text-cyan-300
    "
  >
    Still have questions? View all FAQs

    <ArrowRight
      className="
        h-5
        w-5
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
    />
  </Link>
</motion.div>
      </div>

    </section>
  );
}