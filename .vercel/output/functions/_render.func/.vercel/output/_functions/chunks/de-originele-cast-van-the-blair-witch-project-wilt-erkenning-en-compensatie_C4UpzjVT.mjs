import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "De originele cast van The Blair Witch Project wilt erkenning en compensatie",
  "date": "2024-04-22T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1713717120.jpg",
  "trailer": "",
  "slug": "de-originele-cast-van-the-blair-witch-project-wilt-erkenning-en-compensatie",
  "tags": ["film"]
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "een-roep-om-gerechtigheid",
    "text": "Een Roep om Gerechtigheid"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h3: "h3",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "In 1999 schudde “The Blair Witch Project” de horrorwereld op met zijn baanbrekende benadering en het creëren van een nieuwe subgenre: found footage. Het was een film die met een budget van slechts $750.000 uitgroeide tot een van de meest winstgevende films aller tijden, wereldwijd $250 miljoen binnenhaalde en een blijvende impact had op de filmindustrie. Nu, bijna 25 jaar na de release, staan de oorspronkelijke castleden, bestaande uit Heather Donahue, Joshua Leonard en Michael Williams, op en eisen ze erkenning en compensatie voor hun bijdragen aan deze iconische film."
    }), "\n", createVNode(_components.p, {
      children: "Het trio acteurs heeft een open brief gepubliceerd waarin ze Lionsgate, de huidige eigenaar van de Blair Witch-franchise, oproepen om retroactieve en toekomstige betalingen te doen die gelijk zijn aan wat zij volgens Sag-Aftra zouden hebben ontvangen als ze destijds juiste vakbond- of juridische vertegenwoordiging hadden gehad. Ze pleiten ook voor constructieve betrokkenheid bij toekomstige films in de franchise en roepen op tot de oprichting van een fonds ter ondersteuning van aspirant-filmmakers."
    }), "\n", createVNode(_components.p, {
      children: "De acteurs voelen zich jarenlang genegeerd en ondergewaardeerd door Lionsgate, die nu werkt aan een herleving van de Blair Witch-franchise zonder voldoende overleg met de originele cast. Deze teleurstelling komt voort uit het feit dat ze destijds slechts $300.000 elk ontvingen voor een volledige afstand van hun eigendomsrechten over de originele film, terwijl de studio aanzienlijke winsten behaalde."
    }), "\n", createVNode(_components.h3, {
      id: "een-roep-om-gerechtigheid",
      children: "Een Roep om Gerechtigheid"
    }), "\n", createVNode(_components.p, {
      children: "De vraag van de oorspronkelijke castleden is niet alleen een zoektocht naar financiële compensatie, maar ook naar erkenning voor hun bijdrage aan het succes en de erfenis van The Blair Witch Project. Hun wens om aspirant-filmmakers te ondersteunen met een genereuze subsidie getuigt van hun bereidheid om anderen te helpen dezelfde kansen te krijgen die zij zelf hebben gehad, zij het met minder erkenning en beloning."
    }), "\n", createVNode(_components.p, {
      children: "Als pionier in het found-footage genre heeft The Blair Witch Project de weg gebaand voor talloze andere films en heeft het de manier veranderd waarop filmmakers storytelling benaderen. Het vermogen van de film om realiteit en fictie te vervagen, gecombineerd met zijn bescheiden productiebudget en immense commerciële succes, maken het een mijlpaal in de geschiedenis van de cinema."
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

const url = "src/content/nieuws/de-originele-cast-van-the-blair-witch-project-wilt-erkenning-en-compensatie.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-originele-cast-van-the-blair-witch-project-wilt-erkenning-en-compensatie.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-originele-cast-van-the-blair-witch-project-wilt-erkenning-en-compensatie.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
