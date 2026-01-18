import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Zo komt er wellicht toch een definitief einde aan Frasier",
  "date": "2025-01-18T17:51:11.988Z",
  "soort": "tv",
  "thumbnail": "/images/article-images/l-intro-1737214982.jpg",
  "trailer": "",
  "slug": "zo-komt-er-wellicht-toch-een-definitief-einde-aan-frasier",
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
      children: "De revival van de populaire sitcom “Frasier” is na twee seizoenen geannuleerd op\nParamount+. Dit nieuws komt als een verrassing voor veel kijkers. CBS Studios,\nde producent van de serie, is echter nog steeds vastbesloten om een nieuwe\nthuisbasis voor de show te vinden. Er is nog hoop dat we een derde seizoen\nkunnen zien als de serie wordt opgepikt door een andere zender of\nstreamingdienst."
    }), "\n", createVNode(_components.p, {
      children: "De kijkcijfers voor het tweede seizoen zijn niet bekendgemaakt, maar de eerste\naflevering trok 2,2 miljoen kijkers toen deze in oktober 2023 op CBS werd\nuitgezonden. Ondanks dat Paramount+ zei dat de show het “beste originele\nkomedie-debuut” had, lijken de cijfers van het tweede seizoen nu toch\nonvoldoende om het voort te zetten."
    }), "\n", createVNode(_components.p, {
      children: "CBS Studios hoopt dat platforms zoals Hulu en Prime Video interesse tonen,\naangezien ze de oorspronkelijke “Frasier” afleveringen al aanbieden. De\noriginele “Frasier”-serie liep van 1993 tot 2004, en de revival werd geleid door\nKelsey Grammer, die zijn rol als Frasier Crane opnieuw op zich nam. De cast van\nde revival bestaat uit nieuwe gezichten, maar bevat ook veel bekende acteurs uit\nde oorspronkelijke show."
    }), "\n", createVNode(_components.p, {
      children: "De toekomst van “Frasier” hangt nu af van de bereidheid van andere netwerken om\nde serie op te nemen. Totdat er meer nieuws is, blijven de eerste twee seizoenen\nbeschikbaar op Paramount+."
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

const url = "src/content/nieuws/zo-komt-er-wellicht-toch-een-definitief-einde-aan-frasier.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/zo-komt-er-wellicht-toch-een-definitief-einde-aan-frasier.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/zo-komt-er-wellicht-toch-een-definitief-einde-aan-frasier.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
