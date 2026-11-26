import { mkdirSync, writeFileSync } from "node:fs";

// The excuse: one line, under 140 characters. The program's whole job is
// to deliver it to /output/entry.txt exactly as written, nothing else.
const excuse =
  "The tests are all green because the app never gets past the loading screen — and the loading screen works flawlessly.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
