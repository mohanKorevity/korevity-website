import HighlightText from "../HighlightText";



interface InfoCardProps {
  text: string;
  search: string;
}
export default function InfoCard({
  text,
  search,
}: InfoCardProps) {
  return (
    <div
      className="
        my-6
        overflow-hidden
        rounded-3xl
        border
        border-sky-500/20
        bg-gradient-to-r
        from-sky-500/10
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
            border-sky-400/25
            bg-sky-500/15
            text-xl
          "
        >
          ℹ
        </div>

        <div>

          <div className="font-semibold text-sky-300">
            Information
          </div>

          <div className="mt-2 leading-7 text-slate-300">
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