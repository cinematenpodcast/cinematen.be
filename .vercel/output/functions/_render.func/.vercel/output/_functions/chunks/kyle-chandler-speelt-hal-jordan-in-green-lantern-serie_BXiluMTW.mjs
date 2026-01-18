import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Kyle Chandler speelt Hal Jordan in Green Lantern Serie",
  "date": "2024-09-24T20:25:30.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/intro-1727113454.jpg",
  "trailer": "",
  "slug": "kyle-chandler-klaar-om-hal-jordan-te-vertolken-in-hbos-green-lantern-serie",
  "tags": ["film", "comics", "casting"]
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
      children: "De langverwachte DC Universe-serie “Lanterns” heeft zijn Hal Jordan gevonden in de ervaren acteur Kyle Chandler. Na jaren van ontwikkeling en speculatie is Chandler in onderhandeling voor de rol van de legendarische lid van de Green Lantern Corps in de aankomende HBO-productie. De show, die een rechtstreekse bestelling kreeg na een intensieve periode van plannen, is gepland om van januari tot juni in Atlanta te filmen en zal naar verwachting acht afleveringen bevatten."
    }), "\n", createVNode(_components.p, {
      children: "Kyle Chandler, een Emmy-winnaar bekend van zijn rol als Coach Eric Taylor in de geliefde serie “Friday Night Lights,” keert terug naar het televisiescherm voor zijn eerste serierol sinds Super Pumped uit 2022. Chandler, geprezen om zijn veelzijdige acteervaardigheden, heeft ook opgemerkt in Netflix’s “Bloodline” en CBS’s “Early Edition.” Zijn werk strekt zich uit tot filmrollen in titels zoals “King Kong,” “Super 8,” “Argo,” en “Manchester by the Sea.”"
    }), "\n", createVNode(_components.p, {
      children: "Chandler zal Hal Jordan spelen, terwijl de serie zich zal concentreren op Jordan en John Stewart, twee leden van de Green Lantern Corps die betrokken raken bij een aards moordmysterie met verstrekkende gevolgen. De producenten en DC zoeken nog naar een jongere acteur om de rol van John Stewart te vertolken naast Chandler."
    }), "\n", createVNode(_components.p, {
      children: "“Lanterns” belooft een grimmige en duistere toon te zetten, met een focus op Jordan die tegen zijn wil een mentorrol op zich neemt ten opzichte van de jongere Lantern, John Stewart. Het verhaal belooft een spannende mix van intergalactische politieagenten die een moord in het Amerikaanse hartland onderzoeken, waarbij de diepere implicaties van deze misdaad aan het licht komen."
    }), "\n", createVNode(_components.p, {
      children: "De serie wordt gecreëerd door Chris Mundy, bekend van “Ozark,” samen met Damon Lindelof (“Watchmen,” “Lost”) en Tom King, een gerenommeerde schrijver van stripboeken. Warner Bros. TV werkt samen met DC Studios en HBO om dit unieke project tot leven te brengen."
    }), "\n", createVNode(_components.p, {
      children: "Dit nieuws komt nadat eerdere geruchten Josh Brolin koppelden aan de rol van Hal Jordan, voordat uiteindelijk Chandler werd gekozen als de bekendste Green Lantern. HBO en Warner Bros. Television hebben geen commentaar gegeven op deze laatste ontwikkelingen."
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

const url = "src/content/nieuws/kyle-chandler-speelt-hal-jordan-in-green-lantern-serie.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/kyle-chandler-speelt-hal-jordan-in-green-lantern-serie.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/kyle-chandler-speelt-hal-jordan-in-green-lantern-serie.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
