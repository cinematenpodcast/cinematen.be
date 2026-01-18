import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Jared Leto staat klaar in disney's sci-fi sequel Tron: Ares",
  "date": "2024-03-01T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/returning-to-the-grid-again-1709240670.webp",
  "trailer": "",
  "slug": "jared-leto-gears-up-for-disneys-sci-fi-sequel-tron-ares",
  "draft": false,
  "tags": ["film", "casting"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "jared-leto-in-de-hoofdrol",
    "text": "Jared Leto in de hoofdrol"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Disney’s iconische sci-fi franchise, Tron, staat op het punt om met veel verwachting terug te keren met het langverwachte vervolg, “Tron: Ares.” De film, geregisseerd door Joachim Rønning van “Pirates of the Caribbean: Dead Men Tell No Tales” faam, is momenteel in productie in Vancouver en streeft naar een release in 2025. Deze nieuwste aflevering belooft dieper in te gaan op het rijk van kunstmatige intelligentie, omdat het de kloof tussen de digitale wereld en de realiteit overbrugt."
    }), "\n", createVNode(_components.h2, {
      id: "jared-leto-in-de-hoofdrol",
      children: "Jared Leto in de hoofdrol"
    }), "\n", createVNode(_components.p, {
      children: "Een van de meest intrigerende aspecten van “Tron: Ares” is de casting van de veelzijdige acteur Jared Leto in de hoofdrol van Ares, een zeer geavanceerd computerprogramma op een riskante missie om AI-wezens aan de mensheid voor te stellen. Leto, bekend om zijn transformerende optredens, heeft fans al een glimp gegeven van wat er te wachten staat via een Instagram-onthulling, waarbij hij de futuristische esthetiek en cyberpunk-vibes toont die het Tron-universum definiëren."
    }), "\n", createVNode(_components.p, {
      children: "De ensemblecast die zich bij Leto aansluit, omvat getalenteerde namen zoals Greta Lee, Evan Peters, Hasan Minhaj, Jodie Turner-Smith, Arturo Castro, Cameron Monaghan, en de illustere Gillian Anderson. Elk lid brengt een unieke energie naar het project, wat een meeslepend verhaal belooft vol met wendingen."
    }), "\n", createVNode(_components.p, {
      children: "De productie van “Tron: Ares” ondervond tegenslagen door de SAG/AFTRA-staking van vorig jaar, maar is sinds januari 2024 weer van start gegaan onder leiding van regisseur Joachim Rønning. Het verhaal van de film wordt verwacht verder te gaan dan de grenzen van zijn voorgangers, en biedt het publiek een fris perspectief op de vermenging van technologie en menselijkheid die het Tron-universum definieert."
    }), "\n", createVNode(_components.p, {
      children: "Terwijl Leto aan deze spannende reis in de digitale grens begint, kijken fans reikhalzend uit naar hoe “Tron: Ares” de grenzen van storytelling, ontwerp, en technologie zal verleggen. Met een sterrencast, een visionaire regisseur, en een rijke erfenis om op voort te bouwen, is de film klaar om wereldwijd publiek te boeien en de interesse in deze geliefde franchise opnieuw aan te wakkeren."
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

const url = "src/content/nieuws/tron-ares---jared-leto-gears-up-for-disneys-sci-fi-sequel.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/tron-ares---jared-leto-gears-up-for-disneys-sci-fi-sequel.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/tron-ares---jared-leto-gears-up-for-disneys-sci-fi-sequel.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
