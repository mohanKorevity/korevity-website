import fs from "fs";
import path from "path";

const inputFile = path.join(
  process.cwd(),
  "app",
  "dashboard",
  "data",
  "knowledge",
  "KBOM",
  "metadata",
  "kbomPhaseIndex.ts"
);

const outputFile = path.join(
  process.cwd(),
  "app",
  "dashboard",
  "data",
  "knowledge",
  "KBOM",
  "metadata",
  "kbomTimeline.ts"
);


// Extract the exported array from TS file
const raw = fs.readFileSync(inputFile, "utf8");

const jsonText = raw
  .replace("export const kbomPhaseIndex =", "")
  .replace(/;[\s\S]*$/, "")
  .trim();

const phaseIndex = JSON.parse(jsonText);


// Noise filters
function isValidPhase(title: string) {

  const badPatterns = [
    "responsive web",
    "progressive web",
    "native mobile",
    "complete",
    "progress",
    "gave korevity",
    "gives korevity",
    "is complete",
    "future modules"
  ];

  const lower = title.toLowerCase();

  return !badPatterns.some(
    word => lower.includes(word)
  );

}


// Detect variants
function detectVariant(title: string) {

  const match = title.match(
    /\b([A-Z])$/
  );

  if(match){
    return match[1];
  }

  return null;

}


const timeline:any[] = [];


for(const item of phaseIndex){

  const phases = item.phases
    .filter((p:any)=>isValidPhase(p.title))
    .map((p:any)=>({

      phase: p.phase,

      variant:
        detectVariant(p.title),

      title: p.title
        .replace(/Γ£à/g,"")
        .trim(),

      source: item.id

    }));


  if(phases.length){

    timeline.push({

      id:item.id,

      title:item.title,

      phases

    });

  }

}


const output =
`export const kbomTimeline = ${JSON.stringify(
  timeline,
  null,
  2
)};
`;


fs.writeFileSync(
  outputFile,
  output,
  "utf8"
);


console.log(
  "KBOM timeline normalization completed"
);

console.log(
  "Output:",
  outputFile
);