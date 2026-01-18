import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "De nieuwe Evil Dead film heeft zijn griezelige regisseur gevonden",
  "date": "2024-04-27T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1714150064.jpg",
  "trailer": "",
  "slug": "nieuwe-evil-dead-films-een-griezelige-toekomst-voor-de-horrorfranchise",
  "tags": ["film", "casting"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "een-opkomende-regisseur-met-een-duistere-visie",
    "text": "Een opkomende regisseur met een duistere visie"
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
      children: "De iconische horrorfranchise “Evil Dead” krijgt een verse injectie van bloed en spanning met twee nieuwe films in de maak onder Ghost House Pictures. Francis Galluppi, bekend van “The Last Stop In Yuma County,” is aangewezen om een origineel verhaal te schrijven en te regisseren."
    }), "\n", createVNode(_components.h2, {
      id: "een-opkomende-regisseur-met-een-duistere-visie",
      children: "Een opkomende regisseur met een duistere visie"
    }), "\n", createVNode(_components.p, {
      children: "Francis Galluppi staat bekend om zijn vermogen om spanning langzaam op te bouwen en vervolgens genadeloos geweld op het publiek los te laten. Zijn debuutfilm “The Last Stop In Yuma County” vertelt het verhaal van een reizende verkoper die verzeild raakt in een levensbedreigende gijzelingssituatie op een afgelegen rustplaats in Arizona."
    }), "\n", createVNode(_components.p, {
      children: "Niet alleen heeft Galluppi indruk gemaakt met zijn speelfilmdebuut, maar ook met diverse bekroonde korte films zoals “High Desert Hell” en “The Gemini Project.” Daarnaast heeft hij zijn regisseursvaardigheden laten zien in verschillende muziekvideo’s voor de indie rockband Mt. Joy."
    }), "\n", createVNode(_components.p, {
      children: "De “Evil Dead”-franchise, bedacht door Sam Raimi en bekend geworden door de legendarische rol van Bruce Campbell als Ash Williams, begon in 1981 met de gelijknamige film. De serie evolueerde tot een trilogie en inspireerde ook de spin-off “Ash vs. Evil Dead” op Starz, naast andere projecten binnen het universum."
    }), "\n", createVNode(_components.p, {
      children: "Recentelijk werd “Evil Dead Rise,” geregisseerd door Lee Cronin, uitgebracht via Warner Bros en bracht wereldwijd meer dan $147 miljoen op. Dit succes onderstreept de blijvende populariteit van de franchise en de honger van het publiek naar meer bloederige verhalen."
    }), "\n", createVNode(_components.p, {
      children: "Met twee nieuwe films in ontwikkeling, belooft de toekomst van “Evil Dead” zowel trouwe fans als nieuwkomers te boeien met angstaanjagende verhalen en huiveringwekkende wendingen."
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

const url = "src/content/nieuws/de-nieuwe-evil-dead-film-heeft-zijn-griezelige-regisseur-gevonden.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-nieuwe-evil-dead-film-heeft-zijn-griezelige-regisseur-gevonden.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-nieuwe-evil-dead-film-heeft-zijn-griezelige-regisseur-gevonden.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
