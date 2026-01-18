import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "A Minecraft Movie heeft een tweede trailer",
  "date": "2025-02-28T07:40:45.561Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1740686776.jpg",
  "trailer": "8B1EtVPBSMw",
  "slug": "a-minecraft-movie-heeft-een-tweede-trailer",
  "tags": ["film"]
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(_components.p, {
    children: "De nieuwste trailer voor A Minecraft Movie is onlangs uitgebracht en zit vol\nleuke momenten en verborgen details voor fans van het spel. Een van de meest\nopvallende scènes toont twee volwassen panda’s die bamboe eten, waarna er\nplotseling een baby panda verschijnt. Ook is er een spectaculair moment waarin\nSteve een “water bucket clutch” uitvoert—een techniek die ervaren\nMinecraft-spelers zullen herkennen. In de trailer krijgen wij ook een eerste\nblik op de schurk van het verhaal, Malgosha. Deze personage is de leider van de\nPiglins en wordt ingesproken door Rachel House. De film lijkt erg trouw aan het\nspel, met correcte recepten voor het maken van items zoals een diamanten zwaard\ndat zichtbaar is op een crafting table in de trailer. Daarnaast zitten er\ntalloze Easter eggs verstopt in de trailer, wat de verwachtingen voor de film\nnog verder aanwakkert. De film zelf, simpelweg A Minecraft Movie genoemd, is\ngebaseerd op het immens populaire videospel Minecraft en verschijnt op 4 april\n2025 in de bioscoop. De regie is in handen van Jared Hess, bekend van Napoleon\nDynamite. Het verhaal volgt vier hoofdpersonen—Garrett “The Garbage Man”\nGarrison (gespeeld door Jason Momoa), Henry, Natalie en Dawn. Deze groep\nbuitenstaanders wordt via een mysterieuze portal naar een andere wereld, de\nOverworld, getransporteerd. Daar moeten ze zien te overleven en omgaan met\ngevaarlijke wezens zoals Piglins en Zombies. Gelukkig krijgen ze hulp van Steve,\neen expert in het spel, gespeeld door Jack Black."
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
const url = "src/content/nieuws/a-minecraft-movie-heeft-een-tweede-trailer.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/a-minecraft-movie-heeft-een-tweede-trailer.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/a-minecraft-movie-heeft-een-tweede-trailer.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
