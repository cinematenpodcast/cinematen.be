import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "War of the Worlds Een Teleurstellende Remake",
  "date": "2025-08-11T15:15:12.093Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1754923215.jpg",
  "trailer": "",
  "slug": "war-of-the-worlds-een-teleurstellende-remake",
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
      children: "De nieuwe film “War of the Worlds” is een remake van H.G. Wells’ klassieke\nverhaal en te zien op Prime Video. Onder regie van Rich Lee kreeg deze versie\nveel aandacht, maar niet om de juiste redenen. Hoewel Ice Cube in de hoofdrol\nschittert en de film sinds zijn release in juli 2025 een van de meest bekeken\ntitels op Prime Video is, belandde hij ook op Rotten Tomatoes’ lijst van\nslechtste films aller tijden."
    }), "\n", createVNode(_components.p, {
      children: "Ice Cube speelt Will Radford, een Homeland Security-medewerker die dreigingen\nzoals cyberaanvallen monitort. We zien hem tijdens een buitenaardse invasie die\nde aarde bedreigt, terwijl hij zijn kinderen in de gaten houdt. De film probeert\nmoderne technologie te verwerken, maar dit resulteert in een ervaring die\naanvoelt als een computerbeeldscherm in plaats van een meeslepend verhaal."
    }), "\n", createVNode(_components.p, {
      children: "We merken vooral een gebrek aan boeiende actie en een overdaad aan scènes die\nvia computerschermen verteld worden. Het storende gebruik van productplaatsingen\nvoor merken en technologie helpt niet mee. Vergelijken we dit met Steven\nSpielbergs sterke adaptatie uit 2005, dan valt deze versie helemaal door de\nmand. De acteurs lijken in een digitale omgeving te acteren, wat de kijkervaring\nondermijnt."
    }), "\n", createVNode(_components.p, {
      children: "De film werd gemaakt tijdens de coronapandemie, wat leidde tot vertraagde\nreleases en meer focus op streaming. Wat bedoeld was als spannende sci-fi, voelt\naan als een haastig project met laagwaardige effecten. Met een score van 0% op\nRotten Tomatoes is dat geen verrassing. Ondanks de bekende titel en sterke\nhoofdrolspeler boeit het verhaal ons niet. We schakelden snel over naar iets\nanders, want het biedt geen overtuigende boodschap en voelt als goedkope\nstreamingvulling."
    }), "\n", createVNode(_components.p, {
      children: "Toch blijft “War of the Worlds” veel kijkers trekken op Prime Video. Het bewijst\ndat streamingdiensten films onder de aandacht kunnen brengen, ongeacht hun\nkwaliteit."
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

const url = "src/content/nieuws/war-of-the-worlds-een-teleurstellende-remake.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/war-of-the-worlds-een-teleurstellende-remake.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/war-of-the-worlds-een-teleurstellende-remake.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
