import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Heeft Netflix Squid Game gepikt?",
  "date": "2024-09-16T14:26:37.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/intro-1726336407.jpg",
  "trailer": "",
  "slug": "netflix-in-het-middelpunt-van-copyrightgeschillen",
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
      children: "De streaminggigant Netflix heeft recent te maken gehad met verschillende copyrightgeschillen. De zaak komt van filmmaker Soham Shah, bekend van de Hindi-film “Luck,” die Netflix voor de rechter sleept wegens beweerde diefstal van zijn concept door de enorm populaire serie “Squid Game.” Shah beweert dat de overeenkomsten tussen zijn film uit 2009 en “Squid Game” te significant zijn om toevallig te zijn, waarbij hij stelt dat elementen zoals het plot, karakters, thema’s en sfeer opvallend gelijk zijn."
    }), "\n", createVNode(_components.p, {
      children: "Een andere aanklacht richt zich op de nieuwe show “1899,” een Duitstalige sciencefiction-thriller die lof heeft ontvangen maar ook kritiek heeft aangetrokken. Een onafhankelijke cartoonist beschuldigt de show ervan een cruciaal concept uit haar werk te hebben gestolen, wat leidt tot controverse rondom de serie en het platform."
    }), "\n", createVNode(_components.p, {
      children: "In een recente ontwikkeling heeft auteur William Collier Netflix en regisseur Adam McKay aangeklaagd wegens vermeende schending van auteursrechten. Collier beweert dat McKay’s film “Don’t Look Up” uit 2021 het concept en plot heeft overgenomen van zijn zelf gepubliceerde roman uit 2012, genaamd “Stanley’s Comet.” De rechtszaak benadrukt opvallende overeenkomsten tussen beide werken, zoals het scenario rondom een wetenschapper die tevergeefs waarschuwt voor een naderende ramp terwijl politieke belangen de boventoon voeren."
    }), "\n", createVNode(_components.p, {
      children: "Deskundigen hebben de argumenten van Collier ondersteund door te wijzen op sterke gelijkenissen in de verhaallijnen, karakterisering en satirische toon tussen de twee werken. Met claims dat het script van Collier eerder bij het entertainmentbedrijf van McKay was ingediend, wordt de kwestie nog complexer."
    }), "\n", createVNode(_components.p, {
      children: "Het juridische landschap rondom auteursrechten en creatieve content blijft complex, vooral in de snel evoluerende wereld van de entertainmentindustrie. Terwijl Netflix en prominente filmmakers zoals Adam McKay blijven groeien in populariteit en invloed, zullen dergelijke geschillen naar verwachting vaker voorkomen. Het zal dus zeker niet de laatste keer zijn dat Netflix een rechtszaak aan hun been heeft."
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

const url = "src/content/nieuws/heeft-netflix-squid-game-gepikt.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/heeft-netflix-squid-game-gepikt.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/heeft-netflix-squid-game-gepikt.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
