import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Liam Neeson wordt de nieuwe Frank Drebin in Naked Gun reboot",
  "date": "2025-07-09T20:13:54.905Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1752081532.jpg",
  "trailer": "",
  "slug": "liam-neeson-wordt-de-nieuwe-frank-drebin-in-naked-gun-reboot",
  "tags": ["Film"]
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "De komedieklassieker “Naked Gun” krijgt een nieuwe versie. Deze reboot heeft\nLiam Neeson in de hoofdrol als Detective Frank Drebin, oorspronkelijk gespeeld\ndoor Leslie Nielsen in de film uit 1988. Die film was zelf een vervolg op de\nkorte tv-serie “Police Squad!“. Seth MacFarlane, bekend van “Family Guy”, staat\nin voor de productie."
    }), "\n", createVNode(_components.p, {
      children: "De originele films, gemaakt door het trio David Zucker, Jim Abrahams en Jerry\nZucker, zijn iconisch. Zij staan ook achter andere klassiekers zoals “Airplane!”\nen “Blazing Saddles”. Hun typische humor draait rond absurde situaties waarin\nDrebin voortdurend belandt."
    }), "\n", createVNode(_components.p, {
      children: "Liam Neeson is een opvallende keuze voor deze komische rol. Hij is vooral bekend\nvan serieuze rollen in “Schindler’s List” en de “Taken”-reeks. Wij zijn benieuwd\nhoe zijn stoere imago grappige situaties zal opleveren."
    }), "\n", createVNode(_components.p, {
      children: "Seth MacFarlane gaf aan dat ze eerst moeite hadden met de aanpak. Een eerste\nverhaal voelde teveel als een kopie van het origineel. Regisseur Akiva Shaffer\nkwam daarom met een frisse invalshoek. Het team wil moderne elementen\nintegreren, geïnspireerd door recente detectiveshows en actiefilms zoals “NCIS”\nen “Mission: Impossible”."
    }), "\n", createVNode(_components.p, {
      children: "Het script is geschreven door Shaffer, Dan Gregor en Doug Mand. De eerste\ntrailer toont al beloftevolle fragmenten, zoals Drebin verkleed als schoolmeisje"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "een knipoog naar films zoals “The Dark Knight”."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "De release staat gepland voor 1 augustus 2025. Wij kijken uit naar de combinatie\nvan klassieke humor en nieuwe grappen in deze terugkeer van Detective Frank\nDrebin."
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

const url = "src/content/nieuws/liam-neeson-wordt-de-nieuwe-frank-drebin-in-naked-gun-reboot.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/liam-neeson-wordt-de-nieuwe-frank-drebin-in-naked-gun-reboot.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/liam-neeson-wordt-de-nieuwe-frank-drebin-in-naked-gun-reboot.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
