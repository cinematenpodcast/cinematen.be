import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Please Don't Destroy the Treasure of Foggy Mountain",
  "date": "2023-12-28T00:00:00.000Z",
  "soort": "Film review",
  "schrijver": "Yorrick",
  "thumbnail": "https://assets-prd.ignimgs.com/2023/11/17/pdd-blogroll-edit-1700253605729.jpeg",
  "poster": "https://m.media-amazon.com/images/M/MV5BMTY5MzFhN2YtZjY3NC00YWIwLTkwNDQtZWNkODI0YmNmZDljXkEyXkFqcGdeQXVyNDc5NDc2Nw@@._V1_.jpg",
  "trailer": "2vO4AKM_KGg",
  "summary": "Het comedy trio Please Don't Destroy is in Amerika veel populariteit aan het winnen en deze film toont perfect aan waarom. Hoewel het verhaal miscchien wat aan de simpele kant is, zijn de comedysketches en moppen er wel in overvloed wat zorgt voor een zeer amusante en grappige film met als kers op de taart Conon O Brien als plezante verrassing!",
  "slug": "please-dont-destroy-the-treasure-of-foggy-mountain",
  "draft": false,
  "rating": 3.5,
  "tags": ["comedy", "film"],
  "featured": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "26-jaar-en-al-zo-ver-staan-in-de-comedy-wereld",
    "text": "26 jaar en al zo ver staan in de comedy wereld"
  }, {
    "depth": 2,
    "slug": "conan-obrien-has-some-friends",
    "text": "Conan O’Brien has some friends"
  }, {
    "depth": 2,
    "slug": "niet-grappig-voor-iedereen",
    "text": "Niet grappig voor iedereen"
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
    children: [createVNode(_components.h2, {
      id: "26-jaar-en-al-zo-ver-staan-in-de-comedy-wereld",
      children: "26 jaar en al zo ver staan in de comedy wereld"
    }), "\n", createVNode(_components.p, {
      children: "Ik heb net “Please Don’t Destroy the Treasure of Foggy Mountain” gezien, een komedie van het humoristische trio “Please Don’t Destroy”. Deze drie 26-jarige mannen, die via TikTok en “Saturday Night Live” doorgebroken zijn, spelen in deze film komische versies van zichzelf. Het verhaal draait om de jongens, die volwassen worden en elk hun eigen weg gaan, met één vriend die achterblijft zonder duidelijke richting in het leven. Samen gaan ze op zoek naar een schat, aangegeven door een kompas dat ze als kinderen vonden, wat leidt tot avonturen die herinneren aan films als “Dude, Where’s My Car?” en “Without a Paddle”."
    }), "\n", createVNode(_components.h2, {
      id: "conan-obrien-has-some-friends",
      children: "Conan O’Brien has some friends"
    }), "\n", createVNode(_components.p, {
      children: "Een verrassende wending voor mij was de gastrol van Conan O’Brien, een van mijn idolen, als de vader van een van de vrienden. Zijn scènes waren bijzonder grappig. De film was gevuld met grappen en sketches en hoewel het verhaal simpel was, vloog de tijd voorbij met een constante stroom van humor. De zijpersonages voegden wat minder toe, maar het geheel had een leuke spanningsboog, culminerend in een groot gevecht aan het einde. De jongens, die duidelijk in hun element zijn in deze rollen, schreven de film zelf, met mogelijk wat hulp van Conan O’Brien. Ik vond het een zeer vermakelijke film. De interactie tussen Conan O’Brien en zijn zoon in de film voelde erg geïmproviseerd, met snelle, slimme grappen die heen en weer werden gegooid. Er lijkt een schat aan weggelaten grappen te zijn, die misschien als deleted scenes getoond hadden kunnen worden."
    }), "\n", createVNode(_components.h2, {
      id: "niet-grappig-voor-iedereen",
      children: "Niet grappig voor iedereen"
    }), "\n", createVNode(_components.p, {
      children: "De film is duidelijk gericht op liefhebbers van absurde humor en fans van de sketches van het trio op TikTok en “Saturday Night Live”. Als je bekend bent met hun werk, is de film waarschijnlijk een grotere hit. De specifieke humor kan voor sommigen onverwacht en minder geslaagd zijn, maar voor degenen die houden van dit genre, is het een vermakelijke ervaring. Er is een hoop potentie voor deze jongens in de toekomst van de Amerikaanse comedy-scene, misschien zelfs met eigen shows. Kortom, de film is een aanrader voor wie op zoek is naar een korte, leuke en grappige filmervaring."
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

const url = "src/content/reviews/please-dont-destroy-the-treasure-of-foggy-mountain.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/reviews/please-dont-destroy-the-treasure-of-foggy-mountain.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/reviews/please-dont-destroy-the-treasure-of-foggy-mountain.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
