import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Sigourney Weaver misschien bij de cast van Star Wars film The Mandalorian & Grogu",
  "date": "2024-05-11T17:34:50.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1715437728.jpg",
  "trailer": "",
  "slug": "sigourney-weaver-in-gesprek-om-de-cast-van-star-wars-film-the-mandalorian--grogu-te-versterken",
  "tags": ["film", "casting"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "star-wars-universum-nog-lang-niet-voorbij",
    "text": "Star Wars universum nog lang niet voorbij"
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
      children: "De legendarische actrice Sigourney Weaver, bekend van iconische rollen in franchises als “Alien” en “Avatar,” kan binnenkort toe treden tot een andere interstellaire wereld. Volgens recente berichten is Weaver in gesprek om een rol te spelen in de aankomende Star Wars-film “The Mandalorian & Grogu,” geregisseerd door Jon Favreau."
    }), "\n", createVNode(_components.p, {
      children: "Na de release van “The Rise of Skywalker” in 2019 heeft het Star Wars-universum zich voornamelijk op televisie gericht, met projecten zoals “The Mandalorian” die op Disney+ zijn uitgezonden. “The Mandalorian & Grogu” werd officieel aangekondigd begin dit jaar en staat gepland voor productie met een zomerschema."
    }), "\n", createVNode(_components.p, {
      children: "Weaver’s rol in de film blijft nog een mysterie, maar gezien haar ervaring in sciencefictionfranchises, waaronder “Alien” en “Avatar,” zal ze ongetwijfeld goed passen bij wat het ruimteverhaal te bieden heeft. De connectie met de Disney+-serie die Grogu (ook bekend als Baby Yoda) tot een huishoudnaam maakte, zal verder worden uitgediept, met Pedro Pascal die naar verwachting terugkeert als premiejager Din Djarin."
    }), "\n", createVNode(_components.p, {
      children: "Jon Favreau, de creator van “The Mandalorian,” heeft zijn enthousiasme geuit over de stap naar het witte doek, waarbij hij sprak over de rijkdom van George Lucas’ universum en de spannende mogelijkheid om de avonturen van de Mandalorian en Grogu op groot scherm te vertellen."
    }), "\n", createVNode(_components.h2, {
      id: "star-wars-universum-nog-lang-niet-voorbij",
      children: "Star Wars universum nog lang niet voorbij"
    }), "\n", createVNode(_components.p, {
      children: "Met een oog op een nieuwe golf van Star Wars-films, belooft “The Mandalorian & Grogu” het startpunt te zijn voor een reeks aan films die nog zullen volgen. Kathleen Kennedy, de president van Lucasfilm, zal samen met Favreau en Dave Filoni als producenten aan boord zijn voor deze nieuwe film."
    }), "\n", createVNode(_components.p, {
      children: "In een tijd waarin verschillende Star Wars-projecten op losse schroeven leken te staan, markeert deze aankomende film een hernieuwde focus op verhalen die fans van de franchise zullen bekoren. Met spin-offs als “The Acolyte” en een film die Rey’s verhaal oppakt, lijkt Lucasfilm vastbesloten om het Star Wars-universum uit te breiden en te verkennen."
    }), "\n", createVNode(_components.p, {
      children: "“The Mandalorian & Grogu” belooft een nieuwe kijkervaring te bieden voor fans van de franchise, met een mix van bekende personages en nieuwe avonturen die zich afspelen in een sterrenstelsel ver, ver weg. Terwijl details over de releasedatum nog niet bekend zijn gemaakt, staat deze film al klaar om de Star Wars-saga opnieuw tot leven te brengen."
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

const url = "src/content/nieuws/sigourney-weaver-misschien-bij-de-cast-van-star-wars-film-the-mandalorian--grogu.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/sigourney-weaver-misschien-bij-de-cast-van-star-wars-film-the-mandalorian--grogu.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/sigourney-weaver-misschien-bij-de-cast-van-star-wars-film-the-mandalorian--grogu.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
