"use client";

interface TOCItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export default function TableOfContents({
  items,
}: TableOfContentsProps) {
  return (
    <aside
      className="
        sticky
        top-24
        hidden
        h-fit
        w-72
        xl:block
      "
    >
      <div
        className="
          rounded-3xl
          border
          border-cyan-500/20
          bg-slate-900/60
          p-6
          backdrop-blur-xl
        "
      >
        <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-cyan-300">
          On this page
        </h3>

        <div className="space-y-2">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() =>
                document
                  .getElementById(item.id)
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
              }
              className="
                block
                w-full
                rounded-xl
                px-3
                py-2
                text-left
                text-sm
                text-slate-400
                transition
                hover:bg-cyan-500/10
                hover:text-cyan-300
              "
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}