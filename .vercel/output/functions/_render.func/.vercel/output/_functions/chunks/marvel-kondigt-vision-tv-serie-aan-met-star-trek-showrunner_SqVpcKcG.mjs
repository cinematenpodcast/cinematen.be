import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Marvel kondigt Vision TV-serie aan met Star Trek showrunner",
  "date": "2024-05-26T09:55:31.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/intro-1716396579.jpg",
  "trailer": "",
  "slug": "marvel-kondigt-vision-tv-serie-aan-met-star-trek-showrunner",
  "tags": ["tv", "comics"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "eindelijk-een-vervolg-op-wandavision",
    "text": "Eindelijk een vervolg op “WandaVision”"
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
      children: "Marvel Studios heeft aangekondigd dat er een nieuwe Disney+ serie over het personage Vision in de maak is, met Paul Bettany die terugkeert in de hoofdrol. De serie wordt verwacht in 2026 en zal worden geleid door Terry Matalas, bekend als showrunner van “Star Trek: Picard.”"
    }), "\n", createVNode(_components.p, {
      children: "Na zijn optreden in “WandaVision,” waar hij een emotionele reis doormaakte, zal Vision opnieuw verschijnen na de gebeurtenissen uit de serie. In “WandaVision” werd de originele Vision gedood door Thanos en later gereconstrueerd als een witte, amnesische versie."
    }), "\n", createVNode(_components.h2, {
      id: "eindelijk-een-vervolg-op-wandavision",
      children: "Eindelijk een vervolg op “WandaVision”"
    }), "\n", createVNode(_components.p, {
      children: "Het nieuwe project zal vermoedelijk voortbouwen op de gebeurtenissen uit “WandaVision,” waar Vision zijn identiteit en doel herontdekte. Met Matalas aan het roer, die eerder werkte aan successen zoals “Star Trek: Picard” en “12 Monkeys,” wordt er gehoopt dat de serie nieuwe inzichten zal bieden en openstaande verhaallijnen zal verhelderen."
    }), "\n", createVNode(_components.p, {
      children: "Het is ondertussen al drie jaar geleden dat we WandaVision voorgeschoteld kregen en fans wachten al sindsdien op een conclusie over de witte robot."
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

const url = "src/content/nieuws/marvel-kondigt-vision-tv-serie-aan-met-star-trek-showrunner.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/marvel-kondigt-vision-tv-serie-aan-met-star-trek-showrunner.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/marvel-kondigt-vision-tv-serie-aan-met-star-trek-showrunner.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
