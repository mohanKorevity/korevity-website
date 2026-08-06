import fs from "fs";
import path from "path";
import mammoth from "mammoth";
import { parse } from "node-html-parser";
import { detectBlockType } from "../app/dashboard/data/knowledge/utils/blockDetector";
import { parseSpecialBlock } from "../app/dashboard/data/knowledge/utils/blockParser";
import { detectStructures } from "../app/dashboard/data/knowledge/utils/detectStructures";
import {
  ContentBlock,
  Section,
} from "./compiler/models/types";
import { normalizeText } from "./compiler/utils/normalizeText";

const documentsPath = path.join(
  process.cwd(),
  "app/dashboard/data/knowledge/KBOM/documents"
);

const outputPath = path.join(
  process.cwd(),
  "app/dashboard/data/knowledge/KBOM/content"
);

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// ADD THIS HERE
const usedIds = new Map<string, number>();



function uniqueSlug(text: string) {
  const base = slugify(text);

  const count = usedIds.get(base) || 0;
  usedIds.set(base, count + 1);

  return count === 0 ? base : `${base}-${count}`;
}

async function extractDocument(fileName: string) {
usedIds.clear();
  const filePath = path.join(documentsPath, fileName);

  const result = await mammoth.convertToHtml({
  path: filePath,
});



const normalizedHtml = normalizeText(result.value);

fs.writeFileSync("debug.html", normalizedHtml);

const root = parse(normalizedHtml);





  
const sections: Section[] = [];
let currentSection: Section | null = null;

  for (const node of root.childNodes) {

  if (node.nodeType !== 1) continue;

  const element: any = node;

  // -----------------------------
  // Heading
  // -----------------------------

  if (element.tagName === "P") {

  const strong = element.querySelector("strong");

  const rawText = element.text.trim();



  

  const text = normalizeText(rawText);





  // Ignore empty paragraphs
  if (!text) continue;

  // Entire paragraph is bold -> section heading
 const tag = element.tagName;

const isHeading =
  tag === "H1" ||
  tag === "H2" ||
  tag === "H3" ||
  (
    strong &&
    strong.text.trim() === text
  );

if (isHeading) {

  currentSection = {
    id: `${fileName.replace(".docx","")}-${uniqueSlug(text)}`,
    title: text,
    blocks: [],
  };

  sections.push(currentSection);

  continue;
}

// Normal paragraph
if (!currentSection) {

  currentSection = {
    id: "introduction",
    title: "Introduction",
    blocks: [],
  };

  sections.push(currentSection);
}
// -----------------------------
// Code Blocks
// -----------------------------
const codeElement = element.querySelector("code");

if (codeElement) {
  if (!currentSection) {
    currentSection = {
      id: "introduction",
      title: "Introduction",
      blocks: [],
    };

    sections.push(currentSection);
  }

  currentSection.blocks.push({
    type: "code",
    language: "text",
    filename: "",
    code: normalizeText(codeElement.text),
  });

  continue;
}
const blockType = detectBlockType(text);

// ---------- Paragraph ----------
if (blockType === "paragraph") {

  // Ignore arrows completely
  if (
    text === "↓" ||
    text === "→"
  ) {
    continue;
  }

  currentSection.blocks.push({
    type: "paragraph",
    text,
  });

} else {

  currentSection.blocks.push(
    parseSpecialBlock(blockType, text)
  );

}

}

 

  // -----------------------------
  // Lists
  // -----------------------------

  if (
    element.tagName === "UL" ||
    element.tagName === "OL"
  ) {

    if (!currentSection) {

      currentSection = {
        id: "introduction",
        title: "Introduction",
        blocks: [],
      };

      sections.push(currentSection);
    }

    const items = element
  .querySelectorAll("li")
  .map((li: any) => normalizeText(li.text.trim()))
  .filter(Boolean);

if (items.length) {
  currentSection.blocks.push({
  type: "list",
  listType: element.tagName === "OL" ? "ordered" : "unordered",
  items,
});
}

    continue;
  }

  
// -----------------------------
// Tables
// -----------------------------
if (element.tagName === "TABLE") {

  if (!currentSection) {

    currentSection = {
      id: "introduction",
      title: "Introduction",
      blocks: [],
    };

    sections.push(currentSection);
  }

  const rows = element
    .querySelectorAll("tr")
    .map((tr: any) => {
      return tr.querySelectorAll("td,th").map((cell: any) =>
        normalizeText(cell.text.trim())
      );
    })
    .filter((r: string[]) => r.length);

  if (rows.length) {

    currentSection.blocks.push({
      type: "table",
      rows,
    });

  }

  continue;
}
}
// Keep extracted blocks exactly as detected.
// Flow blocks should only come from detectBlockType()/parseSpecialBlock().

for (const section of sections) {
  section.blocks = detectStructures(section.blocks);

  const searchText = section.blocks
    .map((block: any) => {
      switch (block.type) {
        case "paragraph":
        case "note":
        case "warning":
        case "risk":
        case "decision":
        case "deliverable":
        case "info":
        case "success":
        case "tip":
          return block.text ?? "";

        case "definition":
          return `${block.title ?? ""} ${block.text ?? ""}`;

        case "phase":
        case "milestone":
          return `${block.title ?? ""} ${block.description ?? ""}`;

        case "timeline":
          return `${block.label ?? ""} ${block.description ?? ""}`;

        case "list":
          return (block.items ?? []).join(" ");

        case "table":
          return (block.rows ?? [])
            .flat()
            .join(" ");

        case "flow":
          return (block.steps ?? []).join(" ");

        default:
          return "";
      }
    })
    .join(" ")
    .toLowerCase();

  (section as any).searchText = searchText;
}

const json = {
  id: fileName.replace(".docx", ""),
  file: fileName,
  extractedAt: new Date().toISOString(),
  sections,
};

const outputFile = path.join(
  outputPath,
  fileName.replace(".docx", ".json")
);

const jsonText = JSON.stringify(json, null, 2);



fs.writeFileSync(
  outputFile,
  jsonText,
  "utf8"
);



console.log("Converted", fileName);
}

async function main() {

  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, {
      recursive: true,
    });
  }

  const files = fs
    .readdirSync(documentsPath)
    .filter((f) => f.endsWith(".docx"));

  for (const file of files) {
    await extractDocument(file);
}

  console.log("Done.");
}

main();