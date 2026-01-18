import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Apple houdt \"The Savant\" tegen na moord op Charlie Kirk",
  "date": "2025-09-24T16:48:38.640Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1758731460.jpg",
  "trailer": "",
  "slug": "apple-houdt-the-savant-tegen-na-moord-op-charlie-kirk",
  "tags": ["TV"]
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
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Apple TV+ heeft de release van de nieuwe serie “The Savant” op het laatste\nmoment uitgesteld. De serie, waar vijf jaar aan is gewerkt, zou eigenlijk over\nenkele dagen van start gaan. Jessica Chastain speelt de hoofdrol als een vrouw\ndie undercover infiltreert in online haatgroepen om aanslagen te voorkomen."
    }), "\n", createVNode(_components.p, {
      children: "Deze beslissing volgt kort op de moord op de conservatieve radiopresentator\nCharlie Kirk, die tijdens een speech op een school werd neergeschoten. Hoewel\nApple niet officieel zegt dat de moord de reden is, vermelden ze wel dat ze na\nzorgvuldige overwegingen hebben besloten de serie later uit te brengen."
    }), "\n", createVNode(_components.p, {
      children: "Jessica Chastain liet op Instagram weten het oneens te zijn met de beslissing.\nZe benadrukte haar goede samenwerking met Apple, maar uitte haar teleurstelling.\nZe wees op het vele geweld in Amerika de afgelopen jaren, zoals de bestorming\nvan het Capitool, moordaanslagen op politici en honderden schoolschietpartijen.\nChastain vindt dat de serie net nu belangrijk is, omdat “The Savant” gaat over\nhelden die geweld proberen te voorkomen. Ze hoopt dat mensen de serie snel te\nzien krijgen."
    }), "\n", createVNode(_components.p, {
      children: "De serie is gebaseerd op een magazine-artikel met de vraag of je een\nschietpartij kunt stoppen voordat het gebeurt. Naast Chastain spelen ook Nnamdi\nAsomugha en Pablo Schreiber mee. De app van Apple TV+ vermeldt nu enkel dat de\nserie “op een later moment” komt."
    }), "\n", createVNode(_components.p, {
      children: "Dit is niet de eerste keer recent dat een programma in de problemen komt. De\nshow van Jimmy Kimmel werd ook tijdelijk stopgezet na kritiek. Het is duidelijk\neen gevoelige tijd voor makers."
    }), "\n", createVNode(_components.p, {
      children: "Wij vinden het moeilijk om een eenduidige mening te vormen. Enerzijds begrijpen\nwe de zorgvuldigheid van Apple in een gespannen maatschappelijke context.\nAnderzijds voelt het alsof een serie die net over dit cruciale onderwerp gaat,\nnu net het gesprek zou kunnen openen dat nodig is. We hopen dat “The Savant”\nzijn weg naar het scherm vindt, zodra het moment daar is."
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

const url = "src/content/nieuws/apple-houdt-the-savant-tegen-na-moord-op-charlie-kirk.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/apple-houdt-the-savant-tegen-na-moord-op-charlie-kirk.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/apple-houdt-the-savant-tegen-na-moord-op-charlie-kirk.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
