"use client";
import { useEffect, useState } from "react";
import { kbomIndex } from "../data/knowledge/KBOM/metadata/kbomIndex";
import { kbomContent } from "../data/knowledge/KBOM/generated/kbomContent";

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
  paragraphs: string[];
  lists: string[][];
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





console.log("SECTIONS:");


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
  paragraphs: section.paragraphs ?? [],
  lists: section.lists ?? [],
})),
      }
    : null;
const [activeSection, setActiveSection] = useState("");
const [progress, setProgress] = useState(0);
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

    setActiveSection(current);

    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const scrolled = window.scrollY;

    setProgress((scrolled / totalHeight) * 100);
  };

  window.addEventListener("scroll", onScroll);

  onScroll();

  return () => window.removeEventListener("scroll", onScroll);
}, []);

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

    <div className="sticky top-0 z-50 mb-8 h-1 overflow-hidden rounded-full bg-white/5">
      <div
        className="h-full bg-cyan-400 transition-all duration-200"
        style={{ width: `${progress}%` }}
      />
    </div>

    <div className="grid gap-10 lg:grid-cols-[280px_1fr]">

      {/* Header */}

      {/* Left Sidebar */}

      <aside
    className="
      lg:sticky
      lg:top-24
      h-fit
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

    <div className="mt-6 space-y-2">

      {doc.sections.map((section, index) => (

        <button
  key={section.id}
  onClick={() => {
    document
      .getElementById(section.id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }}
  className={`
    flex
    w-full
    items-start
    gap-3
    rounded-xl
    px-3
    py-2
    text-left
    transition-all
    duration-300

    ${
      activeSection === section.id
        ? "bg-cyan-400/15 border border-cyan-400/30"
        : "hover:bg-white/5"
    }
  `}
>

          <span
  className={`
    w-8
    text-sm
    font-bold
    transition-colors

    ${
      activeSection === section.id
        ? "text-cyan-300"
        : "text-slate-500"
    }
  `}
>
            {(index + 1).toString().padStart(2, "0")}
          </span>

          <span
  className={`
    text-sm
    transition-colors

    ${
      activeSection === section.id
        ? "text-white"
        : "text-slate-400"
    }
  `}
>
            {section.title}
          </span>

        </button>

      ))}

    </div>

  </aside>

  {/* Main Content */}

  <div>

    {/* Header */}

    <div> 

      {/* Hero Header */}

<div className="border-b border-white/10 pb-8">

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
      tracking-wider
      text-cyan-300
    "
  >
    {doc.tags[0]}
  </div>

  <h1
    className="
      mt-5
      max-w-4xl
      text-5xl
      font-bold
      leading-tight
      text-white
    "
  >
    {doc.summary}
  </h1>

  <p
    className="
      mt-5
      max-w-3xl
      text-lg
      leading-relaxed
      text-slate-400
    "
  >
    {doc.category}
  </p>

</div>


      {/* Metadata Strip */}

<div
  className="
    mt-8
    flex
    flex-wrap
    gap-6
    rounded-2xl
    border
    border-white/10
    bg-white/5
    px-6
    py-5
  "
>

  <div>
    <p className="text-xs uppercase tracking-wider text-slate-500">
      Status
    </p>

    <p className="mt-1 font-semibold text-emerald-300">
      {doc.status}
    </p>
  </div>

  <div className="h-10 w-px bg-white/10" />

  <div>
    <p className="text-xs uppercase tracking-wider text-slate-500">
      Version
    </p>

    <p className="mt-1 font-semibold">
      {doc.version}
    </p>
  </div>

  <div className="h-10 w-px bg-white/10" />

  <div>
    <p className="text-xs uppercase tracking-wider text-slate-500">
      Updated
    </p>

    <p className="mt-1 font-semibold">
      {doc.updated}
    </p>
  </div>

  <div className="h-10 w-px bg-white/10" />

  <div>
    <p className="text-xs uppercase tracking-wider text-slate-500">
      Sections
    </p>

    <p className="mt-1 font-semibold text-cyan-300">
      {doc.sections.length}
    </p>
  </div>

</div>



      {/* Sections */}

      <div className="mt-12 space-y-10">


        {doc.sections.map((section, sectionIndex) => (

          <div
        key={section.id}
  id={section.id}
  data-section={section.id}
  className="
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
        flex
        h-12
        w-12
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-cyan-400/10
        text-lg
        font-bold
        text-cyan-300
      "
    >
      {(sectionIndex + 1).toString().padStart(2, "0")}
    </div>

    <div className="flex-1">

      <h2
  className="
    text-2xl
    font-bold
    tracking-tight
    text-white
  "
>
        {section.title}
      </h2>

      <div
        className="
          mt-4
          h-px
          bg-white/10
        "
      />

      <div className="mt-6 space-y-5">

        {section.paragraphs.map(
          
          (paragraph: any, index: number) => (

            <p
              key={index}
              className="
  text-[16px]
  leading-8
  text-slate-300
  selection:bg-cyan-400/30
"
            >
              {paragraph}
            </p>

          )
        )}
{section.lists?.map((list: string[], listIndex: number) => (
  <ul
    key={listIndex}
    className="mt-4 list-disc space-y-2 pl-6 text-slate-300"
  >
    {list.map((item: string, itemIndex: number) => (
      <li
        key={itemIndex}
        className="leading-7 marker:text-cyan-400"
      >
        {item}
      </li>
    ))}
  </ul>
))}
      </div>

    </div>

  </div>

</div>

                ))}

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