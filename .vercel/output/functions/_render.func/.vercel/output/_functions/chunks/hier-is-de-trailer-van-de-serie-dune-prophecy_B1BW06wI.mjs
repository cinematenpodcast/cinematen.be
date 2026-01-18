import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Hier is de trailer van de serie Dune: Prophecy",
  "date": "2024-05-15T23:26:20.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/dune-prophecy-debuts-this-fall-1715785568.jpg",
  "trailer": "EEoQAoEGLhw",
  "slug": "de-onthulling-van-dune-prophecy---een-diepgaande-verkenning-van-de-bene-gesserit",
  "tags": ["tv", "trailer"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "het-ontstaan-van-een-machtige-orde",
    "text": "Het ontstaan van een machtige orde"
  }, {
    "depth": 2,
    "slug": "de-bene-gesserit-staat-centraal",
    "text": "De Bene Gesserit staat centraal"
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
      children: "In de wereld van “Dune” wordt een nieuw hoofdstuk onthuld dat dieper graaft dan ooit tevoren. De langverwachte serie “Dune: Prophecy” werpt een licht op de mysterieuze en invloedrijke groep bekend als de Bene Gesserit, en hun rol in het vormgeven van de lotgevallen van de mensheid."
    }), "\n", createVNode(_components.h2, {
      id: "het-ontstaan-van-een-machtige-orde",
      children: "Het ontstaan van een machtige orde"
    }), "\n", createVNode(_components.p, {
      children: "“Dune: Prophecy” neemt ons mee naar een tijdperk dat 10.000 jaar voorafgaat aan de gebeurtenissen rond Paul Atreides, zoals we die hebben gezien in de epische films van Denis Villeneuve. In deze prequelserie verkennen we de opkomst van de Bene Gesserit, een enigmatische zustergemeenschap met immense krachten en ambities."
    }), "\n", createVNode(_components.p, {
      children: "De Bene Gesserit, eerder slechts sporadisch belicht in eerdere verfilmingen, spelen een centrale rol in het manipuleren van zowel biologie als cultuur binnen het Dune-universum. Van dynastieke huwelijken tot religieuze mythes, hun invloed strekt zich uit over de melkweg, met als doel het creëren van een messiaanse figuur genaamd de Kwisatz Haderach."
    }), "\n", createVNode(_components.h2, {
      id: "de-bene-gesserit-staat-centraal",
      children: "De Bene Gesserit staat centraal"
    }), "\n", createVNode(_components.p, {
      children: "Voortkomend uit de pen van Brian Herbert en Kevin J. Anderson, is “Dune: Prophecy” direct geïnspireerd door het boek “Sisterhood of Dune”. Dit werk toont de Bene Gesserit in een vroegere fase van hun bestaan, waar intriges en machtsstrijd de toon zetten voor wat nog komen gaat."
    }), "\n", createVNode(_components.p, {
      children: "In de aankomende serie zien we actrices zoals Emily Watson en Olivia Williams schitteren als leden van de Harkonnen-familie, terwijl ze hun stempel drukken op de opkomende zustergemeenschap. Mark Strong vertolkt de rol van Keizer Javicco Corrino, een oude voorouder van een bekend personage uit de recente film “Dune: Part Two”."
    }), "\n", createVNode(_components.p, {
      children: "“Dune: Prophecy” belooft een meeslepende reis te worden door een tijd van grootse intriges, politiek spel en verborgen agenda’s. De prijs van macht wordt onder de loep genomen en de grenzen van goddelijke interventie worden overschreden."
    }), "\n", createVNode(_components.p, {
      children: "Met de aankondiging van deze nieuwe serie op Max later dit jaar, kunnen fans van het Dune-universum zich verheugen op een diepgaande verkenning van een van de meest intrigerende aspecten van deze geliefde sci-fi saga."
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

const url = "src/content/nieuws/hier-is-de-trailer-van-de-serie-dune-prophecy.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/hier-is-de-trailer-van-de-serie-dune-prophecy.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/hier-is-de-trailer-van-de-serie-dune-prophecy.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
