import fs from "fs";
import path from "path";
import PizZip from "pizzip";
import { DOMParser } from "@xmldom/xmldom";
import xpath from "xpath";

const file = path.join(
  process.cwd(),
  "app/dashboard/data/knowledge/KBOM/documents/KBOM-FND-001-Foundation-Blueprint.docx"
);

const buffer = fs.readFileSync(file);

const zip = new PizZip(buffer);

const xml = zip.file("word/document.xml")!.asText();

const doc = new DOMParser().parseFromString(xml);

const select = xpath.useNamespaces({
  w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
});

const paragraphs = select("//w:p", doc) as Node[];

console.log("Paragraph count:", paragraphs.length);

for (let i = 0; i < 30; i++) {

  const p = paragraphs[i];

  const text = (
    select(".//w:t/text()", p) as any[]
  )
    .map(t => t.nodeValue)
    .join("");

  const runs = select("./w:r", p) as Node[];

  let allBold = runs.length > 0;

  for (const run of runs) {

    const bold = select("./w:rPr/w:b", run) as Node[];

if (bold.length === 0) {
  allBold = false;
  break;
}

  }

  console.log("---------------------");
  console.log(text);
  console.log("BOLD:", allBold);

}