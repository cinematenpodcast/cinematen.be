#!/usr/bin/env node
// Submits every URL in the sitemap to the IndexNow API so Bing/Yandex (and
// any other participating engine) pick up new/changed articles faster than
// waiting for their own crawl schedule. Run after each successful production
// deployment (see .github/workflows/notify-deployment.yml).
//
// IndexNow is idempotent — resubmitting a URL that hasn't changed is a no-op
// on the receiving end, so submitting the full sitemap each time (rather than
// diffing for exactly what changed) is simple and safe, at the cost of a
// slightly larger request than strictly necessary.
//
// Key file requirement: https://www.cinematen.be/{key}.txt must exist and
// contain exactly the key below, for IndexNow to trust submissions using it.
const KEY = "89341843606ca8c087dfb8f5aba1f6bc";
const HOST = "www.cinematen.be";
const SITEMAP_INDEX_URL = `https://${HOST}/sitemap-index.xml`;

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  return res.text();
}

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

async function main() {
  const indexXml = await fetchText(SITEMAP_INDEX_URL);
  const sitemapUrls = extractLocs(indexXml);

  const urls = new Set();
  for (const sitemapUrl of sitemapUrls) {
    const xml = await fetchText(sitemapUrl);
    for (const loc of extractLocs(xml)) urls.add(loc);
  }

  console.log(`Submitting ${urls.size} URLs to IndexNow...`);

  // IndexNow accepts up to 10,000 URLs per request.
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `https://${HOST}/${KEY}.txt`,
      urlList: [...urls],
    }),
  });

  if (!res.ok && res.status !== 202) {
    const body = await res.text().catch(() => "");
    throw new Error(`IndexNow submission failed: ${res.status} ${body}`);
  }
  console.log(`IndexNow accepted the submission (status ${res.status}).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
