
"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";
import AIDemoResponse from "../components/platform/AIDemoResponse";
import {
  Crown,
  UserRoundCheck,
  Warehouse,
  Landmark,
  TrendingUp,
  Workflow,
} from "lucide-react";

const demoConversations = [
  {
    role: "CEO",
    question: "How did the business perform this month?",

    answer: {
  confidence: 96,

  title: "Business Performance Summary",

intro:
  "Overall, the business had a strong month, with improvements across revenue, customer retention and delivery performance.",

body: [
  "Revenue increased 18% compared with last month.",
  "Customer retention improved by 6%.",
  "Delivery delays decreased by 14%.",
],

recommendation:
  "Revenue and retention are trending positively. Review which products and customer segments contributed most to the growth, and make sure inventory levels can support continued demand next month.",

      sources: [
        "Power BI Dashboard",
        "ERP Sales",
        "CRM",
      ],
    },
  },

  {
    role: "HR Manager",
    question: "How do we onboard a new employee?",

   answer: {
  confidence: 99,

  title: "Employee Onboarding Process",

  intro:
    "Here’s the standard onboarding process for a new employee.",

  body: [
    "Send the digital offer letter and collect the required signed documents.",
    "Create Microsoft 365, ERP and relevant internal system accounts.",
    "Schedule orientation and assign the required training for their role.",
  ],

  recommendation:
    "Once the signed documents are received, IT can begin account provisioning while HR schedules orientation and training.",

      sources: [
        "HR Handbook",
        "Employee Onboarding SOP",
        "IT Access Policy",
      ],
    },
  },

  {
    role: "Warehouse Manager",
    question: "What's our return policy for damaged products?",

   answer: {
  confidence: 94,

  title: "Damaged Product Return Policy",

  intro:
    "Here’s the process to follow when a customer reports a damaged product.",

  body: [
    "The damage must be reported within 30 days of delivery.",
    "The warehouse team must inspect the product before the return is approved.",
    "Once approved, the refund should be processed within 48 hours.",
  ],

  recommendation:
    "Ask the customer to include clear photos of the damage with the return request so the warehouse team can review the case faster.",

      sources: [
        "Warehouse SOP",
        "Returns Policy",
        "Quality Manual",
      ],
    },
  },

  {
    role: "Finance Manager",
    question: "Which invoices are overdue this week?",

    answer: {
  confidence: 97,

  title: "Accounts Receivable Summary",

  intro:
    "Here’s the current overdue invoice position for this week.",

  body: [
    "18 invoices are currently overdue.",
    "The total outstanding balance is $126,400.",
    "ABC Logistics has the largest overdue balance.",
  ],

  recommendation:
    "Prioritize the highest-value overdue accounts first, starting with ABC Logistics, and follow up on invoices that have been outstanding for more than 7 days.",

      sources: [
        "Finance Dashboard",
        "Accounts Receivable",
        "Customer Ledger",
      ],
    },
  },

  {
  role: "Sales Manager",
  question: "Who are our top customers this month?",

  answer: {
  confidence: 95,

  title: "Top Performing Customers",

  intro:
    "Here’s a quick view of the customers contributing most to this month’s sales performance.",

  body: [
    "The top five customers generated 41% of monthly revenue.",
    "Global Freight Ltd. recorded the strongest growth.",
    "Average deal size increased by 12%.",
  ],

  recommendation:
    "Review what is driving growth across the top accounts and prioritize follow-ups with the customers showing the strongest expansion potential.",

    sources: [
      "CRM",
      "Sales Dashboard",
      "Customer Reports",
    ],
  },
},

  {
    role: "Operations Manager",
    question: "Why were deliveries delayed yesterday?",

    answer: {
  confidence: 96,

  title: "Delivery Delay Analysis",

  intro:
    "Here’s what caused yesterday’s delivery delays and how the operation recovered.",

  body: [
    "42 deliveries were delayed yesterday.",
    "The main cause was a supplier shipment arriving 3 hours later than scheduled.",
    "The resulting backlog was cleared before the end of the day.",
  ],

  recommendation:
    "Review the affected supplier’s recent delivery performance and consider adjusting lead times if late arrivals are becoming a recurring issue.",

      sources: [
        "Delivery Dashboard",
        "Warehouse Logs",
        "Supplier Performance Report",
      ],
    },
  },
];
const thinkingSteps = [
  [
    "Reading Power BI Dashboard...",
    "Analyzing ERP sales...",
    "Cross-checking CRM...",
    "Generating business insights...",
  ],

  [
    "Reading HR Handbook...",
    "Checking Employee SOP...",
    "Reviewing IT Access Policy...",
    "Preparing onboarding guide...",
  ],

  [
    "Reading Warehouse SOP...",
    "Checking Returns Policy...",
    "Reviewing Quality Manual...",
    "Generating return process...",
  ],

  [
    "Analyzing Finance Dashboard...",
    "Checking Accounts Receivable...",
    "Reviewing Customer Ledger...",
    "Preparing finance summary...",
  ],

  [
    "Reading CRM...",
    "Analyzing Sales Dashboard...",
    "Reviewing Customer Reports...",
    "Generating customer insights...",
  ],

  [
    "Reading Delivery Dashboard...",
    "Checking Warehouse Logs...",
    "Analyzing Supplier Reports...",
    "Generating operational analysis...",
  ],
];
export default function PlatformPage() {
    const [activeDemo, setActiveDemo] = useState(0);
const [thinking, setThinking] = useState(false);





    const current = demoConversations[activeDemo];
    
    
  return (
    <>
      <Navbar />

      <main className="bg-slate-950 text-white min-h-screen pt-28">
        <section className="relative pt-16 pb-16">
          <div className="mx-auto max-w-7xl px-8 text-center">
            <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-cyan-300">
              THE KOREVITY PLATFORM
            </span>

            <h1 className="mt-8 text-6xl font-black leading-tight">
              One Platform.
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
                Every Business System Connected.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-400">
              Explore how Business Knowledge, AI, Automation and Operational
              Intelligence work together inside one intelligent workspace.
            </p>
          </div>
        </section>

        <section className="pt-20 pb-32">
  <div className="mx-auto max-w-7xl px-8">

    <div className="mx-auto mb-14 max-w-4xl text-center">
  <p className="text-xs font-semibold tracking-[0.22em] text-cyan-300">
    BUSINESS KNOWLEDGE ENGINE
  </p>

  <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
    Ask Questions.
    <br />
    Get Instant Answers.
  </h2>

  <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
    Every employee gets answers based on their role, permissions,
    company knowledge and live business data.
  </p>
</div>
    <div className="grid items-stretch gap-8 lg:grid-cols-[340px_1fr]">

      {/* Left Side */}
      <div className="relative h-full">

  <p className="absolute left-0 -top-7 text-xs font-semibold tracking-[0.2em] text-cyan-300">
  TRY DIFFERENT DEPARTMENTS
</p>

  <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-8">

        

<div>

  <div className="space-y-3">

    {demoConversations.map((demo, index) => (

      <button
        key={demo.role}
        onClick={() => {
  if (thinking) return;

    setThinking(true);
setActiveDemo(index);

setTimeout(() => {
  setThinking(false);
}, thinkingSteps[index].length * 450 + 200);

  
}}
        className={`
          w-full
          rounded-2xl
          border
          px-5
          py-4
          text-left
          transition-colors

          ${
            activeDemo === index
              ? "border-cyan-500 bg-cyan-500/10"
              : "border-white/10 bg-white/5 hover:border-cyan-500/40 hover:bg-white/10"
          }
        `}
      >

        <div className="flex items-center gap-4">

  <div
  className="
    flex
    h-12
    w-12
    shrink-0
    items-center
    justify-center
    rounded-xl
    border
    text-xl
    shadow-lg
  "
  style={{
    backgroundColor: [
      "rgba(34, 211, 238, 0.18)",
      "rgba(168, 85, 247, 0.18)",
      "rgba(245, 158, 11, 0.18)",
      "rgba(16, 185, 129, 0.18)",
      "rgba(236, 72, 153, 0.18)",
      "rgba(59, 130, 246, 0.18)",
    ][index],

    borderColor: [
      "rgba(34, 211, 238, 0.35)",
      "rgba(168, 85, 247, 0.35)",
      "rgba(245, 158, 11, 0.35)",
      "rgba(16, 185, 129, 0.35)",
      "rgba(236, 72, 153, 0.35)",
      "rgba(59, 130, 246, 0.35)",
    ][index],

    boxShadow: [
      "0 0 18px rgba(34, 211, 238, 0.12)",
      "0 0 18px rgba(168, 85, 247, 0.12)",
      "0 0 18px rgba(245, 158, 11, 0.12)",
      "0 0 18px rgba(16, 185, 129, 0.12)",
      "0 0 18px rgba(236, 72, 153, 0.12)",
      "0 0 18px rgba(59, 130, 246, 0.12)",
    ][index],
  }}
>
    {[
  <Crown
    key="ceo"
    className="h-7 w-7 text-cyan-300"
    strokeWidth={2.3}
  />,
  <UserRoundCheck
    key="hr"
    className="h-7 w-7 text-violet-300"
    strokeWidth={2.3}
  />,
  <Warehouse
    key="warehouse"
    className="h-7 w-7 text-amber-300"
    strokeWidth={2.3}
  />,
  <Landmark
    key="finance"
    className="h-7 w-7 text-emerald-300"
    strokeWidth={2.3}
  />,
  <TrendingUp
    key="sales"
    className="h-7 w-7 text-pink-300"
    strokeWidth={2.3}
  />,
  <Workflow
    key="operations"
    className="h-7 w-7 text-blue-300"
    strokeWidth={2.3}
  />,
][index]}
  </div>

  <div className="min-w-0">

    <p className="font-semibold text-white">
      {demo.role}
    </p>

    <p className="mt-1 text-sm text-slate-400">
      {demo.question}
    </p>

  </div>

</div>

      </button>

    ))}

  </div>

</div>

      </div>
  </div>



{/* Right Side */}
      {/* Right Side */}

      <div className="h-full rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-xl overflow-hidden">

  {/* Window Header */}

  <div className="flex items-center justify-between border-b border-white/10 px-8 py-5">

    <div className="flex items-center gap-3">

      <div className="h-3 w-3 rounded-full bg-red-500" />
      <div className="h-3 w-3 rounded-full bg-yellow-500" />
      <div className="h-3 w-3 rounded-full bg-emerald-500" />

    </div>

    <p className="text-sm tracking-[0.18em] text-slate-400">
  KORTEX
</p>

  </div>

  
  {/* Conversation */}

<div className="space-y-8 p-8">

    {/* User */}

    <div className="flex justify-end">
  <motion.div
    key={current.question}
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.35 }}
    className="
      max-w-md
      rounded-2xl
      bg-cyan-500
      px-6
      py-4
      text-white
      shadow-lg
    "
  >
    {current.question}
  </motion.div>
</div>

    {/* AI */}

    <div className="flex">

      <div
        className="
          max-w-2xl
          rounded-2xl
          border
          border-cyan-500/20
          bg-slate-950
          px-8
          py-7
        "
      >
<AIDemoResponse
  current={current}
  thinking={thinking}
  thinkingSteps={thinkingSteps}
  activeDemo={activeDemo}
/>
      </div>
    </div>
  </div>
</div>






    </div>

  </div>
  
</section>

<section className="border-t border-white/5 py-32">

  <div className="mx-auto max-w-7xl px-8">

    <div className="text-center">

      <p className="text-sm font-semibold tracking-[0.18em] text-cyan-300">
        INSIDE KORTEX
      </p>

      <h2 className="mt-5 text-5xl font-black leading-tight">
  How Every Answer
  <br />
  Is Built
</h2>

</div>

<div className="mt-14 flex justify-center">

  <div
    className="
      rounded-2xl
      border
      border-cyan-500/20
      bg-slate-900
      px-8
      py-6
      shadow-lg
      max-w-xl
      w-full
      text-center
    "
  >

    <p className="text-xs tracking-[0.18em] text-cyan-300">
      EMPLOYEE QUESTION
    </p>
    <p className="mt-4 text-xl font-semibold leading-8 text-white">
  “How did the business perform this month?”
</p>

<p className="mt-3 text-sm text-slate-400">
  KORTEX identifies the information needed to answer the question.
</p>
    
    <div className="relative mt-16">

  <div className="relative z-10 mx-auto grid w-fit grid-cols-2 gap-8">

    {[
      "KBOM",
      "Power BI",
      "ERP",
      "CRM",
    ].map((item) => (

      <div
  key={item}
  className="
    w-40
    rounded-2xl
    border
    bg-slate-900
    px-6
    py-5
    text-center
    transition-all
    duration-200
    hover:-translate-y-1
    hover:bg-slate-800
  "
  style={{
    borderColor: [
      "rgba(34,211,238,0.22)",
      "rgba(245,158,11,0.22)",
      "rgba(16,185,129,0.22)",
      "rgba(168,85,247,0.22)",
    ][[
      "KBOM",
      "Power BI",
      "ERP",
      "CRM",
    ].indexOf(item)],
  }}
>

        <div
  className="
    mx-auto
    mb-3
    flex
    h-8
    w-8
    items-center
    justify-center
    rounded-full
    ring-1
  "
  style={{
    backgroundColor: [
      "rgba(34,211,238,0.12)",
      "rgba(245,158,11,0.12)",
      "rgba(16,185,129,0.12)",
      "rgba(168,85,247,0.12)",
    ][[
      "KBOM",
      "Power BI",
      "ERP",
      "CRM",
    ].indexOf(item)],

    boxShadow: [
      "0 0 14px rgba(34,211,238,0.18)",
      "0 0 14px rgba(245,158,11,0.18)",
      "0 0 14px rgba(16,185,129,0.18)",
      "0 0 14px rgba(168,85,247,0.18)",
    ][[
      "KBOM",
      "Power BI",
      "ERP",
      "CRM",
    ].indexOf(item)],
  }}
>
  <div
    className="h-2.5 w-2.5 rounded-full"
    style={{
      backgroundColor: [
        "#67e8f9",
        "#fbbf24",
        "#34d399",
        "#c084fc",
      ][[
        "KBOM",
        "Power BI",
        "ERP",
        "CRM",
      ].indexOf(item)],
    }}
  />
</div>

<p className="font-semibold text-white">
  {item}
</p>

<p className="mt-1 text-xs text-slate-500">
  Connected Source
</p>

      </div>

        ))}

  </div>

  <div className="mt-8 flex flex-col items-center">
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: 48 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="
        w-px
        bg-gradient-to-b
        from-cyan-400/20
        via-cyan-400
        to-cyan-400
      "
    />

    <motion.div
  initial={{ opacity: 0, y: -4 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    delay: 0.55,
    duration: 0.3,
  }}
  className="
    h-0
    w-0
    border-l-[6px]
    border-r-[6px]
    border-t-[8px]
    border-l-transparent
    border-r-transparent
    border-t-cyan-300
    drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]
  "
/>
  </div>

</div>

<div className="mt-6 flex justify-center">

  <motion.div
  animate={{
    boxShadow: [
      "0 0 20px rgba(34,211,238,0.08)",
      "0 0 42px rgba(34,211,238,0.22)",
      "0 0 20px rgba(34,211,238,0.08)",
    ],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    relative
    flex
    h-48
    w-48
    items-center
    justify-center
    rounded-full
    border
    border-cyan-500/30
    bg-slate-900
  "
>

    <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-2xl" />

    <div className="absolute h-40 w-40 rounded-full border border-cyan-500/20" />

    <div className="relative text-center">

      <p className="text-2xl font-black tracking-[0.15em] text-cyan-300">
        KORTEX
      </p>

      <p className="mt-2 whitespace-nowrap text-[10px] font-medium tracking-[0.16em] text-slate-400">
  ANALYZE • VERIFY • REASON
</p>

    </div>

  </motion.div>

</div>
   

  </div>

</div>

<p className="mx-auto mt-6 max-w-3xl text-center leading-8 text-slate-400">
  Every answer is built by combining your company knowledge,
  live business systems and AI reasoning before a response
  is ever generated.
</p>
<div className="mt-8 flex flex-col items-center">
  <motion.div
    initial={{ height: 0 }}
    whileInView={{ height: 64 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.7,
      ease: "easeOut",
    }}
    className="
      w-px
      bg-gradient-to-b
      from-cyan-400/20
      via-cyan-400
      to-cyan-400
    "
  />

  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{
      delay: 0.65,
      duration: 0.25,
    }}
    className="
      h-2.5
      w-2.5
      rounded-full
      bg-cyan-300
      shadow-[0_0_16px_rgba(34,211,238,0.9)]
    "
  />
</div>
   {/* closes max-w-3xl */}

<div className="mt-6 flex justify-center">
  <div className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-8 text-center">

    <div className="relative mx-auto flex h-24 w-24 items-center justify-center">

  <motion.div
    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.25, 0.55, 0.25],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute h-24 w-24 rounded-full bg-cyan-500/20 blur-xl"
  />

  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-400/30 bg-slate-950">

    <span className="text-3xl font-bold text-cyan-300">
      K
    </span>

  </div>

</div>

    <h3 className="mt-6 text-2xl font-bold">
  KORTEX
</h3>

<div className="mt-6 space-y-3 text-left max-w-sm mx-auto">

  {[
  "Checking user permissions...",
  "Reading KBOM...",
  "Reading Power BI...",
  "Reading ERP...",
  "Reading CRM...",
  "Analyzing relevant information..."
].map((step, index) => (

    <motion.div
      key={step}
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.2,
        duration: 0.35,
      }}
      className="flex items-center gap-3"
    >

      <motion.div
  initial={{ scale: 0, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  viewport={{ once: true }}
  transition={{
    delay: index * 0.2,
    duration: 0.25,
  }}
  className="
    flex
    h-7
    w-7
    shrink-0
    items-center
    justify-center
    rounded-full
    border
    border-cyan-400/30
    bg-cyan-500/10
    text-[11px]
    font-bold
    text-cyan-300
    shadow-[0_0_14px_rgba(34,211,238,0.12)]
  "
>
  {index + 1}
</motion.div>

      <p className="text-sm text-slate-200">
        {step}
      </p>

    </motion.div>

  ))}

</div>

  

<motion.div
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    delay: 1.5,
    duration: 0.4,
  }}
  className="mt-8 border-t border-white/10 pt-6"
>
  <div className="flex items-center justify-center gap-2">

  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />

  <span className="text-sm font-medium text-emerald-400">
    Analysis Complete
  </span>

</div>          {/* closes justify-between */}

</motion.div>   {/* closes motion.div */}

</div>          {/* closes rounded-3xl card */}

</div>          {/* closes mt-20 flex justify-center */}

<div className="mt-8 flex justify-center">
  
  <div className="flex flex-col items-center">

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.35 }}
      className="mb-3 text-[10px] font-semibold tracking-[0.18em] text-cyan-300/70"
    >
      VERIFIED RESPONSE
    </motion.p>
    

    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: 80 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-[2px] bg-gradient-to-b from-cyan-400 via-cyan-300 to-transparent"
    />

    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8, duration: 0.35 }}
      className="mt-2 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]"
    />

  </div>
</div>
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.4, duration: 0.5 }}
  className="mt-6 flex justify-center"
>
  <div className="w-full max-w-xl rounded-3xl border border-emerald-500/20 bg-slate-900 p-8">

    <div className="flex items-center justify-between">

      <div>

        <p className="text-xs tracking-[0.18em] text-cyan-300">
          KORTEX OUTPUT
        </p>

        <h3 className="mt-2 text-2xl font-bold">
  Business Answer Ready
</h3>

      </div>

      <div className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">
        Ready
      </div>

    </div>

    <div className="mt-8 space-y-4">

      <div className="flex gap-3">
        <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
        <p className="text-slate-300">
          A single answer built from the relevant connected business systems.
        </p>
      </div>

      <div className="flex gap-3">
        <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
        <p className="text-slate-300">
          Company knowledge, live data and user permissions are checked before the response is shown.
        </p>
      </div>

      <div className="flex gap-3">
        <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
        <p className="text-slate-300">
          The answer is delivered with supporting context and a clear next step when one is relevant.
        </p>
      </div>

    </div>

  </div>
</motion.div>

  </div>
  <section className="border-t border-white/5 py-32">
  <div className="mx-auto max-w-7xl px-8 text-center">

    <p className="text-sm font-semibold tracking-[0.18em] text-cyan-300">
      EVERYTHING CONNECTED
    </p>

    <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
  One Intelligent Workspace
  <br />
  For Your Entire Business
</h2>

    <p className="mx-auto mt-6 max-w-3xl px-2 leading-8 text-slate-400 sm:px-0">
      Connect every department, every business system and every source of
      knowledge into one intelligent workspace where AI can understand,
      automate and deliver answers instantly.
    </p>
<div className="mt-24 flex justify-center">

  <div
  className="
    relative
    flex
    h-90
    w-90
    shrink-0
    scale-[0.58]
    items-center
    justify-center
    sm:scale-75
    md:scale-100
  "
>

    {/* Glow */}

    <motion.div
      animate={{
        scale: [1, 1.08, 1],
        opacity: [0.25, 0.55, 0.25],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl"
    />

    {/* Outer Ring */}

    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute h-64 w-64 rounded-full border border-cyan-500/20"
    />

    {/* Second Ring */}

    <motion.div
      animate={{ rotate: -360 }}
      transition={{
        duration: 35,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute h-56 w-56 rounded-full border border-cyan-400/10"
    />

    {/* Center */}

    <div
      className="
        relative
        flex
        h-36
        w-36
        items-center
        justify-center
        rounded-full
        border
        border-cyan-400/30
        bg-slate-900
        shadow-[0_0_60px_rgba(34,211,238,0.25)]
      "
    >

      <div className="text-center">

        <p className="text-3xl font-black tracking-[0.18em] text-cyan-300">
          KORTEX
        </p>

        <p className="mt-2 whitespace-nowrap text-[12px] font-medium tracking-[0.08em] text-slate-400">
  CONNECT • UNDERSTAND • ACT
</p>

      </div>

    </div>

{/* CONNECTION LINES */}

<motion.div
  initial={{ scaleY: 0 }}
  whileInView={{ scaleY: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="
    absolute
    left-1/2
    top-8
    h-[7rem]
    w-px
    -translate-x-1/2
    origin-top
    bg-gradient-to-b
    from-cyan-400
    to-cyan-400/10
  "
/>
<motion.div
  animate={{
    y: [0, 90],
    opacity: [0, 1, 1, 0],
  }}
  transition={{
    duration: 1.8,
    repeat: Infinity,
    ease: "linear",
    repeatDelay: 0.5,
  }}
  className="
    pointer-events-none
    absolute
    left-1/2
    top-8
    z-10
    h-3
    w-1
    -translate-x-1/2
    rounded-full
    bg-cyan-300
    shadow-[0_0_12px_rgba(34,211,238,0.9)]
  "
/>

{/* CRM → KORTEX */}
<motion.div
  initial={{ scaleX: 0 }}
  whileInView={{ scaleX: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="
    absolute
    left-4
    top-1/2
    h-px
    w-[calc(50%-5.5rem)]
    origin-left
    -translate-y-1/2
    bg-gradient-to-r
    from-purple-400/20
    to-purple-400/70
  "
/>

{/* Power BI → KORTEX */}
<motion.div
  initial={{ scaleX: 0 }}
  whileInView={{ scaleX: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="
    absolute
    right-4
    top-1/2
    h-px
    w-[calc(50%-5.5rem)]
    origin-right
    -translate-y-1/2
    bg-gradient-to-l
    from-amber-400/20
    to-amber-400/70
  "
/>
<motion.div
  animate={{
  x: [0, -72],
  opacity: [0, 1, 1, 0],
}}
  transition={{
    duration: 1.8,
    repeat: Infinity,
    ease: "linear",
    repeatDelay: 0.7,
  }}
  className="
    pointer-events-none
    absolute
    right-4
    top-1/2
    z-10
    h-1
    w-3
    -translate-y-1/2
    rounded-full
    bg-amber-300
    shadow-[0_0_12px_rgba(245,158,11,0.9)]
  "
/>
<motion.div
  initial={{ scaleY: 0 }}
  whileInView={{ scaleY: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="
    absolute
    left-1/2
    bottom-0
    h-[calc(50%-4.5rem)]
    w-px
    -translate-x-1/2
    origin-bottom
    bg-gradient-to-t
    from-cyan-400
    to-cyan-400/10
  "
/>
<motion.div
  animate={{
    y: [0, -90],
    opacity: [0, 1, 1, 0],
  }}
  transition={{
    duration: 1.8,
    repeat: Infinity,
    ease: "linear",
    repeatDelay: 0.9,
  }}
  className="
    pointer-events-none
    absolute
    bottom-1
    left-1/2
    z-10
    h-3
    w-1
    -translate-x-1/2
    rounded-full
    bg-emerald-300
    shadow-[0_0_12px_rgba(16,185,129,0.9)]
  "
/>
<motion.div
  animate={{
  x: [0, 72],
  opacity: [0, 1, 1, 0],
}}
transition={{
  duration: 1.8,
  repeat: Infinity,
  ease: "linear",
  repeatDelay: 1.1,
  times: [0, 0.15, 0.75, 1],
}}
  className="
    pointer-events-none
    absolute
    left-4
    top-1/2
    z-10
    h-1
    w-3
    -translate-y-1/2
    rounded-full
    bg-purple-300
    shadow-[0_0_12px_rgba(168,85,247,0.9)]
  "
/>
{/* Top */}

<div className="absolute -top-8 left-1/2 -translate-x-1/2">
  <motion.div
  whileHover={{
    scale: 1.08,
    y: -4,
  }}
  transition={{ duration: 0.2 }}
  className="
    rounded-xl
    border
    border-cyan-400/30
    bg-cyan-500/10
    px-5
    py-3
    text-sm
    font-semibold
    text-cyan-100
    shadow-[0_0_20px_rgba(34,211,238,0.08)]
    cursor-pointer
  "
>
  
  KBOM
</motion.div>
</div>

{/* Right */}

<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-24">
  <motion.div
  whileHover={{
    scale: 1.08,
    y: -4,
  }}
  transition={{ duration: 0.2 }}
  className="
  rounded-xl
  border
  border-amber-400/30
  bg-amber-500/10
  px-5
  py-3
  text-sm
  font-semibold
  text-amber-100
  shadow-[0_0_20px_rgba(245,158,11,0.08)]
  cursor-pointer
"
>
  Power BI
</motion.div>
</div>

{/* Bottom */}

<div className="absolute bottom-0 left-1/2 translate-y-14 -translate-x-1/2">
  <motion.div
  whileHover={{
    scale: 1.08,
    y: -4,
  }}
  transition={{ duration: 0.2 }}
 className="
  rounded-xl
  border
  border-emerald-400/30
  bg-emerald-500/10
  px-5
  py-3
  text-sm
  font-semibold
  text-emerald-100
  shadow-[0_0_20px_rgba(16,185,129,0.08)]
  cursor-pointer
"
>
  ERP
</motion.div>
</div>

{/* Left */}

<div className="absolute left-0 top-1/2 -translate-x-24 -translate-y-1/2">
  <motion.div
  whileHover={{
    scale: 1.08,
    y: -4,
  }}
  transition={{ duration: 0.2 }}
  className="
  rounded-xl
  border
  border-purple-400/30
  bg-purple-500/10
  px-5
  py-3
  text-sm
  font-semibold
  text-purple-100
  shadow-[0_0_20px_rgba(168,85,247,0.08)]
  cursor-pointer
"
>
  CRM
</motion.div>
</div>
  </div>

</div>

    {/* Ecosystem diagram goes here */}

  </div>
</section>

<div className="mx-auto mt-28 max-w-6xl">

  <div className="grid gap-8 lg:grid-cols-2">

 {/* Knowledge Hub Card */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{
    y: -6,
    scale: 1.015,
  }}
  transition={{
    duration: 0.18,
    ease: "easeOut",
  }}
  className="
    h-full
    rounded-3xl
    border
    border-cyan-500/20
    hover:border-cyan-400/60
    bg-slate-900
    p-6
sm:p-8
    transition-colors
  "
>

  <div className="flex items-center gap-4">

    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-2xl">
  🧠
</div>

    <div>
      <p className="text-xs tracking-[0.18em] text-cyan-300">
        KNOWLEDGE
      </p>

      <h3 className="text-2xl font-bold sm:text-3xl">
  Knowledge Hub
</h3>
    </div>

  </div>

  <p className="mt-6 text-slate-400 leading-8">
    Centralize every document, SOP, policy and training manual into one searchable source of truth.
  </p>

  <div className="mt-8 space-y-4">

    {[
      "KBOM Knowledge Base",
      "Policies & SOPs",
      "Training Documents",
      "Version Control",
    ].map((item) => (

      <div
        key={item}
        className="flex items-center gap-3"
      >
        <div className="h-2 w-2 rounded-full bg-cyan-400" />

        <span className="text-slate-300">
          {item}
        </span>

      </div>

    ))}

  </div>

</motion.div>
  {/* Business Intelligence Card */}

 <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{
    y: -6,
    scale: 1.015,
  }}
  transition={{
    duration: 0.18,
    ease: "easeOut",
  }}
  className="
    h-full
    rounded-3xl
    border
    border-cyan-500/20
    hover:border-cyan-400/60
    bg-slate-900
    p-6
sm:p-8
    transition-colors
  "
>

    <div className="mb-6 flex items-center gap-4">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-2xl">
        📊
      </div>

      <div>
        <p className="text-xs font-semibold tracking-[0.18em] text-cyan-300">
          ANALYTICS
        </p>

        <h3 className="text-2xl font-bold sm:text-3xl">
  Business Intelligence
</h3>
      </div>

    </div>

    <p className="mb-8 text-slate-400">
      Connect live business data to monitor performance, sales, finance and operations in real time.
    </p>

    <div className="space-y-4">

  {[
    "Power BI Dashboards",
    "Sales Analytics",
    "Financial Reporting",
    "KPI Monitoring",
  ].map((item) => (

    <div
      key={item}
      className="flex items-center gap-3"
    >
      <div className="h-2 w-2 rounded-full bg-cyan-400" />

      <span className="text-slate-300">
        {item}
      </span>
    </div>

  ))}

</div>

  </motion.div>
  {/* Business Systems Card */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{
    y: -6,
    scale: 1.015,
  }}
  transition={{
    duration: 0.18,
    ease: "easeOut",
  }}
  className="
    h-full
    rounded-3xl
    border
    border-cyan-500/20
    hover:border-cyan-400/60
    bg-slate-900/70
    p-6
sm:p-8
    backdrop-blur
    transition-colors
  "
>

  <div className="mb-6 flex items-center gap-4">

    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-2xl">
      🏢
    </div>

    <div>

      <p className="text-xs font-semibold tracking-[0.18em] text-cyan-300">
        OPERATIONS
      </p>

      <h3 className="text-2xl font-bold sm:text-3xl">
  Business Systems
</h3>

    </div>

  </div>

  <p className="mb-8 text-slate-400">
    Connect every operational platform so AI always works with live business information.
  </p>

  <div className="space-y-4">

  {[
    "ERP Integration",
    "CRM Integration",
    "HR & Finance Systems",
    "Inventory & Operations",
  ].map((item) => (

    <div
      key={item}
      className="flex items-center gap-3"
    >
      <div className="h-2 w-2 rounded-full bg-cyan-400" />

      <span className="text-slate-300">
        {item}
      </span>
    </div>

  ))}

</div>

</motion.div>
{/* AI Automation Card */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{
    y: -6,
    scale: 1.015,
  }}
  transition={{
    duration: 0.18,
    ease: "easeOut",
  }}
  className="
    h-full
    rounded-3xl
    border
    border-cyan-500/20
    hover:border-cyan-400/60
    bg-slate-900/70
    p-6
sm:p-8
    backdrop-blur
    transition-colors
  "
>

  <div className="mb-6 flex items-center gap-4">

    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-2xl">
      🤖
    </div>

    <div>

      <p className="text-xs font-semibold tracking-[0.18em] text-cyan-300">
        AUTOMATION
      </p>

      <h3 className="text-2xl font-bold sm:text-3xl">
  AI Automation
</h3>

    </div>

  </div>

  <p className="mb-8 text-slate-400">
    Automate repetitive work, approvals and business workflows using intelligent AI agents.
  </p>

  <div className="space-y-4">

  {[
    "AI Agents",
    "Workflow Automation",
    "Email & Task Automation",
    "Approval Workflows",
  ].map((item) => (

    <div
      key={item}
      className="flex items-center gap-3"
    >
      <div className="h-2 w-2 rounded-full bg-cyan-400" />

      <span className="text-slate-300">
        {item}
      </span>
    </div>

  ))}

</div>

</motion.div>
</div>
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.5,
    ease: "easeOut",
  }}
  className="mx-auto mt-24 max-w-6xl text-center"
>

  <div className="flex items-center justify-center gap-3">
  <div className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400/60" />

  <p className="text-sm font-semibold tracking-[0.18em] text-cyan-300">
    THE RESULT
  </p>

  <div className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-400/60" />
</div>

  <h3 className="mt-5 text-5xl font-black leading-tight">
    Every Department
    <br />
    Works As One
  </h3>

  <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-400">
  Instead of working across disconnected software, spreadsheets and departments,
  KORTEX brings your company knowledge and connected business systems together
  so employees can find answers, understand what is happening and make better decisions.
</p>
 </motion.div>

<section className="py-32">

  <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.5,
    ease: "easeOut",
  }}
  className="mx-auto max-w-5xl text-center"
>

    <p className="text-sm font-semibold tracking-[0.18em] text-cyan-300">
      READY TO START?
    </p>

    <h2 className="mt-5 text-5xl font-black leading-tight">
      Build Your Intelligent
      <br />
      Business Workspace
    </h2>

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-400">
  See how KoreVity can build KORTEX around your company knowledge,
  business systems and workflows to create one intelligent workspace
  designed for the way your business operates.
</p>

    <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

     <Link
  href="https://calendly.com/mohan-korevity/30min"
  target="_blank"
  rel="noopener noreferrer"
>
  <motion.div
    whileTap={{ scale: 0.98 }}
    className="
      group
      relative
      overflow-hidden
      rounded-xl
      bg-gradient-to-r
      from-cyan-500
      via-blue-500
      to-indigo-600
      px-8
      py-4
      font-semibold
      text-white
      shadow-lg
      cursor-pointer
    "
  >
    <span
      className="
        absolute
        inset-0
        -translate-x-full
        bg-gradient-to-r
        from-transparent
        via-white/40
        to-transparent
        transition-transform
        duration-700
        group-hover:translate-x-full
      "
    />

    <span className="relative z-10">
      Book Strategy Call
    </span>
  </motion.div>
</Link>

      <Link href="/services">
  <motion.div
    whileHover={{
      y: -3,
      scale: 1.02,
    }}
    whileTap={{
      scale: 0.98,
    }}
    transition={{
      duration: 0.16,
      ease: "easeOut",
    }}
    className="
      rounded-xl
      border
      border-cyan-500/20
      bg-slate-900
      px-8
      py-4
      font-semibold
      text-white
      transition-colors
      hover:border-cyan-400
      cursor-pointer
    "
  >
    Explore Services
  </motion.div>
</Link>

    </div>

  </motion.div>

</section>
</div>
</section>

      </main>

      <Footer />
    </>
  );
}