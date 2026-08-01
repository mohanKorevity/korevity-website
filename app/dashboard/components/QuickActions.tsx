import Link from "next/link";

import {
  ArrowRight,
  BrainCircuit,
  BookOpen,
  BarChart3,
  Workflow,
} from "lucide-react";

const actions = [
  {
    title: "Knowledge",
    description: "Browse company knowledge and documentation.",
    icon: BookOpen,
    href: "/dashboard/knowledge",
  },
  {
    title: "AI Assistant",
    description: "Ask AI about your business instantly.",
    icon: BrainCircuit,
    href: "/dashboard/assistant",
  },
  {
    title: "Business Intelligence",
    description: "View dashboards and business insights.",
    icon: BarChart3,
    href: "/dashboard/analytics",
  },
  {
    title: "Automations",
    description: "Manage workflows and AI automations.",
    icon: Workflow,
    href: "/dashboard/automations",
  },
];

export default function QuickActions() {
  return (
    <section>

      <h2
        className="
          mb-6
          text-2xl
          font-semibold
          text-white
        "
      >
        Quick Actions
      </h2>

      <div
        className="
          grid
          gap-6
          md:grid-cols-2
          xl:grid-cols-4
        "
      >
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
  href={action.href}
              key={action.title}
              className="
                group
cursor-pointer
hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]   
                rounded-3xl
                border
                border-white/10
                bg-slate-900/60
                p-7
                text-left
                transition
                duration-300

                hover:border-cyan-400/30
                hover:bg-cyan-400/5
                hover:-translate-y-1
              "
            >
              <div
                className="
                  mb-5
                  inline-flex
                  rounded-2xl
                  border
                  border-cyan-400/20
                  bg-cyan-400/10
                  p-4
                "
              >
                <Icon
                  size={24}
                  className="text-cyan-300"
                />
              </div>

              <h3
                className="
                  text-lg
                  font-semibold
                  text-white
                "
              >
                {action.title}
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-7
                  text-slate-400
                "
              >
                {action.description}
              </p>
            <div
  className="
    mt-8
    flex
    items-center
    justify-between
  "
>

  <span
    className="
      text-sm
      font-medium
      text-cyan-300
    "
  >
    Open
  </span>

  <ArrowRight
    size={18}
    className="
      text-cyan-300
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
  />

</div>

</Link>
          );
        })}
      </div>

    </section>
  );
}