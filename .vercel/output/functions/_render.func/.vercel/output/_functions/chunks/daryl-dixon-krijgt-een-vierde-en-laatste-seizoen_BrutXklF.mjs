import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Daryl Dixon krijgt een vierde en laatste seizoen",
  "date": "2025-07-30T00:12:50.075Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1753826435.jpg",
  "trailer": "",
  "slug": "daryl-dixon-krijgt-een-vierde-en-laatste-seizoen",
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
      children: "AMC heeft bekendgemaakt dat “The Walking Dead: Daryl Dixon” een vierde en\nlaatste seizoen krijgt. Dit nieuws kwam er tijdens een panel op de San Diego\nComic-Con. Norman Reedus en Melissa McBride spelen de hoofdrollen van Daryl en\nCarol, en de productie voor dit slotseizoen begint binnenkort in Spaanse steden\nzoals Madrid en Bilbao."
    }), "\n", createVNode(_components.p, {
      children: "De derde seizoen start op 7 september 2025. Hierin zetten Daryl en Carol hun\nreis voort om terug te keren naar hun geliefden, waarbij ze nieuwe gebieden\nverkennen en de gevolgen van de Walker-apocalyps onder ogen zien. Reedus en\nMcBride vertolken deze iconische personages al bijna twintig jaar. Dan\nMcDermott, president van AMC, noemde hun verhaal onvergetelijk en menselijk,\niets waar we als fans vanaf het begin van “The Walking Dead” sterk op\nreageerden."
    }), "\n", createVNode(_components.p, {
      children: "De première in 2023 was meteen de best bekeken op AMC+, en het tweede seizoen\nwerd het best bekeken tweede seizoen ooit op het platform. De laatste acht\nafleveringen worden nu in Spanje opgenomen, wat een nieuwe dimensie toevoegt.\nShowrunner David Zabel belooft dat deze slotafleveringen emotioneel en krachtig\nzullen zijn om hun Europese reis af te ronden."
    }), "\n", createVNode(_components.p, {
      children: "Melissa McBride deelt dat filmen in Europa samen met Norman Reedus een geweldige\nervaring was, en we kijken ernaar uit wat ze in deze bijzondere locaties gemaakt\nhebben. Ondertussen zijn er plannen voor andere shows of films in het “Walking\nDead”-universum, want AMC wil verder gaan met deze sterke franchise. We zijn\nbenieuwd naar de toekomst van Daryl en Carol na hun onvergetelijke reis, en\nmaken ons klaar voor een spannend slot."
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

const url = "src/content/nieuws/daryl-dixon-krijgt-een-vierde-en-laatste-seizoen.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/daryl-dixon-krijgt-een-vierde-en-laatste-seizoen.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/daryl-dixon-krijgt-een-vierde-en-laatste-seizoen.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
