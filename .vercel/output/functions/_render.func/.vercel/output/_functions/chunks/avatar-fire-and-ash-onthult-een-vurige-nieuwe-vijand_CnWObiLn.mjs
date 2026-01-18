import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Avatar Fire and Ash onthult een vurige nieuwe vijand!",
  "date": "2025-07-28T16:12:24.887Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1753715218.jpg",
  "trailer": "nb_fFj_0rq8",
  "slug": "avatar-fire-and-ash-onthult-een-vurige-nieuwe-vijand",
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
      children: "De derde Avatar-film “Avatar: Fire and Ash” landt op 19 december 2025 in de\nbioscoop. James Cameron pikt de draad op drie jaar na “Avatar: The Way of\nWater”. We zien opnieuw Sam Worthington als Jake Sully en Zoe Saldaña als\nNeytiri. Ook Sigourney Weaver en Stephen Lang keren terug."
    }), "\n", createVNode(_components.p, {
      children: "De trailer introduceert de Ash People, een nieuwe stam met een duidelijke\nconnectie tot vuur. Hun leider Varang lijkt vuur te beheersen - beelden tonen de\nstam dansend rond vlammen. Haar uitspraak “Jouw godin heeft hier geen macht”\nmarkeert haar als serieuze bedreiging. Jake en Neytiri verzamelen hun kinderen\nen de Metkayina-stam voor de strijd tegen Varangs leger."
    }), "\n", createVNode(_components.p, {
      children: "We krijgen meer van Pandora te zien dan ooit, met nieuwe locaties en\nadembenemende landschappen. Een hoogtepunt? De terugkeer van Payakan, de\nruimtewalvis die wij zo adoreerden in de vorige film. Hij is groter, sterker en\ndraagt nu tribale piercings. De trailer toont hem vechtend aan de zijde van de\nNa’vi."
    }), "\n", createVNode(_components.p, {
      children: "Binnen Jakes familie spelen spanningen, vooral tussen Kiri en Lo’ak. De\ngenadeloze Quaritch blijft een centrale vijand, maar hoe al deze verhaallijnen\nsamensmelten blijft een vraag. Cameron beloofde wel dat alle personages zware\nemotionele en fysieke uitdagingen tegemoet gaan."
    }), "\n", createVNode(_components.p, {
      children: "Met nog twee geplande films (de volgende pas in 2029) kijken wij uit naar nieuwe\nontwikkelingen in deze wereld. De actie, nieuwe culturen en visuele pracht maken\n“Fire and Ash” alvast tot een van onze meest verwachte films van 2025."
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

const url = "src/content/nieuws/avatar-fire-and-ash-onthult-een-vurige-nieuwe-vijand.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/avatar-fire-and-ash-onthult-een-vurige-nieuwe-vijand.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/avatar-fire-and-ash-onthult-een-vurige-nieuwe-vijand.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
