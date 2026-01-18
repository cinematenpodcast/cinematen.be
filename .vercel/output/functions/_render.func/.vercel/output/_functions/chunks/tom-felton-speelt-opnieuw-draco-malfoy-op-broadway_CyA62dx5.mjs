import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Tom Felton speelt opnieuw Draco Malfoy op Broadway",
  "date": "2025-06-05T15:04:03.637Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1749135049.jpg",
  "trailer": "",
  "slug": "tom-felton-speelt-opnieuw-draco-malfoy-op-broadway",
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
      children: "Tom Felton, die we kennen als Draco Malfoy uit de Harry Potter-films, kruipt\nopnieuw in de huid van zijn iconische personage. Dit gebeurt niet in een nieuwe\nfilm of HBO Max-serie, maar in de theaterproductie “Harry Potter and the Cursed\nChild”. Vanaf 11 november 2025 staat hij negentien weken lang op Broadway in New\nYork als de volwassen versie van Draco."
    }), "\n", createVNode(_components.p, {
      children: "Felton speelde Draco in alle acht Harry Potter-films tussen 2001 en 2011. Hij\ngeeft aan dat dit een bijzonder moment voor hem is, vooral omdat hij Draco nu\nals volwassene mag vertolken. “Ik laat het karakter al 16 jaar los en nu ontmoet\nik hem als vader in een nieuw verhaal”, vertelt hij. Hij noemt het een droom om\nweer in Draco’s huid te stappen."
    }), "\n", createVNode(_components.p, {
      children: "Het toneelstuk speelt zich af 19 jaar na de gebeurtenissen in “Harry Potter and\nthe Deathly Hallows”. We zien hoe Harry en Ginny hun jongste zoon Albus afzetten\nop Platform 9¾ voor zijn eerste jaar op Zweinstein. Felton zag de Londense\nversie al in 2022 en was onder de indruk. Hij liet eerder ook weten open te\nstaan voor een terugkeer in eventuele nieuwe films."
    }), "\n", createVNode(_components.p, {
      children: "Voor ons is dit extra speciaal: Felton is de eerste acteur uit de originele\nfilms die meedoet aan “Cursed Child” op het podium. De show zelf is trouwens\naangepast na de COVID-19-sluitingen en draait nu als één doorlopende\nvoorstelling."
    }), "\n", createVNode(_components.p, {
      children: "Felton deelde ook zijn mening over J.K. Rowling. Hoewel hij weinig publiekelijk\nreageerde op haar controversiële uitspraken, benadrukt hij dat hij voor\nmensenrechten is en in dialoog gelooft. Tickets voor zijn optredens zijn al in\nde verkoop. Hij voelt een sterke band met Draco: “Ik heb een beetje\neigenaarschap over het karakter”, zegt hij. Wij zijn alvast benieuwd hoe hij\nDraco’s familieverhaal verder invult op het podium."
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

const url = "src/content/nieuws/tom-felton-speelt-opnieuw-draco-malfoy-op-broadway.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/tom-felton-speelt-opnieuw-draco-malfoy-op-broadway.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/tom-felton-speelt-opnieuw-draco-malfoy-op-broadway.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
