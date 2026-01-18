import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Hier is de trailer voor Daredevil Born Again",
  "date": "2025-01-15T15:19:43.582Z",
  "soort": "tv",
  "thumbnail": "/images/article-images/l-intro-1736944011.jpg",
  "trailer": "7xALolZzhSM",
  "slug": "hier-is-de-trailer-voor-daredevil-born-again",
  "tags": ["tv"]
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
      children: "Daredevil keert terug en dit keer op Disney+. Het is een spannend moment voor de\nheld Matt Murdock, gespeeld door Charlie Cox. Hij werd eerst beroemd door de\nNetflix-serie “Daredevil”, maar na een aantal seizoenen werd de show stopgezet.\nVeel mensen waren verdrietig dat de serie eindigde, maar de hoop dat Daredevil\nzou terugkomen bleef bestaan."
    }), "\n", createVNode(_components.p, {
      children: "Na zijn verwelkoming in de Marvel Cinematic Universe (MCU) met een korte rol in\n“Spider-Man: No Way Home” en “She-Hulk: Attorney at Law”, kunnen we nu echt\nterug naar zijn verhaal. De nieuwe serie heet “Daredevil: Born Again” en\nverschijnt op 4 maart op Disney+."
    }), "\n", createVNode(_components.p, {
      children: "In deze nieuwe serie zien we weer vertrouwde gezichten. Naast Charlie Cox komt\nook Vincent D’Onofrio terug als de slechterik Wilson Fisk, ook wel bekend als\nKingpin. Deborah Ann Woll is er weer als Karen Page en Elden Henson speelt\nopnieuw Foggy Nelson. Jon Bernthal, die de Punisher speelt, keert ook terug, en\nwe krijgen zelfs de terugkeer van Bullseye te zien."
    }), "\n", createVNode(_components.p, {
      children: "De productie van de serie had wat problemen, de serie is zelfs een volledige\nrewrite ondergaan nadat Kevin Feige de eerste reeks aan scenario’s de vuilbak in\nkieperde. Marvel Studios wil ervoor zorgen dat de serie aan de verwachtingen van\nhet publiek voldoet en aan de nieuwe trailer houden ze hun slagen deze keer niet\nin (pun intended). Niet alleen Daredevil vecht erop los maar we zien ook Fisk\neen paar mannen een goed pak rammel geven. De actie en vecht choreografie zit\nduidelijk al goed, nu alleen nog hopen dat er ook genoeg aandacht is besteed aan\neen goed en meeslepend verhaal."
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

const url = "src/content/nieuws/hier-is-de-trailer-voor-daredevil-born-again.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/hier-is-de-trailer-voor-daredevil-born-again.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/hier-is-de-trailer-voor-daredevil-born-again.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
