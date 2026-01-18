import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "In Your Dreams droomt stilletjes van een Oscar",
  "date": "2025-06-12T13:34:14.912Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1749677963.jpg",
  "trailer": "IG1p9fhNIks",
  "slug": "in-your-dreams-droomt-stilletjes-van-een-oscar",
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
      children: "Netflix komt op 14 november 2025 met de animatiefilm In Your Dreams. We volgen\nhierin de 12-jarige Stevie en haar 8-jarige broertje Elliot. Ze ontdekken een\nmagisch prentenboek dat hen naar een droomwereld transporteert, op zoek naar de\nmysterieuze Sandman. Hun missie? Hun gebroken gezin proberen te helen. Dit wordt\neen visueel en emotioneel avontuur."
    }), "\n", createVNode(_components.p, {
      children: "Alex Woo staat als regisseur aan het roer en werkte meer dan tien jaar aan dit\nproject. Met ervaring bij Pixar en LucasFilm verweeft hij persoonlijke\nervaringen in het verhaal. De stemmencast is indrukwekkend met Craig Robinson\nals Baloney Tony, Simu Liu, Cristin Milioti, Omid Djalili en anderen. Centraal\nstaat de bijzondere band tussen broer en zus, waardoor wij ons makkelijk kunnen\nverbinden met hun reis."
    }), "\n", createVNode(_components.p, {
      children: "Woo benadrukt de betekenis van dromen in onze levens. De film combineert unieke\nbeelden met diepgaande emoties, gericht op jonge kijkers die worden uitgedaagd\nna te denken over grote thema’s. Het toont levensups en -downs, maar moedigt ons\naan om hoop te vinden, zelfs in teleurstellende momenten."
    }), "\n", createVNode(_components.p, {
      children: "De Academy Awards lijken steeds meer open te staan voor animatiefilms buiten de\ngrote studio’s. Recente winnaars bewijzen dit: Netflix won met Guillermo del\nToro’s Pinocchio (2022), Studio Ghibli met The Boy and the Heron (2023) en de\nonafhankelijke film Flow versloeg in 2024 zelfs grote blockbusters. Netflix\nheeft nu al zeven nominaties voor Beste Animatiefilm op haar naam staan."
    }), "\n", createVNode(_components.p, {
      children: "Bij de eerste teaser-release op het Annecy International Animation Film Festival\nwas de opwinding groot. Gezien de groeiende erkenning voor diverse\nanimatiestudio’s, zou In Your Dreams zomaar de volgende Netflix-kandidaat voor\neen Oscarnominatie kunnen zijn. Wij zijn in elk geval benieuwd of deze droomreis\nindruk maakt op de Academy."
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

const url = "src/content/nieuws/in-your-dreams-droomt-stilletjes-van-een-oscar.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/in-your-dreams-droomt-stilletjes-van-een-oscar.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/in-your-dreams-droomt-stilletjes-van-een-oscar.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
