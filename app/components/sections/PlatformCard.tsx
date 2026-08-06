"use client";
import type { ReactNode } from "react";

import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import {
   BookOpen,
    Brain,
  Bot,
  Workflow,
  BarChart3,

  FileText,
  Database,
  Search,

  Link2,
  GitBranch,
 

  Activity,
  Gauge,
  

  Sparkles,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
type PlatformCardProps = {
  title: string;
  description: string;
  icon: string;
  features: string[];
  delay?: number;
};

export default function PlatformCard({
  title,
  description,
  icon,
  features,
  delay = 0,
}: PlatformCardProps) {
    
   const icons = {
  knowledge: {
    icon: <BookOpen  size={32} strokeWidth={2.2} />,
    gradient: "from-sky-400 via-cyan-500 to-blue-700",
    glow: "shadow-[0_0_45px_rgba(34,211,238,0.45)]",
    text: "text-cyan-100",
    bullet: "bg-cyan-400",
  },

  automation: {
    icon: <Workflow size={32} strokeWidth={2.2} />,
    gradient: "from-emerald-400 via-green-500 to-teal-700",
    glow: "shadow-[0_0_45px_rgba(16,185,129,0.45)]",
    text: "text-white",
    bullet: "bg-emerald-400",
  },

  operations: {
    icon: <BarChart3 size={32} strokeWidth={2.2} />,
    gradient: "from-indigo-400 via-blue-500 to-violet-700",
    glow: "shadow-[0_0_45px_rgba(59,130,246,0.45)]",
    text: "text-white",
    bullet: "bg-blue-400",
  },

  ai: {
    icon: <Bot size={32} strokeWidth={2.2} />,
    gradient: "from-fuchsia-400 via-purple-500 to-pink-600",
    glow: "shadow-[0_0_45px_rgba(217,70,239,0.45)]",
    text: "text-white",
    bullet: "bg-fuchsia-400",
  },
};
const featureIcons: Record<string, ReactNode> = {
  // Business Knowledge
  "Document Intelligence": <FileText size={16} />,
  "Business Knowledge": <Database size={16} />,
  "Instant Search": <Search size={16} />,

  // Automation
  "Workflow Automation": <Workflow size={16} />,
  "System Integrations": <Link2 size={16} />,
  "Process Orchestration": <GitBranch size={16} />,

  // Operations
  "Power BI Dashboards": <BarChart3 size={16} />,
  "Live KPIs": <Gauge size={16} />,
  "Operational Visibility": <Activity size={16} />,

  // AI
  "AI Insights": <Sparkles size={16} />,
  "Decision Support": <Lightbulb size={16} />,
  "Business Recommendations": <TrendingUp size={16} />,
};
const currentIcon = icons[icon as keyof typeof icons];
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
    >
      <GlassCard className="h-full">

        <div
  className={`
    flex
    items-center
    gap-4
    ${icon === "automation" || icon === "ai" ? "pl-6" : ""}
  `}
>

          <motion.div
  animate={{
  y:[0,-4,0],
rotate:[0,2,0,-2,0],
  boxShadow: [
    "0 0 18px rgba(255,255,255,.18)",
    "0 0 45px rgba(255,255,255,.38)",
    "0 0 18px rgba(255,255,255,.18)",
  ],
}}
  transition={{
  y: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
    rotate: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  },
  boxShadow: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
}}
  className={`
  relative
  flex
  h-16
  w-16
  items-center
  justify-center
  overflow-hidden
  rounded-3xl
  border
  border-white/10
  backdrop-blur-sm
  bg-gradient-to-br
  ${currentIcon.gradient}
  ${currentIcon.glow}
`}
>
    <motion.div
  className="
    absolute
    inset-0
    rounded-3xl
    bg-gradient-to-r
    from-white/20
    via-transparent
    to-transparent
  "
  animate={{
    rotate: [0, 360],
    
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "linear",
  }}
/>
  <span className={`relative z-10 ${currentIcon.text}`}>
  {currentIcon.icon}
</span>
</motion.div>

          <h3 className="text-2xl font-bold text-white">
            {title}
          </h3>

        </div>

        <p
          className="
            mt-6
            leading-8
            text-slate-400
          "
        >
          {description}
        </p>

        <div className="mt-8 space-y-3">

          {features.map((feature, index) => (
            <div
              key={feature}
              className="flex items-center gap-4"
            >
              <motion.div
  animate={{
  y: [0,-2,0],
}}
transition={{
  duration: 2,
  repeat: Infinity,
  delay: index * 0.3,
  ease: "easeInOut",
}}
  className={`
    flex
    h-8
    w-8
    items-center
    justify-center
    rounded-xl
    bg-white/5
    border
    border-white/10
    ${currentIcon.text}
    shadow-md
`}
>
  {featureIcons[feature]}
</motion.div>

              <span className="text-slate-300">
                {feature}
              </span>
            </div>
          ))}

        </div>

      </GlassCard>
    </motion.div>
  );
}