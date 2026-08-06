import HighlightText from "../HighlightText";


interface DefinitionCardProps {
  title: string;
  text: string;
  search: string;
}

export default function DefinitionCard({
  title,
  text,
  search,
}: DefinitionCardProps) {
  return (
    <div
      className="
        my-6
        overflow-hidden
        rounded-3xl
        border
        border-violet-500/20
        bg-gradient-to-r
        from-violet-500/10
        via-slate-900/60
        to-slate-900/40
        backdrop-blur-sm
        shadow-[0_15px_35px_rgba(0,0,0,.25)]
      "
    >
      <div className="flex items-start gap-5 p-6">

        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-2xl
            border
            border-violet-400/25
            bg-violet-500/15
            text-xl
          "
        >
          📖
        </div>

        <div className="flex-1">

          <div className="font-semibold text-violet-300">
            Definition
          </div>

          <div className="mt-3 text-xl font-semibold text-white">
  <HighlightText
    text={title}
    search={search}
  />
</div>

          <div className="mt-3 leading-7 text-slate-300">
  <HighlightText
    text={text}
    search={search}
  />
</div>

        </div>

      </div>
    </div>
  );
}