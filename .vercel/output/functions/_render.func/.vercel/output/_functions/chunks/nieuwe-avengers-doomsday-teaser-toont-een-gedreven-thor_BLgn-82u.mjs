import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Nieuwe Avengers Doomsday teaser toont een gedreven Thor",
  "date": "2025-12-30T14:39:53.416Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1767104019.jpg",
  "trailer": "1clWprLC5Ak",
  "slug": "nieuwe-avengers-doomsday-teaser-toont-een-gedreven-thor",
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
      children: "Marvel blijft nieuwe teasers uitbrengen voor “Avengers: Doomsday”. Na het eerste\nstukje over Steve Rogers, oftewel Captain America, is er nu een nieuwe teaser\ndie in de focus staat van Thor. Het filmpje draaide eerst in de bioscoop, net\nzoals de vorige teaser, en is daarna officieel online gezet. Zoals vaker\ngebeurt, lekten beide teasers al uit voordat Marvel ze zelf kon releasen."
    }), "\n", createVNode(_components.p, {
      children: "Chris Hemsworth is opnieuw te zien als Thor en hij heeft opnieuw kort haar, net\nzoals in “Thor: Ragnarok”. In de teaser richt hij zich tot zijn vader Odin en\nvraagt om kracht voor nog één laatste gevecht. Daarna wil hij naar huis\nterugkeren, naar zijn geadopteerde dochter Love, die we leerden kennen aan het\neinde van “Thor: Love and Thunder”."
    }), "\n", createVNode(_components.p, {
      children: "Deze focus op kinderen blijkt een terugkerend thema in de vrijgegeven beelden.\nEerder zagen we al een teaser waar Steve Rogers een baby vasthoud, vermoedelijk\nzijn eigen kind, en bij de Fantastic Four wordt een kind ontvoerd. In\ntegenstelling tot Thor’s recente, meer komische optredens, is de toon in deze\nteaser serieus en gedreven. Wij denken daarom dat Thor misschien wel een groot\noffer zal brengen in de nieuwe film."
    }), "\n", createVNode(_components.p, {
      children: "Chris Hemsworth gaf eerder aan niet tevreden te zijn met hoe zijn personage werd\nneergezet in “Thor: Love and Thunder” en wil de fans een betere versie van de\nGod van de Donder tonen. Misschien is “Avengers: Doomsday” zijn kans om dat waar\nte maken, of anders een eventuele “Thor 5”."
    }), "\n", createVNode(_components.p, {
      children: "De Thor-teaser heeft in de bioscoop de plaats ingenomen van de Steve\nRogers-teaser, die vorige week voor “Avatar: Fire and Ash” werd getoond. De\nrelease van “Avengers: Doomsday” staat gepland voor 18 december 2026, nog ver\nweg, maar Marvel begint nu al met de hype op te bouwen. Opvallend is dat op\ndiezelfde dag ook “Dune: Part 3” uitkomt, een herhaling van de\n“Barbenheimer”-strijd van vorig jaar."
    }), "\n", createVNode(_components.p, {
      children: "Er gaan geruchten dat er nog meer van dit soort teasers aankomen. De volgende\nzou wel eens over de X-Men kunnen gaan, waarvan ook al beeldmateriaal is\nuitgelekt. Wij hopen ook op een eerste glimp van de grote slechterik Doctor\nDoom, gespeeld door Robert Downey Jr."
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

const url = "src/content/nieuws/nieuwe-avengers-doomsday-teaser-toont-een-gedreven-thor.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nieuwe-avengers-doomsday-teaser-toont-een-gedreven-thor.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nieuwe-avengers-doomsday-teaser-toont-een-gedreven-thor.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
