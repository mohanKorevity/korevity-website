import fs from "fs";
import path from "path";
import mammoth from "mammoth";


const documentsPath = path.join(
  process.cwd(),
  "app/dashboard/data/knowledge/KBOM/documents"
);


const outputPath = path.join(
  process.cwd(),
  "app/dashboard/data/knowledge/KBOM/content"
);


async function extractDocument(fileName: string) {

  const filePath = path.join(
    documentsPath,
    fileName
  );


  const result = await mammoth.extractRawText({
    path: filePath,
  });


  const paragraphs = result.value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);


  const sections: {
  id: string;
  title: string;
  paragraphs: string[];
}[] = [];

let currentSection: {
  id: string;
  title: string;
  paragraphs: string[];
} | null = null;

for (const paragraph of paragraphs) {

  const isHeading =
    paragraph.length < 60 &&
    !paragraph.endsWith(".") &&
    !paragraph.endsWith(":");

  if (isHeading) {

    if (currentSection) {
      sections.push(currentSection);
    }

    currentSection = {
      id: paragraph
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, ""),
      title: paragraph,
      paragraphs: [],
    };

  } else {

    if (!currentSection) {
      currentSection = {
        id: "overview",
        title: "Overview",
        paragraphs: [],
      };
    }

    currentSection.paragraphs.push(paragraph);

  }

}

if (currentSection) {
  sections.push(currentSection);
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


  fs.writeFileSync(
    outputFile,
    JSON.stringify(json, null, 2),
    "utf-8"
  );


  console.log(
    "Extracted:",
    fileName
  );

}


async function main() {


  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, {
      recursive: true,
    });
  }


  const allFiles = fs.readdirSync(documentsPath);

console.log("Documents folder:");
console.log(allFiles);


const files = allFiles.filter(
  (file) => file.endsWith(".docx")
);


console.log("DOCX files found:", files.length);


  for (const file of files) {
    await extractDocument(file);
  }


  console.log(
    "KBOM extraction completed"
  );

}


main();