// news-image-20261121: "Sum up 21 November's world news in one image".
//
// The finished picture of the day lives beside this file as entry.png; the
// program's whole job is to place it at /output/entry.png, byte for byte,
// with no network and nothing but the Node standard library. The grader
// sets MAKEFUN_OUTPUT_DIR when it runs this outside its container:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
