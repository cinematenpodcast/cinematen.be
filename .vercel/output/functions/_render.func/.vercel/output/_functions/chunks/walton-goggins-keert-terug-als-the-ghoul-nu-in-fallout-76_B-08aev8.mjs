import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Walton Goggins keert terug als The Ghoul, nu in Fallout 76",
  "date": "2025-12-15T15:24:49.633Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1765319161.jpg",
  "trailer": "",
  "slug": "walton-goggins-keert-terug-als-the-ghoul-nu-in-fallout-76",
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
      children: "Walton Goggins, die we kennen van series zoals ‘The Righteous Gemstones’, brak\ndoor met zijn rol als The Ghoul in de Fallout tv-serie. Nu keert hij terug in\ndie rol, maar deze keer in het computerspel Fallout 76."
    }), "\n", createVNode(_components.p, {
      children: "De nieuwe uitbreiding ‘Burning Springs’ voegt een gebied toe dat op Ohio lijkt,\neen woestijnachtig landschap vol Deathclaws en raiders. In het stadje Highway\nTown, op de locatie ‘The Last Resort’, kunnen we The Ghoul tegenkomen. Hij ziet\ner niet alleen uit als Goggins, maar spreekt ook met zijn stem. Hij geeft ons\nspeciale ‘Bounty Hunting’-missies, waarmee we zelfs zijn iconische wapen uit de\nserie kunnen verdienen."
    }), "\n", createVNode(_components.p, {
      children: "De makers gaven aan dat deze uitbreiding een hommage is aan de tv-serie, die op\n17 december 2025 aan zijn tweede seizoen begint. De timing is dus perfect."
    }), "\n", createVNode(_components.p, {
      children: "Voor Goggins was de stemopname een uitdaging. Gewend om met zijn hele lichaam te\nacteren, moest hij in de studio enkel zijn stem gebruiken. Hij bewoog toch alsof\nhij in de scene stond om het juiste gevoel over te brengen. De opnames waren\nextra moeilijk omdat hij vlak ervoor van een paard was gevallen en een rib had\ngebroken. Ondanks de pijn heeft hij de sessie voltooid."
    }), "\n", createVNode(_components.p, {
      children: "We kunnen ons afvragen hoe The Ghoul, een personage uit 2296, in het jaar 2102\nvan Fallout 76 kan voorkomen. Als ghoul leeft hij echter honderden jaren, dus\nzijn verschijning in dit eerdere tijdperk past binnen de Fallout-tijdlijn. Wat\nhij precies in Ohio doet, blijft voor nu een mysterie."
    }), "\n", createVNode(_components.p, {
      children: "Met ‘Burning Springs’ ontdekken we voor het eerst dit deel van de Fallout-wereld\nin een game. Wij kunnen dus nu al op jacht met The Ghoul in Fallout 76, terwijl\nwe uitkijken naar het nieuwe seizoen van de serie."
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

const url = "src/content/nieuws/walton-goggins-keert-terug-als-the-ghoul-nu-in-fallout-76.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/walton-goggins-keert-terug-als-the-ghoul-nu-in-fallout-76.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/walton-goggins-keert-terug-als-the-ghoul-nu-in-fallout-76.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
