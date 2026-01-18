import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Bane en Deathstroke zien we binnenkort in James Gunn's DCU",
  "date": "2024-09-29T11:22:35.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1727474038.jpg",
  "trailer": "",
  "slug": "bane-en-deathstroke-een-krachtige-samenwerking-in-opkomst",
  "tags": ["film", "comics"]
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
      children: "DC Studios heeft onlangs aangekondigd dat ze werken aan een nieuwe film waarin twee iconische schurken, Bane en Deathstroke, samen zullen verschijnen. Het script voor deze film wordt geschreven door Matthew Orton, (binnekort) bekend van zijn werk aan “Captain America: Brave New World.”"
    }), "\n", createVNode(_components.p, {
      children: "Bane, ooit een gevangene in een Zuid-Amerikaanse gevangenis, verwierf zijn kracht door het gebruik van de super-steroïde Venom. Hij staat bekend om zijn brute kracht en strategisch meesterschap, vooral na zijn beruchte confrontatie met Batman in het verhaal “Knightfall”."
    }), "\n", createVNode(_components.p, {
      children: "Deathstroke, ook wel bekend als Slade Wilson, is een meedogenloze huursoldaat met verbeterde kracht en vaardigheden dankzij een mislukt super soldatenexperiment."
    }), "\n", createVNode(_components.p, {
      children: "Deze onwaarschijnlijke samenwerking tussen twee chemisch verbeterde supersoldaten belooft misschien wel eens iets nieuws voor op het witte doek."
    }), "\n", createVNode(_components.p, {
      children: "Er is speculatie dat deze film zou kunnen worden gebaseerd op Gail Simone’s “Secret Six” comics, waarin een groep superschurken onder leiding van Mockingbird gedwongen wordt om samen te werken. Dit team vertoont gelijkenissen met de Suicide Squad en ligt dus recht in het familiare straatje van regisseur James Gunn."
    }), "\n", createVNode(_components.p, {
      children: "Hoewel details over het plot nog schaars zijn, suggereren bronnen dat Bane en Deathstroke mogelijk niet de centrale figuren zijn in dit verhaal. De film kan een bredere kijk bieden op het duistere onderwereld van DC Comics."
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

const url = "src/content/nieuws/bane-en-deathstroke-een-krachtige-samenwerking-in-opkomst.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/bane-en-deathstroke-een-krachtige-samenwerking-in-opkomst.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/bane-en-deathstroke-een-krachtige-samenwerking-in-opkomst.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
