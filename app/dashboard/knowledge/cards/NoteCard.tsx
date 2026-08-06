import { Lightbulb } from "lucide-react";
import HighlightText from "../HighlightText";
interface NoteCardProps {
  text: string;
  search: string;
}

export default function NoteCard({
  text,
  search,
}: NoteCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-900 to-slate-800 shadow-lg shadow-cyan-500/10">

      {/* Left accent */}
      <div className="absolute left-0 top-0 h-full w-1 bg-cyan-400" />

      <div className="flex gap-4 p-6">

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/30">
          <Lightbulb className="h-6 w-6 text-cyan-300" />
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Note
          </h4>

          <p className="leading-7 text-slate-300">
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