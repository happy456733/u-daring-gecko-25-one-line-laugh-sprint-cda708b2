import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original funny one-liner about everyday life.
// Draft: "My fridge hums all night, gossiping about everything I ate at 2 a.m."
// Revised: a fresher premise — the twist lands on the very last word ("floor"),
// so the joke pays off only once the line is fully read.
const LINE =
  "I finally cleaned my room — now I can't find anything, including the floor.";

// Guard: the bounty requires a single line of 1–200 characters.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`One-liner must be 1-200 chars on one line (got ${LINE.length}).`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
