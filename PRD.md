# PRD: Cinematen.be SEO Remediation
**Datum:** 2026-07-01  
**Status:** Approved — Ready for implementation  
**Bron:** SEO Full Audit Report + Action Plan (2026-07-01)

---

## 0. Orchestratie Metadata

- **Project type:** SEO remediation van bestaand product
- **Platformen:** Web (Astro + TinaCMS + Vercel)
- **Primaire tech stack:** Astro, TinaCMS, Vercel, JSON-LD, Google Analytics 4
- **Specialistische domeinen nodig:** Technical SEO, Astro/Vercel config, Schema.org, GA4
- **Bestaande systemen:** Bestaande Astro webapp op Vercel, TinaCMS voor content
- **Complexiteit:** medium

---

## 1. Project Overzicht

Cinematen.be is een Nederlandstalig film- & tv-nieuwsblog + podcast op Astro + TinaCMS + Vercel. De site scoort 48/100 op SEO-gezondheid. Slechts 20% van 1.262 bekende URL's staat geïndexeerd bij Google (252 van 1.262). Vier maanden organisch verkeer: 740 kliks, 51.100 vertoningen, 1,4% CTR, gem. positie 9,4.

Doel: alle geïdentificeerde SEO-issues remediëren zodat indexering stijgt van 20% naar 60%+ en organische kliks van 740 naar 1.500+/maand binnen 3 maanden na deployment.

---

## 2. Doelgroep

**Eindgebruikers van de site:** Belgische en Nederlandse Nederlandstalige film- & tv-fans (18–45 jaar). 78% mobiel. Doelmarkt: BE (468 kliks) + NL (258 kliks) = 98% organisch verkeer.

**Uitvoerend team (PRD-gebruikers):** Frontend-developer die Astro/TinaCMS kent; Vercel-beheerder voor redirect-config.

---

## 3. Kernfuncties — MVP

| ID | Feature | Beschrijving | Prioriteit | Domein |
|----|---------|-------------|-----------|--------|
| C1 | www canonical fix | `astro.config.mjs` site naar www; NieuwsLayout canonical naar www; robots.txt sitemap-URL naar www | Kritiek | Astro config |
| C2 | 307 → 308 permanent redirect | Vercel: cinematen.be → www.cinematen.be als permanent redirect | Kritiek | Vercel config |
| C3 | 404-herstel + redirect-kettingen | GSC 404-lijst exporteren; redirects instellen in vercel.json; kettingen doorbreken | Kritiek | Vercel config |
| C4 | Interne linkstructuur | "Gerelateerd nieuws"-blok op artikelen; categoriepagina's /nieuws/film/ en /nieuws/serie/; breadcrumbs | Kritiek | Astro componenten |
| C5 | Artikel meta descriptions | Prop-naam fix (content= → description=); bodyPreview als fallback; TinaCMS description-veld | Kritiek | Astro + TinaCMS |
| H1 | OG image absolute URL + og:url | BaseHeadNieuws: relative → absolute og:image; og:url toevoegen | Hoog | Astro component |
| H2 | Schema image absolute URL | JSON-LD image URL absoluut maken in BaseHeadNieuws | Hoog | Astro component |
| H3 | Alt-tekst afbeeldingen | alt="thumbnail" → alt={frontmatter.title} op alle artikelen | Hoog | Astro layout |
| H4 | Sitemap lastmod | Astro sitemap serialize() met lastmod datum | Hoog | Astro config |
| H5 | Homepage title brand | Toevoegen "| Cinematen.be" aan homepage title | Hoog | Astro component |
| H6 | CTR-optimalisatie 2 artikelen | Titel + meta description herschrijven van Bubbles + Avatar 4&5 | Hoog | Content |
| H7 | GA4 tracking-gap debug | GA4-tag verificeren op alle artikelpagina's | Hoog | Analytics |
| H8 | GA4 bot-filter | Bot/spam-verkeer uitsluiten in GA4 | Hoog | Analytics |
| M1 | BreadcrumbList schema | JSON-LD BreadcrumbList toevoegen op artikelpagina's | Medium | Schema |
| M2 | Review/Rating schema | ReviewRating + AggregateRating op reviewpagina's | Medium | Schema |
| M3 | SearchAction WebSite schema | potentialAction SearchAction toevoegen | Medium | Schema |
| M4 | Author sameAs schema | url + sameAs toevoegen aan Person schema | Medium | Schema |
| M5 | llms.txt | /public/llms.txt aanmaken voor AI-zoekmachines | Medium | Technisch |
| M6 | Unicode slug fix | Artikel-slug hernoemen naar ASCII + 301 redirect | Medium | Content/Vercel |
| M8 | /baseof.html blokkeren | Redirect /baseof.html → / in vercel.json | Medium | Vercel config |
| M9 | PageSpeed Insights | Handmatige CWV-meting (mobiel) homepage + artikel + review | Medium | Performance |
| M10 | jQuery self-host/remove | jQuery 3.5.1 lokaal hosten of verwijderen | Medium | Performance |
| L1 | og:url alle pagina's | og:url toevoegen aan alle head-componenten | Laag | Astro component |
| L2 | /luister/ vs /listen/ duplicaat | Hreflang of consolidatie van podcast-pagina's | Laag | Technisch |
| L3 | RSS feed | @astrojs/rss implementeren voor nieuwsartikelen | Laag | Astro |
| L4 | Auteurspagina's | /auteur/yorrick/ aanmaken met Person schema | Laag | Astro |
| L5 | Star alt-tekst | alt="ster" → dynamisch alt="X van 5 sterren" | Laag | Astro component |
| L6 | Tag-pagina's SEO | Tag-pagina's overwegen voor topical authority | Laag | Astro/Content |

---

## 4. Tech Stack

| Laag | Technologie |
|------|-------------|
| Frontend | Astro 4.x |
| CMS | TinaCMS (headless, lokale Git-backed content) |
| Hosting/CDN | Vercel |
| Analytics | Google Analytics 4 |
| Search data | Google Search Console |
| Schema | JSON-LD (Schema.org) |

---

## 5. Architectuur Overzicht

```
Vercel (CDN + redirects)
  └─ Astro (SSG build)
       ├─ astro.config.mjs         ← site URL, sitemap config
       ├─ vercel.json              ← redirects (C2, C3, M8)
       ├─ src/
       │   ├─ layouts/
       │   │   ├─ NieuwsLayout.astro     ← canonical, meta, alt, gerelateerd-blok (C1, C4, C5, H3)
       │   │   └─ ReviewLayout.astro     ← Review schema (M2)
       │   └─ components/
       │       └─ BaseHeadNieuws.astro   ← OG tags, JSON-LD, BreadcrumbList (H1, H2, M1, M3, M4)
       └─ public/
           ├─ robots.txt           ← sitemap URL (C1)
           └─ llms.txt             ← nieuw (M5)
TinaCMS schema
  └─ content.config.ts / tina/config.ts  ← description-veld toevoegen (C5)
```

Alle kritieke fixes zijn onafhankelijk te deployen. Dependency-volgorde waar van toepassing: C1 vóór H2 (schema URLs zijn pas correct na www-fix), C1 vóór M1 (BreadcrumbList URLs).

---

## 6. Succescriteria

### Primaire KPI's (3 maanden na deployment)

| Metric | Huidig | Doel | Meting |
|--------|--------|------|--------|
| Geïndexeerde pagina's | 252 (20%) | 500+ (40%+) | GSC Indexeringsrapport |
| Organische kliks/maand | ~185/maand (740/4m) | 1.500+/maand | GSC Zoekprestaties |
| Gemiddelde CTR | 1,4% | 2,5%+ | GSC |
| 404-pagina's | 148 | <20 | GSC |
| Gecrawld-niet-geïndexeerd | 499 | <200 | GSC |

### Secundaire KPI's

- [ ] Canonical mismatch opgelost: GSC toont geen "Niet geselecteerd als canonical" meer voor www/non-www
- [ ] OG-preview werkt correct op Facebook/Twitter Debugger
- [ ] GA4 bot-filter actief: Direct-verkeer daalt naar <40%, Singapore verdwijnt uit top-5
- [ ] GA4 tracking-gap opgelost: Hokum-artikel zichtbaar in GA4 (was 147 GSC-kliks, onzichtbaar in GA4)
- [ ] Schema valideert zonder fouten in Google Rich Results Test
- [ ] Bubbles-artikel CTR: 1,4% → 3%+ (target: +80 kliks/maand)
- [ ] Avatar 4&5-artikel CTR: 1,2% → 3%+ (target: +90 kliks/maand)

---

## 7. Fase-indeling & Dependencies

### Fase 1 — Kritiek (Week 1)

**Doel:** Technische blokkades opheffen die actief indexering schaden.

**Dependency-volgorde binnen Fase 1:**
1. C1 + C2 eerst (canonical + redirect fix) — alle andere URL-fixes zijn afhankelijk van correcte www-basis
2. C5 (meta descriptions) — onafhankelijk van C1/C2, kan parallel
3. C3 (404 + redirect-kettingen) — vereist GSC-export, tijdsinvestering; start parallel met C5
4. C4 (interne linkstructuur) — grootste tijdsinvestering; start zo snel mogelijk

| ID | Taak | Files | Effort | Blokkeer voor |
|----|------|-------|--------|--------------|
| C1 | www canonical fix | `astro.config.mjs`, `src/layouts/NieuwsLayout.astro`, `public/robots.txt` | 30 min | H2, M1, M3, M4 |
| C2 | 307 → 308 redirect | `vercel.json` | 5 min | — |
| C3 | 404-herstel | `vercel.json` (lijst uit GSC) | 2-4 uur | — |
| C5 | Meta descriptions fix | `src/layouts/NieuwsLayout.astro`, `src/components/BaseHeadNieuws.astro`, TinaCMS schema | 1-2 uur | — |
| C4 | Interne linkstructuur | `src/layouts/NieuwsLayout.astro` (gerelateerd-blok), nieuwe category pages, breadcrumbs | 4-8 uur | M1 |

### Fase 2 — Hoog (Week 2)

**Doel:** On-page kwaliteit en meetbaarheid herstellen.

**Dependencies:** C1 moet deployed zijn vóór H1/H2 (absolute URLs op juiste www-domain).

| ID | Taak | Files | Effort |
|----|------|-------|--------|
| H1 | OG image absoluut + og:url | `src/components/BaseHeadNieuws.astro` | 10 min |
| H2 | Schema image absoluut | `src/components/BaseHeadNieuws.astro` | 5 min |
| H3 | Alt-tekst thumbnails | `src/layouts/NieuwsLayout.astro` | 10 min |
| H4 | Sitemap lastmod | `astro.config.mjs` | 20 min |
| H5 | Homepage title brand | Homepage head component | 5 min |
| H6 | CTR-optimalisatie 2 artikelen | TinaCMS content-edit | 30 min |
| H7 | GA4 tracking-gap debug | `src/layouts/NieuwsLayout.astro`, `BaseHeadNieuws.astro` | 1 uur |
| H8 | GA4 bot-filter | GA4 dashboard (geen code) | 30 min |

### Fase 3 — Medium (Maand 1)

**Doel:** Schema-completiteit, performance-baseline, AI-readiness.

**Dependencies:** C1 deployed (URLs in schema zijn correct), C4 deployed (BreadcrumbList M1 vereist werkende breadcrumb-navigatie).

| ID | Taak | Files | Effort |
|----|------|-------|--------|
| M1 | BreadcrumbList schema | `src/components/BaseHeadNieuws.astro` | 45 min |
| M2 | Review/Rating schema | `src/layouts/ReviewLayout.astro` | 30 min |
| M3 | SearchAction WebSite schema | `src/components/BaseHeadNieuws.astro` | 15 min |
| M4 | Author sameAs schema | `src/components/BaseHeadNieuws.astro` | 10 min |
| M5 | llms.txt | `public/llms.txt` | 15 min |
| M6 | Unicode slug fix | TinaCMS content + `vercel.json` | 30 min |
| M8 | /baseof.html redirect | `vercel.json` | 5 min |
| M9 | PageSpeed Insights meting | Extern tool (pagespeed.web.dev) | 30 min |
| M10 | jQuery self-host/remove | `src/layouts/NieuwsLayout.astro` | 1-2 uur |

### Fase 4 — Laag (Backlog)

| ID | Taak | Files | Effort |
|----|------|-------|--------|
| L1 | og:url alle pagina's | Alle head-componenten | 20 min |
| L2 | /luister/ vs /listen/ duplicaat | Hreflang of consolidatie | 1 uur |
| L3 | RSS feed | `src/pages/rss.xml.ts` (nieuw) | 1 uur |
| L4 | Auteurspagina's | `src/pages/auteur/[slug].astro` (nieuw) | 2-4 uur |
| L5 | Star alt-tekst dynamisch | Review-component | 15 min |
| L6 | Tag-pagina's SEO | `astro.config.mjs` sitemap filter + content | 2-4 uur |

---

## 8. Constraints & Risico's

| Constraint/Risico | Impact | Mitigatie |
|-------------------|--------|-----------|
| C3 vereist handmatige GSC-export van 148 404-URLs | Hoog | Direct starten met GSC-export; 404s zijn gedeeltelijk herstelbaar via bulk-redirects naar categoriepagina |
| C4 (gerelateerd-blok) vereist kennis van contentstructuur | Medium | Filteren op `soort`-veld (Film/Serie) is al aanwezig in TinaCMS schema |
| www canonical fix vereist Vercel domain-config check | Medium | Verifieer Vercel dashboard: www.cinematen.be als primary domain vóór C1 te deployen |
| GA4 tracking-gap: oorzaak onbekend | Medium | Debug in volgorde: browser DevTools → GA4 DebugView → tagmanager |
| Indexeringsgroei (252 → 500+) duurt 1–3 maanden na fix | Hoog | Verwachting managen; eerste re-crawl zichtbaar in GSC ~2–4 weken na deployment |
| jQuery verwijderen kan bestaande functionaliteit breken | Medium | Audit gebruik vóór verwijdering; fase 3 geeft tijd voor validatie |

---

## 9. Out of Scope (MVP)

- Backlink-acquisitiecampagne (geen redactionele links, maar valt buiten technische scope van deze remediation)
- Redesign of layout-wijzigingen
- Nieuwe content-strategie of keyword-onderzoek
- Podcast-platform integraties
- A/B-testen van titels of meta descriptions
- Automated CTR-optimalisatie-tooling
- Hreflang voor meertalige content (buiten L2-onderzoek)

---

## 10. Technische Implementatiedetails per Item

### C1 — www canonical fix

**`astro.config.mjs`:**
```js
export default defineConfig({
  site: "https://www.cinematen.be",
  // ... rest unchanged
})
```

**`src/layouts/NieuwsLayout.astro` (line ~11):**
```astro
const canonicalURL = `https://www.cinematen.be${Astro.url.pathname}`;
```

**`public/robots.txt`:**
```
Sitemap: https://www.cinematen.be/sitemap.xml
```

---

### C2 — 307 → 308 permanent redirect

**`vercel.json`** (toevoegen aan redirects array):
```json
{
  "source": "/:path*",
  "destination": "https://www.cinematen.be/:path*",
  "permanent": true,
  "has": [{ "type": "host", "value": "cinematen.be" }]
}
```

---

### C3 — 404-herstel

1. GSC → Pagina-indexering → filter "Niet gevonden (404)" → exporteer CSV
2. Per 404: toevoegen aan `vercel.json` redirects:
```json
{ "source": "/oud-pad", "destination": "/nieuws/nieuw-pad", "permanent": true }
```
3. Kettingen controleren: redirect A → B → C samenvoegen naar A → C
4. Voor categorisch herstelbare 404s (verwijderde artikelen zonder equivalent): redirect naar /nieuws/

---

### C4 — Interne linkstructuur

**Gerelateerd-nieuws-blok in `src/layouts/NieuwsLayout.astro`:**
```astro
---
// Haal gerelateerde artikelen op via Astro content collections
const allNieuws = await getCollection('nieuws');
const related = allNieuws
  .filter(a => a.slug !== frontmatter.slug && a.data.soort === frontmatter.soort)
  .sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
  .slice(0, 5);
---
<section class="related-nieuws">
  <h2>Meer {frontmatter.soort} nieuws</h2>
  {related.map(a => (
    <a href={`/nieuws/${a.slug}/`}>{a.data.title}</a>
  ))}
</section>
```

**Categoriepagina's:**
- Maak `src/pages/nieuws/film/index.astro` — filtert artikelen op soort === "Film"
- Maak `src/pages/nieuws/serie/index.astro` — filtert artikelen op soort === "Serie"

**Breadcrumbs:**
```astro
<nav aria-label="breadcrumb">
  <a href="/">Home</a> › <a href="/nieuws/">Nieuws</a> › {frontmatter.title}
</nav>
```

---

### C5 — Meta descriptions

**Stap 1 — `src/layouts/NieuwsLayout.astro`:** verander `content={...}` naar `description={...}` in BaseHeadNieuws-aanroep:
```astro
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

**Stap 2 — TinaCMS schema** (tina/config.ts of content.config.ts): voeg `description`-veld toe aan nieuws-collectie:
```ts
{
  name: 'description',
  label: 'Meta description (150-160 tekens)',
  type: 'string',
  required: false,
}
```

**Stap 3 — Verify:** `bodyPreview` bestaat al in `content.config.ts` als 200-char extract — dit is de automatische fallback voor alle 751 bestaande artikelen.

---

### H1 — OG image absolute URL + og:url

**`src/components/BaseHeadNieuws.astro`:**
```astro
<meta content={image ? `https://www.cinematen.be${image}` : "https://www.cinematen.be/images/Cinematelogotrans.png"} property="og:image" />
<meta content={image ? `https://www.cinematen.be${image}` : "https://www.cinematen.be/images/Cinematelogotrans.png"} property="twitter:image" />
<meta content={finalCanonical} property="og:url" />
```

---

### H2 — Schema image absolute URL

**`src/components/BaseHeadNieuws.astro`** in JSON-LD block:
```javascript
// Vervang:
...(image && { "image": image }),
// Met:
...(image && { "image": image.startsWith('http') ? image : `https://www.cinematen.be${image}` }),
```

---

### H3 — Alt-tekst thumbnails

**`src/layouts/NieuwsLayout.astro`:**
```astro
// Vervang:
<img src={frontmatter.thumbnail} alt="thumbnail" class="blog-image" />
// Met:
<img src={frontmatter.thumbnail} alt={frontmatter.title} class="blog-image" />
```

---

### H4 — Sitemap lastmod

**`astro.config.mjs`:**
```javascript
sitemap({
  serialize(item) {
    return { ...item, lastmod: new Date().toISOString() };
  },
  filter: (page) => !page.includes('/nieuws/pages/'),
}),
```

---

### H5 — Homepage title

Zoek de homepage head-component en verander:
```
"Film & TV Reviews en Nieuws"
→ "Film & TV Reviews en Nieuws | Cinematen.be"
```

---

### H6 — CTR-optimalisatie 2 artikelen

| Artikel | Huidige titel | Nieuwe titel | Meta description |
|---------|--------------|-------------|-----------------|
| `/nieuws/wat-is-er-gebeurd-met-bubbles-de-aap-van-michael-jackson/` | "Wat is er gebeurd met Bubbles, de aap van Michael Jackson?" | "Bubbles, de aap van Michael Jackson: wat is er écht mee gebeurd? (2025)" | Voeg concrete details toe: huidige locatie, leeftijd, gedrag na Michael Jacksons dood |
| `/nieuws/avatar-4-en-5-dit-weten-we-al-over-de-toekomst/` | "Avatar 4 en 5: dit weten we al over de toekomst" | "Avatar 4 & 5: alles wat we weten over de films (inclusief releasedatum)" | Voeg releasedatum, confirmed cast, plot-details toe |

---

### M1 — BreadcrumbList schema

**`src/components/BaseHeadNieuws.astro`** (naast bestaand NewsArticle JSON-LD):
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cinematen.be/" },
    { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.cinematen.be/nieuws/" },
    { "@type": "ListItem", "position": 3, "name": "[article title]", "item": "[canonicalURL]" }
  ]
}
```

---

### M2 — Review/Rating schema

**`src/layouts/ReviewLayout.astro`:**
```json
{
  "@type": "Review",
  "itemReviewed": { "@type": "Movie", "name": "[title]" },
  "reviewRating": { "@type": "Rating", "ratingValue": "[rating]", "bestRating": 5 },
  "author": { "@type": "Person", "name": "[schrijver]" }
}
```

---

### M3 — SearchAction WebSite schema

**`src/components/BaseHeadNieuws.astro`** WebSite schema:
```json
"potentialAction": {
  "@type": "SearchAction",
  "target": "https://www.cinematen.be/search?q={search_term_string}",
  "query-input": "required name=search_term_string"
}
```

---

### M4 — Author sameAs

**`src/components/BaseHeadNieuws.astro`** JSON-LD author:
```json
"author": {
  "@type": "Person",
  "name": "Yorrick",
  "url": "https://www.cinematen.be/#over-ons",
  "sameAs": ["https://www.instagram.com/cinematen_podcast"]
}
```

---

### M5 — llms.txt

**`public/llms.txt`** (nieuw bestand):
```
# Cinematen.be
> Film & TV nieuws, reviews en podcasts in het Nederlands

## Nieuws
- Film nieuws: https://www.cinematen.be/nieuws/
- Reviews & blogs: https://www.cinematen.be/reviews&blogs/

## Podcast
- Luister: https://www.cinematen.be/luister/
- Spotify: https://open.spotify.com/show/19O8JqKPSbQWek15vG3sig

## Over ons
- https://www.cinematen.be/#over-ons
```

---

### M6 — Unicode slug fix

1. Open artikel met slug `/nieuws/%F0%9D%99%85%F0%9D%99%96...` in TinaCMS
2. Hernoem slug naar ASCII-equivalent
3. Voeg toe aan `vercel.json`:
```json
{ "source": "/nieuws/%F0%9D%99%85...", "destination": "/nieuws/nieuw-ascii-slug/", "permanent": true }
```

---

### M8 — /baseof.html

**`vercel.json`:**
```json
{ "source": "/baseof.html", "destination": "/", "permanent": true }
```

---

### M10 — jQuery self-host

1. Download `jquery-3.7.1.min.js` naar `public/scripts/`
2. In `src/layouts/NieuwsLayout.astro`: vervang externe Cloudfront CDN URL door `/scripts/jquery-3.7.1.min.js`
3. Alternatief: audit of jQuery nog gebruikt wordt; zo niet, verwijderen

---

### L3 — RSS feed

Installeer `@astrojs/rss`, maak `src/pages/rss.xml.ts`:
```ts
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const nieuws = await getCollection('nieuws');
  return rss({
    title: 'Cinematen.be — Film & TV Nieuws',
    description: 'Laatste nieuws uit de film- en seriewereld',
    site: context.site,
    items: nieuws.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description || post.data.bodyPreview,
      link: `/nieuws/${post.slug}/`,
    })),
  });
}
```
