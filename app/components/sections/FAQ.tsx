"use client";

import { motion } from "framer-motion";
import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "How do I know if my business actually needs automation?",
    answer:
      "If repetitive tasks, spreadsheets, disconnected software or manual reporting are taking time away from your team, automation can usually deliver immediate value. During our strategy call we'll identify where technology can make the biggest impact for your business.",
  },
  {
    question: "Do I need to replace the software I already use?",
    answer:
      "Usually not. We first look at how your existing systems can work together. In many cases we improve what you already have before recommending anything new, helping you maximize your existing investment.",
  },
  {
    question: "Do you only work with large businesses?",
    answer:
      "No. KoreVity works with growing businesses that want better systems, clearer insights and more efficient operations. Every solution is tailored to your business goals, regardless of size.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on the complexity of your requirements. Smaller automation projects may take only a few weeks, while larger projects involving multiple systems may take longer. Before any work begins you'll receive a clear roadmap with timelines and milestones.",
  },
  {
    question: "Will my team receive training?",
    answer:
      "Absolutely. Technology only creates value when people are confident using it. We provide practical training and documentation so your team can adopt the new systems smoothly.",
  },
  {
    question: "What happens after the project is completed?",
    answer:
      "We continue supporting your systems after launch, helping you make improvements as your business needs change.",
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

      </div>

    </section>
  );
}