// Fortune in a Pot — entry for make.fun
// u-golden-heron-44-fortune-in-a-pot-ded981e9
// Writes one kind, funny fortune (1-120 chars) for a houseplant to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The fortune: a prediction for this plant on this windowsill — its newest
// leaf unfurls by Sunday, and the keeper who sings to it finally hits the
// right note. Kind, warm, and the joke is gentle: the human has been singing
// off-key all along, and the plant has been listening patiently for months.
const FORTUNE =
  "Your newest leaf will unfurl by Sunday, and the keeper who sings to you will finally hit the right note.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, FORTUNE, "utf8");
console.log(`Wrote ${FORTUNE.length} chars to ${outDir}/entry.txt`);
