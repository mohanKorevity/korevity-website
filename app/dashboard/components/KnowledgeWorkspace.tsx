"use client";

import Link from "next/link";
import {
  Search,
  UploadCloud,
  Plus,
} from "lucide-react";

import { knowledgeCategories } from "../data/knowledgeData";
import KBOMTimeline from "./KBOMTimeline";
export default function KnowledgeWorkspace() {

  return (

    <section
      className="
        rounded-3xl
        border
        border-white/10
        bg-slate-900/60
        p-10
      "
    >

      <div
        className="
          flex
          items-center
          justify-between
        "
      >

        <div>

          <h1
            className="
              text-3xl
              font-bold
              text-white
            "
          >
            Knowledge Base
          </h1>


          <p
            className="
              mt-2
              text-slate-400
            "
          >
            Manage company knowledge, documents and AI references.
          </p>

        </div>


        <div
          className="
            flex
            gap-3
          "
        >

          <button
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-4
              py-3
              text-white
            "
          >

            <UploadCloud size={18} />

            Upload

          </button>


          <button
            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-4
              py-3
              font-semibold
              text-white
            "
          >

            <Plus size={18} />

            New Document

          </button>


        </div>


      </div>


      <div
        className="
          mt-10
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-white/10
          bg-white/5
          px-5
          py-4
        "
      >

        <Search
          className="text-slate-400"
        />


        <input
          placeholder="Search knowledge..."
          className="
            w-full
            bg-transparent
            text-white
            outline-none
          "
        />

      </div>
            {/* KBOM Timeline */}

      <div className="mt-12">

        <KBOMTimeline />

      </div>
      {/* Knowledge Categories */}

      <div
        className="
          mt-10
        "
      >

        <h2
          className="
            text-sm
            font-semibold
            uppercase
            tracking-wider
            text-cyan-300
          "
        >
          Knowledge Categories
        </h2>


        <div
          className="
            mt-5
            grid
            gap-5
            md:grid-cols-2
            xl:grid-cols-4
          "
        >

         {knowledgeCategories.map((category) => (

  <Link
    key={category.name}
    href={`/dashboard/knowledge/${encodeURIComponent(category.name)}`}
    className="
      rounded-2xl
      border
      border-white/10
      bg-white/5
      p-5
      transition
      hover:border-cyan-400/30
      hover:bg-cyan-400/5
    "
  >

              <h3
                className="
                  font-semibold
                  text-white
                "
              >
                {category.name}
              </h3>


              <p
                className="
                  mt-2
                  text-sm
                  text-slate-400
                "
              >
                Manage {category.name.toLowerCase()} knowledge and documents.
              </p>


            </Link>

          ))}

        </div>

      </div>
      {/* Document Sections */}

      <div
        className="
          mt-12
          grid
          gap-6
          xl:grid-cols-2
        "
      >

        {[
          {
            title: "Recent Documents",
            description:
              "Recently accessed company knowledge and files.",
          },
          {
            title: "Favorites",
            description:
              "Important documents saved for quick access.",
          },
          {
            title: "Drafts",
            description:
              "Documents currently being prepared.",
          },
          {
            title: "Archived",
            description:
              "Old or inactive knowledge resources.",
          },
        ].map((section) => (

          <div
            key={section.title}
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-6
            "
          >

            <h3
              className="
                text-lg
                font-semibold
                text-white
              "
            >
              {section.title}
            </h3>


            <p
              className="
                mt-2
                text-sm
                text-slate-400
              "
            >
              {section.description}
            </p>


            <div
              className="
                mt-5
                rounded-xl
                border
                border-dashed
                border-white/10
                p-5
                text-center
                text-sm
                text-slate-500
              "
            >
              No documents yet.
            </div>


          </div>

        ))}

      </div>
    </section>

  );

}