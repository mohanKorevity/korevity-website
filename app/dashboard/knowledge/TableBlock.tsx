"use client";
import HighlightText from "./HighlightText";
interface TableBlockProps {
  rows: string[][];
  search: string;
}

export default function TableBlock({
  rows,
  search,
}: TableBlockProps) {
  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-slate-900/50
        shadow-[0_10px_40px_rgba(0,0,0,0.25)]
      "
    >
      <div className="relative">

  {/* Left Shadow */}
  <div
    className="
      pointer-events-none
      absolute
      left-0
      top-0
      z-30
      h-full
      w-6
      bg-gradient-to-r
      from-slate-900
      to-transparent
    "
  />

  {/* Right Shadow */}
  <div
    className="
      pointer-events-none
      absolute
      right-0
      top-0
      z-30
      h-full
      w-6
      bg-gradient-to-l
      from-slate-900
      to-transparent
    "
  />

  <div
    className="
      max-h-[700px]
      overflow-auto
    "
  >
        <table className="min-w-full border-collapse">
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`
                  transition-colors
                  duration-200
                  hover:bg-cyan-400/5
                  ${
  rowIndex !== 0 && rowIndex % 2 === 0
    ? "bg-white/[0.02]"
    : ""
}
                  }
                `}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                  className={`
  border-b
  border-white/10
  px-6
  py-4
  text-sm
  align-top
  ${
    rowIndex === 0
      ? `
        sticky
        top-0
        z-20
        bg-slate-900
        font-semibold
        text-cyan-300
        shadow-md
      `
      : "text-slate-300"
  }
`}
                  >
                    <HighlightText
  text={cell}
  search={search}
/>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
  </div>
</div>
</div>
  );
}