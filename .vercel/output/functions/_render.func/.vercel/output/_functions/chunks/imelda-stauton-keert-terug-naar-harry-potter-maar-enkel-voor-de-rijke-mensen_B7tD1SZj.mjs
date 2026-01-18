import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Imelda Stauton keert terug naar Harry Potter, maar enkel voor de rijke mensen",
  "date": "2024-09-03T09:16:12.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1725310243.jpg",
  "trailer": "",
  "slug": "imelda-stauton-keert-terug-naar-harry-potter-maar-enkel-voor-de-rijke-mensen",
  "tags": ["film"]
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
      children: "Imelda Staunton maakt een opmerkelijke comeback in de tovenaarswereld als de beruchte Dolores Umbridge. De Oscar-genomineerde actrice, voor het laatst te zien in “Harry Potter and the Deathly Hallows — Part 1” in 2010, stapt opnieuw in haar roze geklede schurkenrol voor een nieuwe attractie in Universal’s Epic Universe."
    }), "\n", createVNode(_components.p, {
      children: "De aankomende “Wizarding World of Harry Potter – Ministry of Magic” ervaring zal Staunton laten schitteren in de hoofdattractie, genaamd “Harry Potter and the Battle at the Ministry,” die gepland staat om te debuteren in 2025."
    }), "\n", createVNode(_components.p, {
      children: "Stauntons heroptreden komt 14 jaar na haar laatste vertolking van Umbridge, en ze neemt het personage mee naar nieuwe extremen. De verhaallijn van de attractie plaatst gasten recht in het hart van het Britse Ministerie van Toverkunst, waar ze getuige zullen zijn van het proces van Umbridge. Natuurlijk gaan dingen niet zoals gepland wanneer Umbridge, altijd de intrigant, probeert te ontsnappen en chaos veroorzaakt."
    }), "\n", createVNode(_components.p, {
      children: "Staunton gaf eerder toe dat ze “niet dacht” ooit terug te keren naar de Harry Potter-franchise. In een interview met Hello! magazine in 2019 verklaarde ze dat ze nog steeds graag fans voor de gek houdt."
    }), "\n", createVNode(_components.p, {
      children: "“Natúúrlijk kan ik mensen laten schrikken. Ik krijg eigenlijk niet veel kinderen die naar me toe komen. Het zijn de volwassen kinderen - je wilt zeggen dat je 35 bent - maar zij zijn ermee opgegroeid,” zei ze, eraan toevoegend: “Harry Potter stopt niet, toch?”"
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

const url = "src/content/nieuws/imelda-stauton-keert-terug-naar-harry-potter-maar-enkel-voor-de-rijke-mensen.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/imelda-stauton-keert-terug-naar-harry-potter-maar-enkel-voor-de-rijke-mensen.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/imelda-stauton-keert-terug-naar-harry-potter-maar-enkel-voor-de-rijke-mensen.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
