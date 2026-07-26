"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Globe,
  MapPin,
} from "lucide-react";

const items = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@korevity.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Remote Team • Serving Clients Worldwide",
  },
  {
    icon: Globe,
    title: "Availability",
    value: "Serving Clients Across Multiple Time Zones",
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >

      <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-cyan-300">
        GET IN TOUCH
      </span>


      <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">

        Let's Talk About

        <span className="mt-3 block bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
          Your Business.
        </span>

      </h2>


      <p className="mt-8 max-w-xl text-xl leading-9 text-slate-400">
        Every successful improvement starts with a conversation.
        We'd love to understand your business, your challenges,
        and explore where better systems can create the biggest impact.
      </p>


      <div className="mt-14 space-y-8">

        {items.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="flex items-start gap-5"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">

                <Icon className="h-7 w-7 text-cyan-400" />

              </div>


              <div>

                <div className="text-sm uppercase tracking-wider text-slate-500">
                  {item.title}
                </div>

                <div className="mt-2 text-lg font-semibold text-white">
                  {item.value}
                </div>

              </div>

            </div>

          );

        })}

      </div>


      <div className="mt-14 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-8">

        <div className="text-xl font-bold text-white">
          Quick Response
        </div>

        <p className="mt-3 leading-8 text-slate-300">
          We typically respond to enquiries within one business day.
          If your project is time-sensitive, let us know and we'll
          do our best to prioritise it.
        </p>

      </div>


    </motion.div>
  );
}