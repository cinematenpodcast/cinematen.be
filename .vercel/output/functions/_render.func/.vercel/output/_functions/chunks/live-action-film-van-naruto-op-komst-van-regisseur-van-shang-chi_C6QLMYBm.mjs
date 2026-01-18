import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Live-action film van \"Naruto\" op komst van regisseur van Shang-Chi",
  "date": "2024-02-24T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1708718840.jpg",
  "trailer": "",
  "slug": "live-action-film-van-naruto-op-komst-van-regisseur-van-shang-chi",
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
      children: "Een leuke aankondiging heeft de fans van het populaire manga- en animeserie “Naruto” in vuur en vlam gezet. Lionsgate is officieel bezig met de ontwikkeling van een live-action film gebaseerd op de iconische serie. De taak van schrijver en regisseur voor dit ambitieuze project is toevertrouwd aan Destin Daniel Cretton, bekend van zijn werk aan “Shang-Chi and the Legend of the Ten Rings”."
    }), "\n", createVNode(_components.p, {
      children: "Masashi Kishimoto’s meesterwerk “Naruto” heeft wereldwijd meer dan 250 miljoen exemplaren verkocht en geniet een enorme populariteit onder fans over de hele wereld. Het verhaal volgt Naruto Uzumaki, een jonge ninja met een demonisch wezen verzegeld in zijn lichaam, die streeft naar erkenning en leiderschap in zijn dorp, Hidden Leaf Village."
    }), "\n", createVNode(_components.p, {
      children: "De sprong van “Naruto” naar live-action belooft een epische vertaling te worden, waarbij Cretton’s talent voor actie en drama centraal zal staan. In een persbericht van Lionsgate deelde Cretton zijn opwinding over de samenwerking met Kishimoto en het vooruitzicht om “Naruto” naar het grote scherm te brengen. Kishimoto zelf gaf zijn zegen voor het project en prees Cretton als de perfecte regisseur voor deze geliefde franchise. De thema’s van “Naruto”, die draaien om vriendschap, doorzettingsvermogen en groei, hebben wereldwijd vele harten veroverd. De mix van hand-tot-handgevechten en energieaanvallen belooft een visueel spektakel te worden dat fans van alle leeftijden zal aanspreken."
    }), "\n", createVNode(_components.p, {
      children: "De focus zal liggen op het vertalen van de rijke mythologie en diepgaande personages van “Naruto” naar een live-action setting. Fans kunnen reikhalzend uitkijken naar een nieuwe interpretatie van hun geliefde personages en verhalen, terwijl de magie van de Hidden Leaf Village tot leven komt op het witte doek. Door de handen ineen te slaan met ervaren producenten en met steun van de originele bedenker Masashi Kishimoto, lijkt de live-action adaptatie van “Naruto” op weg te zijn naar groots succes. Het is een veelbelovend project dat niet alleen de fans zal bekoren, maar ook een nieuw publiek zal aantrekken naar de betoverende wereld van ninja’s en avontuur."
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

const url = "src/content/nieuws/live-action-film-van-naruto-op-komst-van-regisseur-van-shang-chi.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/live-action-film-van-naruto-op-komst-van-regisseur-van-shang-chi.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/live-action-film-van-naruto-op-komst-van-regisseur-van-shang-chi.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
