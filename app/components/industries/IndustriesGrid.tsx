"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Factory,
  ShoppingBag,
  HeartPulse,
  Landmark,
  Truck,
  GraduationCap,
  Briefcase,
  Building2,
} from "lucide-react";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Connect production, inventory and operational information to improve visibility, automate workflows and support faster decisions across manufacturing operations.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: ShoppingBag,
    title: "Retail & eCommerce",
    description:
      "Connect sales, inventory and customer information to improve visibility, automate routine workflows and uncover insights across retail and eCommerce operations.",
    color: "from-violet-500 to-fuchsia-600",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Connect operational information, improve reporting and automate administrative workflows to give teams clearer visibility across healthcare operations.",
    color: "from-red-500 to-pink-600",
  },
  {
    icon: Landmark,
    title: "Finance",
    description:
      "Connect financial and operational data, automate reporting and give teams clearer visibility into performance, KPIs and business trends.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: Truck,
    title: "Logistics",
    description:
      "Connect shipment, warehouse and operational information to improve visibility, automate routine workflows and support more efficient logistics operations.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Connect institutional information, streamline administrative workflows and improve reporting and operational visibility across education organizations.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description:
      "Connect client, project and operational information to improve reporting, automate routine workflows and give teams clearer visibility across service delivery.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: Building2,
    title: "SMEs",
    description:
      "Bring business knowledge, data, automation and intelligence together in connected systems that can evolve as growing businesses scale.",
    color: "from-teal-500 to-cyan-600",
  },
];

export default function IndustriesGrid() {
  return (
    <section
  id="industries-grid"
  className="relative py-32"
>

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >

          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-cyan-300">
            INDUSTRIES WE SUPPORT
          </span>

          <h2 className="mt-8 text-5xl font-black text-white lg:text-6xl">

            Solutions Designed

            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              For Your Industry
            </span>

          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-400">
            Every industry has different workflows, systems and operational priorities.
KoreVity connects knowledge, data, automation and intelligence to build solutions around the way your business operates.
          </p>

        </motion.div>


        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {industries.map((industry, index) => {

            const Icon = industry.icon;

            return (

              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  group
                  rounded-[32px]
                  border
                  border-white/10
                  bg-slate-900/60
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-cyan-400/30
                  hover:shadow-[0_0_45px_rgba(34,211,238,0.12)]
                "
              >

                <div
                  className={`
                    mb-8
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-3xl
                    bg-gradient-to-br
                    ${industry.color}
                    shadow-xl
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  `}
                >

                  <Icon className="h-10 w-10 text-white" />

                </div>


                <h3 className="text-2xl font-bold text-white">
                  {industry.title}
                </h3>


                <p className="mt-5 leading-8 text-slate-400">
                  {industry.description}
                </p>


                <Link
  href={`/contact?industry=${encodeURIComponent(industry.title)}`}
  className="
    mt-8
    inline-flex
    font-semibold
    text-cyan-400
    transition
    group-hover:text-cyan-300
  "
>
  Explore Industry →
</Link>


              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}