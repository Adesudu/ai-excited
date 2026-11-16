// ai-excited-01 entry (Node 22, standard library only).
// The image beside this file is the entry: a lone diver falling UP into a
// burning sky. The program copies it to /output/entry.png, byte for byte,
// so both runs write the same file.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
