---
name: cinematen-redesign-initiative
description: Active redesign of cinematen.be visual layer (Claude Design export → Astro), branch cinematen-redesign, PRD approved 2026-07-18
metadata:
  type: project
---

Cinematen.be redesign: swap-in new visual layer designed via Claude Design, delivered as static `.dc.html` export at `/Users/yorrickschoonheydt/Documents/_Cinematen/WEBSITE/Cinematen webpage redesign`. Target repo `/Users/yorrickschoonheydt/Documents/_Cinematen/WEBSITE/cinematen.be`, branch `cinematen-redesign` (existed before this project started, already pushed to origin). PRD at `PRD.md` in repo root, approved 2026-07-18.

**Why:** This is explicitly a redesign (visual layer only), not a refactor — user was emphatic about this distinction. 9 pages in MVP scope: Home, Nieuws (overzicht+detail), Reviews (overzicht+detail), Search, Contact, OverOns, Privacybeleid, CookieBeleid, AlgemeneVoorwaarden.

**Hard constraints (do not relax these when planning/delegating):**
- `src/content/nieuws` + `src/content/reviews` (790 mdx files) are read-only. Never edit.
- Contact form must keep posting to Formspree `https://formspree.io/f/xknllzer` with fields `Naam`/`Email`/`Message` — same mechanism as current `src/components/BaseContact.astro`. Redesign's `Contact.dc.html` already uses identical endpoint/fields, so this is low-risk but must be verified post-implementation, not assumed.
- `cinematen-data.js` in the redesign source folder is mock/demo content — never wire it in as a real data source. Real data must come from Astro content collections.
- `BaseAdBanner.astro` redesign is explicitly deferred/out of scope for this MVP.
- Design must be pixel-perfect vs the Claude Design export — user rejected the idea of "interpreting" or simplifying the design during the Astro reimplementation.
- Analytics (GTM/GA, visible in `vercel.json` CSP allowlist) and podcast components (`BasePodcastBanner.astro`, `BasePodcastBlock.astro`) must keep working unchanged — not to be re-set-up or dropped.

**How to apply:** When coordinating or re-checking work on this initiative, verify these constraints against the actual current repo state (git diff on `src/content/**`, form action in rendered output, CSP in vercel.json) rather than trusting this memory alone — it's a snapshot from intake time. See [[cinematen-tech-stack]] for stack details.
