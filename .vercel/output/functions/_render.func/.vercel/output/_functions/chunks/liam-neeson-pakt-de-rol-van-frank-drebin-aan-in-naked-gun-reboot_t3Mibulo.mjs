import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Liam Neeson pakt de rol van Frank Drebin aan in Naked Gun reboot",
  "date": "2025-07-14T21:53:40.738Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1752528295.jpg",
  "trailer": "",
  "slug": "liam-neeson-pakt-de-rol-van-frank-drebin-aan-in-naked-gun-reboot",
  "tags": ["Film"]
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
      children: "De nieuwe reboot van The Naked Gun komt op 1 augustus 2025 in de bioscoop, met\nLiam Neeson in de hoofdrol. Regal Cinematics heeft een speciale popcorn bucket\nontworpen om de film onder de aandacht te brengen: een bever die een houtblok\nvasthoudt met de tekst “nice beaver”. Dit is een directe verwijzing naar de\niconische grap uit de originele film, waarin Frank Drebin (Leslie Nielsen) die\nzin dropt tegen een collega die een ladder beklimt."
    }), "\n", createVNode(_components.p, {
      children: "Liam Neeson speelt Lt. Frank Drebin Jr., terwijl Akiva Schaffer de regie doet.\nHet script komt van Dan Gregor en Doug Mand. Andere bekende namen in de cast\nzijn Pamela Anderson en Paul Walter Hauser. De Naked Gun-films staan bekend om\nhun milde, licht ondeugende humor, en we verwachten dat deze reboot die traditie\ndoorzet."
    }), "\n", createVNode(_components.p, {
      children: "De popcorn bucket past in een groeiende trend van opvallende\nbioscoopverzamelaars. Recent zagen we al creaties zoals de zandworm uit “Dune:\nPart Two” en de emmer van “Deadpool & Wolverine”. Dit soort ontwerpen maakt de\nbioscoopervaring net iets specialer en trekt verzamelaars aan. Andy Samberg\nheeft trouwens al lovende woorden gehad voor de humor in de nieuwe film, wat\nonze verwachtingen alleen maar verhoogt."
    }), "\n", createVNode(_components.p, {
      children: "Voor ons als liefhebbers van de originele films voelt deze reboot als een frisse\nstart. De combinatie van herkenbare humor, verrassende wendingen en een vleugje\nnostalgie belooft veel goeds. Wie weet blaast dit nieuw leven in het\nkomediegenre!"
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

const url = "src/content/nieuws/liam-neeson-pakt-de-rol-van-frank-drebin-aan-in-naked-gun-reboot.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/liam-neeson-pakt-de-rol-van-frank-drebin-aan-in-naked-gun-reboot.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/liam-neeson-pakt-de-rol-van-frank-drebin-aan-in-naked-gun-reboot.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
