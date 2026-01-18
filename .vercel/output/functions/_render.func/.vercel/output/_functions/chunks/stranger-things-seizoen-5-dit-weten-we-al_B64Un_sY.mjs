import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Stranger Things seizoen 5 dit weten we al!",
  "date": "2025-07-16T15:13:33.033Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1752678135.jpg",
  "trailer": "iKZyYdwS3Wg",
  "slug": "stranger-things-seizoen-5-dit-weten-we-al",
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
      children: "De nieuwe trailer voor het allerlaatste seizoen van “Stranger Things” is\neindelijk hier. Wij krijgen een voorproefje van de ultieme strijd in Hawkins,\nwaar Vecna terugkeert als de grote schurk. Dit slotseizoen verschijnt in delen\nop Netflix: de eerste vier afleveringen komen op 26 november, gevolgd door\nnieuwe afleveringen op Kerstdag en Oudejaarsavond."
    }), "\n", createVNode(_components.p, {
      children: "Een opvallend moment in de trailer is de ontwaking van Max Mayfield, gespeeld\ndoor Sadie Sink, uit haar coma. Ze was zwaar toegetakeld na haar gevecht met\nVecna vorig seizoen. Lucas houdt de wacht aan haar bed, maar hun situatie wordt\ngrimmig wanneer demodogs haar kamer binnendringen. Wij vragen ons af hoe dit\nafloopt voor het duo."
    }), "\n", createVNode(_components.p, {
      children: "De focus ligt ook op Alice Creel, Vecna’s zus. Haar lot blijft onzeker, maar ze\nzou weleens de sleutel kunnen zijn om hem te verslaan. Eerdere verhalen over de\nCreel-familie speelden al een cruciale rol, dus wij vermoeden dat onderzoek naar\nhaar verleden essentieel wordt. Sommigen onder ons speculeren zelfs dat Alice\nmisschien nog leeft of dat haar geest in de Upside Down rondwaart."
    }), "\n", createVNode(_components.p, {
      children: "Hawkins zelf is getransformeerd tot een poort naar Vecna’s wereld, waardoor de\nbewoners opnieuw moeten samenkomen tegen de dreiging. Dustin en de groep zullen\nhun vriendschap en vaardigheden harder nodig hebben dan ooit. Nieuwkomer Linda\nHamilton duikt op als Dr. Kay tijdens een bezoek aan een militaire basis, wat\nwijst op andere krachten in de strijd tegen het kwaad."
    }), "\n", createVNode(_components.p, {
      children: "Wij kijken uit naar hoe de groep omgaat met deze laatste uitdaging. De band\ntussen de personages en hun gedeelde ervaringen staan centraal, maar wij vragen\nons af wie er nog terugkeert of nieuwe keuzes maakt. Met de releasedata\nvastgelegd, richt iedereen zich op de straten van Hawkins. De trailer maakt\nduidelijk dat de confrontatie met Vecna allesbehalve eenvoudig wordt."
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

const url = "src/content/nieuws/stranger-things-seizoen-5-dit-weten-we-al.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/stranger-things-seizoen-5-dit-weten-we-al.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/stranger-things-seizoen-5-dit-weten-we-al.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
