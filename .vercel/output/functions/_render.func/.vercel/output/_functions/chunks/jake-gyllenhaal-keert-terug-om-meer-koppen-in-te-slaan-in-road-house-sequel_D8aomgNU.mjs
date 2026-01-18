import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Jake Gyllenhaal keert terug om meer koppen in te slaan in Road House sequel",
  "date": "2024-05-15T14:26:55.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1715698769.jpg",
  "trailer": "",
  "slug": "road-house-sequel-jake-gyllenhaal-keert-terug-om-meer-koppen-te-laten-knallen",
  "tags": ["film"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "het-succes-van-de-eerste-film-en-de-terugkeer-van-gyllenhaal",
    "text": "Het succes van de eerste film en de terugkeer van Gyllenhaal"
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
      children: "Jake Gyllenhaal zal opnieuw in actie komen als Dalton in een vervolg op de recente remake van “Road House” die eerder dit jaar op Amazon Prime Video verscheen. Het vervolg, momenteel bekend als “Road House 2”, wordt geproduceerd door Amazon en MGM. Met bijna 80 miljoen kijkers tot nu toe heeft de remake veel aandacht getrokken sinds de release in maart."
    }), "\n", createVNode(_components.h2, {
      id: "het-succes-van-de-eerste-film-en-de-terugkeer-van-gyllenhaal",
      children: "Het succes van de eerste film en de terugkeer van Gyllenhaal"
    }), "\n", createVNode(_components.p, {
      children: "De film, geregisseerd door Doug Liman, vertelt het verhaal van Dalton, een voormalig UFC-vechter met een duister verleden. Nadat de film zijn debuut maakte op Prime Video, heeft deze wereldwijd al meer dan 80 miljoen kijkers bereikt. De populariteit van de film heeft geleid tot het groene licht voor een vervolg, waarbij Gyllenhaal opnieuw de hoofdrol zal spelen."
    }), "\n", createVNode(_components.p, {
      children: "Het is nog niet bekend of regisseur Doug Liman zal terugkeren voor het vervolg, evenals andere castleden uit de eerste film. De beslissing om de film via streamingdiensten uit te brengen, in plaats van een traditionele bioscooprelease, heeft echter spanningen veroorzaakt binnen het productieteam van de eerste Road House film."
    }), "\n", createVNode(_components.p, {
      children: "In deze nieuwe versie van “Road House” volgen we Dalton terwijl hij wordt ingehuurd als portier door Frankie, de eigenaar van een wegrestaurant in de Florida Keys. Zijn missie is om een gewelddadige bende, werkzaam voor een misdaadbaas genaamd Brandt, tegen te houden. Samen met castleden zoals Daniela Melchior, Billy Magnussen, Jessica Williams en Conor McGregor, belooft het vervolg actie, spanning en vooral veel kopstoot kniestoot gedaans te leveren aan de kijkers."
    }), "\n", createVNode(_components.p, {
      children: "Hoewel er nog geen releasedatum is aangekondigd voor het “Road House” vervolg, blijft de interesse hoog onder fans van de originele film en nieuwkomers die hebben genoten van de remake met Gyllenhaal in de hoofdrol."
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

const url = "src/content/nieuws/jake-gyllenhaal-keert-terug-om-meer-koppen-in-te-slaan-in-road-house-sequel.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jake-gyllenhaal-keert-terug-om-meer-koppen-in-te-slaan-in-road-house-sequel.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jake-gyllenhaal-keert-terug-om-meer-koppen-in-te-slaan-in-road-house-sequel.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
