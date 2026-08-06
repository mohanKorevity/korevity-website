import Link from "next/link";
import {
  FileText,
  Search,
  BrainCircuit,
  Database,
  ShieldCheck,
  Activity,
  Network,
} from "lucide-react";
import { knowledgeCategories } from "../../data/knowledgeData";
import KBOMTimeline from "../../components/KBOMTimeline";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{
    category: string;
  }>;
}) {
  const { category } = await params;

  const categoryName = decodeURIComponent(category);

  const data = knowledgeCategories.find(
    (item) => item.name === categoryName
  );

  return (
  <section className="space-y-10">

    {/* Header */}

    <div
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
    items-start
    gap-6
  "
>

  <div
    className="
      flex
      h-16
      w-16
      items-center
      justify-center
      rounded-2xl
      border
      border-cyan-400/20
      bg-cyan-400/10
    "
  >

    <BrainCircuit
      size={34}
      className="text-cyan-300"
    />

  </div>

  <div>

    <h1 className="text-4xl font-bold text-white">
      {categoryName}
    </h1>

    <p className="mt-3 max-w-3xl text-slate-400">
      Explore documents, enterprise architecture,
      implementation plans and knowledge assets for this
      category.
    </p>

  </div>

</div>

    </div>

    {/* Search */}

    <div
      className="
        flex
        items-center
        gap-3
        rounded-2xl
        border
        border-white/10
        bg-slate-900/60
        px-6
        py-5
      "
    >

      <Search className="text-slate-400" />

      <input
        placeholder={`Search ${categoryName}...`}
        className="
          w-full
          bg-transparent
          text-white
          outline-none
        "
      />

    </div>
    <h2
  className="
    mb-6
    text-sm
    font-semibold
    uppercase
    tracking-widest
    text-cyan-300
  "
>
  Knowledge Overview
</h2>
{/* Knowledge Overview */}

    <div
      className="
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-4
      "
    >

      <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-7">

  <div className="flex items-center gap-4">

    <div
  className="
    flex
    h-14
    w-14
    items-center
    justify-center
    rounded-2xl
    border
   border-blue-400/20
bg-gradient-to-br
from-blue-500/20
to-indigo-500/10
  "
>
      <Database
        size={24}
        className="text-sky-300"
      />
    </div>

    <div>

  <p className="text-sm text-slate-400">
    Knowledge Assets
  </p>

  <h3 className="mt-2 text-4xl font-bold text-white">
    {data?.documents.length ?? 0}
  </h3>

  <p className="mt-1 text-xs text-slate-500">
    Enterprise knowledge documents
  </p>

</div>

  </div>

</div>

      <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-7">

  <div className="flex items-center gap-4">

    <div
      className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        border
      border-amber-400/20
bg-gradient-to-br
from-amber-400/20
to-orange-500/10
      "
    >
      <Network
  size={24}
  className="text-amber-300"
/>
    </div>
    

    <div>

      <p className="text-sm text-slate-400">
        Domain
      </p>

      <h3 className="text-3xl font-bold text-teal-300">
        {categoryName}
      </h3>
<p className="mt-1 text-xs text-slate-500">
  Active knowledge domain
</p>
    </div>

  </div>

</div>

      <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-7">

  <div className="flex items-center gap-4">

    <div
      className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        border
        border-emerald-400/20
        bg-gradient-to-br
        from-emerald-400/20
        to-green-500/10
      "
    >
      <ShieldCheck
        size={24}
        className="text-emerald-300"
      />
    </div>

    <div>

      <p className="text-sm text-slate-400">
        Documentation
      </p>

      <h3 className="text-3xl font-bold text-emerald-400">
        Verified
      </h3>

      <p className="mt-1 text-xs text-slate-500">
        Production ready assets
      </p>

    </div>

  </div>

</div>

      <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-7">

  <div className="flex items-center gap-4">

    <div
      className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        border
        border-violet-400/20
        bg-gradient-to-br
        from-violet-400/20
        to-indigo-500/10
      "
    >
      <Activity
        size={24}
        className="text-violet-300"
      />
    </div>

    <div>

      <p className="text-sm text-slate-400">
        Knowledge Coverage
      </p>

      <h3 className="text-4xl font-bold text-white">
        100%
      </h3>

      <p className="mt-1 text-xs text-slate-500">
        Repository complete
      </p>

    </div>

  </div>

</div>

    </div>
    {/* Featured */}

    <div>

      <h2
        className="
          mb-6
          text-sm
          font-semibold
          uppercase
          tracking-widest
          text-cyan-300
        "
      >
        Featured Documents
      </h2>

      <div className="grid gap-6 lg:grid-cols-3">

        {data?.documents.slice(0,3).map((doc)=>(
          <Link
            key={doc.id}
            href={`/dashboard/knowledge/${encodeURIComponent(categoryName)}/${encodeURIComponent(doc.id)}`}
            className="
              group
              rounded-3xl
              border
              border-cyan-400/20
              bg-gradient-to-br
              from-cyan-500/10
              to-slate-900
              p-8
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-cyan-400/50
            "
          >

            <div className="flex items-center justify-between">
  <span
  className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
    doc.id === "KBOM-FND-001"
      ? "bg-sky-500/15 text-sky-300"
      : doc.id === "KBOM-ARC-002"
      ? "bg-violet-500/10 text-violet-300"
      : doc.id === "KBOM-ENT-003"
      ? "bg-amber-500/10 text-amber-300"
      : "bg-cyan-400/10 text-cyan-300"
  }`}
>
  Core Document
</span>

  <span className="text-emerald-300 text-sm">
    ✓ Verified
  </span>
</div>

<h3 className="mt-6 text-2xl font-bold text-white">
  {doc.name}
</h3>

<p className="mt-3 text-slate-400">
  Enterprise Knowledge Asset
</p>

<div className="mt-8 flex items-center justify-between">

  <div>
    <p className="text-xs text-slate-500">
      Documentation
    </p>

    <p
  className={`font-medium ${
    doc.id === "KBOM-FND-001"
      ? "text-sky-300"
      : doc.id === "KBOM-ARC-002"
      ? "text-violet-300"
      : doc.id === "KBOM-ENT-003"
      ? "text-amber-300"
      : "text-cyan-300"
  }`}
>
  Production Ready
</p>
  </div>

  <div
  className={`text-2xl transition-transform group-hover:translate-x-1 ${
    doc.id === "KBOM-FND-001"
      ? "text-sky-300"
      : doc.id === "KBOM-ARC-002"
      ? "text-violet-300"
      : doc.id === "KBOM-ENT-003"
      ? "text-amber-300"
      : "text-cyan-300"
  }`}
>
  →
</div>

</div>

          </Link>
        ))}

      </div>

    </div>

    {/* All Documents */}

    <div>

      <h2
        className="
          mb-6
          text-sm
          font-semibold
          uppercase
          tracking-widest
          text-cyan-300
        "
      >
        All Documents
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {data?.documents.map((doc)=>(

          <Link
            key={doc.id}
            href={`/dashboard/knowledge/${encodeURIComponent(categoryName)}/${encodeURIComponent(doc.id)}`}
            className="
              group
              rounded-2xl
              border
              border-white/10
              bg-slate-900/60
              p-6
              transition-all
              duration-300
              hover:border-cyan-400/40
              hover:bg-cyan-400/5
              hover:-translate-y-2
hover:shadow-[0_0_35px_rgba(34,211,238,0.08)]
            "
          >

            <div className="flex items-start justify-between">

  <div
    className="
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-2xl
      bg-cyan-400/10
      text-cyan-300
    "
  >
    <FileText size={22} />
  </div>

  <span
    className="
      rounded-full
      bg-emerald-400/10
      px-3
      py-1
      text-xs
      font-semibold
      text-emerald-300
    "
  >
    Published
  </span>

</div>

<h3
  className="
    mt-6
    text-2xl
    font-bold
    text-white
  "
>
  {doc.name}
</h3>

<p
  className="
    mt-2
    text-sm
    text-slate-400
  "
>
  Enterprise Architecture
</p>

<div
  className="
    mt-5
    flex
    gap-2
  "
>

  <span
    className="
      rounded-full
      bg-cyan-400/10
      px-3
      py-1
      text-xs
      text-cyan-300
    "
  >
    KBOM
  </span>

  <span
    className="
      rounded-full
      bg-white/5
      px-3
      py-1
      text-xs
      text-slate-300
    "
  >
    Architecture
  </span>

</div>

<div
  className="
    mt-6
    border-t
    border-white/10
  "
/>

<div
  className="
    mt-6
    flex
    items-center
    justify-between
  "
>

  <span
    className="
      text-sm
      text-slate-500
    "
  >
    Open document
  </span>

  <span
    className="
      text-cyan-300
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
  >
    →
  </span>

</div>

          </Link>

        ))}

      </div>

    </div>

    

    {/* Timeline */}

    {categoryName === "AI Knowledge" && (

      <div>

        <h2
          className="
            mb-6
            text-sm
            font-semibold
            uppercase
            tracking-widest
            text-cyan-300
          "
        >
          Architecture Evolution Timeline
        </h2>

        <KBOMTimeline />

      </div>

    )}

  </section>
);
}