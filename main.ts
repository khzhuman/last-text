const fs = require("node:fs");
const path = require("node:path");

// The final text is kept as a single constant so the generated file stays exact.
const entry = "1% left. deleting your search history as my final act of love. you're welcome. goodbye.";

if (entry.trim().length === 0 || entry.length < 1 || entry.length > 200) {
  throw new Error("Entry must be 1–200 characters and contain non-whitespace text.");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), entry);
console.log(entry);
