import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Hij is er eindelijk, de eerste teaser van de nieuwe Superman!",
  "date": "2024-12-19T20:36:16.812Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1734617382.jpg",
  "trailer": "uhUht6vAsMY",
  "slug": "hij-is-er-eindelijk-de-eerste-teaser-van-de-nieuwe-superman",
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
      children: "De superheld in het rode en blauwe kostuum heeft veel verschillende acteurs\ngehad die hem hebben gespeeld. Elk van deze acteurs heeft geprobeerd om de geest\nvan Superman te behouden, maar toch hun eigen draai aan het personage te geven.\nMaar vandaag kregen we een eerste blik op de nieuwste versie van de meest\nbekende superheld ter wereld, David Corenswet take a bow! We zien hem voor de\neerste keer (kort) schitteren als Clark Kent en vooral als een kleurrijke\nSuperman!"
    }), "\n", createVNode(_components.p, {
      children: "Regisseur James Gunn heeft een ander idee over hoe hij Superman nieuw leven wil\ninblazen. In plaats van te proberen de vorige versies van Superman exact na te\nvolgen, heeft hij een frisse benadering gekozen. Kleuren, Honden en zelfs het\niconische theme van John Williams!"
    }), "\n", createVNode(_components.p, {
      children: "Het enige waar wij na het kijken naar deze beelden over speculeren is of James\nGunn niet té veel zal willen doen, gezien er in de trailer niet alleen onze\nbekende held al te zien is maar ook meerdere andere superhelden en\nsupervillains…"
    }), "\n", createVNode(_components.p, {
      children: "Superman blijft een symbool van hoop en moed voor velen. Terwijl we kijken naar\nde toekomst van deze beroemde superheld, kunnen we ons afvragen hoe James Gunn’s\nvisie uiteindelijk vorm zal krijgen. De trailer viel ons alleszins al zeker in\nde smaak."
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

const url = "src/content/nieuws/hij-is-er-eindelijk-de-eerste-teaser-van-de-nieuwe-superman.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/hij-is-er-eindelijk-de-eerste-teaser-van-de-nieuwe-superman.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/hij-is-er-eindelijk-de-eerste-teaser-van-de-nieuwe-superman.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
