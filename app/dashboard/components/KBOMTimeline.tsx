"use client";

import { useState } from "react";
import { kbomPhaseIndex } from "../data/knowledge/KBOM/metadata/kbomPhaseIndex";
function sortPhases(a:any,b:any){

  const aParts = a.phase
    .split(".")
    .map(Number);

  const bParts = b.phase
    .split(".")
    .map(Number);


  for(
    let i = 0;
    i < Math.max(aParts.length,bParts.length);
    i++
  ){

    const av = aParts[i] ?? 0;
    const bv = bParts[i] ?? 0;


    if(av !== bv){
      return av - bv;
    }

  }


  return 0;

}

export default function KBOMTimeline() {

  const documents = kbomPhaseIndex;

  const [expanded, setExpanded] = useState<string | null>(null);
function isValidPhase(title:string){

  const invalid = [
    "Progress",
    "Complete",
    "Complete ✅",
    "is complete",
    "Phase Reference"
  ];

  return (
    title.length > 3 &&
    !invalid.includes(title.trim())
  );

}


const cleanDocuments = documents
  .map((doc:any)=>({

    ...doc,

    phases: doc.phases
      .filter((p:any)=>isValidPhase(p.title))
      .sort(sortPhases)

  }))
  .filter((doc:any)=>doc.phases.length > 0);

  return (
    
    <section
      className="
        rounded-3xl
        border
        border-white/10
        bg-slate-900/60
        p-8
      "
    >

      <h2
        className="
          text-2xl
          font-bold
          text-white
        "
      >
        KoreVity Evolution Timeline
      </h2>


      <p
        className="
          mt-2
          text-slate-400
        "
      >
        Knowledge Base Operating Model phases and architecture evolution.
      </p>


      <div
        className="
          mt-8
          space-y-6
        "
      >

        {cleanDocuments.map((doc) => (

          <div
            key={doc.id}
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-6
            "
          >

           <button
  onClick={() =>
    setExpanded(
      expanded === doc.id ? null : doc.id
    )
  }
  className="
    flex
    w-full
    items-center
    justify-between
    text-left
  "
>

  <div>

<h3
  className="
    text-xl
    font-semibold
    text-cyan-300
  "
>
  {doc.title}
</h3>


<p
  className="
    mt-2
    text-sm
    text-slate-400
  "
>
  Knowledge architecture evolution timeline
</p>

</div>


  <span
  className="
    rounded-full
    border
    border-cyan-400/20
    bg-cyan-400/10
    px-3
    py-1
    text-xs
    text-cyan-200
  "
>
  {doc.phases.length} phases
</span>


</button>

<div className="mt-4">

  <div
    className="
      flex
      items-center
      justify-between
      text-xs
      text-slate-400
    "
  >
    <span>Knowledge Progress</span>

    <span>{doc.phases.length} documented phases</span>
  </div>

  <div
    className="
      mt-2
      h-2
      overflow-hidden
      rounded-full
      bg-white/10
    "
  >
    <div
      className="
        h-full
        rounded-full
        bg-gradient-to-r
        from-cyan-400
        to-blue-500
      "
      style={{ width: "100%" }}
    />
  </div>

</div>

            {expanded === doc.id && (

<div
  className="
    relative
    mt-8
    ml-4
    border-l
    border-cyan-400/20
    pl-8
    space-y-8
  "
>

  {doc.phases.map((phase:any,index:number)=>(

    <div
      key={`${phase.phase}-${index}`}
      className="
        relative
      "
    >

      {/* Timeline Node */}

      <div
        className="
          absolute
          -left-[46px]
          top-3
          h-5
          w-5
          rounded-full
          border
          border-cyan-300
          bg-slate-950
          shadow-lg
          shadow-cyan-500/30
        "
      />


      <button
  type="button"
  onClick={() => {
    console.log(doc.id, phase.phase);
  }}
  className="
    w-full
    rounded-2xl
    border
    border-white/10
    bg-white/5
    p-5
    text-left
    transition
    hover:border-cyan-400/40
    hover:bg-cyan-400/5
  "
>

        <div
          className="
            flex
            items-center
            justify-between
          "
        >

          <div
  className="
    flex
    items-center
    gap-3
  "
>

  <span
    className="
      flex
      h-8
      w-8
      items-center
      justify-center
      rounded-full
      bg-cyan-400/10
      text-sm
      font-bold
      text-cyan-300
    "
  >
    {phase.phase}
  </span>


  <span
    className="
      text-lg
      font-bold
      text-white
    "
  >
    Phase {phase.phase}
  </span>

</div>


          <span
  className="
    rounded-full
    border
    border-emerald-400/20
    bg-emerald-400/10
    px-3
    py-1
    text-xs
    font-medium
    uppercase
    tracking-wide
    text-emerald-300
  "
>
  {phase.status}
</span>


        </div>


        <p
  className="
    mt-4
    text-base
    leading-relaxed
    text-slate-200
  "
>
  {phase.title}
</p>


      </button>


    </div>

  ))}

</div>
)}
          </div>

        ))}

      </div>


    </section>
  );
}