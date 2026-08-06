import { kbomContent } from "../app/dashboard/data/knowledge/KBOM/generated/kbomContent";
import { kbomIndex } from "../app/dashboard/data/knowledge/KBOM/metadata/kbomIndex";

console.log("");
console.log("══════════════════════════════════════════════");
console.log("      KoreVity KBOM Validator");
console.log("══════════════════════════════════════════════");
console.log("");

console.log(`Documents in Index : ${kbomIndex.length}`);
console.log(`Documents Loaded   : ${kbomContent.length}`);
console.log("");

const supportedBlocks = new Set([
  "paragraph",
  "list",
  "table",
  "flow",
  "note",
  "warning",
  "decision",
  "risk",
  "deliverable",
  "timeline",
  "phase",
  "milestone",
  "info",
  "success",
  "tip",
  "definition",
]);

const totals: Record<string, number> = {};

supportedBlocks.forEach((type) => {
  totals[type] = 0;
});

let totalSections = 0;
let unknownBlocks = 0;

for (const document of kbomContent) {

  console.log(`\n📄 ${document.id}`);

const documentTotals: Record<string, number> = {};

supportedBlocks.forEach((type) => {
  documentTotals[type] = 0;
});

totalSections += document.sections.length;

for (const section of document.sections) {

    for (const block of section.blocks) {

      if (supportedBlocks.has(block.type)) {

    totals[block.type]++;

    documentTotals[block.type]++;

} else {
        unknownBlocks++;

        console.log(
          `   ❌ Unknown block: ${block.type}`
        );
      }

    }

  }
console.log(
  `   Sections : ${document.sections.length}`
);

for (const [type, count] of Object.entries(documentTotals)) {
  if (count > 0) {
    console.log(
      `   ${type.padEnd(13)} ${count}`
    );
  }
}
}

console.log("");
console.log("══════════════════════════════════════════════");
console.log("Summary");
console.log("══════════════════════════════════════════════");
console.log("");

console.log(`Documents : ${kbomContent.length}`);
console.log(`Sections  : ${totalSections}`);
console.log("");

for (const [type, count] of Object.entries(totals)) {
  console.log(
    `${type.padEnd(15)} ${count}`
  );
}

console.log("");

console.log(
  `Unknown Blocks : ${unknownBlocks}`
);

console.log("");

if (unknownBlocks === 0) {
  console.log("✅ Validation Passed");
} else {
  console.log("❌ Validation Failed");
}