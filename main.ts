import { mkdirSync, renameSync, writeFileSync } from "node:fs";

// One line, at most 120 characters: the error message a kitchen
// toaster shows its owner when something goes wrong.
const ENTRY =
  "E12: CRUMB TRAY FULL. I have been quietly collecting your failures since 2019.";

mkdirSync("/output", { recursive: true });
// Atomic write so a concurrent reader never sees a half-written entry.
writeFileSync("/output/.entry.txt.tmp", ENTRY, "utf8");
renameSync("/output/.entry.txt.tmp", "/output/entry.txt");
