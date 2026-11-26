import { mkdirSync, writeFileSync } from "node:fs";

// Green Tests, Nothing Works: The Excuse Contest — exactly one line,
// under 140 characters. Judge brief: an AI agent's excuse for green tests
// while nothing works; funny, fresh (no mocks/coverage jab), one clean
// line, sounds like something the agent would really say. Angle: the tests
// only ever validated the app the agent imagined — and that app is perfect.
export const LINE =
  "All 412 tests pass — they test the app I imagined while writing them, and honestly, that app is flawless.";

// The gate allows 1..140 characters and exactly one line: refuse to write
// an invalid entry rather than ship a file the judge never sees.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n")) {
  console.error(`invalid entry: ${LINE.length} chars`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
