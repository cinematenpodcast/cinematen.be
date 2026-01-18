import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Avatar Fire and Ash wordt de langste film uit de reeks",
  "date": "2025-11-17T13:47:52.083Z",
  "soort": "film",
  "thumbnail": "https://login.wabliefteru.be/assets/41469fab-0864-4420-9c00-efd19819f5d7",
  "trailer": "",
  "slug": "avatar-fire-and-ash-wordt-de-langste-film-uit-de-reeks"
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
      children: "De derde Avatar-film, “Avatar: Fire and Ash”, komt eraan. De film wordt opnieuw\ngemaakt door James Cameron en duurt 3 uur en 15 minuten. Hiermee is het de\nlangste Avatar-film tot nu toe. De eerste film duurde 2 uur en 42 minuten en\n“The Way of Water” 3 uur en 12 minuten. Cameron staat bekend om zijn lange\nfilms, want ook “Titanic” duurde 3 uur en 15 minuten."
    }), "\n", createVNode(_components.p, {
      children: "Het verhaal gaat verder waar “The Way of Water” stopte. We volgen Jake Sully en\nzijn familie in hun strijd voor Pandora. De slechte Colonel Miles Quaritch is\nterug en werkt nu samen met een nieuwe groep Na’vi die bij vulkanen woont. Hun\nleider heet Varang."
    }), "\n", createVNode(_components.p, {
      children: "We kunnen grote gevechten verwachten op het land, in het water en in de lucht.\nDe Toruk, het grote vliegende dier uit de eerste film waar Jake op reed, keert\nterug. Cameron dacht eerst de Toruk niet in de film te stoppen, maar schreef\nlater alsnog nieuwe scenes voor dit wezen."
    }), "\n", createVNode(_components.p, {
      children: "Een belangrijk verhaallijn gaat over Spider, de zoon van Colonel Quaritch die\ndoor Jake is geadopteerd. In deze film kan Spider zonder zuurstofmasker op\nPandora leven, wat goed voor hem is maar misschien niet voor de Na’vi."
    }), "\n", createVNode(_components.p, {
      children: "Cameron zegt dat “The Way of Water” en “Fire and Ash” samen één compleet verhaal\nvormen. Volgens hem gaan de films over goed en kwaad in mensen, waarbij de Na’vi\nvoor het goede staan en de mensen voor hebzucht."
    }), "\n", createVNode(_components.p, {
      children: "Of er nog meer Avatar-films komen, hangt af van het succes van “Fire and Ash”.\nAls de film het goed doet, komen er mogelijk nog twee films. We zien veel\nvertrouwde gezichten terug, zoals Sam Worthington als Jake Sully, Zoe Saldaña\nals Neytiri, en Stephen Lang, Sigourney Weaver en Kate Winslet."
    }), "\n", createVNode(_components.p, {
      children: "“Avatar: Fire and Ash” komt op 19 december 2025 in de bioscoop. Het scenario is\ngeschreven door James Cameron, Rick Jaffa en Amanda Silver, met input van Josh\nFriedman en Shane Salerno. We kijken uit naar dit nieuwe avontuur op Pandora."
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

const url = "src/content/nieuws/avatar-fire-and-ash-wordt-de-langste-film-uit-de-reeks.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/avatar-fire-and-ash-wordt-de-langste-film-uit-de-reeks.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/avatar-fire-and-ash-wordt-de-langste-film-uit-de-reeks.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
