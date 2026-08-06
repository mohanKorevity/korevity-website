"use client";

import { useState } from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import {
  oneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  language?: string;
  filename?: string;
  code: string;
}

export default function CodeBlock({
  language = "text",
  filename,
  code,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-slate-950
        shadow-xl
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-white/10
          bg-slate-900
          px-5
          py-3
        "
      >
        <div className="flex items-center gap-3">
          <span
            className="
              rounded-full
              bg-cyan-400/10
              px-3
              py-1
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-cyan-300
            "
          >
            {language}
          </span>

          {filename && (
            <span className="text-sm text-slate-400">
              {filename}
            </span>
          )}
        </div>

        <button
          onClick={copyCode}
          className="
            rounded-lg
            border
            border-white/10
            px-3
            py-1.5
            text-xs
            text-slate-300
            transition
            hover:bg-white/10
          "
        >
          {copied ? "Copied ✓" : "Copy"}
        </button>
      </div>

      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          margin: 0,
          padding: "24px",
          background: "#020617",
          fontSize: "14px",
          overflowX: "auto",
        }}
        wrapLongLines={false}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}