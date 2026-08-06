interface FlowNodeProps {
  number: number;
  title: string;
}
const icons: Record<string, string> = {
  // Business Cycle
  lead: "👤",
  customer: "🤝",
  work: "💼",
  resources: "📦",
  operations: "⚙️",
  money: "💰",
  finance: "💰",
  accounting: "💳",
  insights: "📊",
  analytics: "📈",
  reports: "📑",
  improvements: "🚀",
  repeat: "🔄",

  // AI
  ai: "🤖",
  intelligence: "🧠",
  knowledge: "🧠",
  enterprise: "🏢",
  architecture: "🏗️",
  application: "🖥️",
  applications: "🖥️",
  software: "💻",
  system: "🖧",
  platform: "🌐",

  // Layers
  layer: "🧩",
  experience: "✨",
  presentation: "🖥️",
  business: "🏢",
  data: "🗄️",
  integration: "🔗",
  integrations: "🔗",
  api: "🔌",

  // Security
  security: "🔒",
  governance: "🛡️",
  compliance: "✔️",
  identity: "🪪",
  authentication: "🔑",
  authorization: "🛂",

  // Operations
  workflow: "🔄",
  automation: "⚡",
  process: "⚙️",
  approval: "✅",
  task: "📋",

  // People
  people: "👥",
  employee: "👨‍💼",
  manager: "👔",
  admin: "🛠️",
  team: "👥",

  // Sales
  sales: "💵",
  marketing: "📣",
  support: "🎧",
  service: "🛎️",

  // Supply Chain
  procurement: "🛒",
  inventory: "📦",
  warehouse: "🏬",
  logistics: "🚚",
  vendor: "🏭",

  // Projects
  project: "📁",
  planning: "🗓️",
  timeline: "📅",
  milestone: "🏁",
  phase: "🚩",

  // Documents
  document: "📄",
  documents: "📚",
  policy: "📘",
  sop: "📙",
  manual: "📕",

  // Technology
  database: "🗄️",
  cloud: "☁️",
  server: "🖥️",
  dashboard: "📊",
  mobile: "📱",
  web: "🌍",
};
export default function FlowNode({
  number,
  title,
}: FlowNodeProps) {
    const lower = title.toLowerCase();

const icon =
  Object.entries(icons).find(([key]) => lower.includes(key))?.[1] ?? "📄";
  return (
    <div
      className="
        group
        relative
        w-full
        max-w-md
        rounded-3xl
        border
        border-cyan-500/20
        bg-gradient-to-br
        from-slate-900/90
        via-slate-900/70
        to-slate-800/60
        p-6
        shadow-[0_15px_35px_rgba(0,0,0,.35)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-400/40
        hover:shadow-[0_20px_45px_rgba(34,211,238,.12)]
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          rounded-3xl
          bg-cyan-400/5
          opacity-0
          blur-xl
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Badge */}

      <div
        className="
          relative
          mx-auto
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          border
          border-cyan-400/30
          bg-cyan-400/10
          text-lg
          font-bold
          text-cyan-300
          transition-all
          duration-300
          group-hover:scale-110
        "
      >
        {String(number).padStart(2, "0")}
      </div>

      {/* Title */}

      <div className="relative mt-6 flex items-center justify-center gap-3">

  <span className="text-2xl">
    {icon}
  </span>

  <span
    className="
      text-xl
      font-semibold
      tracking-wide
      text-white
    "
  >
    {title}
  </span>

</div>
    </div>
  );
}