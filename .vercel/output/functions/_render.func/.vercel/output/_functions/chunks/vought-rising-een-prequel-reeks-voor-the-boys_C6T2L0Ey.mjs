import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Vought Rising: een prequel reeks voor The Boys",
  "date": "2024-07-26T12:43:40.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/intro-1722019208.jpg",
  "trailer": "",
  "slug": "vought-rising-een-nieuwe-diepgaande-blik-op-de-wereld-van-the-boys",
  "tags": ["tv", "comics"]
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
      children: "Amazon Prime Video heeft aangekondigd op SDCC 2024 dat er een nieuwe spin-off van hun succesvolle superheldendrama “The Boys” zal komen, genaamd Vought Rising. Deze nieuwe serie zal zich in de jaren 50 afspelen en belooft kijkers mee te nemen naar de oorsprong van ‘s werelds superhelden. Met populaire acteurs Jensen Ackles en Aya Cash die hun rollen als Soldier Boy en Stormfront opnieuw zullen vertolken, krijgen fans de kans om meer te ontdekken over hoe het allemaal begon."
    }), "\n", createVNode(_components.p, {
      children: "Met de aankomende prequelserie komt een golf van speculatie over mogelijke verhaallijnen en potentiële verkenningen van enkele van de meest schokkende momenten uit de originele serie. Fans gissen naar wat hen te wachten staat, waaronder mogelijke episodes die draaien om Stormfront en Soldier Boy die het allereerste Herogasm-evenement opzetten. Er wordt zelfs geopperd dat het concept van Supes die met elkaar seks hebben een rol zou kunnen spelen in deze nieuwe reeks."
    }), "\n", createVNode(_components.p, {
      children: "De opwinding rondom Vought Rising groeit gestaag, met kijkers die zich afvragen of ze ook het ontstaan van Herogasm zullen zien en speculeren over wat de serie nog meer in petto heeft. Met veel van het plot nog achter gesloten deuren, zijn de verwachtingen hooggespannen voor wat naar verwachting weer een provocatief hoofdstuk in het The Boys-universum zal worden."
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

const url = "src/content/nieuws/vought-rising-een-prequel-reeks-voor-the-boys.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/vought-rising-een-prequel-reeks-voor-the-boys.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/vought-rising-een-prequel-reeks-voor-the-boys.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
