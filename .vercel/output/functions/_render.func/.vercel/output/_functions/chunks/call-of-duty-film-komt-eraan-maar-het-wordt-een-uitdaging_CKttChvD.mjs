import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Call of Duty film komt eraan, maar het wordt een uitdaging",
  "date": "2025-09-02T16:37:02.806Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1756827977.jpg",
  "trailer": "",
  "slug": "call-of-duty-film-komt-eraan-maar-het-wordt-een-uitdaging",
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
      children: "Paramount en Activision hebben hun krachten gebundeld om een live-action film te\nmaken gebaseerd op Call of Duty. Deze game reeks is immens populair, met meer\ndan 500 miljoen verkochte spellen en zo’n 100 miljoen actieve spelers in\nWarzone."
    }), "\n", createVNode(_components.p, {
      children: "David Ellison, de baas van Paramount en zelf een groot fan van de game, noemt\ndit project een droom die uitkomt. Hij heeft talloze uren in de game gespeeld en\nbelooft dat ze alles op alles zullen zetten om een film te maken die net zo goed\nis als de games. Het doel is om zowel ons, de trouwe fans, als nieuwe kijkers te\nkunnen bekoren."
    }), "\n", createVNode(_components.p, {
      children: "De uitdaging ligt erin dat Call of Duty niet werkt met vaste personages zoals\nbijvoorbeeld Mario dat wel heeft. De games draaien vooral rond oorlogsthema’s,\nvan de Tweede Wereldoorlog tot moderne conflicten. Hoe ze dat gaan vertalen naar\neen boeiend verhaal voor het grote scherm, is nog even afwachten."
    }), "\n", createVNode(_components.p, {
      children: "Eerder waren er al plannen voor een Call of Duty film, maar die zijn nooit van\nde grond gekomen. Nu hoopt Activision-baas Rob Kostich dat de samenwerking met\nParamount wél tot een spannende en succesvolle film zal leiden. Paramount heeft\nrecent ook de Duffer Brothers (van Stranger Things) in huis gehaald, wat\nwellicht extra creatieve kracht moet geven."
    }), "\n", createVNode(_components.p, {
      children: "Het succes van de recente Minecraft film, die bijna een miljard dollar opbracht,\ngeeft moed. Call of Duty is al zestien jaar op rij de best verkopende game in\nAmerika, dus de potentie is er. Ellison mikt op eenzelfde niveau als Top Gun:\nMaverick, waar hij ook aan meewerkte."
    }), "\n", createVNode(_components.p, {
      children: "Er is nog geen releasedatum, want ze staan nog aan het begin. Eerst moet er een\nscript komen en een regisseur worden gevonden. We kijken er naar uit, maar het\nzal nog even duren voor we resultaat zien."
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

const url = "src/content/nieuws/call-of-duty-film-komt-eraan-maar-het-wordt-een-uitdaging.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/call-of-duty-film-komt-eraan-maar-het-wordt-een-uitdaging.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/call-of-duty-film-komt-eraan-maar-het-wordt-een-uitdaging.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
