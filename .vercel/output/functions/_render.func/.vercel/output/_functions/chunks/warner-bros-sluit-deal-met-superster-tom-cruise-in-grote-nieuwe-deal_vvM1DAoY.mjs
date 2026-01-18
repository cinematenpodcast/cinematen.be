import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Warner Bros. sluit deal met legende Tom Cruise",
  "date": "2024-01-10T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1704824966.jpg",
  "trailer": "",
  "slug": "warner-bros-sluit-deal-met-legende-tom-cruise",
  "draft": false,
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
      children: "De Co-Voorzitters- en CEO’s van Warner Bros. Motion Picture Group, Michael De Luca en Pam Abdy, hebben aangekondigd dat ze gezamenlijk originele bioscoopfilms gaan ontwikkelen en produceren (zowel originele als binnen franchises) waarin Cruise de hoofdrol zal spelen vanaf 2024. Ze zijn een nieuwe “strategische samenwerking” aangegaan. Cruise en zijn productiebedrijf zullen kantoren hebben op het Warner Bros. Discovery-complex in Burbank."
    }), "\n", createVNode(_components.p, {
      children: "Deze samenwerking betekent een terugkeer naar Warner Bros. voor Cruise, wiens filmografie met de studio films omvat zoals “Edge of Tomorrow,” “Rock of Ages,” “The Last Samurai,” “Magnolia,” “Eyes Wide Shut,” “Interview with the Vampire,” “Risky Business,” en “The Outsiders.” De Luca en Abdy zeiden het volgende hierover:"
    }), "\n", createVNode(_components.p, {
      children: "“We zijn verheugd om met Tom te kunnen werken, een absolute legende in de filmindustrie. Onze visie, vanaf dag één, is geweest om deze iconische studio te herstellen tot de hoogtijdagen en toen we voor het eerst met David Zaslav gingen praten over toetreding tot het Warner Bros. Discovery-team, zei hij tegen ons: ‘We hebben een missie om Warner Bros. terug te brengen - we hebben de beste middelen, verhalende intellectuele eigendommen en talent in de branche - en we moeten Tom Cruise terugbrengen naar Warner Bros!’ Vandaag wordt dat werkelijkheid en komen we een stap dichter bij het verwezenlijken van onze ambitie. We kunnen niet enthousiaster zijn om Tom terug te verwelkomen bij Warner Bros. en kijken ernaar uit om in de komende jaren meer van zijn genialiteit tot leven te brengen op het witte doek.”"
    }), "\n", createVNode(_components.p, {
      children: "Er zijn op dit moment nog geen projecten bevestigd. Maar Warner Bros. is de thuisbasis van DC Studios en een schatkamer aan andere franchises. Beide partijen zullen dus meer dan genoeg opties hebben."
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

const url = "src/content/nieuws/warner-bros-sluit-deal-met-superster-tom-cruise-in-grote-nieuwe-deal.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/warner-bros-sluit-deal-met-superster-tom-cruise-in-grote-nieuwe-deal.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/warner-bros-sluit-deal-met-superster-tom-cruise-in-grote-nieuwe-deal.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
