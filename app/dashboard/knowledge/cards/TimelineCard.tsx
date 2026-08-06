interface TimelineCardProps {
  label: string;
  description: string;
}

export default function TimelineCard({
  label,
  description,
}: TimelineCardProps) {
  return (
    <div className="relative flex gap-5 py-6">

      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <div className="h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,.6)]" />

        <div className="mt-2 h-full w-px bg-cyan-500/30" />
      </div>

      {/* Content */}
      <div className="flex-1 rounded-2xl border border-cyan-500/20 bg-slate-900/40 p-6 backdrop-blur-sm">

        <div className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
          {label}
        </div>

        <div className="mt-2 text-slate-300 leading-7">
          {description}
        </div>

      </div>
    </div>
  );
}