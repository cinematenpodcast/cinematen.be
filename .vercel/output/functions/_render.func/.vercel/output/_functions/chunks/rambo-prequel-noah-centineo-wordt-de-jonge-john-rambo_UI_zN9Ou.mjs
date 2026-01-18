import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Rambo Prequel Noah Centineo wordt de jonge John Rambo",
  "date": "2025-08-11T19:03:53.003Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1754937908.jpg",
  "trailer": "",
  "slug": "rambo-prequel-noah-centineo-wordt-de-jonge-john-rambo",
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
      children: "Er komt een nieuwe “Rambo”-film aan, maar deze keer als prequel. Noah Centineo\nzal de jonge versie van John Rambo spelen, het iconische personage dat\noorspronkelijk werd vertolkt door Sylvester Stallone. Stallone speelde Rambo\nvoor het eerst in “First Blood” uit 1982 en voorlopig voor het laatst in “Rambo:\nLast Blood” uit 2019."
    }), "\n", createVNode(_components.p, {
      children: "De film krijgt als werktitel “John Rambo” en wordt geregisseerd door Jalmari\nHelander, bekend van zijn succesfilm “Sisu”. Het script komt van Rory Haines en\nSohrab Noshirvani, die eerder meeschreven aan “Black Adam”."
    }), "\n", createVNode(_components.p, {
      children: "De Rambo-films staan bekend om hun actie en geweld, maar dragen ook een complex\nverhaal over oorlogstrauma’s. In “First Blood” zien we een Vietnamveteraan die\nin conflict komt met de lokale politie. Wij maken ons wel zorgen over hoe de\nprequel de Vietnamoorlog zal behandelen, aangezien recente films vooral focusten\nop geweld in plaats van historische diepgang."
    }), "\n", createVNode(_components.p, {
      children: "Helander lijkt een sterke keuze als regisseur, zeker na de kritische en\ncommerciële successen van “Sisu”. Toch zijn we bezorgd over de toekomst van de\nfranchise. De financiële cijfers liegen er niet om: “Rambo” (2008) verdiende 113\nmiljoen dollar, terwijl “Last Blood” amper 91 miljoen dollar opbracht ondanks\neen hoger budget."
    }), "\n", createVNode(_components.p, {
      children: "Wij zijn benieuwd of deze prequel met Centineo het publiek weer kan boeien. De\ncombinatie van een populaire jonge acteur en een ervaren regisseur belooft veel,\nmaar of dat genoeg is om de franchise nieuw leven in te blazen, blijft koffiedik\nkijken."
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

const url = "src/content/nieuws/rambo-prequel-noah-centineo-wordt-de-jonge-john-rambo.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/rambo-prequel-noah-centineo-wordt-de-jonge-john-rambo.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/rambo-prequel-noah-centineo-wordt-de-jonge-john-rambo.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
