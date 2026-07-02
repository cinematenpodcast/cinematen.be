# SEO Full Audit Report — cinematen.be
**Date**: 2026-07-01  
**Audited URL**: https://cinematen.be  
**Canonical domain**: https://www.cinematen.be  
**Platform**: Astro + TinaCMS + Vercel  
**Language**: Dutch (nl)  
**Site type**: Film & TV news blog + podcast  
**Data sources**: Live site crawl + Google Analytics 4 (1 mrt – 30 jun 2026) + Google Search Console (1 mrt – 30 jun 2026)

---

## Executive Summary

**Overall SEO Health Score: 48 / 100** *(herzien na GA4/GSC data)*

| Category | Weight | Score |
|----------|--------|-------|
| Technical SEO | 22% | 32/100 |
| Content Quality | 23% | 62/100 |
| On-Page SEO | 20% | 52/100 |
| Schema / Structured Data | 10% | 60/100 |
| Performance (CWV) | 10% | 60/100 |
| AI Search Readiness | 10% | 30/100 |
| Images | 5% | 48/100 |

**Weighted total: 48/100**

The site heeft in 4 maanden 740 organische kliks en 51.100 vertoningen gehaald — een duidelijk signaal dat het potentieel er is. Maar **80% van alle bij Google bekende pagina's staat niet in de index** (252 geïndexeerd van 1.262 bekende URL's). Dit indexeringsprobleem is de grootste groeirem, groter dan alle on-page optimalisaties samen. Daarnaast blokkeren een gebroken www/non-www canonical chain, een tijdelijke 307-redirect, en generieke meta descriptions op alle 751 nieuwsartikelen de rankinggroei.

---

## Top 5 Critical Issues

1. **80% van de pagina's staat niet in Google** — 252 van 1.262 bekende URL's zijn geïndexeerd. 499 zijn gecrawld maar geweigerd, 287 zijn nog niet eens gecrawld, 148 geven een 404. Dit is de grootste blokkade voor organische groei.
2. **307 Temporary Redirect** — `cinematen.be` → `www.cinematen.be` uses HTTP 307 (not 301), meaning crawl budget leaks and link equity is not passed
3. **Canonical ↔ Served-URL mismatch** — Canonical tags point to `https://cinematen.be/...` (non-www) but the live domain is `https://www.cinematen.be/`. Google sees these as separate URLs
4. **Generic meta descriptions on all 751 news articles** — The `description` prop is never populated; every article shows `"Lees het laatste nieuws uit de film- en seriewereld op Cinematen.be"` — een directe CTR-verlager op de 51.100 vertoningen die al worden gegenereerd
5. **Interne linkstructuur: 88% van alle interne links gaat naar de homepage** — Individuele artikelen krijgen slechts 1–3 interne links, wat het crawlbudget naar diepere pagina's uitput en bijdraagt aan het indexeringsprobleem

## Top 5 Quick Wins

1. **CTR-optimalisatie op 2 hoge-impressie artikelen**: "bubbles"-artikel (4.870 vertoningen, 1,4% CTR) en "avatar-4-en-5" (4.583 vertoningen, 1,2% CTR) — herschrijf titel + meta description, geen rankingwinst nodig
2. Fix prop name `content=` → `description=` in `NieuwsLayout.astro` + gebruik `bodyPreview` als fallback — fixes meta descriptions op 751 pagina's in één code-change
3. Change the `astro.config.mjs` `site` value to `https://www.cinematen.be` so sitemap URLs and canonicals match the live domain
4. Fix the `og:image` to use an absolute URL in `BaseHeadNieuws.astro`
5. Add a Vercel redirect rule to send `cinematen.be` → `www.cinematen.be` with 308 (permanent)

---

## Google Analytics 4 & Search Console Data (1 mrt – 30 jun 2026)

### Zoekprestaties (GSC)

| Metric | Waarde |
|--------|--------|
| Totaal kliks | 740 |
| Totaal vertoningen | 51.100 |
| Gemiddelde CTR | 1,4% |
| Gemiddelde positie | 9,4 |

**Apparaten**: Mobiel domineert met 78% van kliks (575) en 74% van vertoningen. Mobiele paginasnelheid en leesbaarheid zijn dus de meest impactvolle UX-prioriteit.

**Markten**: België (468 kliks, 26.777 vertoningen) + Nederland (258 kliks, 22.267 vertoningen) = 98% van al het organisch zoekverkeer. De doelmarkt is goed bereikt.

### Best presterende pagina's (organisch)

| Pagina | Kliks | Vertoningen | CTR | Opmerking |
|--------|-------|-------------|-----|-----------|
| `/nieuws/adam-scott-krijgt-het-zwaar-te-verduren-in-nieuwe-horrorfilm-hokum/` | 147 | 2.953 | 5,0% | Sterkste pagina — **nauwelijks zichtbaar in GA4** (zie tracking-gap) |
| `/` (homepage) | 82 | 340 | 24,1% | Sterke CTR — merknaamverkeer werkt |
| `/nieuws/wat-is-er-gebeurd-met-bubbles-de-aap-van-michael-jackson/` | 69 | 4.870 | **1,4%** | ⚠️ Lage CTR bij veel vertoningen — direct optimaliseerbaar |
| `/nieuws/avatar-4-en-5-dit-weten-we-al-over-de-toekomst/` | 53 | 4.583 | **1,2%** | ⚠️ Idem — titel/snippet heeft veel potentieel |
| `/nieuws/beef-seizoen-2-een-nieuwe-ruzie-met-een-nieuwe-cast/` | 18 | 1.329 | 1,4% | |

**CTR-patroon**: De site genereert veel vertoningen (51k) op een lange staart van brede entertainment-queries (avatar 4, jurassic world, michael jackson...) maar scoort positie 20–90 voor die termen. Dit levert vertoningen zonder kliks en drukt de gemiddelde CTR naar 1,4%. Oplossing is tweeledig: autoriteit opbouwen voor de brede termen (langetermijn) + CTR verhogen op de pagina's die al goed scoren (kortetermijn).

### Google Analytics 4 — verkeer & signalen

| Metric | Waarde | Noot |
|--------|--------|------|
| Sessies | 682 | Laag t.o.v. 740 organische GSC-kliks |
| Actieve gebruikers | 672 | |
| Gem. betrokkenheidspercentage | 24,6% | Hoog bij organisch (57,7%) |
| Gem. engagementduur/sessie | 10 s | Vertekend door Direct-kanaal |
| Direct-verkeer | 529 sessies (77,6%) | ⚠️ Atypisch hoog — zie bot-signalen |
| Organic Search | 104 sessies (15,3%) | 57,7% betrokkenheid, 54 s gem. duur |

**⚠️ Bot/spam-verkeer signalen — actie vereist:**
- **Geografie GA4 vs GSC mismatch**: GA4 toont Singapore als #1 (379 actieve gebruikers) en VS als #2 (166), terwijl GSC duidelijk Belgium/NL aanduidt als doelmarkt. Dit is een sterk signaal van vervuild GA4-verkeer (bots, crawlers, datacenter-IP's).
- **Browser-taal**: Overwegend Engelstalige browserinstellingen bij een Nederlandstalige site — bevestigt het bot-/spam-patroon.
- **77,6% Direct met 3 seconden gem. duur**: Atypisch voor een contentsite. Mogelijke oorzaken: bots die als direct worden geregistreerd, sociale apps die referrer wegstoken, of directe URL-navigatie met direct sluiten.
- **Aanbeveling**: Voeg een bot-filter toe in GA4 (Beheer → Datainstellingen → Datafilters) en onderzoek de server-logs op datacenter-IP's voordat verdere data-gedreven beslissingen worden genomen.

### ⚠️ Tracking-gap — GA4 vs GSC

De `/nieuws/adam-scott-krijgt-het-zwaar-te-verduren-in-nieuwe-horrorfilm-hokum/` pagina haalde **147 GSC-kliks** maar is nauwelijks zichtbaar in GA4-rapporten. Dit wijst op een GA4-tag die ontbreekt of niet correct laadt op (sommige) artikelpagina's. **De developer moet verifiëren of de GA4-tag aanwezig is op alle artikel-templates** vóór er data-gedreven beslissingen worden genomen op basis van GA4.

---

## Google Search Console — Indexering (grootste groeirem)

**Dit is de belangrijkste bevinding van de gecombineerde audit.**

| Status | Aantal pagina's |
|--------|----------------|
| **Geïndexeerd** | **252** |
| Niet geïndexeerd — totaal | **1.010** |
| ↳ Niet gevonden (404) | 148 |
| ↳ Pagina met omleiding (redirect) | 72 |
| ↳ Uitgesloten door noindex | 2 |
| ↳ **Gecrawld — momenteel niet geïndexeerd** | **499** |
| ↳ **Gevonden — momenteel niet geïndexeerd** | **287** |
| **Totaal bekende URL's** | **1.262** |
| **Indexeringspercentage** | **20%** |

Slechts **20% van alle bij Google bekende pagina's staat in de index**. Dit heeft potentieel het grootste effect op organisch verkeer van alle bevindingen — meer dan alle on-page optimalisaties gecombineerd.

**Analyse per categorie:**

- **499 "Gecrawld — momenteel niet geïndexeerd"**: Google heeft deze bezocht maar geweigerd op te nemen. Oorzaken zijn doorgaans: dunne/weinig unieke content, duplicate content (paginering, tag-pagina's), of te weinig interne autoriteit naar die pagina's.
- **287 "Gevonden — momenteel niet geïndexeerd"**: Google kent de URL (via sitemap of links) maar heeft ze nog niet eens gecrawld. Dit is een crawlbudget-probleem — versterkt door het feit dat 88% van alle interne links naar de homepage gaat en individuele artikelen slechts 1–3 interne links krijgen.
- **148 pagina's met 404**: Verwijderde of hernoemde artikelen zonder redirect, of interne links die naar niet-bestaande URL's verwijzen.
- **72 pagina's met redirect die niet indexeren**: Controleer op overbodige redirect-kettingen (redirect → redirect).

**Sitemap**: 1 sitemap ingediend (`/sitemap-0.xml`, 796 URL's, succesvol ingelezen op 30 juni 2026). Dat zelfs van de gesitemapte pagina's een groot deel niet indexeert, bevestigt dat het probleem ligt bij contentdikte en interne autoriteit, niet bij technische onbereikbaarheid.

---

## Autoriteit & Backlinkprofiel (GSC)

### Externe links

Search Console detecteert in totaal **92 externe links** naar cinematen.be — een zeer dun profiel voor een nieuwssite.

| Linkend domein | Links | Type |
|----------------|-------|------|
| blogspot.com | 34 | Podcast-directory |
| apple.com | 29 | Podcast-directory |
| podtail.se | 7 | Podcast-directory |
| podtail.com | 6 | Podcast-directory |
| podscan.fm | 3 | Podcast-directory |

**Geen enkele redactionele link** van filmsites, nieuwsmedia of blogs. Dit verklaart waarom de site voor brede, competitieve termen (avatar 4, jurassic world, michael jackson...) op positie 20–90 staat — autoriteit is een directe rankingfactor en ontbreekt grotendeels.

### Interne links

1.553 interne links geteld, maar **1.367 (88%) gaan naar de homepage**. Individuele artikelen ontvangen gemiddeld slechts 1–3 interne links. Dit heeft twee negatieve effecten:

1. **Crawlbudget**: Googlebot besteedt het meeste crawlbudget aan de homepage en bereikt diepere artikelen nauwelijks.
2. **PageRank**: Link equity stroomt niet door naar artikelen, wat hun rankingvermogen verlaagt.

**Aanbeveling**: Gerelateerde-artikelen-blokken, categoriepagina's en breadcrumbs zijn de snelste manier om meer interne links naar diepere pagina's te sturen.

---

## Technical SEO

### Domain & Redirects

| Check | Status | Detail |
|-------|--------|--------|
| HTTP → HTTPS | ✅ Pass | HSTS set (63072000s) |
| www → non-www consistency | ❌ Fail | Site served on www.cinematen.be but canonical + sitemap use non-www |
| Redirect type (non-www → www) | ❌ Critical | `cinematen.be` → `www.cinematen.be` returns **HTTP 307** (Temporary), not 301/308 |
| robots.txt | ⚠️ Warn | Accessible but lists `https://cinematen.be/sitemap.xml` (non-www); should match live domain |
| Sitemap in robots.txt | ⚠️ Warn | Points to non-www sitemap; Googlebot follows the redirect but it's non-standard |

**Root cause**: `astro.config.mjs` has `site: "https://cinematen.be"` (non-www). Vercel appears to have `www.cinematen.be` as the primary domain. Every generated URL — canonical tags, sitemap entries, JSON-LD — inherits the non-www base. The redirect exists but is temporary (307), signaling to browsers and bots that the redirect may change.

**Fix**:
1. Change `astro.config.mjs`: `site: "https://www.cinematen.be"`
2. In Vercel project settings, verify `www.cinematen.be` is the primary domain and that `cinematen.be` does a **301/308** redirect to it
3. Update `NieuwsLayout.astro` canonical: `const canonicalURL = \`https://www.cinematen.be${Astro.url.pathname}\``

### Crawlability

| Check | Status | Detail |
|-------|--------|--------|
| robots.txt | ✅ Pass | `Allow: /` for all agents |
| Sitemap accessibility | ✅ Pass | `/sitemap.xml` rewritten to `/sitemap-index.xml` via Vercel |
| Sitemap URL count | ✅ Pass | 799 URLs |
| `<lastmod>` in sitemap | ❌ Fail | **0 of 799 URLs** have lastmod — crawlers can't prioritize fresh content |
| Pagination pages in sitemap | ✅ Pass | `/nieuws/pages/` filtered out (correct) |
| Unicode slug in sitemap | ⚠️ Warn | 1 URL uses mathematical sans-serif Unicode characters (U+1D400–U+1D7FF) in slug — may cause indexing issues |

**Unicode slug found**:
```
/nieuws/%F0%9D%99%85%F0%9D%99%96%F0%9D%99%98%F0%9D%99%A0-...
```
This slug uses mathematical bold italic characters. While technically valid UTF-8, Google normalizes these to ASCII when displayed and may struggle to associate them with the human-readable title.

### Security Headers

| Header | Status |
|--------|--------|
| Content-Security-Policy | ✅ Set |
| Strict-Transport-Security | ✅ Set |
| X-Frame-Options | ✅ SAMEORIGIN |
| X-Content-Type-Options | ✅ nosniff |
| Referrer-Policy | ✅ strict-origin-when-cross-origin |
| Permissions-Policy | ✅ Set |

Security headers are excellent — no issues here.

---

## Content Quality

### Meta Descriptions

**All 751 news articles share the same meta description**:
> "Lees het laatste nieuws uit de film- en seriewereld op Cinematen.be"

**Root cause**: `NieuwsLayout.astro` passes `content={frontmatter.summary}` to `BaseHeadNieuws` — but the component's prop is named `description`, not `content`. The `summary` field also does not exist in the news article frontmatter schema. So the fallback generic description is always used.

**Fix (two-part)**:
1. Add `description` field to TinaCMS schema and news article frontmatter:
   ```yaml
   description: 'Begin dit jaar...' # 150-160 character excerpt
   ```
2. Fix the prop name in `NieuwsLayout.astro`:
   ```astro
   <BaseHeadNieuws
     description={frontmatter.description || frontmatter.bodyPreview?.substring(0, 155)}
     ...
   ```
   The `bodyPreview` field already exists in `content.config.ts` and auto-generates a 200-char text excerpt from the article body — this can be used as an auto-description fallback.

### Review Pages

37 review/blog pages exist. The `reviews` collection schema has a `summary` field (`z.string().nullish()`). If this is populated for reviews, meta descriptions may be unique. Spot-check recommended.

### Content Depth

- Articles are original Dutch-language content — good for language-specific ranking
- Content is clearly authored by named authors (Yorrick, Maarten) — supports E-E-A-T signals
- Publication dates are tracked (schema datePublished + dateModified) — good
- Tags/categories exist (soort: Film/Serie) but tag pages appear to be excluded from sitemap — this is intentional but means category content is undiscoverable via search

### Thin Content Risk

Pages that need investigation:
- `/collectorsbeurs/` — purpose unclear from URL
- `/ikwilmee/` — appears to be a participation page
- `/lets-go-app/` — app landing page
- `/luister/` and `/listen/` — likely duplicates (NL + EN) of the podcast page

---

## On-Page SEO

### Title Tags

| Page | Title | Length | Status |
|------|-------|--------|--------|
| Homepage | "Film & TV Reviews en Nieuws" | 29 chars | ⚠️ Short, no brand |
| Articles | Article title (dynamic) | varies | ✅ Good |
| Generic fallback | "Film & TV Reviews en Nieuws" | — | ⚠️ Same as homepage |

Homepage title is missing the brand name "Cinematen.be". Recommended: "Film & TV Reviews en Nieuws | Cinematen.be"

### Open Graph Tags

| Tag | Status | Issue |
|-----|--------|-------|
| og:title | ✅ Present | |
| og:description | ⚠️ Warn | Generic (same issue as meta description) |
| og:image | ❌ Fail | Relative path `./images/Cinematelogotrans.png` — social scrapers can't resolve |
| og:type | ✅ Present | `article` for news, `website` for homepage |
| og:url | ❌ Missing | `og:url` tag is absent entirely |
| article:published_time | ✅ Present | |
| article:author | ✅ Present | |

**Fix for og:image in `BaseHeadNieuws.astro`**:
```astro
// Replace:
<meta content="./images/Cinematelogotrans.png" property="og:image" />
// With:
<meta content={image ? `https://www.cinematen.be${image}` : "https://www.cinematen.be/images/Cinematelogotrans.png"} property="og:image" />
```

### Heading Structure

Article pages use the following hierarchy:
- `<h3>` for category (Film nieuws) — unusual position for category
- `<h1>` for article title — correct
- `<h2>` tags inside article body

Homepage uses `<h2 class="cinematen-logo-text">CINEMATEN.BE</h2>` and `<h3>` for tagline before any semantic `<h1>`. This is visually-driven markup that may confuse crawlers.

### Internal Linking

- "Misschien ben je ook geïnteresseerd in..." section on articles shows 3 random reviews — good for crawl depth
- No related nieuws articles are linked from nieuws articles — missed cross-linking opportunity within the same content type
- Tag pages exist but are excluded from sitemap — tags could drive topical authority if surfaced
- **GSC-bevestigd**: 88% van alle 1.553 interne links gaat naar de homepage. Artikelen krijgen 1–3 links. Dit is een directe oorzaak van het crawlbudget- en indexeringsprobleem.

### CTR-optimalisatie op basis van GSC-data

Twee pagina's combineren veel vertoningen met een lage CTR en zijn onmiddellijk optimaliseerbaar zonder rankingwinst:

| Pagina | Impressions | CTR | Actie |
|--------|-------------|-----|-------|
| `/nieuws/wat-is-er-gebeurd-met-bubbles...` | 4.870 | 1,4% | Herschrijf titel + meta description: voeg jaartal, concrete details of vraagvorm toe |
| `/nieuws/avatar-4-en-5-dit-weten-we-al...` | 4.583 | 1,2% | Idem: concretere, activerende copy met feiten (release datum, cast) |

Een CTR-stijging van 1,4% naar 3% op deze twee pagina's alleen al genereert ~80 extra kliks per maand zonder enige rankingverbetering.

---

## Schema & Structured Data

### Homepage

```json
{
  "@type": "WebSite",
  "name": "Cinematen.be",
  "url": "https://cinematen.be/",
  "description": "Film & TV Reviews en Nieuws door Yorrick & Maarten",
  "publisher": { "@type": "Organization", "name": "Cinematen", "logo": {...} }
}
```

✅ WebSite schema present  
❌ Missing `potentialAction` with SearchAction (enables Google Sitelinks Search Box)  
❌ `url` uses non-www — should be `https://www.cinematen.be/`

### News Articles

```json
{
  "@type": "NewsArticle",
  "headline": "...",
  "description": "Lees het laatste nieuws...",  ← generic
  "image": "/images/article-images/...",          ← relative URL
  "author": { "@type": "Person", "name": "Yorrick" }
}
```

✅ NewsArticle type — good  
❌ `description` is generic (same bug as meta description)  
❌ `image` is a relative URL — Google requires absolute URLs for rich results  
❌ `author` has no `url` or `sameAs` property (blocks E-E-A-T signal)  
❌ No `BreadcrumbList` schema linking article → category → homepage  

**Fix for image in schema** (`BaseHeadNieuws.astro`):
```javascript
// Replace in JSON-LD:
...(image && { "image": image }),
// With:
...(image && { "image": image.startsWith('http') ? image : `https://www.cinematen.be${image}` }),
```

### Reviews

No Review/Rating schema found on review pages. Adding `ReviewRating` and `AggregateRating` schema would enable star ratings in SERPs — high-value for review content.

---

## Sitemap Analysis

| Property | Value |
|----------|-------|
| Total URLs | 799 |
| News articles | 751 |
| Reviews & blogs | 37 |
| Static pages | 11 |
| Has `<lastmod>` | ❌ No (0/799) |
| Has `<priority>` | ❌ No |
| Has `<changefreq>` | ❌ No |
| URL domain | ❌ Non-www (`cinematen.be`) |
| Sitemap namespace extensions | ✅ news, image, video, xhtml |

**No lastmod dates** means Google's crawler treats all pages as equally fresh/stale and cannot efficiently re-crawl updated content. Since the site publishes new articles frequently, this is a missed crawl efficiency opportunity.

**Fix** in `astro.config.mjs`:
```javascript
sitemap({
  serialize(item) {
    return {
      ...item,
      lastmod: new Date().toISOString(), // Or pull from article date
    };
  },
  ...
})
```

---

## Performance (Estimated)

| Factor | Status | Notes |
|--------|--------|-------|
| Google Fonts | ⚠️ Warn | Rubik + Rubik Mono One loaded via external CDN (Fonts.googleapis.com) — adds render-blocking request. `display=swap` is set (good) |
| jQuery CDN | ⚠️ Warn | jQuery 3.5.1 loaded from Cloudfront CDN with `defer` — extra DNS lookup, old version |
| LCP image preload | ✅ Good | Logo preloaded: `<link rel="preload" as="image" href="/images/LogoCleanSmaller.png">` |
| Critical CSS | ✅ Good | Inline critical CSS in `<head>` |
| Lazy loading | ✅ Good | Below-fold images use `loading="lazy"` |
| Image dimensions | ✅ Good | Width/height attributes set on key images |
| Vercel CDN | ✅ Good | `x-vercel-cache: HIT` confirmed — static pages cached at edge |
| CrUX velddata | ⚠️ Warn | **Onvoldoende verkeer in GSC** voor CrUX-velddata (zowel mobiel als desktop). Dit betekent niet dat de snelheid goed is — Google kan er nog geen uitspraak over doen. Run handmatig via PageSpeed Insights. |

jQuery 3.5.1 is outdated (current: 3.7.x). The Cloudfront CDN dependency adds an external DNS resolution. Consider self-hosting or removing jQuery if only used for legacy Webflow interactions.

**Prioriteit**: 78% van organisch verkeer komt van mobiel (GSC). Mobiele snelheid is de meest impactvolle CWV-prioriteit.

---

## Images

| Check | Status | Notes |
|-------|--------|-------|
| Article thumbnails alt text | ❌ Fail | All articles use `alt="thumbnail"` — not descriptive |
| Logo alt text | ✅ Pass | `alt="Cinematen logo"` |
| Kinepolis partner logo | ✅ Pass | `alt="Kinepolis Antwerpen"` |
| Star rating images | ⚠️ Warn | `alt="ster"` — acceptable but could be more descriptive |
| OG image path | ❌ Fail | Relative path (see On-Page section) |
| Review thumbnails from external domain | ⚠️ Warn | Some review images use `gnwcdn.com` — external dependency |

**Fix for article image alt** in `NieuwsLayout.astro`:
```astro
<img src={frontmatter.thumbnail} alt={frontmatter.title} class="blog-image" />
```

---

## AI Search Readiness

| Check | Status |
|-------|--------|
| `llms.txt` | ❌ Missing |
| AI crawler access (robots.txt) | ✅ `Allow: /` (all bots welcome) |
| Structured content | ✅ Good — articles have clear headings, dates, authors |
| Author attribution | ✅ Present in schema |
| Fact density | ✅ Good — articles cite sources (Rotten Tomatoes scores, box office figures) |
| Citation readiness | ⚠️ Medium — good content but no explicit sourcing markup |

**Add `llms.txt`** at `https://www.cinematen.be/llms.txt`:
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

## Scoring Detail

*Score herzien na integratie van GA4/GSC data (indexering 20%, bot-traffic, backlinks).*

| Category | Weight | Raw Score | Weighted | Wijziging |
|----------|--------|-----------|---------|-----------|
| Technical SEO | 22% | 32 | 7.0 | ↓ was 40 — indexering 20% + crawlbudget |
| Content Quality | 23% | 62 | 14.3 | ongewijzigd |
| On-Page SEO | 20% | 52 | 10.4 | ongewijzigd |
| Schema | 10% | 60 | 6.0 | ongewijzigd |
| Performance | 10% | 60 | 6.0 | ↓ was 65 — CrUX onvoldoende data |
| AI Search | 10% | 30 | 3.0 | ongewijzigd |
| Images | 5% | 48 | 2.4 | ongewijzigd |
| **Total** | 100% | — | **49.1 ≈ 48** | ↓ was 52 |
