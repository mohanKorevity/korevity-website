import { ArrowUpRight, Sparkles } from "lucide-react";

type CaseStudyCardProps = {
  industry: string;
  title: string;
  result: string;
  technologies: string[];
};

export default function CaseStudyCard({
  industry,
  title,
  result,
  technologies,
}: CaseStudyCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-8 transition-all duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-[0_20px_60px_rgba(37,99,235,0.25)]">

      {/* Glow */}

      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:bg-blue-500/20"></div>

      {/* Header */}

      <div className="relative flex items-center justify-between">

        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold tracking-widest text-blue-400">
          {industry}
        </span>

        <Sparkles
          size={20}
          className="text-blue-400"
        />

      </div>

      {/* Title */}

      <h3 className="relative mt-8 text-2xl font-bold text-white">
        {title}
      </h3>

      {/* KPI */}

      <div className="relative mt-8">

        <p className="text-5xl font-black text-blue-400">
          {result}
        </p>

        <p className="mt-2 text-slate-400">
          Business Performance Improvement
        </p>

      </div>

      {/* Tech */}

      <div className="relative mt-10 flex flex-wrap gap-3">

        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300 transition-colors duration-300 group-hover:border-blue-500/40"
          >
            {tech}
          </span>
        ))}

      </div>

      {/* Footer */}

      <div className="relative mt-10 flex items-center justify-between border-t border-slate-800 pt-6">

        <span className="text-sm text-slate-400">
          View Solution
        </span>

        <ArrowUpRight
          size={22}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />

      </div>

    </div>
  );
}