# CORS Audit Findings

**Date:** March 2026  
**Context:** Security Headers Fix Plan follow-up

## Summary

The scan reported `access-control-allow-origin: *` on cinematen.be. This audit documents the source and risk.

## Findings

### 1. Source of CORS Header

- **No explicit CORS configuration** was found in the application codebase.
- The header is likely applied by:
  - **Vercel** – default behavior for static assets (JS, CSS, fonts)
  - **Pagefind** (`astro-pagefind`) – search index at `/_pagefind/` may require CORS for cross-origin requests
  - **Astro/Vercel adapter** – framework defaults

### 2. Application Characteristics

- **Static/hybrid Astro site** – primarily content (articles, reviews, embedded media)
- **No API routes** – no `/api/` endpoints serving data
- **No authentication** – no user sessions, login, or protected content
- **Outbound fetch:** `ikwilmee.html` sends a POST to `https://n8n.cinematen.be/webhook/ikgamee` – this is client-side outbound, not an inbound API on cinematen.be

### 3. Risk Assessment

| Factor                    | Assessment                                      |
| ------------------------- | ----------------------------------------------- |
| Sensitive data served     | None – public content only                      |
| User sessions/cookies     | None                                            |
| API with business logic   | None on this domain                             |
| Static assets (fonts, scripts) | Standard use case for permissive CORS    |

### 4. Recommendation

**Acceptable as-is.** For a public content/marketing site with no authentication or sensitive endpoints, `access-control-allow-origin: *` presents low risk. Restricting CORS would add complexity without clear security gain in the current setup.

### 5. Future Action if Needed

If the site adds:

- User authentication
- API routes with sensitive data
- Proprietary or paid content

Then restrict CORS by:

1. Adding Vercel Edge Middleware (`middleware.ts` at project root) to set `Access-Control-Allow-Origin: https://cinematen.be https://www.cinematen.be` only for relevant routes.
2. Or configuring `Access-Control-Allow-Origin` per-route in `vercel.json` headers (Vercel supports different headers per `source` pattern).
