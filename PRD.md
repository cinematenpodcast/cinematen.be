# PRD: Cinematen.be Redesign (Visual Layer Swap)
**Datum:** 2026-07-18
**Status:** Draft

## 0. Orchestratie Metadata
> Deze sectie is bedoeld voor de multi-agent-coordinator — vul altijd in.

- **Project type:** Redesign van bestaand product (visuele laag vervangen, geen refactor van business logic/content/data-laag)
- **Platformen:** Web — responsive (desktop + mobile, redesign bevat mobile mockups o.a. iPhone 14 Pro Max)
- **Primaire tech stack:** Astro 4 + React 18 + MDX content collections (bestaand, blijft ongewijzigd) — nieuw design system (`_ds` tokens + component bundle) wordt geïntegreerd als Astro components/CSS
- **Specialistische domeinen nodig:** frontend/UI (pixel-perfect design system integratie), content-integratie (echte mdx-data koppelen i.p.v. mock data uit redesign), forms (Formspree-mechanisme exact behouden), QA (regressietest — dit is een redesign, geen greenfield build)
- **Bestaande systemen:**
  - Astro/Vercel productiesite, git branch `cinematen-redesign` (bestaat al, gepusht naar origin) — alle werk landt hier
  - Contact form → Formspree endpoint `https://formspree.io/f/xknllzer`, velden `Naam`/`Email`/`Message`, plain HTML POST (component `src/components/BaseContact.astro`)
  - Analytics → Google Tag Manager / Google Analytics, al geconfigureerd (zichtbaar in `vercel.json` CSP: `googletagmanager.com`, `google-analytics.com`) — niet opnieuw opzetten, gewoon meenemen
  - Podcast-integraties → `src/components/BasePodcastBanner.astro`, `BasePodcastBlock.astro` — meenemen in redesign
  - MDX content collections → `src/content/nieuws` (790 bestanden) en `src/content/reviews` — **read-only, niet aanraken**
- **Excluded voor nu:** `BaseAdBanner.astro` — advertentie-redesign wordt apart/later bekeken
- **Complexiteit:** large

## 1. Project Overzicht
Cinematen.be krijgt een volledig nieuwe visuele identiteit (reeds ontworpen via Claude Design, geleverd als statische HTML/CSS/JS export) zonder dat bestaande functionaliteit breekt. Dit is een redesign van de presentatielaag — geen refactor van content, data-architectuur of backend-mechanismen.

## 2. Doelgroep
Niet van toepassing (interne restyling van bestaande publieke site; geen specifieke doelgroepwijziging).

## 3. Kernfuncties — MVP
| Feature | Beschrijving | Prioriteit | Domein |
|---------|-------------|-----------|--------|
| Homepage | Nieuw design (`Home.dc.html`) omzetten naar Astro, gekoppeld aan bestaande data | Hoog | frontend |
| Nieuws overzicht + detail | `Nieuws.dc.html` + `Artikel.dc.html` → Astro pages, gekoppeld aan `src/content/nieuws` mdx | Hoog | frontend/content |
| Reviews overzicht + detail | `Reviews.dc.html` + `Review.dc.html` → Astro pages, gekoppeld aan `src/content/reviews` mdx | Hoog | frontend/content |
| Zoekfunctie | `Search.dc.html` → Astro, gekoppeld aan bestaande zoekmechanisme (pagefind) | Hoog | frontend |
| Contactpagina | `Contact.dc.html` → Astro, form action/velden identiek aan huidige Formspree-integratie | Hoog | frontend/forms |
| Over Ons | `OverOns.dc.html` → Astro | Hoog | frontend |
| Privacybeleid | `Privacybeleid.dc.html` → Astro | Hoog | frontend |
| Cookiebeleid | `CookieBeleid.dc.html` → Astro | Hoog | frontend |
| Algemene Voorwaarden | `AlgemeneVoorwaarden.dc.html` → Astro | Hoog | frontend |

## 4. Tech Stack
- **Frontend:** Astro 4 + React 18 (bestaand), nieuw design system tokens/CSS uit `_ds/cinematen-design-system-.../` (colors.css, typography.css, spacing.css, styles.css) geïntegreerd als Astro-compatibele stylesheets/componenten
- **Content:** Astro content collections (mdx) — ongewijzigd, read-only
- **Forms:** Formspree (`https://formspree.io/f/xknllzer`) — ongewijzigd mechanisme
- **Analytics:** bestaande GTM/GA setup — ongewijzigd, blijft actief
- **Hosting:** Vercel (bestaand)
- **Branch:** `cinematen-redesign`

## 5. Architectuur Overzicht
De redesign-map bevat een statische Claude Design export (`.dc.html` pagina's + `_ds` design system + `cinematen-data.js` met **mock content**). Deze wordt niet 1-op-1 gekopieerd, maar omgezet naar Astro components die:
1. Het nieuwe design pixel-perfect reproduceren (tokens, layout, typografie, spacing uit `_ds`)
2. Data ophalen uit de bestaande Astro content collections (mdx) i.p.v. de hardcoded mock-arrays in `cinematen-data.js`
3. Bestaande routes/URL-structuur behouden (geen breaking changes aan `src/pages/*`)
4. Bestaande integraties (Formspree form, analytics, podcast-componenten) 1-op-1 doorzetten
5. `BaseAdBanner.astro` voorlopig ongemoeid laten / uitsluiten van redesign

## 6. Succescriteria
- [ ] Alle 9 pagina's pixel-perfect volgens Claude Design redesign
- [ ] 0 mdx-bestanden gewijzigd (`src/content/nieuws`, `src/content/reviews`)
- [ ] Contact form verzendt naar exact zelfde Formspree endpoint (`https://formspree.io/f/xknllzer`) met dezelfde veldnamen (`Naam`, `Email`, `Message`)
- [ ] Build + deploy op Vercel slaagt zonder errors (op branch `cinematen-redesign`)
- [ ] Analytics (GTM/GA) blijft functioneel zonder herconfiguratie
- [ ] Podcast-integraties blijven functioneel
- [ ] QA-pass (regressie) door qa-tester agent vóór oplevering

## 7. Constraints & Risico's
| Constraint/Risico | Impact | Mitigatie |
|-------------------|--------|-----------|
| Redesign-map is statische export (geen framework, mock data), geen 1-op-1 dropin mogelijk | Hoog | Frontend/fullstack agent vertaalt `.dc.html` + `_ds` naar Astro components; content komt uit bestaande mdx collections, niet uit `cinematen-data.js` |
| Pixel-perfect eis vs. Astro/React herimplementatie | Middel | Design tokens (`_ds/tokens/*.css`) rechtstreeks hergebruiken; visuele diff-check tijdens QA |
| MDX content mag niet aangepast worden | Hoog (harde constraint) | Expliciete instructie aan alle agents: read-only op `src/content/**`; QA controleert git diff op dat pad |
| Contact form mechanisme moet exact behouden blijven | Hoog | Form action/method/veldnamen 1-op-1 overnemen uit huidige `BaseContact.astro`; geen nieuwe API/serverless route |
| Geen deadline/budget → risico op scope-vaag opleveren | Laag | Succescriteria als harde acceptatiecriteria hanteren |
| `image-slot.js`/`support.js` in redesign-map zijn Claude Design auteurstools, niet productiecode | Middel | Niet meenemen naar productie; enkel `_ds` tokens/CSS en de content-structuur van de `.dc.html` bestanden als visuele referentie gebruiken |

## 8. Out of Scope (MVP)
- Redesign van `BaseAdBanner.astro` (advertenties) — apart traject, later
- Wijzigingen aan mdx-content (nieuws/reviews) — content blijft exact zoals nu
- Wijzigingen aan het contact-form backend-mechanisme (blijft Formspree, zelfde endpoint/velden)
- Nieuwe features die niet in de Claude Design export zitten

## 9. Aandachtspunten voor het team
- Redesign bronmap: `/Users/yorrickschoonheydt/Documents/_Cinematen/WEBSITE/Cinematen webpage redesign` — bevat `.dc.html` referentiepagina's (Home, Nieuws, Reviews, Review, Artikel, Search, OverOns, Contact, Privacybeleid, CookieBeleid, AlgemeneVoorwaarden), design system in `_ds/`, uploads/screenshots als visuele referentie
- Productie repo: `/Users/yorrickschoonheydt/Documents/_Cinematen/WEBSITE/cinematen.be`, branch `cinematen-redesign` (al aangemaakt + gepusht) — al het werk hier landen
- `cinematen-data.js` in de redesign-map bevat **hardcoded mock content** — nooit gebruiken als databron, enkel als voorbeeld van dataverwachting/structuur; echte data komt uit `src/content/nieuws` en `src/content/reviews`
- Contact form referentie: huidig `src/components/BaseContact.astro`, form action `https://formspree.io/f/xknllzer`, velden `Naam`/`Email`/`Message` — redesign's `Contact.dc.html` gebruikt reeds identieke velden/endpoint, dus overname is laag risico maar moet expliciet geverifieerd worden na implementatie
- CSP in `vercel.json` staat momenteel scripts/connect toe voor `googletagmanager.com`, `google-analytics.com`, `n8n.cinematen.be`, `open.spotify.com`, `youtube(-nocookie).com` — nieuwe implementatie mag deze niet breken; als nieuwe design system assets (fonts, scripts) andere origins nodig hebben, CSP aanpassen
- **Harde regel voor alle agents: nooit bestanden onder `src/content/**` (mdx) wijzigen.**
