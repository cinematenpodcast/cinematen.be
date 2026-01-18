import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Warner Bros. Television ontwikkelt 300 Prequel TV Serie",
  "date": "2024-06-01T18:28:37.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/intro-1717177947.jpg",
  "trailer": "",
  "slug": "warner-bros-television-ontwikkelt-300-prequel-tv-serie",
  "tags": ["tv"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "mogelijke-terugkeer-van-zack-snyder-naar-sparta",
    "text": "Mogelijke terugkeer van Zack Snyder naar Sparta"
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
      children: "Warner Bros. Television werkt momenteel aan een televisieserie die gebaseerd is op de wereld van de bekende film ‘300’, geregisseerd door Zack Snyder en gebaseerd op het gelijknamige graphic novel van Frank Miller. Het project zal naar verluidt een prequel zijn, waarschijnlijk gericht op de Spartanen onder leiding van Leonidas voordat ze ten strijde trokken tegen Xerxes. In de originele film stonden 300 Spartaanse soldaten centraal die de strijd aangingen met het veel grotere Perzische leger onder leiding van Xerxes I. Het verhaal draaide om de Slag bij Thermopylae in 480 voor Christus."
    }), "\n", createVNode(_components.h2, {
      id: "mogelijke-terugkeer-van-zack-snyder-naar-sparta",
      children: "Mogelijke terugkeer van Zack Snyder naar Sparta"
    }), "\n", createVNode(_components.p, {
      children: "Volgens Variety, die als eerste melding maakte van de serie in ontwikkeling, zijn er nog maar weinig details vastgelegd en zijn er nog geen contracten getekend. Er wordt echter gekeken naar Zack Snyder om de serie te regisseren en als uitvoerend producent op te treden. Andere producenten van de film, waaronder Deborah Snyder en Wesley Coller van Stone Quarry, samen met Gianni Nunnari, Mark Canton en Bernie Goldmann, zijn allemaal in gesprek om terug te keren."
    }), "\n", createVNode(_components.p, {
      children: "Het idee om het universum van ‘300’ uit te breiden, is iets waar Snyder en Warner Bros. al een tijdje mee bezig zijn geweest. De film kreeg wel een vervolg, maar dat presteerde ondermaats. Andere geruchten suggereerden dat er films zouden komen over andere historische periodes die op een manier zouden worden gemaakt die gewoon “aanvoelde” als ‘300’."
    }), "\n", createVNode(_components.p, {
      children: "De oorspronkelijke ‘300’ was een verrassende hit. De film, met in de hoofdrol Gerard Butler, Rodrigo Santoro, Lena Headey, David Wenham, Dominic West, Vincent Regan, Tom Wisdom en Michael Fassbender, werd gemaakt voor ongeveer $65 miljoen en verdiende meer dan $450 miljoen aan de box office. Het blijft een van de meest winstgevende films die Snyder ooit heeft gemaakt. Zelfs de “teleurstellende” ‘300: Rise of an Empire’ kostte $110 miljoen en verdiende $337 miljoen wereldwijd."
    }), "\n", createVNode(_components.p, {
      children: "Er zijn de laatste jaren verschillende populaire films aangepast voor tv of momenteel in ontwikkeling. ‘Fatal Attraction’, ‘Mr. and Mrs. Smith’ en ‘I Know What You Did Last Summer’ kregen de behandeling, en er zijn plannen voor shows over ‘Legally Blonde’ en ‘Time Bandits’ die binnenkort volgen."
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

const url = "src/content/nieuws/warner-bros-television-ontwikkelt-300-prequel-tv-serie.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/warner-bros-television-ontwikkelt-300-prequel-tv-serie.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/warner-bros-television-ontwikkelt-300-prequel-tv-serie.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
