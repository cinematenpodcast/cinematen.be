---
name: project-seo-remediation
description: Cinematen.be SEO remediation — 28 tickets from audit 2026-07-01, targeting indexation 20%→60%, score 48→65+
metadata:
  type: project
---

SEO remediation project initiated 2026-07-02 from tickets-2026-07-01.md. 28 tickets total (C1–C5, H1–H8, M1–M6, M8–M10, L1–L6).

**Why:** Indexation at 20% (252/1253 pages), SEO score 48/100. Root causes: www/non-www mismatch, missing meta descriptions on 751 articles, broken OG images, no structured data for reviews.

**Key dependencies established:**
- C1 (www canonical) must deploy first — all other fixes build on it
- C5 (meta desc fix) enables H6 (TinaCMS content edits)
- C4 (related articles) before M1 (BreadcrumbList schema)

**Status as of 2026-07-02:**
- Implemented via agents: C1, C2, C4 (partial), C5, H1, H2, H3, H4, H5, H7 (verified), M1 (pending), M2 (pending), M3, M4, M5, M8, M10 (pending), L1, L2, L3 (pending), L4 (pending), L5, L6 (pending)
- Blocked (user action): C3 (GSC 404 export), H6 (TinaCMS content), H8 (GA4 bot filter), M6 (TinaCMS Unicode slug), M9 (PageSpeed run)

**How to apply:** When asked about SEO work, check tickets-2026-07-01.md for current status. Reference [[feedback-agent-dispatch]] for dispatch patterns used.
