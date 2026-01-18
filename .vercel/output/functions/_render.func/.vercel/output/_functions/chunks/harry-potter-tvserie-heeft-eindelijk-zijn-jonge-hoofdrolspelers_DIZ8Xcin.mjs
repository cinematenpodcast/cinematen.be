import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Harry Potter TV-serie heeft eindelijk zijn jonge hoofdrolspelers!",
  "date": "2025-05-30T10:49:29.460Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/2025-05-30T10-46-46-189Z.jpg",
  "trailer": "",
  "slug": "harry-potter-tvserie-heeft-eindelijk-zijn-jonge-hoofdrolspelers",
  "tags": ["Film"]
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
      children: "Wij Harry Potter-fans kunnen opgelucht ademhalen, want HBO heeft de nieuwe\nhoofdrolspelers voor de aankomende TV-serie gekozen. Dominic McLaughlin,\nAlastair Stout en Arabella Stanton zullen respectievelijk Harry Potter, Ron\nWeasley en Hermione Granger vertolken. Deze selectie volgde na meer dan 32.000\nauditietapes uit het Verenigd Koninkrijk en Ierland."
    }), "\n", createVNode(_components.p, {
      children: "Producenten Francesca Gardiner en Mark Mylod zijn erg tevreden over hun keuze.\nZe prijzen het “geweldige” talent van deze 9- tot 11-jarige acteurs, gekozen via\neen open casting call. De serie blijft trouw aan J.K. Rowlings boekenserie en\nzal alle zeven boeken over meerdere seizoenen verfilmen, inclusief nieuwe\ndetails die in de films ontbraken."
    }), "\n", createVNode(_components.p, {
      children: "De cast omvat verder John Lithgow als Albus Dumbledore, Paapa Essiedu als\nSeverus Snape en Nick Frost als Rubeus Hagrid. Andere rollen zijn ingevuld door\nLuke Thallon (Quirinus Quirrell) en Paul Whitehouse (Argus Filch)."
    }), "\n", createVNode(_components.p, {
      children: "Opnames vinden plaats in een speciaal gebouwde studio in Leavesden bij Watford,\nmet een kostenplaatje van £75 miljoen per aflevering. De studio is aangepast\nvoor jonge acteurs en dieren, terwijl Warner Bros. tientallen seizoenen plant."
    }), "\n", createVNode(_components.p, {
      children: "J.K. Rowling werkt als uitvoerend producent, ondanks zorgen over haar\ncontroversiële uitspraken over gender en de gespannen relatie met de originele\ncast (Daniel Radcliffe, Emma Watson, Rupert Grint). Wij verwachten de première\neind 2026 of begin 2027, bijna 30 jaar na ‘Harry Potter en de Steen der Wijzen’.\nDe originele films blijven beschikbaar, maar deze serie wil een frisse start\nbieden voor nieuwe generaties."
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

const url = "src/content/nieuws/harry-potter-tvserie-heeft-eindelijk-zijn-jonge-hoofdrolspelers.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/harry-potter-tvserie-heeft-eindelijk-zijn-jonge-hoofdrolspelers.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/harry-potter-tvserie-heeft-eindelijk-zijn-jonge-hoofdrolspelers.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
