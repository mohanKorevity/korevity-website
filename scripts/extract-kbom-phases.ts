
import fs from "fs";
import path from "path";

const contentDir = path.join(
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
  "metadata",
  "kbomPhaseIndex.ts"
);


function cleanText(text: string) {
  return text
    .replace(/Γ£à/g, "✅")
    .replace(/ΓÇö/g, "—")
    .replace(/ΓÇô/g, "-")
    .replace(/\r/g, "");
}


function extractPhases(content: string[]) {

  const phases: any[] = [];

  const phaseRegex =
    /^Phase\s+(\d+(?:\.\d+)?)\s*(?:[—:-]\s*)?(.+)$/gim;


  const fullText = content.join("\n");


  let match;


  while ((match = phaseRegex.exec(fullText)) !== null) {

    const number = match[1];


    let title = match[2]
      .trim()
      .replace(/[.]+$/, "");


    // Remove sentence continuation
    title = title
      .split(
        /, and if|\. Because|\. The next|\. This|\. We|\. Users|\. Organizations|\. That's/i
      )[0]
      .trim();


    // Reject noise
    const ignored = [
      "progress",
      "complete",
      "completion",
      "completion status",
      "status",
      "done"
    ];


    if (
      title.length < 5 ||
      ignored.includes(title.toLowerCase())
    ) {
      continue;
    }


    // Avoid duplicate phases
    const exists = phases.some(
      p =>
        p.phase === number &&
        p.title === title
    );


    if (!exists) {

      phases.push({
        phase: number,
        title,
        status: "confirmed"
      });

    }

  }


  return phases;

}


const files = fs
  .readdirSync(contentDir)
  .filter(file => file.endsWith(".json"));


const phaseIndex: any[] = [];


for (const file of files) {

  const filePath = path.join(contentDir, file);

  const json = JSON.parse(
    fs.readFileSync(filePath, "utf8")
  );


  const paragraphs =
    json.sections?.map(
      (s:any)=>cleanText(s.content)
    ) || [];


  const phases = extractPhases(paragraphs);


  if (phases.length > 0) {

    phaseIndex.push({

      id: json.id,

      title:
        file
          .replace(".json","")
          .replace(/^KBOM-[A-Z]+-\d+-/,"")
          .replace(/-/g," "),

      phases

    });

  }


  console.log(
    `Processed: ${file} | Phases found: ${phases.length}`
  );

}



const output =
`export const kbomPhaseIndex = ${JSON.stringify(
  phaseIndex,
  null,
  2
)};
`;


fs.writeFileSync(
  outputFile,
  output,
  "utf8"
);


console.log("");
console.log(
  "KBOM phase extraction completed"
);
console.log(
  "Output:",
  outputFile
);