import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Nog een HALF JAAR wachten op Severance seizoen 2",
  "date": "2024-07-11T11:51:08.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/severance-season-2-drops-in-january-2025-1720617193.jpg",
  "trailer": "ULC9M8CCn28",
  "slug": "de-terugkeer-van-de-fascinerende-sci-fi-serie-severance",
  "tags": ["tv", "trailer"]
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
      children: "De laaaangverwachte terugkeer van het intrigerende science-fiction drama “Severance” is eindelijk aangekondigd met een teaser en een datum. Na een spannende eerste seizoen en een cliffhanger die fans in spanning achterliet, kunnen kijkers zich verheugen op het tweede seizoen van deze Apple TV+ serie."
    }), "\n", createVNode(_components.p, {
      children: "“Severance” draait om het verhaal van Mark Scout, gespeeld door Adam Scott, een manager bij Lumon Industries, een bedrijf waar werknemers geheugenprocedures ondergaan om hun werk- en persoonlijke herinneringen te scheiden. Het concept van ‘Innies’ (werkpersonages) en ‘Outties’ (persoonlijke personages) biedt een unieke kijk op de betekenis van identiteit en geheugen."
    }), "\n", createVNode(_components.p, {
      children: "Het eerste seizoen ontving talloze Emmy- en Golden Globe-nominaties en werd bekroond met twee Writers Guild Awards. De cast, bestaande uit getalenteerde acteurs zoals Patricia Arquette, Zach Cherry, en Britt Lower, bracht de complexe wereld van Lumon Industries tot leven met meeslepende vertolkingen."
    }), "\n", createVNode(_components.p, {
      children: "Met het aankomende tweede seizoen belooft “Severance” nieuwe diepten te verkennen en de kijkers mee te nemen op een reis vol mysterie en hopelijk ook wat onthullingen. De toevoeging van nieuwe castleden zoals Alia Shawkat en Gwendoline Christie voorspelt interessante wendingen in het verhaal."
    }), "\n", createVNode(_components.p, {
      children: "Het tweede seizoen zal de personages confronteren met de ernstige gevolgen van het manipuleren van de scheidslijn tussen werk en privéleven, wat hen dwingt dieper in de duistere wereld van Lumon Industries te duiken. De zeer korte teaser voor het nieuwe seizoen geeft ons al een proevertje om de hypevlam al wat aan te wakkeren."
    }), "\n", createVNode(_components.p, {
      children: "“Severance” seizoen 2 staat gepland voor release op vrijdag 17 januari 2025 en zal wekelijks nieuwe afleveringen uitbrengen op AppleTV+."
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

const url = "src/content/nieuws/nog-een-half-jaar-wachten-op-severance-seizoen-2.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nog-een-half-jaar-wachten-op-severance-seizoen-2.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nog-een-half-jaar-wachten-op-severance-seizoen-2.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
