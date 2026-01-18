import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "The Girlfriend Olivia Cooke wisselt dragons in voor familiedrama",
  "date": "2025-09-25T16:47:38.078Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1758766282.jpg",
  "trailer": "",
  "slug": "the-girlfriend-olivia-cooke-wisselt-dragons-in-voor-familiedrama",
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
      children: "Olivia Cooke, die we kennen als Alicent Hightower uit House of the Dragon,\nspeelt nu de hoofdrol in de nieuwe serie The Girlfriend. Sinds 10 september\nstaat de volledige reeks van zes afleveringen klaar om te bingen op Amazon Prime\nVideo."
    }), "\n", createVNode(_components.p, {
      children: "Cooke speelt Cherry, de nieuwe vriendin van Daniel. Zijn moeder Laura, gespeeld\ndoor Robin Wright, kan dit maar moeilijk verkroppen. Laura wil haar zoon voor\nzich alleen en er ontstaat een felle strijd om zijn aandacht. De serie is\ngebaseerd op het gelijknamige boek uit 2017."
    }), "\n", createVNode(_components.p, {
      children: "Cherry blijkt niet wie ze zegt te zijn. Ze liegt tegen Daniel en zijn familie\nover haar verleden. Laura gaat op onderzoek uit en ontdekt de waarheid,\ninclusief Cherrys mysterieuze band met een oude vriend, Nicholas. De spanning\nloopt verder op wanneer Daniel tijdens een klimtrip voor zijn verjaardag\nzwaargewond raakt. Laura liegt tegen Cherry dat hij is overleden, maar neemt hem\nstiekem mee naar Spanje om te herstellen. Wanneer Cherry ontdekt dat Daniel nog\nleeft, escaleert het conflict tussen de twee vrouwen volledig."
    }), "\n", createVNode(_components.p, {
      children: "Robin Wright speelt de bezitterige moeder Laura, bekend van House of Cards.\nLaurie Davidson is te zien als Daniel en Waleed Zuaiter als zijn vader Howard."
    }), "\n", createVNode(_components.p, {
      children: "Op Rotten Tomatoes kreeg de serie een score van 94%. Wij vinden het een\nspannende, soms zelfs gemeende reeks die vooral erg vermakelijk is. Het verhaal\nis niet extreem diepgaand, maar Cooke’s acteerprestaties zijn subliem. Ze weet\nmet minimale gezichtsuitdrukkingen Cherry geloofwaardig neer te zetten zonder\neen karikatuur te worden."
    }), "\n", createVNode(_components.p, {
      children: "Voor wie Cooke kent van House of the Dragon is dit een volledig andere rol. Daar\nspeelt ze de ambitieuze Alicent die een bloedige strijd om de Iron Throne\nontketent. In The Girlfriend is de strijd even intens, maar veel dichter bij\nhuis. Het derde seizoen van House of the Dragon is trouwens in productie."
    }), "\n", createVNode(_components.p, {
      children: "The Girlfriend staat nu op Amazon Prime Video. House of the Dragon stream je via\nHBO Max."
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

const url = "src/content/nieuws/the-girlfriend-olivia-cooke-wisselt-dragons-in-voor-familiedrama.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-girlfriend-olivia-cooke-wisselt-dragons-in-voor-familiedrama.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-girlfriend-olivia-cooke-wisselt-dragons-in-voor-familiedrama.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
