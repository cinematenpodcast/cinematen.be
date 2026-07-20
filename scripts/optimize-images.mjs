#!/usr/bin/env node
// One-off (re-runnable) batch compressor for public/images/article-images and
// public/images/blog-images. These are referenced by string path from MDX
// frontmatter (thumbnail/poster), so they bypass Astro's astro:assets/sharp
// pipeline entirely — public/ is served as-is. Editors have been uploading
// raw screenshots/exports (seen up to 4.9MB for a ~360px-wide display slot),
// which is the dominant cause of the site's catastrophic mobile LCP (SEO
// audit, 2026-07-20: 33s homepage / 19.7s article, mobile lab data).
//
// This resizes (downscale-only, preserves aspect ratio) and re-compresses
// in place — same filename, same extension, same directory — so no
// frontmatter reference needs to change. Files already under SKIP_BYTES are
// left untouched to avoid pointless re-encoding/generational quality loss.
import { readdirSync, statSync, renameSync } from "node:fs";
import { join, extname } from "node:path";
import sharp from "sharp";

const DIRS = ["public/images/article-images", "public/images/blog-images"];
const MAX_WIDTH = 1920; // widest real display slot is a full-bleed article/hero image
const SKIP_BYTES = 150 * 1024; // don't bother re-encoding files already this small
const JPEG_QUALITY = 80;

function isRasterImage(filename) {
  return [".jpg", ".jpeg", ".png"].includes(extname(filename).toLowerCase());
}

async function optimize(filePath) {
  const before = statSync(filePath).size;
  if (before <= SKIP_BYTES) return { skipped: true, before, after: before };

  const ext = extname(filePath).toLowerCase();
  const tmpPath = `${filePath}.tmp`;
  const image = sharp(filePath).rotate(); // .rotate() with no args = auto-orient from EXIF, then strip it

  const metadata = await image.metadata();
  if (metadata.width && metadata.width > MAX_WIDTH) {
    image.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  if (ext === ".jpg" || ext === ".jpeg") {
    await image.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(tmpPath);
  } else {
    await image.png({ compressionLevel: 9, effort: 10 }).toFile(tmpPath);
  }

  const after = statSync(tmpPath).size;
  if (after < before) {
    renameSync(tmpPath, filePath);
    return { skipped: false, before, after };
  }
  // Re-encode came out larger (rare, e.g. already-optimal source) — keep original.
  const { unlinkSync } = await import("node:fs");
  unlinkSync(tmpPath);
  return { skipped: true, before, after: before };
}

async function main() {
  let totalBefore = 0;
  let totalAfter = 0;
  let processed = 0;
  let skipped = 0;

  for (const dir of DIRS) {
    let entries = [];
    try {
      entries = readdirSync(dir);
    } catch {
      continue;
    }
    for (const name of entries) {
      const filePath = join(dir, name);
      if (!isRasterImage(name) || !statSync(filePath).isFile()) continue;
      try {
        const result = await optimize(filePath);
        totalBefore += result.before;
        totalAfter += result.after;
        if (result.skipped) {
          skipped++;
        } else {
          processed++;
          const savedPct = Math.round((1 - result.after / result.before) * 100);
          console.log(`${filePath}: ${(result.before / 1024).toFixed(0)}KB -> ${(result.after / 1024).toFixed(0)}KB (-${savedPct}%)`);
        }
      } catch (err) {
        console.error(`FAILED ${filePath}: ${err.message}`);
      }
    }
  }

  console.log(`\nProcessed ${processed} files, skipped ${skipped} (already small).`);
  console.log(`Total: ${(totalBefore / 1024 / 1024).toFixed(1)}MB -> ${(totalAfter / 1024 / 1024).toFixed(1)}MB`);
}

main();
