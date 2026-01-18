import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Marvel's Blade Reboot heeft (weer) geen regisseur",
  "date": "2024-06-18T10:39:31.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1718233727.jpg",
  "trailer": "",
  "slug": "marvels-blade-reboot-a-troubled-production-journey",
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
      children: "De langverwachte “Blade” reboot van Marvel lijkt een bewogen productieproces door te maken. Sinds de aankondiging op San Diego Comic-Con in 2019, waar Oscar-winnaar Mahershala Ali de hoofdrol onthulde, heeft het project verschillende tegenslagen gekend en lijkt het moeilijk om van de grond te komen."
    }), "\n", createVNode(_components.p, {
      children: "Wat er toch uitzag als een veelbelovend project met Yann Demange als regisseur, heeft nu weer een klap te verduren gekregen met zijn vertrek uit de film. Dit vertrek wordt beschreven als een vriendelijk afscheid. Eerder stond Bassam Tariq aan het roer voordat Demange zijn plaats innam."
    }), "\n", createVNode(_components.p, {
      children: "Verschillende schrijvers zijn betrokken geweest bij het scenario, waaronder Stacy Osei-Kuffour, Michael Starrbury, en Nic Pizzolotto, die allemaal hun stempel hebben gedrukt op het verhaal. Zelfs ervaren Marvel-schrijver Eric Pearson heeft zich gemengd in het scriptwerk voor “Blade.”"
    }), "\n", createVNode(_components.p, {
      children: "Met de steeds veranderende regisseurs en schrijvers blijft het de vraag of “Blade” ooit werkelijkheid zal worden, laat staan dat het de geplande releasedatum van november 2025 zal halen. De constante verschuivingen in de productie en het creatieve team hebben twijfels gezaaid over de haalbaarheid van deze deadline."
    }), "\n", createVNode(_components.p, {
      children: "Het nieuws van het vertrek van Yann Damange doet de vraag rijzen of er ooit een einde zal komen aan de problemen rondom deze film. Ondanks de vastberadenheid van steracteur Mahershala Ali en de inspanningen van de schrijvers, lijkt het lot van “Blade” nog steeds onzeker."
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

const url = "src/content/nieuws/marvels-blade-reboot-a-troubled-production-journey.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/marvels-blade-reboot-a-troubled-production-journey.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/marvels-blade-reboot-a-troubled-production-journey.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
