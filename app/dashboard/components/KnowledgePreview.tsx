"use client";
import Link from "next/link";
import {
  UploadCloud,
  FolderOpen,
  Database,
  CheckCircle2,
} from "lucide-react";


const documents = [
  {
    name: "KBOM Framework",
    count: 126,
  },
  {
    name: "109 Business Phases",
    count: 109,
  },
  {
    name: "SOP Library",
    count: 42,
  },
  {
    name: "Sales Playbooks",
    count: 18,
  },
  {
    name: "Client Onboarding",
    count: 12,
  },
  {
    name: "AI Prompt Library",
    count: 31,
  },
];


export default function KnowledgeBase() {


  return (

    <div
      className="
        rounded-3xl

        border
        border-white/10

        bg-slate-900/60

        p-8

        backdrop-blur-xl
      "
    >


      {/* Header */}

      <div
        className="
          flex
          items-center
          gap-3
        "
      >

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-xl

            bg-cyan-400/20
          "
        >

          <Database
            className="
              h-5
              w-5
              text-cyan-300
            "
          />

        </div>


        <div>

          <h3
            className="
              text-xl
              font-bold
              text-white
            "
          >
            Knowledge Base
          </h3>


          <p
            className="
              text-sm
              text-slate-400
            "
          >
            Store business information for AI-powered insights.
          </p>


        </div>


      </div>





      {/* Upload Area */}

      <div
        className="
          mt-8

          flex
          flex-col
          items-center
          justify-center

          rounded-2xl

          border
          border-dashed
          border-cyan-400/30

          bg-cyan-400/5

          p-8

          text-center
        "
      >

        <UploadCloud
          className="
            h-10
            w-10
            text-cyan-300
          "
        />


        <h4
          className="
            mt-4
            font-semibold
            text-white
          "
        >
          Upload Business Documents
        </h4>


        <p
          className="
            mt-2
            text-sm
            text-slate-400
          "
        >
          PDFs, spreadsheets, reports and company documents.
        </p>


        <button
          className="
            mt-5

            rounded-xl

            bg-gradient-to-r

            from-cyan-500

            to-blue-600

            px-5

            py-2.5

            text-sm

            font-semibold

            text-white

            transition

            hover:scale-105
          "
        >

          Upload File

        </button>


      </div>





      {/* Stored Documents */}

      <div
        className="
          mt-8
        "
      >

        <h4
          className="
            text-sm
            font-semibold
            uppercase
            tracking-wider
            text-cyan-300
          "
        >
          Stored Knowledge
        </h4>



        <div
          className="
            mt-5

            flex
            flex-col
            gap-4
          "
        >

          {
            documents.map((document)=>(
              
              <Link
  key={document.name}
  href={`/dashboard/knowledge/${encodeURIComponent(document.name)}`}
  className="
    flex
    items-center
    justify-between

    rounded-2xl

    border
    border-white/10

    bg-white/5

    p-4

    transition

    hover:border-cyan-400/30
    hover:bg-cyan-400/5
    hover:translate-x-1
  "
>

  <div
    className="
      flex
      items-center
      gap-3
    "
  >

    <FolderOpen
      className="
        h-5
        w-5
        text-cyan-300
      "
    />

    <div>

      <span
        className="
          text-sm
          text-slate-300
        "
      >
        {document.name}
      </span>

      <p
        className="
          text-xs
          text-slate-500
        "
      >
        {document.count} Documents
      </p>

    </div>

  </div>

  <CheckCircle2
    className="
      h-5
      w-5
      text-emerald-300
    "
  />

</Link>

            ))
          }


        </div>


      </div>


{/* Knowledge Categories */}

<div className="mt-10">

  <h4
    className="
      text-sm
      font-semibold
      uppercase
      tracking-wider
      text-cyan-300
    "
  >
    Knowledge Categories
  </h4>

  <div
    className="
      mt-5
      grid
      gap-5
      md:grid-cols-2
      xl:grid-cols-4
    "
  >

    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h3 className="font-semibold text-white">
        SOPs
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        Standard operating procedures.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h3 className="font-semibold text-white">
        Sales
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        Proposals, pricing and sales playbooks.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h3 className="font-semibold text-white">
        Operations
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        Internal workflows and documentation.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h3 className="font-semibold text-white">
        AI Knowledge
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        KBOM, AI prompts and business intelligence.
      </p>
    </div>

  </div>

</div>
    </div>

  );

}