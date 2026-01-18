import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Galactus komt er aan in het Marvel Cinematic Universe",
  "date": "2024-05-10T15:46:56.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1715292727.jpg",
  "trailer": "",
  "slug": "de-aankomst-van-galactus-in-het-marvel-cinematic-universe",
  "tags": ["film", "casting"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "marvels-eerste-familie-ontmoet-hun-tegenstander",
    "text": "Marvel’s Eerste Familie Ontmoet Hun Tegenstander"
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
      children: "In de recente aankondigingen omtrent het aanstaande Marvel Cinematic Universe-avontuur “The Fantastic Four,” is de cast langzaam maar zeker compleet geworden. Een naam die bij fans mogelijk niet onmiddellijk een belletje doet rinkelen, maar die zeker resoneert binnen genrekringen, is Ralph Ineson. Deze Britse acteur, bekend van werken zoals ‘The Witch’ en ‘Game of Thrones,’ staat op het punt om een cruciale rol te vervullen als de kosmische schurk Galactus."
    }), "\n", createVNode(_components.h2, {
      id: "marvels-eerste-familie-ontmoet-hun-tegenstander",
      children: "Marvel’s Eerste Familie Ontmoet Hun Tegenstander"
    }), "\n", createVNode(_components.p, {
      children: "Galactus, oorspronkelijk geïntroduceerd in een “Fantastic Four”-stripverhaal uit 1966, is een entiteit met goddelijke trekken die alleen kan overleven door zich te voeden met hele planeten en de levenskracht van hun bewoners. Anders dan klassieke grondgebonden slechteriken in de stripwereld, is Galactus niet inherent kwaadaardig; zijn voeding dient slechts ter instandhouding van zijn eigen bestaan, eerder dan uit boosaardige intenties. De keuze om Galactus in “The Fantastic Four” te brengen brengt niet alleen een iconische schurk naar voren, maar opent ook de deur naar bredere implicaties binnen het Marvel Cinematic Universe."
    }), "\n", createVNode(_components.p, {
      children: "Recentelijk heeft Marvel Studios de film gedateerd voor 25 juli 2025. Het scenario wordt verzorgd door Eric Pearson, Josh Friedman, Jeff Kaplan en Ian Springer, met toevoegingen van Peter Cameron, bekend van zijn werk aan “WandaVision.” Matt Shakman, genomineerd voor Emmy’s voor zijn regiewerk aan voornoemde serie, zal de regie op zich nemen voor “The Fantastic Four.”"
    }), "\n", createVNode(_components.p, {
      children: "Ralph Ineson, vertolker van Galactus, krijgt nu de kans om een andere dimensie aan zijn carrière toe te voegen. Niet vreemd in het filmuniversum, is Ineson momenteel te zien in “The First Omen” van 20th Century en heeft eerder samengewerkt met regisseur Robert Eggers aan “The Witch.” Zijn veelzijdige ervaring in franchises als ‘Harry Potter,’ ‘Star Wars,’ en ‘Kingsman’ maken hem een welkome aanwinst voor het steeds uitbreidende Marvel-familie."
    }), "\n", createVNode(_components.p, {
      children: "Het nieuws over Ineson’s casting als Galactus wekt niet alleen interesse onder fervente fans, maar doet ook vermoeden dat Marvel Studios een nieuwe koers vaart met betrekking tot het narratief van “The Fantastic Four.” De keuze om terug te gaan naar de jaren 60, de tijd waarin het superheldenteam voor het eerst het levenslicht zag, belooft een frisse kijk op het verhaal en opent mogelijkheden voor verweving met andere delen van het grotere MCU-universum."
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

const url = "src/content/nieuws/galactus-komt-er-aan-in-het-marvel-cinematic-universe.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/galactus-komt-er-aan-in-het-marvel-cinematic-universe.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/galactus-komt-er-aan-in-het-marvel-cinematic-universe.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
