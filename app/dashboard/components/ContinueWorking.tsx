"use client";

import Link from "next/link";

type Props = {
  document: string;
  category: string;
};

export default function ContinueWorking({
  document,
  category,
}: Props) {
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
          font-semibold
          text-white
        "
      >
        Continue Working
      </h2>

      <div
        className="
          mt-8
          flex
          items-center
          justify-between
        "
      >
        <div>

          <p
            className="
              text-xl
              font-semibold
              text-white
            "
          >
            📄 {document}
          </p>

          <p
            className="
              mt-2
              text-slate-400
            "
          >
            {category}
          </p>

          <p
            className="
              mt-4
              text-sm
              text-cyan-300
            "
          >
            Last opened recently
          </p>

        </div>

        <Link
          href="/dashboard/knowledge"
          className="
            rounded-xl
            border
            border-cyan-400/20
            bg-cyan-400/10
            px-6
            py-3
            font-medium
            text-cyan-300
            transition
            hover:bg-cyan-400/20
          "
        >
          Continue →
        </Link>

      </div>

    </section>
  );
}