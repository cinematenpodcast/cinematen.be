import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Thunderbolts* heeft een eerste trailer",
  "date": "2024-09-23T16:38:19.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/get-ready-to-meet-a-different-kind-of-marvel-team-1727098414.jpg",
  "trailer": "v-94Snw-H4o",
  "slug": "thunderbolts-een-nieuw-hoofdstuk-in-het-mcu",
  "tags": ["film", "comics", "trailer"]
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
      children: "Marvel Studios heeft recentelijk de eerste trailer vrijgegeven voor “Thunderbolts*“. Deze film belooft een spannend en actievol nieuw hoofdstuk te worden in het alom geliefde superheldenuniversum."
    }), "\n", createVNode(_components.p, {
      children: "In de teaser-trailer krijgen we een glimp van enkele bekende gezichten en nieuwe personages die deel zullen uitmaken van deze anti-heldenformatie. Yelena Belova / White Widow, gespeeld door Florence Pugh, herenigt zich met haar voormalige mentor Alexei Shostakov / Red Guardian, terwijl ze zich aansluit bij John Walker / U.S. Agent, Ghost / Ava Starr, Taskmaster / Antonia Dreykov, en Winter Soldier / Bucky Barnes om een team te vormen dat doet denken aan de Avengers."
    }), "\n", createVNode(_components.p, {
      children: "De mysterieuze dreiging die hen samenbrengt blijft nog grotendeels onbekend. Valentina Allegra de Fontaine lijkt echter achter de schermen deze groep van outcasts en misfits te hebben samengesteld, zoals te zien was in eerdere MCU-producties zoals “The Falcon and the Winter Soldier” en “Black Widow”."
    }), "\n", createVNode(_components.p, {
      children: "Een opvallende toevoeging aan het team is Lewis Pullman als Bob, ook bekend als Sentry, een personage met immense krachten en een duister geheim. Bob lijkt verrast wanneer de andere leden van het team onverwacht verschijnen, wat doet vermoeden dat zijn rol cruciaal zal zijn in de dynamiek van het verhaal. Pullman, bekend van zijn rol in films als “Top Gun: Maverick”, staat klaar om zijn stempel te drukken op het personage van Bob en daarmee de film naar nieuwe hoogten te tillen."
    }), "\n", createVNode(_components.p, {
      children: "Met een regisseur als Jake Schreier aan het roer en een script geschreven door getalenteerde schrijvers zoals Lee Sung Jin en Eric Pearson, belooft “Thunderbolts*” een film te worden die fans van het MCU niet willen missen. De grootste vraag tot nu blijft voor ons waar de asterisk in de titel voor zal staan…"
    }), "\n", createVNode(_components.p, {
      children: "Kortom, de toekomst van het Marvel Cinematic Universe ziet er misschien wel rooskleurig uit met de komst van “Thunderbolts*“. De film staat gepland voor release in mei 2025."
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

const url = "src/content/nieuws/thunderbolts-heeft-een-eerste-trailer.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/thunderbolts-heeft-een-eerste-trailer.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/thunderbolts-heeft-een-eerste-trailer.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
