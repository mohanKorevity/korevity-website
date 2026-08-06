"use client";
import HighlightText from "./HighlightText";
interface ListBlockProps {
  items: string[];
  listType?: "ordered" | "unordered";
  search: string;
}

export default function ListBlock({
  items,
  listType,
  search,
}: ListBlockProps) {
  return (
    <div
      className="
        my-6
        overflow-hidden
        rounded-3xl
        border
        border-cyan-500/20
        bg-slate-900/40
        backdrop-blur-sm
        shadow-[0_10px_35px_rgba(0,0,0,0.25)]
      "
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="
            flex
            items-start
            gap-4
            px-6
            py-4
            border-b
            border-white/[0.03]
            last:border-b-0

            transition-all
            duration-200

            hover:bg-cyan-400/5
            hover:translate-x-1
          "
        >
          <div
            className="
              mt-0.5
              flex
              h-7
              w-7
              shrink-0
              items-center
              justify-center
              rounded-full

              border
              border-cyan-400/20
              bg-cyan-500/15

              text-[10px]
              font-semibold
              text-cyan-300
            "
          >
            {listType === "ordered"
              ? String(index + 1).padStart(2, "0")
              : "•"}
          </div>

          <div
  className="
    flex-1
    leading-7
    text-slate-300
  "
>
  <HighlightText
    text={item}
    search={search}
  />
</div>
        </div>
      ))}
    </div>
  );
}