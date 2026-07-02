# SEO Action Plan — cinematen.be
**Generated**: 2026-07-01  
**Data sources**: Live site crawl + Google Analytics 4 + Google Search Console (1 mrt – 30 jun 2026)  
**Priority order**: Critical → High → Medium → Low

---

## 🔴 Critical (Fix immediately — actively harming indexability)

### C1 — Fix www/non-www canonical mismatch
**Impact**: High — Google sees `cinematen.be` and `www.cinematen.be` as two separate sites, splitting authority  
**Effort**: ~30 min  
**Files**: `astro.config.mjs`, `src/layouts/NieuwsLayout.astro`

```js
// astro.config.mjs
export default defineConfig({
  site: "https://www.cinematen.be", // Change from cinematen.be
  ...
})
```

```astro
// src/layouts/NieuwsLayout.astro — line ~11
const canonicalURL = `https://www.cinematen.be${Astro.url.pathname}`;
```

Also update `robots.txt` Sitemap reference:
```
Sitemap: https://www.cinematen.be/sitemap.xml
```

### C2 — Fix 307 Temporary Redirect → 301 Permanent
**Impact**: High — link equity not passed through temporary redirects  
**Effort**: 5 min (Vercel dashboard)  
**Action**: In Vercel project settings → Domains → set `cinematen.be` as redirect target to `www.cinematen.be` with type "Permanent Redirect (308)". Or add to vercel.json:
```json
"redirects": [
  {
    "source": "/:path*",
    "destination": "https://www.cinematen.be/:path*",
    "permanent": true,
    "has": [{ "type": "host", "value": "cinematen.be" }]
  }
]
```

### C3 — Herstel indexering: 148 404-pagina's + redirect-kettingen
**Impact**: Zeer hoog — 148 pagina's geven een 404, 72 vallen weg door onnodige redirects. Samen 17% van alle niet-geïndexeerde pagina's.  
**Effort**: ~2-4 uur (onderzoek + redirects instellen)  
**Bron**: Google Search Console → Pagina-indexering-rapport

1. Open GSC → Pagina-indexering → filter op "Niet gevonden (404)" → exporteer de lijst
2. Voor elke 404: redirect naar de meest relevante bestaande pagina via `vercel.json`:
```json
{ "source": "/oud-artikel-pad", "destination": "/nieuws/nieuw-pad", "permanent": true }
```
3. Filter op "Pagina met omleiding" → controleer op kettingen (redirect A → B → C) en herleid rechtstreeks naar eindbestemming
4. Gebruik Search Console's URL-inspectietool om te controleren of de fixes worden opgemerkt

### C4 — Verbeter interne linkstructuur om crawlbudget te herstellen
**Impact**: Zeer hoog — 287 pagina's worden niet eens gecrawld door Google. Hoofdoorzaak: 88% van alle interne links gaat naar de homepage, artikelen krijgen 1–3 links.  
**Effort**: ~4-8 uur (component-implementatie)  
**Bron**: GSC "Gevonden — momenteel niet geïndexeerd" (287 pagina's)

1. **Gerelateerde nieuwsartikelen-blok**: voeg op elke artikelpagina een "Meer nieuws" sectie toe met 3–5 gerelateerde artikelen (filter op zelfde `soort`/tags)
2. **Categoriepagina's**: maak `/nieuws/film/` en `/nieuws/serie/` als browseable overzichtspagina's
3. **Breadcrumbs**: voeg navigatie-breadcrumbs toe (Home → Nieuws → [artikel]) — ook goed voor BreadcrumbList schema

### C5 — Add article-specific meta descriptions
**Impact**: Very High — 751 pages with identical meta description is a major duplicate content signal AND tanks CTR. Met 51.100 vertoningen/maand is dit een directe CTR-rem.  
**Effort**: ~1-2 hrs (code change) + ongoing for new articles  
**Files**: `src/layouts/NieuwsLayout.astro`, `src/components/BaseHeadNieuws.astro`, TinaCMS schema

**Step 1**: Fix prop name mismatch in NieuwsLayout (it passes `content=` but component expects `description=`):
```astro
// src/layouts/NieuwsLayout.astro — in <BaseHeadNieuws>
<BaseHeadNieuws
  title={frontmatter.title}
  description={frontmatter.description || frontmatter.bodyPreview?.substring(0, 155)}
  image={frontmatter.thumbnail}
  canonicalURL={canonicalURL}
  publishedDate={frontmatter.date}
  modifiedDate={frontmatter.date}
  author="Yorrick"
/>
```

**Step 2**: Add `description` field to TinaCMS news schema (optional, for manual overrides)

**Step 3**: `bodyPreview` already exists in `content.config.ts` (200-char text extract) — use it as auto-fallback

---

## 🟠 High (Fix within 1 week)

### H1 — Fix OG image to absolute URL
**Impact**: High — broken social share previews on all pages  
**Effort**: 10 min  
**File**: `src/components/BaseHeadNieuws.astro`

```astro
// Replace:
<meta content="./images/Cinematelogotrans.png" property="og:image" />
<meta content="/images/Cinematelogotrans.png" property="twitter:image" />

// With:
<meta content={image ? `https://www.cinematen.be${image}` : "https://www.cinematen.be/images/Cinematelogotrans.png"} property="og:image" />
<meta content={image ? `https://www.cinematen.be${image}` : "https://www.cinematen.be/images/Cinematelogotrans.png"} property="twitter:image" />
```

Also add missing `og:url`:
```astro
<meta content={finalCanonical} property="og:url" />
```

### H2 — Fix schema image to absolute URL
**Impact**: High — Google requires absolute URLs for image rich results; relative paths are ignored  
**Effort**: 5 min  
**File**: `src/components/BaseHeadNieuws.astro` — in the JSON-LD block:

```javascript
// Replace:
...(image && { "image": image }),
// With:
...(image && { "image": image.startsWith('http') ? image : `https://www.cinematen.be${image}` }),
```

### H3 — Fix article image alt text
**Impact**: High — 751 articles with `alt="thumbnail"` provide no crawlable image context  
**Effort**: 10 min  
**File**: `src/layouts/NieuwsLayout.astro`

```astro
// Replace:
<img src={frontmatter.thumbnail} ... alt="thumbnail">
// With:
<img src={frontmatter.thumbnail} ... alt={frontmatter.title}>
```

### H4 — Add lastmod to sitemap
**Impact**: High — helps Google prioritize re-crawling of recently updated content  
**Effort**: 20 min  
**File**: `astro.config.mjs`

```javascript
sitemap({
  serialize(item) {
    // You can pass article dates here if you fetch from content
    return { ...item, lastmod: new Date().toISOString() };
  },
  filter: (page) => ..., // keep existing filter
}),
```

### H5 — Add homepage title brand name
**Impact**: Medium-High — short title misses keyword opportunity and brand recognition  
**Effort**: 5 min  

Change homepage title from: `"Film & TV Reviews en Nieuws"`  
To: `"Film & TV Reviews en Nieuws | Cinematen.be"`

### H6 — CTR-optimalisatie: 2 hoge-impressie artikelen herschrijven
**Impact**: Hoog — directe klikwinst zonder rankingverbetering nodig. Geschatte +80 kliks/maand bij CTR van 1,4% → 3%.  
**Effort**: 30 min  
**Bron**: GSC-data

| Pagina | Nu | Doel |
|--------|----|----|
| `/nieuws/wat-is-er-gebeurd-met-bubbles-de-aap-van-michael-jackson/` | 4.870 vertoningen, 1,4% CTR | Herschrijf titel met jaar + vraagvorm. Bv: "Bubbles, de aap van Michael Jackson: wat is er écht mee gebeurd?" |
| `/nieuws/avatar-4-en-5-dit-weten-we-al-over-de-toekomst/` | 4.583 vertoningen, 1,2% CTR | Voeg release datum toe in titel. Bv: "Avatar 4 & 5: alles wat we weten over de films (inclusief releasedatum)" |

Herschrijf ook de meta descriptions van deze twee pagina's met concrete feiten (datum, cast, plot-detail).

### H7 — Fix GA4 tracking gap op artikelpagina's
**Impact**: Hoog — zonder correcte tracking zijn alle data-gedreven beslissingen onbetrouwbaar.  
**Effort**: ~1 uur (debug + fix)  
**Signaal**: `/nieuws/adam-scott-krijgt-het-zwaar-te-verduren-in-nieuwe-horrorfilm-hokum/` heeft 147 GSC-kliks maar is nauwelijks zichtbaar in GA4.

1. Controleer of de GA4-tag (`G-XXXXXXXX`) aanwezig is in de `<head>` van alle artikelpagina's via browser DevTools
2. Controleer `src/layouts/NieuwsLayout.astro` en `BaseHeadNieuws.astro` of het GA4-script op alle varianten wordt geladen
3. Gebruik GA4 DebugView of Google Tag Assistant om te bevestigen dat events binnenkomen op die specifieke pagina
4. Controleer of de `/nieuws/14days`-filter in de sitemap-config ook GA4-tracking beïnvloedt

### H8 — Filter bot-/spam-verkeer in GA4
**Impact**: Hoog — 77,6% "Direct" verkeer met Singapore als #1 markt vertekent alle GA4-cijfers systematisch.  
**Effort**: ~30 min  
**Signalen**: Singapore 379 actieve gebruikers > België 56, Engelstalige browserinstellingen dominant bij Nederlandstalige site

1. GA4 → Beheer → Datainstellingen → Datafilters → activeer "Interne traffic"-filter + "Bot traffic"-uitsluiting
2. Controleer server-logs op datacenter-IP-ranges (Singaporese hosters, Cloudflare, AWS Asia-Pacific)
3. Overweeg een GA4-segment "echte gebruikers" (Belgie + NL, duur > 3s) voor schonere rapportage

---

## 🟡 Medium (Fix within 1 month)

### M1 — Add BreadcrumbList schema to articles
**Impact**: Medium — enables breadcrumb display in SERPs  
**File**: `src/components/BaseHeadNieuws.astro`

Add alongside existing NewsArticle schema:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cinematen.be/" },
    { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.cinematen.be/nieuws/" },
    { "@type": "ListItem", "position": 3, "name": "[article title]", "item": "[canonical URL]" }
  ]
}
```

### M2 — Add Review/Rating schema to reviews
**Impact**: Medium-High — star ratings appear in SERPs for review pages  
**File**: `src/layouts/ReviewLayout.astro`

```json
{
  "@type": "Review",
  "itemReviewed": { "@type": "Movie", "name": "[title]" },
  "reviewRating": { "@type": "Rating", "ratingValue": "[rating]", "bestRating": 5 },
  "author": { "@type": "Person", "name": "[schrijver]" }
}
```

### M3 — Add SearchAction to WebSite schema
**Impact**: Medium — enables Google Sitelinks Search Box in brand SERPs  
**File**: `src/components/BaseHeadNieuws.astro` (WebSite schema branch)

```json
"potentialAction": {
  "@type": "SearchAction",
  "target": "https://www.cinematen.be/search?q={search_term_string}",
  "query-input": "required name=search_term_string"
}
```

### M4 — Add author URL/sameAs to Person schema
**Impact**: Medium — strengthens E-E-A-T signals for Google  
**File**: `src/components/BaseHeadNieuws.astro`

```json
"author": {
  "@type": "Person",
  "name": "Yorrick",
  "url": "https://www.cinematen.be/#over-ons",
  "sameAs": ["https://www.instagram.com/cinematen_podcast"]
}
```

### M5 — Create llms.txt
**Impact**: Medium — improves discoverability in AI-powered search engines (Perplexity, ChatGPT)  
**Effort**: 15 min  
**Action**: Create `public/llms.txt` with site overview (content in AI Search Readiness section of audit report)

### M6 — Fix or rename Unicode slug
**Impact**: Medium — one article URL contains mathematical Unicode characters causing potential indexing issues  
**URL**: `/nieuws/%F0%9D%99%85%F0%9D%99%96...`  
**Action**: Rename the article slug to use standard ASCII characters and add a 301 redirect from the old URL

### M8 — Blokkeer of redirect `/baseof.html`
**Impact**: Medium — dit is een Hugo-basistemplate die publiek/indexeerbaar staat (7 GA4-weergaven). Geen zinvolle content voor bezoekers of crawlers.  
**Effort**: 5 min  
**Bron**: GA4 "Pagina's en schermen" rapport

Voeg toe aan `vercel.json`:
```json
{ "source": "/baseof.html", "destination": "/", "permanent": true }
```
Of voeg `noindex` toe als de pagina niet verwijderd kan worden.

### M9 — Run PageSpeed Insights (mobiel prioriteit)
**Impact**: Medium — GSC heeft onvoldoende verkeer voor CrUX-velddata. Prestatieproblemen zijn onzichtbaar tot deze manuele check gedaan is.  
**Effort**: 30 min  
**Actie**: Run https://pagespeed.web.dev op:
- Homepage (mobiel + desktop)
- Een nieuwsartikel (mobiel prioriteit — 78% van organisch verkeer)
- Een reviewpagina

### M10 — Self-host or remove jQuery
**Impact**: Medium — reduces external DNS lookup, removes Cloudfront CDN dependency  
**File**: `src/layouts/NieuwsLayout.astro` (or wherever jQuery is loaded)  
**Action**: Download jQuery locally to `/public/scripts/jquery-3.7.min.js` or audit if jQuery is still needed (many usages may be replaceable with vanilla JS)

---

## 🟢 Low (Backlog)

### L1 — Add og:url meta tag to all pages
Add `<meta content={finalCanonical} property="og:url" />` to all head components.

### L2 — Investigate /luister/ vs /listen/ duplication
Two pages appear to serve the same podcast content in NL and EN. If so, add `hreflang` tags or consolidate into one page.

### L3 — Add RSS feed for news articles
An RSS feed (`/rss.xml`) for news articles would enable syndication and improve content discoverability. Astro has a first-party RSS package (`@astrojs/rss`).

### L4 — Add author pages
Dedicated author pages (`/auteur/yorrick/`) strengthen E-E-A-T and enable Person schema with full profile data.

### L5 — Review star images in reviews
`alt="ster"` is acceptable but `alt="4 out of 5 stars"` (populated dynamically from rating) provides better accessibility and context.

### L6 — Review tag pages SEO value
Tag pages are filtered from sitemap. Consider un-filtering and adding thin but valuable category/tag content for topical authority clustering (e.g., `/nieuws/tags/film/` could rank for category searches).

---

## Quick Reference Checklist

```
🔴 KRITIEK
[ ] C1  - Change astro.config.mjs site to www
[ ] C1  - Update NieuwsLayout.astro canonical URL naar www
[ ] C2  - Set 301/308 permanent redirect in Vercel (cinematen.be → www)
[ ] C3  - Exporteer 404-lijst in GSC en stel redirects in via vercel.json
[ ] C3  - Controleer redirect-kettingen (redirect → redirect → eindbestemming)
[ ] C4  - Voeg "Gerelateerd nieuws" blok toe op artikelpagina's (crawlbudget)
[ ] C4  - Maak categoriepagina's /nieuws/film/ en /nieuws/serie/
[ ] C5  - Fix prop naam: content= → description= in NieuwsLayout
[ ] C5  - Use bodyPreview as description fallback (fixes 751 pagina's)

🟠 HOOG
[ ] H1  - Fix og:image naar absolute URL
[ ] H1  - Add og:url meta tag
[ ] H2  - Fix schema image naar absolute URL
[ ] H3  - Fix artikel thumbnail alt="thumbnail" → alt={frontmatter.title}
[ ] H4  - Add lastmod to sitemap serialize
[ ] H5  - Add " | Cinematen.be" to homepage title
[ ] H6  - Herschrijf titel + meta description "bubbles"-artikel (4.870 vertoningen)
[ ] H6  - Herschrijf titel + meta description "avatar-4-en-5"-artikel (4.583 vertoningen)
[ ] H7  - Debug GA4 tracking gap (Hokum-artikel: 147 GSC-kliks, niet in GA4)
[ ] H8  - Activeer bot-filter in GA4 (Singapore/VS bot-verkeer)

🟡 MEDIUM
[ ] M1  - Add BreadcrumbList schema op artikelen
[ ] M2  - Add Review schema op reviewpagina's
[ ] M3  - Add SearchAction to WebSite schema
[ ] M4  - Enrich author schema met url + sameAs
[ ] M5  - Create /public/llms.txt
[ ] M6  - Fix Unicode slug (rename + 301 redirect)
[ ] M8  - Blokkeer of redirect /baseof.html
[ ] M9  - Run PageSpeed Insights mobiel op homepage + artikel
[ ] M10 - Self-host jQuery or remove dependency

🟢 LOW
[ ] L1  - Add RSS feed voor nieuwsartikelen
[ ] L2  - Onderzoek /luister/ vs /listen/ duplicaat
[ ] L3  - Voeg auteurspagina's toe (/auteur/yorrick/)
[ ] L4  - Heroverweeg tag-pagina's voor topical authority
```
