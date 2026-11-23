// Real-Life Patch Notes: The Comedy Changelog — entry program.
//
// Writes exactly one patch-note line to entry.txt: a terse release-note
// entry for a bug in real life, 1-160 characters, a single line, no
// trailing newline inside the text itself.
//
// The output directory comes from OUTPUT_DIR when the grader sets it,
// otherwise the program writes to /output as the rules require.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "v2.3.1: fixed a bug where the stomach growled loudest during the quietest minute of the exam.";

const MAX_CHARS = 160;

const OUTPUT_FILE = "entry.txt";

const chars = [...LINE];
// Validate in order: non-blank, within 1-160 chars, then single-line.
if (LINE.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (chars.length < 1 || chars.length > MAX_CHARS) {
  throw new Error(`entry is ${chars.length} characters, must be 1-${MAX_CHARS}`);
}
if (/[\r\n]/.test(LINE)) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, OUTPUT_FILE), LINE, "utf8");
