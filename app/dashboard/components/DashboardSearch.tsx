"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardSearch() {
  const [query, setQuery] = useState("");
  const router = useRouter();
const results = [
  "Revenue Dashboard",
  "AI Assistant",
  "Knowledge Base",
  "Automation",
  "Mission",
  "Vision",
  "Core Values",
  "Business Analytics",
].filter((item) =>
  item.toLowerCase().includes(query.toLowerCase())
);  
  return (
    <div
      className="
        relative
        w-full
      "
    >
      <Search
        size={18}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-slate-500
        "
      />

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search dashboards, AI, knowledge, reports..."
        className="
          w-full

          rounded-2xl

          border
          border-white/10

          bg-slate-900/60

          py-4
          pl-12
          pr-5

          text-white
          placeholder:text-slate-500

          outline-none

          transition
          duration-300

          focus:border-cyan-400/40
          focus:bg-cyan-400/5
        "
      />

      {query && (

  <div
    className="
      absolute
      left-0
      right-0
      top-full
      z-50

      mt-3

      rounded-2xl

      border
      border-white/10

      bg-slate-900

      p-2
    "
  >

    {results.length > 0 ? (

      results.map((item) => (

        <button
  key={item}
  onClick={() => {

    switch (item) {

      case "Revenue Dashboard":
        router.push("/dashboard/analytics");
        break;

      case "AI Assistant":
        router.push("/dashboard/ai");
        break;

      case "Knowledge Base":
      case "Mission":
      case "Vision":
      case "Core Values":
        router.push("/dashboard/knowledge");
        break;

      case "Automation":
        router.push("/dashboard/workflows");
        break;

      default:
        break;

    }

  }}
  className="
            w-full

            rounded-xl

            px-4
            py-3

            text-left

            text-slate-300

            transition

            hover:bg-cyan-400/10
            hover:text-cyan-300
          "
        >
          {item}
        </button>

      ))

    ) : (

      <p
        className="
          px-4
          py-3
          text-slate-500
        "
      >
        No results found.
      </p>

    )}

  </div>

)}
    </div>
  );
}