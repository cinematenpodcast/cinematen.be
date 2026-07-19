---
name: cinematen-vercel-csp
description: vercel.json CSP on cinematen.be has no 'unsafe-inline' for scripts — sha256-pinned inline hashes only; affects how any new client JS must be added
metadata:
  type: project
---

`vercel.json`'s `Content-Security-Policy` header has `script-src 'self'
'sha256-...' 'sha256-...' <allowlisted external hosts>` — no
`'unsafe-inline'`. Any brand-new inline `<script>` (raw JS text in the HTML,
including Astro's `<script is:inline>...</script>` with literal code) will
be blocked unless its exact content is hashed and added to that allowlist.

**Why:** this was verified while building the redesign foundation's `Header`
component — it needs a small drawer-toggle script. Used a normal (non-
`is:inline`) Astro `<script>` tag instead; Astro bundles those into an
external module file served from `'self'`, which the existing CSP already
allows with zero changes needed.

**How to apply:** for any new client-side behavior on cinematen.be, prefer
external/bundled scripts (plain Astro `<script>`, or a React island via
`@astrojs/react` client directives) over inline script content. If inline JS
is genuinely unavoidable, flag to the user that `vercel.json`'s CSP hash list
needs a new sha256 entry — don't add it silently and don't rely on
`'unsafe-inline'`. See also [[cinematen-redesign-foundation]].
