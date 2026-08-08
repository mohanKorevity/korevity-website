"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BarChart3,
  BrainCircuit,
  Clock3,
  Network,
} from "lucide-react";

const solutions = [
  {
  number: "1.",
  title: "See Your Business Clearly",
  description:
    "Get complete visibility with real-time dashboards that bring your key metrics, trends and performance into one place.",
    bullets: [
      "Real-time KPIs and performance tracking",
      "Interactive dashboards and drill-down insights",
      "Make faster, data-driven decisions",
    ],
    icon: BarChart3,
    color: "from-cyan-500 to-blue-600",
    image: "/images/solutions/business-intelligence.webp",
  },
  {
    number: "2.",
    title: "AI That Actually Helps Your Team",
    description:
        "Give your team AI that understands connected business knowledge and data to identify patterns, uncover insights and provide recommendations that support better decisions.",
    bullets: [
      "AI-powered insights and recommendations",
      "Document intelligence and summarization",
      "Automate repetitive and time-consuming work",
    ],
    icon: BrainCircuit,
    color: "from-violet-500 to-fuchsia-600",
    image: "/images/solutions/assistant.webp",
  },
  {
    number: "3.",
    title: "Stop Losing Time To Manual Work",
    description:
      "Automate repetitive tasks, approvals and system handoffs so everyday work moves faster with less manual effort and fewer delays.",
    bullets: [
      "End-to-end workflow automation",
      "Real-time notifications and approvals",
      "Reduce errors and speed up execution",
    ],
    icon: Clock3,
    color: "from-emerald-500 to-green-600",
    image: "/images/solutions/workflow.webp",
  },
  {
    number: "4.",
    title: "Connect Everything Together",
    description:
      "Connect your business systems, data and knowledge so information can flow across dashboards, workflows and the KoreVity environment without unnecessary manual handoffs.",
    bullets: [
      "Seamless system integrations",
      "Single source of truth for your data",
      "Better collaboration across departments",
    ],
    icon: Network,
    color: "from-purple-500 to-indigo-600",
    image: "/images/solutions/integration.webp",
  },
];

export default function ProblemSolutions() {
  return (
    <section className="relative py-32">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="space-y-28">

          {solutions.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid items-center gap-14 lg:grid-cols-[1fr_1.2fr] ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* TEXT */}

                <div>

                  <div
                    className={`mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br ${item.color} shadow-xl`}
                  >
                    <Icon className="h-11 w-11 text-white" />
                  </div>

                  <h2 className="text-5xl font-black leading-tight text-white">

                    <span
                      className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                    >
                      {item.number}
                    </span>{" "}

                    {item.title}

                  </h2>

                  <p className="mt-8 text-xl leading-9 text-slate-400">
                    {item.description}
                  </p>

                  <ul className="mt-8 space-y-4">

                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-3 text-lg text-slate-300"
                      >
                        <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                        {bullet}
                      </li>
                    ))}

                  </ul>

                </div>

                {/* IMAGE */}

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.35 }}
                  className="
group
relative
overflow-hidden
rounded-[34px]
border
border-white/10
bg-slate-900/80

shadow-[0_30px_80px_rgba(0,0,0,0.45)]
hover:border-cyan-400/40
hover:shadow-[0_0_50px_rgba(34,211,238,0.18)]
transition-all
duration-700
ease-out
"
                >

                  {/* Ambient Glow */}

<div
  className="
    absolute
    inset-0
    flex
    items-center
    justify-center
    pointer-events-none
  "
>
  <div
    className={`
      h-[75%]
      w-[75%]
      rounded-full
      blur-[90px]
      opacity-70

      ${
        item.icon === BarChart3
          ? "bg-cyan-500/20"
          : item.icon === BrainCircuit
          ? "bg-fuchsia-500/20"
          : item.icon === Clock3
          ? "bg-emerald-500/20"
          : "bg-indigo-500/20"
      }
    `}
  />
</div>

{/* Glass Highlight */}
<div
  className="
relative
z-10
max-w-full
max-h-full
object-contain

translate-y-2
group-hover:translate-y-1

transition-all
duration-500

group-hover:scale-[1.03]
group-hover:brightness-110
group-hover:contrast-105
group-hover:saturate-110
"
/>
<div
  className="
    absolute
    inset-0
    rounded-[34px]
    ring-1
    ring-white/5
    pointer-events-none
  "
/>

<div className="p-2 lg:p-3">
  <Image
  src={item.image}
  alt={item.title}
  width={900}
  height={700}
  className="
    relative
    z-10
    max-w-full
    max-h-full
    object-contain

    transition-all
    duration-500

    group-hover:-translate-y-2
    group-hover:scale-[1.10]
    group-hover:brightness-110
    group-hover:contrast-105
    group-hover:saturate-110
  "
/>
</div>

                </motion.div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}