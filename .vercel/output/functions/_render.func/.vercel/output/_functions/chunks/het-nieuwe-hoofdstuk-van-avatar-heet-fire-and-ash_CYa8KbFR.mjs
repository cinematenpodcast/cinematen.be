import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Het nieuwe hoofdstuk van Avatar heet Fire and Ash",
  "date": "2024-08-10T09:26:29.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/avatar-fire-and-ash-1723258151.webp",
  "trailer": "",
  "slug": "het-nieuwe-hoofdstuk-van-avatar-fire-and-ash",
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
      children: "De Avatar-franchise, onder leiding van regisseur James Cameron, maakt zich op voor een nieuw opwindend hoofdstuk met de aankomende film “Avatar: Fire and Ash.” Tijdens de D23-expo werd officieel onthuld dat deze derde Avatar-film deze titel zal dragen."
    }), "\n", createVNode(_components.p, {
      children: "In dit nieuwe deel belooft Cameron ons een verrassend verhaal dat nieuwe culturen, settings en wezens introduceert. Fans zullen meer van de buitenaardse planeet Pandora te zien krijgen dan ooit tevoren. De film, die gepland staat voor 19 december 2025, is niet alleen wat je verwacht, maar zeker wat je wilt, volgens Cameron zelf. Terwijl hij terugkeert achter de camera, wordt het script afgewerkt door Rick Jaffa en Amanda Silver. De cast bevat opnieuw bekende gezichten zoals Sam Worthington en Zoe Saldana."
    }), "\n", createVNode(_components.p, {
      children: "Het verlies van zijn langdurige creatieve partner Jon Landau heeft Cameron echter wel geraakt. Landau, die in juli overleed, was een groot voorstander van de kunst van cinema en geloofde dat film de ultieme menselijke kunstvorm is. Zijn nalatenschap zal voortleven als een producent en persoon met een grenzeloze generositeit van geest."
    }), "\n", createVNode(_components.p, {
      children: "Na de strijd in “Avatar: The Way of Water” kijken fans reikhalzend uit naar hoe Jake en Neytiri omgaan met de Ash People, een nieuwe clan die mogelijk meer gericht is op geweld en macht. Oona Chaplin, David Thewlis en Michelle Yeoh voegen zich bij de cast als intrigerende nieuwe personages. Het verhaal dat aanvankelijk als één film was gepland, bleek tijdens het schrijfproces te uitgebreid en is daarom opgesplitst in twee delen."
    }), "\n", createVNode(_components.p, {
      children: "Disney en 20th Century Studios hebben nog twee Avatar-films op de planning staan. “Avatar 4” staat gepland voor 21 december 2029, terwijl “Avatar 5” gepland staat voor 19 december 2031. Het publiek kan dus nog veel meer epische avonturen en visuele pracht verwachten in de komende jaren."
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

const url = "src/content/nieuws/het-nieuwe-hoofdstuk-van-avatar-heet-fire-and-ash.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/het-nieuwe-hoofdstuk-van-avatar-heet-fire-and-ash.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/het-nieuwe-hoofdstuk-van-avatar-heet-fire-and-ash.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
