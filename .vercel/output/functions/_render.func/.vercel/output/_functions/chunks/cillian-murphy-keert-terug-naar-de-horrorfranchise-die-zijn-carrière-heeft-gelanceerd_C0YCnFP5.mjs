import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Cillian Murphy keert terug naar de horrorfranchise die zijn carrière heeft gelanceerd",
  "date": "2024-05-18T23:20:24.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1715968144.jpg",
  "trailer": "",
  "slug": "cillian-murphy-keert-terug-naar-de-horrorfranchise-die-zijn-carrière-heeft-gelanceerd",
  "tags": ["film", "casting"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "terug-naar-zijn-roots",
    "text": "Terug naar zijn roots"
  }, {
    "depth": 2,
    "slug": "stevige-cast-belooft-nu-al-veel",
    "text": "Stevige cast belooft nu al veel"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Na jaren van speculatie en anticipatie bevestigde Sony Motion Pictures Group voorzitter Tom Rothman in een exclusief interview met Deadline dat de getalenteerde acteur Cillian Murphy officieel zal terugkeren naar de iconische post-apocalyptische wereld van “28 Years Later”, het langverwachte vervolg op de baanbrekende film “28 Days Later”."
    }), "\n", createVNode(_components.h2, {
      id: "terug-naar-zijn-roots",
      children: "Terug naar zijn roots"
    }), "\n", createVNode(_components.p, {
      children: "De aankondiging van Murphy’s terugkeer markeert een mijlpaal in zijn carrière, vooral omdat deze terugkeer plaatsvindt na 22 jaar sinds zijn eerste optreden als Jim in “28 Days Later”. Het nieuws over de aankomende trilogie, waarvan “28 Years Later” het startpunt is, heeft fans over de hele wereld in spanning gebracht."
    }), "\n", createVNode(_components.p, {
      children: "Terwijl details over het plot van de nieuwe film schaars zijn, belooft Rothman dat de rol van Murphy in “28 Years Later” verrassend en groeiend zal zijn. Daarmee wordt de toon gezet voor een meeslepende ervaring die zowel nieuwe kijkers als trouwe fans van de franchise zal aanspreken."
    }), "\n", createVNode(_components.h2, {
      id: "stevige-cast-belooft-nu-al-veel",
      children: "Stevige cast belooft nu al veel"
    }), "\n", createVNode(_components.p, {
      children: "De film, geregisseerd door Danny Boyle en geschreven door Alex Garland, brengt ook sterren als Jodie Comer, Aaron Taylor-Johnson, Ralph Fiennes en Jack O’Connell samen in wat belooft een episch vervolg te worden. Deze samenwerking tussen gerenommeerde filmmakers en getalenteerde acteurs versterkt de verwachtingen rondom dit project."
    }), "\n", createVNode(_components.p, {
      children: "In de originele “28 Days Later” volgden we het verhaal van een koerier (vertolkt door Murphy) die ontwaakt uit een coma en wordt geconfronteerd met een wereld die is overspoeld door een dodelijk virus. Deze succesvolle film leidde tot de release van het op zichzelf staande vervolg “28 Weeks Later” in 2007, waarbij Boyle en Garland fungeerden als uitvoerend producenten."
    }), "\n", createVNode(_components.p, {
      children: "Naast het regisseren van de film, nemen Boyle en Garland ook de rol van producenten op zich, samen met Andrew Macdonald en Peter Rice. De releasedatum van “28 Years Later” staat gepland voor 20 juni 2025 en vormt het startschot voor een geplande trilogie van vervolgfilms."
    }), "\n", createVNode(_components.p, {
      children: "Door de terugkeer van Cillian Murphy en de samensmelting van ervaren filmmakers en opkomend talent belooft “28 Years Later” een spannende en onvergetelijke toevoeging te worden aan de geliefde franchise die ooit zijn carrière lanceerde."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/nieuws/cillian-murphy-keert-terug-naar-de-horrorfranchise-die-zijn-carri%C3%A8re-heeft-gelanceerd.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/cillian-murphy-keert-terug-naar-de-horrorfranchise-die-zijn-carrière-heeft-gelanceerd.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/cillian-murphy-keert-terug-naar-de-horrorfranchise-die-zijn-carrière-heeft-gelanceerd.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
