"use client";
import { useState } from "react";
const showcaseItems = [
  {
    id: "knowledge",
    title: "Business Knowledge Engine",
    image: "/images/showcase/knowledge.png",
    description:
      "Transform SOPs, documents, emails and policies into one searchable AI knowledge hub.",
    features: [
      "AI-powered document search",
      "Natural language questions",
      "Knowledge across every department",
      "Always up-to-date information",
    ],
  },

  {
    id: "automation",
    title: "Intelligent Automation",
    image: "/images/showcase/automation.png",
    description:
      "Automate repetitive business workflows while connecting every system you already use.",
    features: [
      "Workflow automation",
      "System integrations",
      "Approval processes",
      "Background task execution",
    ],
  },

  {
    id: "dashboard",
    title: "Operational Intelligence",
    image: "/images/showcase/dashboard.png",
    description:
      "Monitor your entire business with real-time dashboards and operational visibility.",
    features: [
      "Live KPIs",
      "Executive dashboards",
      "Performance tracking",
      "Business reporting",
    ],
  },

  {
    id: "advisor",
    title: "AI Business Advisor",
    image: "/images/showcase/advisor.png",
    description:
      "Ask questions about your business and receive intelligent recommendations instantly.",
    features: [
      "AI recommendations",
      "Decision support",
      "Business summaries",
      "Actionable insights",
    ],
  },
];
const demoConversations = [
  {
    role: "CEO",
    color: "cyan",
    question: "How did the business perform this month?",
    answer: {
      title: "Business Performance Summary",
      body: [
        "Revenue increased 18% compared to last month.",
        "Customer retention improved by 6%.",
        "Delivery delays reduced by 14%.",
      ],
      recommendation:
        "Increase inventory for your fastest-growing products before next month.",
      sources: [
        "Power BI Executive Dashboard",
        "Monthly Sales Report",
        "ERP Sales Data",
      ],
    },
  },

  {
    role: "HR Manager",
    color: "emerald",
    question: "How do we onboard a new employee?",
    answer: {
      title: "Employee Onboarding",
      body: [
        "Complete HR documentation.",
        "Create IT accounts.",
        "Manager approval required.",
      ],
      recommendation:
        "Average onboarding time is 2 business days.",
      sources: [
        "HR Handbook",
        "Employee Onboarding SOP",
        "IT Access Policy",
      ],
    },
  },

  {
    role: "Warehouse Manager",
    color: "orange",
    question: "What's our return policy for damaged products?",
    answer: {
      title: "Damaged Product Returns",
      body: [
        "Returns accepted within 30 days.",
        "Warehouse approval required.",
        "Refunds processed within 48 hours.",
      ],
      recommendation:
        "Always attach inspection photos before approval.",
      sources: [
        "Warehouse SOP",
        "Returns Policy",
        "Quality Manual",
      ],
    },
  },

  {
    role: "Finance Manager",
    color: "blue",
    question: "Which invoices are overdue this week?",
    answer: {
      title: "Outstanding Invoices",
      body: [
        "18 invoices are overdue.",
        "Outstanding balance: $126,400.",
        "Largest overdue customer: ABC Logistics.",
      ],
      recommendation:
        "Send payment reminders today.",
      sources: [
        "Finance Dashboard",
        "Accounts Receivable",
        "Customer Ledger",
      ],
    },
  },

  {
    role: "Sales Manager",
    color: "purple",
    question: "Who are our top customers this month?",
    answer: {
      title: "Top Customers",
      body: [
        "Top 5 customers generated 41% of revenue.",
        "Highest growth account: Global Freight Ltd.",
      ],
      recommendation:
        "Schedule follow-up meetings with the top three customers.",
      sources: [
        "CRM",
        "Sales Dashboard",
        "Customer Reports",
      ],
    },
  },

  {
    role: "Operations Manager",
    color: "pink",
    question: "Why were deliveries delayed yesterday?",
    answer: {
      title: "Delivery Delay Analysis",
      body: [
        "42 deliveries were delayed.",
        "Primary cause: Supplier shipment arrived 3 hours late.",
        "Backlog cleared before end of day.",
      ],
      recommendation:
        "Enable automatic supplier delay alerts.",
      sources: [
        "Delivery Dashboard",
        "Warehouse Logs",
        "Supplier Performance Report",
      ],
    },
  },
];
export default function ProductShowcase() {
    const [activeDemo] = useState(0);

const current = demoConversations[activeDemo];
  return (
    <section
      id="showcase"
      className="bg-slate-950 py-36"
    >
      <div className="mx-auto max-w-7xl px-8">

        <h2 className="text-center text-5xl font-black text-white">
          Experience the KoreVity Platform
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xl text-slate-400">
          Explore how Business Intelligence, AI and Automation come together
          inside one intelligent workspace.
        </p>

        <div className="mt-20 mx-auto max-w-5xl">

  <div className="rounded-3xl border border-cyan-500/20 bg-slate-900/70 p-8 backdrop-blur-xl">

  <div className="mb-6 flex items-center justify-between">

    <div>
      <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
        {current.role}
      </p>

      <h3 className="mt-2 text-3xl font-bold text-white">
        Business Knowledge Engine
      </h3>
    </div>

    <div className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm text-emerald-400">
      ● Connected
    </div>

  </div>

  <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">

    <p className="text-slate-400">
      You
    </p>

    <p className="mt-2 text-xl text-white">
      "{current.question}"
    </p>

  </div>

  <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8">

    <h4 className="text-2xl font-bold text-white">
      {current.answer.title}
    </h4>

    <div className="mt-6 space-y-4">

      {current.answer.body.map((item) => (

        <div
          key={item}
          className="flex items-start gap-3"
        >
          <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />

          <p className="text-slate-300">
            {item}
          </p>

        </div>

      ))}

    </div>

    <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">

      <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">
        AI Recommendation
      </p>

      <p className="mt-2 text-slate-200">
        {current.answer.recommendation}
      </p>

    </div>

    <div className="mt-8">

      <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
        Sources Used
      </p>

      <div className="mt-4 flex flex-wrap gap-3">

        {current.answer.sources.map((source) => (

          <span
            key={source}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
          >
            {source}
          </span>

        ))}

      </div>

    </div>

  </div>

</div>

</div>

      </div>
    </section>
  );
}