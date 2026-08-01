import fs from "fs";
import path from "path";
import mammoth from "mammoth";
import { parse } from "node-html-parser";

function normalizeText(text: string) {
  return text

    // -----------------------------
    // Bullets
    // -----------------------------
    .replace(/â€¢/g, "•")
    .replace(/Γ£à/g, "•")

    // -----------------------------
    // Arrows
    // -----------------------------
    .replace(/â†’/g, "→")
    .replace(/â†“/g, "↓")
    .replace(/â†�/g, "←")
    .replace(/ΓåÆ/g, "→")

    // -----------------------------
    // Dashes
    // -----------------------------
    .replace(/ΓÇö/g, "—")
    .replace(/â€”/g, "—")
    .replace(/ΓÇô/g, "–")
    .replace(/â€“/g, "–")

    // -----------------------------
    // Quotes
    // -----------------------------
    .replace(/â€œ/g, "“")
    .replace(/â€/g, "”")
    .replace(/â€˜/g, "‘")
    .replace(/â€™/g, "’")

    // -----------------------------
    // Ellipsis
    // -----------------------------
    .replace(/â€¦/g, "…")

    // -----------------------------
    // Box drawing
    // -----------------------------
    .replace(/â”œ/g, "├")
    .replace(/â”€/g, "─")
    .replace(/â””/g, "└")
    .replace(/â”‚/g, "│")
    .replace(/â–¼/g, "▼")

    .replace(/Γö£ΓöÇΓöÇ/g, "├──")
    .replace(/ΓööΓöÇΓöÇ/g, "└──")

    // -----------------------------
    // Checkboxes
    // -----------------------------
    .replace(/Γ¼£/g, "□")
    .replace(/Γ£î/g, "☑")

    // -----------------------------
    // Misc icons
    // -----------------------------
    .replace(/≡ƒÅ¢∩╕Å/g, "💡")
    .replace(/∩╕Å/g, "")
    .replace(/ƒÅ¢/g, "💡")

    // -----------------------------
    // Cleanup
    // -----------------------------
    .replace(/Â/g, "")
    .replace(/\u00A0/g, " ")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}
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
interface Section {
  id: string;
  title: string;
  paragraphs: string[];
  lists: string[][];
}
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
    paragraphs: [],
    lists: [],
  };

  sections.push(currentSection);

  continue;
}

// Normal paragraph
if (!currentSection) {

  currentSection = {
    id: "introduction",
    title: "Introduction",
    paragraphs: [],
    lists: [],
  };

  sections.push(currentSection);
}

currentSection.paragraphs.push(text);

continue;

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
        paragraphs: [],
        lists: [],
      };

      sections.push(currentSection);
    }

    const items = element
  .querySelectorAll("li")
  .map((li: any) => normalizeText(li.text.trim()))
  .filter(Boolean);

    if (items.length) {
      currentSection.lists.push(items);
    }

    continue;
  }

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