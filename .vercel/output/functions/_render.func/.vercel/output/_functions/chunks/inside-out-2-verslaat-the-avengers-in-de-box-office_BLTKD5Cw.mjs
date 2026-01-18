import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Inside Out 2 verslaat The Avengers in de Box Office",
  "date": "2024-08-02T17:05:50.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1722541632.jpg",
  "trailer": "",
  "slug": "disney-en-pixars-inside-out-2-een-opmerkelijk-succesverhaal-in-de-filmgeschiedenis",
  "tags": ["film"]
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
      children: "Disney en Pixar’s “Inside Out 2” blijft verbazen in de wereldwijde box office scene. De animatiesequel heeft een indrukwekkende opening gehad en blijft bovenaan de competitie staan als de best verdienende film van 2024. Het geld blijft binnenstromen, en de film blijft dieper doordringen in de recordboeken. Nu heeft de nieuwste film van Pixar officieel de top 10 van alle tijden doorbroken, waarbij Marvel’s baanbrekende superheldenblockbuster “The Avengers” werd overtroffen."
    }), "\n", createVNode(_components.p, {
      children: "Op dit moment heeft regisseur Kelsey Mann’s “Inside Out 2” wereldwijd $1.524 miljard verdiend, aldus Deadline. Dat totaal omvat een verbazingwekkende $905,1 miljoen in het buitenland en $618,8 miljoen in eigen land. (Om duidelijk te zijn, zelfs als deze film $618 miljoen wereldwijd had verdiend, zouden we het nog steeds een succes noemen.) Dit plaatst het op nummer 10 aller tijden op de wereldwijde box office-lijst, niet aangepast voor inflatie. Recentelijk heeft het “Furious 7” ($1.515 miljard) en, belangrijker nog, “The Avengers” gepasseerd, die destijds records brak door $1,52 miljard wereldwijd binnen te halen."
    }), "\n", createVNode(_components.p, {
      children: "Wat “Inside Out 2” in zes weken heeft bereikt, is ronduit verbazingwekkend. Het was al de best verdienende geanimeerde film ooit geworden, onlangs “Frozen II” overtreffend. Het is ook verreweg de grootste film van Pixar ooit, de “Incredibles 2” ($1,24 miljard) voorbijgestreefd, en staat nu als derde grootste film van het pandemische tijdperk, achter alleen “Spider-Man: No Way Home” ($1,9 miljard) en “Avatar: The Way of Water” ($2,32 miljard)."
    }), "\n", createVNode(_components.p, {
      children: "Wat het meest opmerkelijk is bij het bekijken van het grotere plaatje, is de absolute dominantie van Disney in het moderne tijdperk. Zes van de top 10 grootste films aller tijden behoren toe aan het Huis van de Muis, waaronder 2019’s “The Lion King” ($1,66 miljard), “Avengers: Infinity War” ($2 miljard), “Star Wars: The Force Awakens” ($2,07 miljard), “Avengers: Endgame” ($2,79 miljard), en eerder genoemde “Way of Water.” Sinds Disney enkele jaren geleden Fox heeft gekocht, valt 2009’s “Avatar” ($2,92 miljard), de grootste film in de geschiedenis, technisch gezien nu ook onder die paraplu."
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

const url = "src/content/nieuws/inside-out-2-verslaat-the-avengers-in-de-box-office.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/inside-out-2-verslaat-the-avengers-in-de-box-office.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/inside-out-2-verslaat-the-avengers-in-de-box-office.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
