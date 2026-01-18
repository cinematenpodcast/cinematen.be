import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Tom Hanks van jong tot oud in \"Here\" van Robert Zemeckis",
  "date": "2024-06-27T12:39:39.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/come-stay-here-this-fall-1719409050.jpg",
  "trailer": "I_id-SkGU2k",
  "slug": "robert-zemeckis-een-cinematische-tijdreiziger",
  "tags": ["film", "trailer", "casting"]
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
      children: "In de wereld van film en cinema staat Back to the Future regisseur Robert Zemeckis bekend als een visionair die door de tijd reist met zijn verhalen en visuele meesterwerken. Zijn nieuwste project, “Here”, belooft opnieuw een unieke cinematografische ervaring te worden, waarbij de kijker wordt meegenomen op een reis door de geschiedenis van één specifieke locatie."
    }), "\n", createVNode(_components.p, {
      children: "“Here” belichaamt Zemeckis’ drang naar creatieve uitdagingen en experimenten in het filmmedium. Gebaseerd op Richard McGuire’s grafische roman, gaat de film over gebeurtenissen die zich afspelen op dezelfde plek gedurende verschillende tijdperken, van het verre verleden tot de toekomst. Wat deze film zo onderscheidend maakt, is het vaste camerastandpunt dat nooit wijkt, terwijl de wereld om de camera heen evolueert en transformeert. Een riskante onderneming, aldus Zemeckis zelf, die echter de moed heeft gevonden om deze unieke benadering te verkennen."
    }), "\n", createVNode(_components.p, {
      children: "Een opvallend aspect van “Here” is het gebruik van kunstmatige intelligentie om de cast, inclusief Tom Hanks en Robin Wright, digitaal te verjongen. Hoewel de officiële beelden van de gedigitaliseerde acteurs enigszins verontrustend zijn, roept dit nieuwe technologische hoogstandje zeker vragen op over de grenzen van visuele effecten in de filmindustrie."
    }), "\n", createVNode(_components.p, {
      children: "Met een cast bestaande uit toonaangevende acteurs zoals Paul Bettany, Kelly Reilly en Michelle Dockery, en een scenario geschreven door Zemeckis en Eric Roth, lijkt “Here” een beloftevolle toevoeging aan Zemeckis’ oeuvre. De film belooft een verhaal te vertellen dat draait om liefde, verlies, lachen en leven - allemaal op deze ene speciale plek: Here."
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

const url = "src/content/nieuws/tom-hanks-van-jong-tot-oud-in-here-van-robert-zemeckis.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/tom-hanks-van-jong-tot-oud-in-here-van-robert-zemeckis.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/tom-hanks-van-jong-tot-oud-in-here-van-robert-zemeckis.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
