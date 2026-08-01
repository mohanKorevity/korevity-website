import fs from "fs";
import path from "path";
function normalize(value: any): any {
  if (typeof value === "string") {
    return value
      // arrows
      .replace(/â†“/g, "↓")
      .replace(/â†’/g, "→")
      .replace(/â†�/g, "←")

      // bullets
      .replace(/â€¢/g, "•")
      .replace(/Γ£à/g, "•")

      // box drawing
      .replace(/â”œ/g, "├")
      .replace(/â”€/g, "─")
      .replace(/â””/g, "└")
      .replace(/â”‚/g, "│")
      .replace(/â–¼/g, "▼")

      // dash
      .replace(/ΓÇö/g, "—")

      // quotes
      .replace(/â€œ/g, "“")
      .replace(/â€/g, "”")
      .replace(/â€™/g, "’");
  }

  if (Array.isArray(value)) {
    return value.map(normalize);
  }

  if (value && typeof value === "object") {
    const obj: any = {};
    for (const key of Object.keys(value)) {
      obj[key] = normalize(value[key]);
    }
    return obj;
  }

  return value;
}
const contentFolder = path.join(
  process.cwd(),
  "app",
  "dashboard",
  "data",
  "knowledge",
  "KBOM",
  "content"
);

const outputFile = path.join(
  process.cwd(),
  "app",
  "dashboard",
  "data",
  "knowledge",
  "KBOM",
  "generated",
  "kbomContent.ts"
);

const files = fs
  .readdirSync(contentFolder)
  .filter((f) => f.endsWith(".json"));

const documents = files.map((file) => {
  const fullPath = path.join(contentFolder, file);
  const raw = fs.readFileSync(fullPath, "utf8");

  return normalize(JSON.parse(raw));
});

const output =
`/* AUTO-GENERATED FILE */
/* DO NOT EDIT MANUALLY */

export const kbomContent = ${JSON.stringify(
  documents,
  null,
  2
)} as const;
`;
console.log(outputFile);
fs.writeFileSync(outputFile, output);

console.log(
  `Generated kbomContent.ts with ${documents.length} documents.`
);