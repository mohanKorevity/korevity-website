import HighlightText from "../HighlightText";

export default function RiskCard({
  text,
  search,
}: {
  text: string;
  search: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-red-400/20 bg-gradient-to-br from-red-500/10 to-red-500/5 p-6">
      <div className="absolute left-0 top-0 h-full w-1 bg-red-400" />

      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-400/15 text-2xl">
          🚨
        </div>

        <div>
          <h3 className="font-semibold text-red-300">
            Risk
          </h3>

          <p className="mt-2 leading-7 text-slate-300">
  <HighlightText
    text={text}
    search={search}
  />
</p>
        </div>
      </div>
    </div>
  );
}