// Shared Header/Footer wiring for every page using the new design-system
// components (Home, Nieuws family, Reviews & Blogs family, Search). Kept as
// plain data here instead of duplicating the same nav/footer arrays inline
// on every .astro page.
//
// Routes /contact and /over-ons are owned by the other frontend-developer
// agent working in parallel on this same branch (contact.astro, over-ons.astro)
// — they don't exist yet at the time this file was written, but will by the
// time both halves of the redesign land together. Same for /cookiebeleid
// (still a stub name until that agent lands the file).
export type NavKey = "home" | "nieuws" | "reviews" | "podcast" | "overons" | "contact" | null;

export interface HeaderLinkData {
  label: string;
  href: string;
  active?: boolean;
}

// Real nav order confirmed from the design export's own data
// (cinematen-data.js: NAV_LINKS = ['Home','Nieuws','Reviews','Podcast','Over
// ons','Contact']) — a prior build agent had dropped "Podcast" "for nav
// consistency", which was wrong. There's no dedicated podcast route/page, so
// it links to the homepage's #podcast section (NAV_HREFS confirms the source
// does exactly this: 'Home.dc.html#podcast').
export function getNavLinks(active: NavKey): HeaderLinkData[] {
  return [
    { label: "Home", href: "/", active: active === "home" },
    { label: "Nieuws", href: "/nieuws/pages/1", active: active === "nieuws" },
    { label: "Reviews", href: "/reviews&blogs/pages/1", active: active === "reviews" },
    { label: "Podcast", href: "/#podcast", active: active === "podcast" },
    { label: "Over ons", href: "/over-ons", active: active === "overons" },
    { label: "Contact", href: "/contact", active: active === "contact" },
  ];
}

// Real column grouping confirmed from the design export's own data
// (cinematen-data.js: FOOTER_COLS = [{heading:'Navigatie', links:['Nieuws',
// 'Reviews','Blogs','Podcasts']}, {heading:'Informatie', links:['Over ons',
// 'Contact']}, {heading:'Juridisch', links:[...]}]) — replaces the previous
// invented "Ontdek/Categorieën/Info" grouping. Hrefs mapped onto real
// existing routes (source only has label strings, no hrefs):
//  - "Reviews" -> the combined /reviews&blogs listing (no separate route)
//  - "Blogs"   -> /reviews&blogs/tags/blog, a real tag route that exists and
//    actually filters to blog-tagged entries (verified against
//    src/content/reviews/*.mdx tags) — more precise than repeating the same
//    link as "Reviews"
//  - "Podcasts" -> no dedicated route either; same #podcast anchor as the
//    header nav link
export const FOOTER_COLUMNS = [
  {
    heading: "Navigatie",
    links: [
      { label: "Nieuws", href: "/nieuws/pages/1" },
      { label: "Reviews", href: "/reviews&blogs/pages/1" },
      { label: "Blogs", href: "/reviews&blogs/tags/blog" },
      { label: "Podcasts", href: "/#podcast" },
    ],
  },
  {
    heading: "Informatie",
    links: [
      { label: "Over ons", href: "/over-ons" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Juridisch",
    links: [
      { label: "Privacy Policy", href: "/privacypolicy" },
      { label: "Cookie Beleid", href: "/cookiebeleid" },
      { label: "Algemene Voorwaarden", href: "/termsofservice" },
    ],
  },
];

export const FOOTER_BOTTOM_LEFT = `© ${new Date().getFullYear()} Cinematen.be. Alle rechten voorbehouden.`;
export const FOOTER_TAGLINE =
  "Jouw dagelijkse dosis film- en seriekenners. Nieuws, reviews, en diepgaande artikelen voor de echte liefhebber.";

export const PARTNER_LABEL = "Partner van";
