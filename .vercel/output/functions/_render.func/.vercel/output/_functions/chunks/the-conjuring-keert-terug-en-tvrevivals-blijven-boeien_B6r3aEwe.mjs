import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "The Conjuring keert terug en TV-revivals blijven boeien",
  "date": "2025-07-31T19:13:28.473Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1753988096.jpg",
  "trailer": "bMgfsdYoEEo",
  "slug": "the-conjuring-keert-terug-en-tvrevivals-blijven-boeien",
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
      children: "“The Conjuring”-films draaien rond paranormale onderzoekers Ed en Lorraine\nWarren en tellen inmiddels negen films. De nieuwste, “The Conjuring: Last\nRites”, komt op 5 september 2025 uit en pikt het verhaal van de Warrens en de\nSmurl-familie op. Dit lijkt hun laatste grote zaak te worden."
    }), "\n", createVNode(_components.p, {
      children: "Trailers van “Last Rites” tonen dat Lorraine een demon herkent die ze eerder\ntegenkwamen. De film lijkt niet alleen een eng verhaal te vertellen, maar ook\neen terugblik te worden op hun hele avontuur. Wij zijn benieuwd naar hun\nterugkeer."
    }), "\n", createVNode(_components.p, {
      children: "Spin-offs zoals “The Nun” en de recente “The Nun 2” versterken de samenhang\ntussen de verhalen. Het einde van “The Nun 2” bevat zelfs een hint naar “The\nConjuring: Last Rites”, wat onze interesse nog meer aanwakkert."
    }), "\n", createVNode(_components.p, {
      children: "Ook op televisie zien we veel oude series terugkeren, vaak met de originele\ncast. Sommige reboots slagen uitstekend, zoals “24: Live Another Day” dat de\nspanning van de originele seizoenen vasthield. “iCarly” wist zelfs het oude\ngevoel te combineren met nieuwe elementen. Andere revivals vielen tegen:\n“Gilmore Girls: A Year in the Life” ontving gemengde reacties door\nverhaalkeuzes, terwijl “Roseanne” en “Will & Grace” zowel lof als kritiek\nkregen."
    }), "\n", createVNode(_components.p, {
      children: "Kortom, zowel The Conjuring als de vele TV-revivals tonen dat oude verhalen ons\nblijven boeien. Wij kijken uit naar de nieuwe film en blijven hopen op geslaagde\nterugkeer van onze favoriete series."
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

const url = "src/content/nieuws/the-conjuring-keert-terug-en-tvrevivals-blijven-boeien.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-conjuring-keert-terug-en-tvrevivals-blijven-boeien.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-conjuring-keert-terug-en-tvrevivals-blijven-boeien.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
