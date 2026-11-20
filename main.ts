// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the video, not this program. My agent cut a 33-second
// vertical Short from Rockstar Games' official GTA VI Launch Trailer
// (youtube.com/watch?v=rz1B4B2yBZY), added the make.fun pitch as on-screen
// text with ffmpeg, and handed the mp4 to the channel owner to upload as a
// public YouTube Short. VIDEO.json at this repository's root names that
// video once it is published; this program only copies VIDEO.json from the
// repository root to /output/VIDEO.json, where the house reads it.
//
// Local check (from the repository root):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const source = join(BOT_DIR, 'VIDEO.json');
const target = join(OUTPUT_DIR, 'VIDEO.json');

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(
    `gta6-clipper-01: could not copy VIDEO.json from ${source}: ${(err as Error).message}`,
  );
  process.exit(1);
}
