import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Live-action versie van How to Train Your Dragon brengt Gerard Butler terug als Stoick de Dappere Viking",
  "date": "2024-01-07T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1704498213.jpg",
  "trailer": "",
  "slug": "live-action-versie-van-how-to-train-your-dragon-brengt-gerard-butler-terug-als-stoick-de-dappere-viking",
  "draft": false,
  "tags": ["film", "casting"]
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
      children: "Gerard Butler zal opnieuw in de huid kruipen van Stoick de Dappere Viking in de live-action remake van de populaire animatiefilm “How to Train Your Dragon”. Dit nieuws is bevestigd door EW. Butler is de eerste castlid uit de oorspronkelijke film die terugkeert voor de live-action versie, waarbij hij weer samenwerkt met regisseur Dean DeBlois, die verantwoordelijk is voor het schrijven, regisseren en produceren van deze nieuwe film.\nButler zal herenigd worden met de eerder aangekondigde sterren Mason Thames en Nico Parker, die de rollen van Hiccup en Astrid zullen spelen. Verdere castingdetails zijn nog niet bekendgemaakt.\nDe plotdetails van de live-action remake zijn nog schaars, maar Universal belooft dat de film “verweven is met meeslepende en intieme verhalen”, waardoor het publiek diep ondergedompeld wordt in de rijke fantasiewereld van DreamWorks Animation."
    }), "\n", createVNode(_components.p, {
      children: "De originele animatiefilm “How to Train Your Dragon” kwam uit in 2010 en wist het publiek te betoveren met het onwaarschijnlijke avontuur van de jonge Viking Hiccup en de angstaanjagende Night Fury-draak Toothless. De twee bouwen een bijzondere vriendschap op en beleven samen wilde avonturen. In 2014 en 2019 volgden de succesvolle sequels “How to Train Your Dragon 2” en “How to Train Your Dragon: The Hidden World”. De franchise heeft wereldwijd meer dan $1,6 miljard opgebracht en is bekroond met vier Academy Award-nominaties. De films zijn gebaseerd op de populaire boeken van Cressida Cowell."
    }), "\n", createVNode(_components.p, {
      children: "De live-action versie van “How to Train Your Dragon” staat gepland voor release op 13 juni 2025. Fans kunnen reikhalzend uitkijken naar de terugkeer van Gerard Butler als Stoick de Dappere Viking en naar het nieuwe avontuur dat hen te wachten staat in deze epische film."
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

const url = "src/content/nieuws/live-action-versie-van-how-to-train-your-dragon-brengt-gerard-butler-terug-als-stoick-de-dappere-viking.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/live-action-versie-van-how-to-train-your-dragon-brengt-gerard-butler-terug-als-stoick-de-dappere-viking.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/live-action-versie-van-how-to-train-your-dragon-brengt-gerard-butler-terug-als-stoick-de-dappere-viking.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
