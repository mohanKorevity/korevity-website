interface MilestoneCardProps {
  title: string;
  description: string;
}

export default function MilestoneCard({
  title,
  description,
}: MilestoneCardProps) {
  return (
    <div
      className="
        my-6
        overflow-hidden
        rounded-3xl
        border
        border-emerald-500/20
        bg-gradient-to-r
        from-emerald-500/10
        via-slate-900/60
        to-slate-900/40
        backdrop-blur-sm
        shadow-[0_15px_35px_rgba(0,0,0,.25)]
      "
    >
      <div className="flex items-center gap-5 p-6">

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-emerald-400/30
            bg-emerald-500/15
            text-2xl
          "
        >
          ✓
        </div>

        <div className="flex-1">

          <div className="text-xl font-semibold text-white">
            {title}
          </div>

          <div className="mt-2 leading-7 text-slate-300">
            {description}
          </div>

        </div>

      </div>
    </div>
  );
}