---
name: cinematen-tech-stack
description: cinematen.be stack facts gathered during redesign intake (2026-07-18) — Astro/React/MDX, Formspree, Vercel, GTM
metadata:
  type: reference
---

cinematen.be production stack (as of 2026-07-18 intake research, verify before relying on specifics later):
- Astro 4 + `@astrojs/react` (React 18) + `@astrojs/mdx`, deployed on Vercel (`@astrojs/vercel` adapter, `vercel.json` present).
- Content: Astro content collections at `src/content/nieuws` and `src/content/reviews`, config at `src/content/config.ts`.
- Contact form: `src/components/BaseContact.astro`, plain HTML POST to `https://formspree.io/f/xknllzer`, no serverless/API route involved.
- Search: uses `astro-pagefind`/`pagefind` (per package.json deps).
- Analytics: GTM/GA — inferred from `vercel.json` CSP allowlisting `googletagmanager.com` and `google-analytics.com` (exact script location not pinned down further; check `src/components/BaseHead*.astro` if needed).
- CSP in `vercel.json` also allows `n8n.cinematen.be`, `open.spotify.com`, `youtube(-nocookie).com` — relevant if redesign introduces new external assets/scripts that need CSP updates.
- Redesign source (Claude Design export, not a framework project) lives at `/Users/yorrickschoonheydt/Documents/_Cinematen/WEBSITE/Cinematen webpage redesign` — `.dc.html` pages + `_ds/` design system (tokens: colors/typography/spacing CSS, `_ds_bundle.js`) + `cinematen-data.js` (mock data, do not use as real source) + `image-slot.js`/`support.js` (Claude Design authoring tools, not for production).

See [[cinematen-redesign-initiative]] for the active project this stack info supports.
