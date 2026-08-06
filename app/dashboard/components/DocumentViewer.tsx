"use client";
import { useRef } from "react";
import { useEffect, useMemo, useState } from "react";
import { kbomIndex } from "../data/knowledge/KBOM/metadata/kbomIndex";
import { kbomContent } from "../data/knowledge/KBOM/generated/kbomContent";
import FlowDiagram from "../knowledge/FlowDiagram";
import NoteCard from "../knowledge/cards/NoteCard";
import WarningCard from "../knowledge/cards/WarningCard";
import DecisionCard from "../knowledge/cards/DecisionCard";
import RiskCard from "../knowledge/cards/RiskCard";
import DeliverableCard from "../knowledge/cards/DeliverableCard";
import TimelineCard from "../knowledge/cards/TimelineCard";
import PhaseCard from "../knowledge/cards/PhaseCard";
import MilestoneCard from "../knowledge/cards/MilestoneCard";
import InfoCard from "../knowledge/cards/InfoCard";
import SuccessCard from "../knowledge/cards/SuccessCard";
import TipCard from "../knowledge/cards/TipCard";
import DefinitionCard from "../knowledge/cards/DefinitionCard";
import BlockRenderer from "../knowledge/BlockRenderer";
type DocumentType = {
  category: string;
  updated: string;
  version: string;
  summary: string;
  tags: string[];
  status: string;

  history: {
    version: string;
    date: string;
    note: string;
  }[];

  sections: {
  id: string;
  title: string;
  

 blocks: {
 type:
  | "paragraph"
  | "flow"
  | "list"
  | "table"
  | "note"
  | "warning"
  | "risk"
  | "decision"
  | "deliverable"
  | "timeline"
  | "phase"
  | "milestone";

  text?: string;

  steps?: string[];

  listType?: "ordered" | "unordered";

  rows?: string[][];

  title?: string;
  description?: string;
  label?: string;
  language?: string;
filename?: string;
code?: string;
}[];
}[];
};
export default function DocumentViewer({
  category,
  docName,
}: {
  category: string;
  docName: string;
}) {

const kbomDocument = kbomIndex.find(
  (item) => item.id === docName
);
  const kbomContentDoc = kbomContent.find(
  (item: any) => item.id.startsWith(docName)
);







const doc =
  kbomDocument && kbomContentDoc
    ? {
        category: kbomDocument.domain,
        updated: "July 2026",
        version: "1.0",
        summary: kbomDocument.title,
        tags: [
          kbomDocument.code,
          "KBOM",
          "Architecture",
        ],
        status: kbomDocument.status,
        history: [],

        sections: (kbomContentDoc.sections ?? []).map((section: any) => ({
  id: section.id,
  title: section.title,
  blocks: section.blocks ?? [],
})),
      }
    : null;
const [activeSection, setActiveSection] = useState("");

const [progress, setProgress] = useState(0);
const [readingProgress, setReadingProgress] = useState(0);
const [collapsedSections, setCollapsedSections] = useState<
  Record<string, boolean>
>({});

const [search, setSearch] = useState("");
const contentsRef = useRef<HTMLDivElement>(null);
const [debouncedSearch, setDebouncedSearch] = useState("");
useEffect(() => {
  if (!activeSection) return;

  const container = contentsRef.current;
  if (!container) return;

  const activeButton = container.querySelector(
    `[data-nav="${activeSection}"]`
  ) as HTMLElement | null;

  if (!activeButton) return;

  const containerRect = container.getBoundingClientRect();
  const buttonRect = activeButton.getBoundingClientRect();

  const isAbove = buttonRect.top < containerRect.top;
  const isBelow = buttonRect.bottom > containerRect.bottom;

  if (isAbove || isBelow) {
    activeButton.scrollIntoView({
      block: "nearest",
      behavior: "smooth",
    });
  }
}, [activeSection]);
useEffect(() => {
  const onScroll = () => {
    const sections = document.querySelectorAll("[data-section]");

    let current = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= 150) {
        current = section.getAttribute("data-section") || "";
      }
    });

    setActiveSection((previous) => {
      if (previous === current) return previous;
      return current;
    });

    const documentSections = Array.from(
  document.querySelectorAll("[data-section]")
);

if (!documentSections.length) return;

let read = 0;

documentSections.forEach((section) => {
  const rect = section.getBoundingClientRect();

  // Count a section once its top has reached the top 25% of the viewport
  if (rect.top <= window.innerHeight * 0.25) {
    read++;
  }
});

const percentage = Math.min(
  100,
  (read / documentSections.length) * 100
);

setReadingProgress(percentage);
  };

  window.addEventListener("scroll", onScroll);

  onScroll();

  return () => window.removeEventListener("scroll", onScroll);
}, []);



useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedSearch(search);
  }, 250);

  return () => clearTimeout(timer);
}, [search]);
  if (!doc) {

    return (
      <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-10">

        <h1 className="text-2xl font-bold text-white">
          Document Not Found
        </h1>

        <p className="mt-3 text-slate-400">
          {category} / {docName}
        </p>

      </div>
    );

  }


const searchInputRef = useRef<HTMLInputElement>(null);

const filteredSections = useMemo(() => {
  
  if (!debouncedSearch.trim()) {
    return doc.sections;
  }

  const q = debouncedSearch.toLowerCase();

  return doc.sections.filter((section: any) => {
    if (
      section.searchText &&
      section.searchText.includes(q)
    ) {
      return true;
    }

    return (
      section.title.toLowerCase().includes(q) ||
      section.blocks.some((block: any) => {
        if (block.text?.toLowerCase().includes(q)) return true;
        if (block.title?.toLowerCase().includes(q)) return true;
        if (block.description?.toLowerCase().includes(q)) return true;

        if (
          block.steps?.some((s: string) =>
            s.toLowerCase().includes(q)
          )
        )
          return true;

        if (
          block.rows?.some((row: string[]) =>
            row.some((cell: string) =>
              cell.toLowerCase().includes(q)
            )
          )
        )
          return true;

        return false;
      })
    );
  });
}, [doc.sections, debouncedSearch]);
const estimatedReadingMinutes = useMemo(() => {
  const words = filteredSections.reduce(
    (total: number, section: any) => {
      return (
        total +
        section.blocks.reduce(
          (count: number, block: any) => {
            const text = JSON.stringify(block).replace(/[{}[\]":,]/g, " ");
return count + text.split(/\s+/).filter(Boolean).length;
          },
          0
        )
      );
    },
    0
  );

  return Math.max(1, Math.ceil(words / 220));
}, [filteredSections]);

const currentSectionIndex = filteredSections.findIndex(
  (section: any) => section.id === activeSection
);

useEffect(() => {
  const onKeyDown = (e: KeyboardEvent) => {
    // Ignore while typing normally
    const target = e.target as HTMLElement;

    if (
      target.tagName === "INPUT" ||
      target.tagName === "TEXTAREA"
    ) {
      // ESC clears search
      if (e.key === "Escape") {
        setSearch("");
        searchInputRef.current?.blur();
      }

      return;
    }

    // "/" focuses search
    if (e.key === "/") {
      e.preventDefault();
      searchInputRef.current?.focus();
      return;
    }

    const currentIndex = filteredSections.findIndex(
      (s) => s.id === activeSection
    );

    // Arrow Down
    if (e.key === "ArrowDown") {
      e.preventDefault();

      const next =
        filteredSections[
          Math.min(
            currentIndex + 1,
            filteredSections.length - 1
          )
        ];

      if (next) {
        document
          .getElementById(next.id)
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }
    }

    // Arrow Up
    if (e.key === "ArrowUp") {
      e.preventDefault();

      const prev =
        filteredSections[
          Math.max(currentIndex - 1, 0)
        ];

      if (prev) {
        document
          .getElementById(prev.id)
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }
    }

    // Home
    if (e.key === "Home") {
      e.preventDefault();

      document
        .getElementById(filteredSections[0]?.id)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }

    // End
    if (e.key === "End") {
      e.preventDefault();

      const last =
        filteredSections[filteredSections.length - 1];

      document
        .getElementById(last?.id)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }
  };

  window.addEventListener("keydown", onKeyDown);

  return () =>
    window.removeEventListener("keydown", onKeyDown);
}, [activeSection, filteredSections]);

  return (

  <div
    className="
      rounded-3xl
      border
      border-white/10
      bg-slate-900/60
      p-10
      text-white
    "
  >

    
<div className="grid gap-10 lg:grid-cols-[280px_1fr]">

  {/* Left Column */}

<div
  className="
    lg:sticky
    lg:top-24
    self-start
  "
>

    {/* Progress */}

<div
  className="
    mb-6
    rounded-3xl
    border
    border-white/10
    bg-slate-950/90
    backdrop-blur-xl
    p-6
  "
>
  <div className="flex items-center justify-between">

    <div>
      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
        Progress
      </p>

      <p className="mt-2 text-4xl font-bold text-cyan-300">
        {Math.round(readingProgress)}%
      </p>
    </div>

    <div className="text-right">
      <p className="text-xs text-slate-500">
        Section
      </p>

      <p className="mt-2 text-lg font-semibold text-white">
        {currentSectionIndex >= 0 ? currentSectionIndex + 1 : 1}
        {" / "}
        {filteredSections.length}
      </p>
    </div>

  </div>

  <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
    <div
      className="h-full rounded-full bg-cyan-400 transition-all duration-300"
      style={{
        width: `${readingProgress}%`,
      }}
    />
  </div>
</div>

    
    

      {/* Header */}

      {/* Left Sidebar */}

      <aside
  className="
    
    overflow-hidden

    rounded-3xl
    border
    border-white/10
    bg-white/5
    p-6
  "
>

    <h3
  className="
    text-lg
    font-bold
    text-cyan-300
  "
>
  Contents
</h3>

<p className="mt-1 text-xs text-slate-500">
  {filteredSections.length} Sections
</p>

    <div
  ref={contentsRef}
  className="
    mt-6
    space-y-2

    max-h-[60vh]
    overflow-y-auto
    pr-2
  "
>

      {filteredSections.map((section, sectionIndex) => (

        <button
  key={section.id}
  data-nav={section.id}
  onClick={() => {
    document
      .getElementById(section.id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }}
  className={`
group

flex
w-full
items-start
gap-3

rounded-xl

border
border-transparent

px-3
py-2

text-left

transition-all
duration-200

hover:border-cyan-400/20
hover:bg-cyan-400/10
hover:translate-x-1

${
  activeSection === section.id
    ? "border-cyan-400/30 bg-cyan-400/15 shadow-[0_0_15px_rgba(34,211,238,.08)]"
    : ""
}
`}
>

          <span
  className={`
    w-8
    shrink-0

    text-sm
    font-bold

    transition-colors

    ${
      activeSection === section.id
        ? "text-cyan-300"
        : "text-slate-500 group-hover:text-cyan-300"
    }
  `}
>
            {(sectionIndex + 1).toString().padStart(2, "0")}
          </span>

          <span
  className={`
flex-1

text-sm
leading-6

transition-colors

${
  activeSection === section.id
    ? "text-white"
    : "text-slate-400 group-hover:text-white"
}
`}
>
            {section.title}
          </span>

        </button>

      ))}

    </div>

  </aside>
  </div>

  {/* Main Content */}

<div>

  
      

  {/* Header */}

  <div>

      {/* Hero Header */}

<div className="border-b border-white/10 pb-10">

  {/* Breadcrumb */}

  <button
    onClick={() => window.history.back()}
    className="
      mb-6
      inline-flex
      items-center
      gap-2
      text-sm
      text-cyan-300
      transition-colors
      hover:text-cyan-200
    "
  >
    ← {category}
  </button>

  {/* KBOM Badge */}

  <div
    className="
      inline-flex
      items-center
      rounded-full
      border
      border-cyan-400/20
      bg-cyan-400/10
      px-4
      py-1
      text-xs
      font-semibold
      uppercase
      tracking-[0.2em]
      text-cyan-300
    "
  >
    {doc.tags[0]}
  </div>

  {/* Title */}

  <h1
    className="
      mt-6
      max-w-5xl
      text-6xl
      font-bold
      leading-tight
      tracking-tight
      text-white
    "
  >
    {doc.summary}
  </h1>

  {/* Subtitle */}

  

</div>


      {/* Document Metadata */}

<div
  className="
    mt-10
    grid
    grid-cols-2
    gap-5
    rounded-3xl
    border
    border-white/10
    bg-gradient-to-br
    from-slate-900/70
    to-slate-800/40
    p-7
    md:grid-cols-3
    xl:grid-cols-6
  "
>

  {/* Status */}

  <div>

    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
      Status
    </p>

    <p className="mt-3 font-semibold text-emerald-300">
      ● {doc.status}
    </p>

  </div>

  {/* Version */}

  <div>

    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
      Version
    </p>

    <p className="mt-3 font-semibold text-white">
      {doc.version}
    </p>

  </div>

  {/* Updated */}

  <div>

    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
      Updated
    </p>

    <p className="mt-3 font-semibold text-white">
      {doc.updated}
    </p>

  </div>

  {/* Sections */}

  <div>

    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
      Sections
    </p>

    <p className="mt-3 font-semibold text-cyan-300">
  {filteredSections.length}
</p>

  </div>

  {/* Category */}

  <div>

    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
      Category
    </p>

    <p className="mt-3 font-semibold text-sky-300">
      {doc.category}
    </p>

  </div>

  {/* Ready */}

  <div>

    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
      Readiness
    </p>

    <p className="mt-3 font-semibold text-emerald-300">
      Production Ready
    </p>

  </div>

</div>


<div
  className="
    mt-8
    rounded-2xl
    border
    border-white/10
    bg-white/5
    p-5

    flex
    flex-col
    gap-5
  "
>

  

  {/* Search */}

  <input
    type="text"
    placeholder="Search this document..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="
      w-full
      rounded-2xl
      border
      border-white/10
      bg-white/5
      px-5
      py-3
      text-white
      placeholder:text-slate-500
      outline-none
      transition-all
      focus:border-cyan-400/40
      focus:bg-white/[0.07]
    "
  />

  <div className="flex flex-wrap gap-3">

  <button
    onClick={() => {
      const next: Record<string, boolean> = {};

      doc.sections.forEach((section) => {
        next[section.id] = true;
      });

      setCollapsedSections(next);
    }}
    className="
      rounded-xl
      border
      border-cyan-400/20
      bg-cyan-400/10
      px-5
      py-2
      text-sm
      font-medium
      text-cyan-300
      transition-all
      hover:bg-cyan-400/20
    "
  >
    Collapse All
  </button>

  <button
    onClick={() => setCollapsedSections({})}
    className="
      rounded-xl
      border
      border-white/10
      bg-white/5
      px-5
      py-2
      text-sm
      font-medium
      text-white
      transition-all
      hover:bg-white/10
    "
  >
    Expand All
 </button>

</div>

</div>



      {/* Sections */}

      <div className="mt-12 space-y-10">

{filteredSections.length === 0 ? (

  <div
    className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-16
      text-center
    "
  >
    <div className="text-6xl">
      🔍
    </div>

    <h2 className="mt-6 text-3xl font-bold text-white">
      No Results Found
    </h2>

    <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
      We couldn't find anything matching{" "}
      <span className="font-semibold text-cyan-300">
        "{search}"
      </span>
      .
      <br />
      Try another keyword or browse the document sections.
    </p>

    <button
      onClick={() => setSearch("")}
      className="
        mt-8
        rounded-xl
        border
        border-cyan-400/20
        bg-cyan-400/10
        px-6
        py-3
        text-cyan-300
        transition-all
        hover:bg-cyan-400/20
      "
    >
      Clear Search
    </button>

  </div>

) : (

  filteredSections.map((section, sectionIndex) => (
        

          <div
        key={section.id}
  id={section.id}
  data-section={section.id}
  className="
group
  rounded-3xl
  border
  border-white/10
  bg-white/5
  p-8
  transition-all
  duration-300
  hover:border-cyan-400/30
  hover:bg-white/[0.07]
"
>

  <div className="flex items-start gap-6">

    <div
  className="
  mt-1
  flex
  h-16
  w-16
   shrink-0
  items-center
  justify-center

  rounded-2xl

  border
  border-cyan-400/25

  bg-gradient-to-br
  from-cyan-400/20
  via-cyan-400/10
  to-transparent

  text-xl
  font-bold
  tracking-wider
  text-cyan-300

  shadow-[0_0_25px_rgba(34,211,238,0.12)]

  transition-all
  duration-300

  group-hover:scale-105
"
>
      {(sectionIndex + 1).toString().padStart(2, "0")}
    </div>

    <div className="flex-1">

      <div className="flex items-start justify-between gap-4">

  <h2
  className="
    text-[2rem]
font-bold
leading-tight
tracking-tight
text-white

transition-colors
duration-300

group-hover:text-cyan-50
    "
  >
    {section.title}
  </h2>

  <button
  onClick={() =>
    setCollapsedSections((prev) => ({
      ...prev,
      [section.id]: !prev[section.id],
    }))
  }
  className="
    flex
    items-center
    gap-2

    rounded-xl
    border
    border-cyan-400/20
    bg-cyan-400/5

    px-4
    py-2

    text-sm
    font-medium
    text-cyan-300

    transition-all
    duration-300

    hover:bg-cyan-400/10
    hover:border-cyan-400/40
  "
>
  <svg
    className={`
      h-4
      w-4
      transition-transform
      duration-300
      ${
        collapsedSections[section.id]
          ? "-rotate-90"
          : "rotate-0"
      }
    `}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 9l-7 7-7-7"
    />
  </svg>

  {collapsedSections[section.id]
    ? "Expand"
    : "Collapse"}
</button>
</div>

      <div
  className="
    mt-4
    h-px

bg-gradient-to-r

from-cyan-400/40
via-cyan-400/10
to-white/5
  "
/>

      <div
  className={`
    overflow-hidden
    transition-all
    duration-500
    ease-in-out

    ${
      collapsedSections[section.id]
        ? "max-h-0 opacity-0 mt-0"
        : "max-h-[6000px] opacity-100 mt-6"
    }
  `}
>
  <div className="space-y-5">

        {(() => {
          
  const rendererBlocks = [
  "paragraph",
  "note",
  "warning",
  "decision",
  "risk",
  "deliverable",
  "flow",
  "timeline",
  "phase",
  "milestone",
  "info",
  "success",
  "tip",
  "definition",
  "list",
  "table",
  "code",
];

const rendered: React.ReactElement[] = [];
let i = 0;

while (i < section.blocks.length) {
  const block = section.blocks[i];

  if (rendererBlocks.includes(block.type)) {
    rendered.push(
      <BlockRenderer
  key={i}
  block={block}
  search={search}
/>
    );

    i++;
    continue;
  }

   

    

    i++;
  }

  return rendered;
})()}


      {/* Code Blocks */}





</div>
</div>

</div>

</div>

</div>

))

)}

            </div> {/* End Sections */}

      {/* Tags */}

      <div className="mt-10 flex flex-wrap gap-3">
        {doc.tags.map((tag) => (
          <span
            key={tag}
            className="
              rounded-full
              bg-cyan-400/10
              px-4
              py-2
              text-sm
              text-cyan-300
            "
          >
            {tag}
          </span>
        ))}
      </div>

    </div>
  </div>

</div>

</div>

 );


}