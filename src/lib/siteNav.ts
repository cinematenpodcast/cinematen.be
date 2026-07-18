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
export type NavKey = "home" | "nieuws" | "reviews" | "overons" | "contact" | null;

export interface HeaderLinkData {
  label: string;
  href: string;
  active?: boolean;
}

export function getNavLinks(active: NavKey): HeaderLinkData[] {
  return [
    { label: "Home", href: "/", active: active === "home" },
    { label: "Nieuws", href: "/nieuws", active: active === "nieuws" },
    { label: "Reviews & Blogs", href: "/reviews&blogs", active: active === "reviews" },
    { label: "Over ons", href: "/over-ons", active: active === "overons" },
    { label: "Contact", href: "/contact", active: active === "contact" },
  ];
}

export const FOOTER_COLUMNS = [
  {
    heading: "Ontdek",
    links: [
      { label: "Home", href: "/" },
      { label: "Nieuws", href: "/nieuws" },
      { label: "Reviews & Blogs", href: "/reviews&blogs" },
      { label: "Zoeken", href: "/search" },
    ],
  },
  {
    heading: "Categorieën",
    links: [
      { label: "Film nieuws", href: "/nieuws/film" },
      { label: "Serie nieuws", href: "/nieuws/serie" },
      { label: "Reviews & Blogs", href: "/reviews&blogs" },
    ],
  },
  {
    heading: "Info",
    links: [
      { label: "Over ons", href: "/over-ons" },
      { label: "Contact", href: "/contact" },
      { label: "Privacybeleid", href: "/privacypolicy" },
      { label: "Algemene voorwaarden", href: "/termsofservice" },
      { label: "Cookiebeleid", href: "/cookiebeleid" },
    ],
  },
];

export const FOOTER_BOTTOM_LEFT = `© ${new Date().getFullYear()} Cinematen.be. Alle rechten voorbehouden.`;
export const FOOTER_TAGLINE =
  "Jouw dagelijkse dosis film- en seriekenners. Nieuws, reviews, en diepgaande artikelen voor de echte liefhebber.";

export const PARTNER_LABEL = "Partner van";
