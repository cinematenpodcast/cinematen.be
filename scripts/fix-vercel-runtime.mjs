#!/usr/bin/env node
/**
 * Force the Vercel Serverless Functions runtime to Node.js 24.
 *
 * Background: @astrojs/vercel@7.x only knows Node 18/20 in its supported
 * runtime map. When Vercel builds the project on Node 24 (driven by
 * `engines.node`), the adapter sees an "unknown" major and hard-falls back
 * to `nodejs18.x` — which Vercel now rejects at deploy time because Node 18
 * is EOL ("invalid runtime"). The v7 adapter offers no option to override it.
 *
 * Vercel trusts the `runtime` field in each function's `.vc-config.json`
 * (the adapter version is irrelevant to that validation), so rewriting that
 * field to `nodejs24.x` after the build makes the deploy accept the functions.
 *
 * This runs as part of the `build` script (see package.json). It is a no-op
 * for fully-static builds (no functions directory) and stays harmless after
 * migrating to a newer adapter that already emits `nodejs24.x` natively.
 *
 * NOTE: This is a temporary bridge. The durable fix is upgrading to
 * Astro 5 + @astrojs/vercel@9, which emits `nodejs24.x` out of the box.
 */

import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const functionsDir = join(process.cwd(), ".vercel", "output", "functions");
const target = "nodejs24.x";

if (!existsSync(functionsDir)) {
  console.log("[fix-vercel-runtime] No .vercel/output/functions — nothing to do (static build).");
  process.exit(0);
}

// Each serverless function is a directory like `_render.func` holding a single
// `.vc-config.json` at its top level. Do NOT recurse: the `.func` dirs bundle
// node_modules, and we only want the one-level config files.
const funcDirs = readdirSync(functionsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && d.name.endsWith(".func"))
  .map((d) => d.name);

let rewritten = 0;

for (const dir of funcDirs) {
  const configPath = join(functionsDir, dir, ".vc-config.json");
  if (!existsSync(configPath)) continue;

  const original = readFileSync(configPath, "utf-8");
  // Only touch Node.js runtimes (nodejs18.x, nodejs20.x, ...). Edge middleware
  // functions carry `"runtime": "edge"` and must stay edge.
  const updated = original.replace(/nodejs\d+\.x/g, target);

  if (updated !== original) {
    writeFileSync(configPath, updated);
    rewritten += 1;
    const runtime = updated.match(/"runtime":\s*"([^"]+)"/)?.[1];
    console.log(`[fix-vercel-runtime] ${dir}/.vc-config.json → runtime ${runtime}`);
  }
}

if (rewritten === 0) {
  console.log("[fix-vercel-runtime] No Node.js runtime entries found to rewrite.");
} else {
  console.log(`[fix-vercel-runtime] Rewrote ${rewritten} function runtime(s) to ${target}.`);
}
