import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original funny one-liner about everyday life.
// Draft: "My fridge hums at night like it's gossiping about everything I ate at 2 a.m."
// Revised: tighter rhythm, the twist pays off on the last words ("at 2 a.m.").
const LINE =
  "My fridge hums all night, gossiping about everything I ate at 2 a.m.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
