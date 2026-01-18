import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Er komt een nieuwe animated Avatar sequel, Avatar Seven Havens",
  "date": "2025-02-20T18:10:22.935Z",
  "soort": "tv",
  "thumbnail": "/images/article-images/l-intro-1740071487.jpg",
  "trailer": "",
  "slug": "er-komt-een-nieuwe-animated-avatar-sequel-avatar-seven-havens",
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
      children: "Nickelodeon en Avatar Studios hebben een nieuwe animatieserie aangekondigd,\ngetiteld “Avatar: Seven Havens”. Deze serie is een aanvulling op de populaire\nseries “Avatar: The Last Airbender” en “The Legend of Korra”. De originele\nmakers, Michael DiMartino en Bryan Konietzko, zijn weer betrokken bij dit nieuwe\nproject. De serie zal 26 afleveringen tellen, verdeeld over twee seizoenen met\nieder 13 afleveringen."
    }), "\n", createVNode(_components.p, {
      children: "“Avatar: Seven Havens” speelt zich af in een wereld die zwaar beschadigd is na\neen grote ramp. Het nieuwe hoofdpersonage is een jonge Earthbender die ontdekt\ndat zij de nieuwe Avatar is, na de dood van Korra. In deze gevaarlijke tijd\nwordt de Avatar gezien als de vernietiger van de mensheid, in plaats van als de\nredder. Zij en haar lang verloren tweelingzus moeten vechten tegen vijandige\nmensen en geesten. Hun doel is om hun mysterieuze oorsprong te ontdekken en de\nSeven Havens te redden voordat de laatste restanten van de beschaving\nineenstorten."
    }), "\n", createVNode(_components.p, {
      children: "De serie is de eerste nieuwe animatieserie in de franchise in meer dan 10 jaar\nen is niet gebaseerd op de eerdere verhalen van de serie. De tijd setting van de\nserie is volledig nieuw, omdat deze zich afspeelt na de gebeurtenissen van “The\nLegend of Korra”. We kunnen dus nieuwe avonturen en personages verwachten,\nterwijl ook de gekende wereld van de Avatar verder wordt verkend."
    }), "\n", createVNode(_components.p, {
      children: "Het is nog niet bekend wanneer “Avatar: Seven Havens” precies in première zal\ngaan. Ondertussen kunnen we nog uitkijken naar een andere sequel, “Aang: The\nLast Airbender”, die op 30 januari 2026 in de bioscopen verschijnt. Deze film\nricht zich op een volwassen Aang."
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

const url = "src/content/nieuws/er-komt-een-nieuwe-animated-avatar-sequel-avatar-seven-havens.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/er-komt-een-nieuwe-animated-avatar-sequel-avatar-seven-havens.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/er-komt-een-nieuwe-animated-avatar-sequel-avatar-seven-havens.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
