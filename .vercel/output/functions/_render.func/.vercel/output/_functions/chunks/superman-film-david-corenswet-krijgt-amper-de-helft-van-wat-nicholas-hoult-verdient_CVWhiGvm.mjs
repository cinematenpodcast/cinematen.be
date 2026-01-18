import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Superman film David Corenswet krijgt amper de helft van wat Nicholas Hoult verdient",
  "date": "2025-07-11T22:14:53.453Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1752265617.jpg",
  "trailer": "",
  "slug": "superman-film-david-corenswet-krijgt-amper-de-helft-van-wat-nicholas-hoult-verdient",
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
      children: "James Gunn regisseert de nieuwe Superman film, meteen de eerste in DC Studios’\ngloednieuwe reeks. We kijken naar de financiële kant en de cast van deze\nveelbesproken film."
    }), "\n", createVNode(_components.p, {
      children: "David Corenswet vertolkt Clark Kent/Superman voor $750.000. Zijn tegenspeelster\nRachel Brosnahan (Lois Lane) krijgt hetzelfde bedrag. Maar Nicholas Hoult steelt\nde show als bestbetaalde hoofdrolspeler: hij strijkt $2 miljoen op voor zijn Lex\nLuthor. Dit salarisverschil is logisch: Corenswet en Brosnahan zijn relatief\nnieuwe gezichten, terwijl Hoult al jaren meedraait in grote films."
    }), "\n", createVNode(_components.p, {
      children: "Met een budget van $225 miljoen investeert DC flink in deze reboot. De acteurs\nkunnen bonussen verdienen afhankelijk van de kassa-opbrengst. De première bracht\nal $21 miljoen binnen - een veelbelovend begin."
    }), "\n", createVNode(_components.p, {
      children: "De salarissen liggen lager dan bij vorige Superman-films zoals “Man of Steel”,\nwaar gevestigde sterren als Amy Adams en Michael Shannon meer verdienden. Dit\npatroon zien we vaker: ook Robert Downey Jr. en Chris Evans startten met\nbescheiden bedragen voor hun superheldendebuten in “Iron Man” en “Captain\nAmerica”."
    }), "\n", createVNode(_components.p, {
      children: "Interessant detail: Nicholas Hoult deed ooit auditie voor Superman, maar de rol\nging naar Corenswet. Hoult gaf later aan dat Corenswet perfect past bij de rol\ndoor zijn uitstraling en diepgang."
    }), "\n", createVNode(_components.p, {
      children: "De eerste reacties zijn positief, vooral voor Corenswets vertolking. De film\nlijkt een nieuwe richting in te slaan vergeleken met eerdere\nSuperman-verfilmingen. James Gunns kenmerkende mix van actie, humor en drama\nmaakt de film breed toegankelijk."
    }), "\n", createVNode(_components.p, {
      children: "Op 11 juli 2025 vliegt Superman de bioscoop in. Voor ons is dit een belangrijk\nmoment: we willen zien hoe deze nieuwe versie van onze geliefde superheld\npresteert."
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

const url = "src/content/nieuws/superman-film-david-corenswet-krijgt-amper-de-helft-van-wat-nicholas-hoult-verdient.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/superman-film-david-corenswet-krijgt-amper-de-helft-van-wat-nicholas-hoult-verdient.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/superman-film-david-corenswet-krijgt-amper-de-helft-van-wat-nicholas-hoult-verdient.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
