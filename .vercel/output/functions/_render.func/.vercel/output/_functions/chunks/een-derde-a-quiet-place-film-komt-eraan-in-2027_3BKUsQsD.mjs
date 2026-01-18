import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Een derde A Quiet Place film komt eraan in 2027",
  "date": "2025-08-01T18:42:52.774Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1754072987.jpg",
  "trailer": "",
  "slug": "een-derde-a-quiet-place-film-komt-eraan-in-2027",
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
      children: "Paramount Pictures heeft goed nieuws voor ons als fans van de “A Quiet\nPlace”-films. John Krasinski, de schrijver en regisseur, bevestigde dat “A Quiet\nPlace Part III” momenteel in productie is. De film verschijnt op 9 juli 2027 in\nde bioscopen. Dit maakte Krasinski bekend via sociale media en Deadline\nbevestigde het nieuws."
    }), "\n", createVNode(_components.p, {
      children: "Krasinski keert terug als schrijver, regisseur en producent. Er zijn nog geen\ndetails over de cast of het verhaal vrijgegeven. Hij werkt samen met zijn\nproductiebedrijf Sunday Night Productions en Platinum Dunes. De franchise heeft\nwereldwijd meer dan 900 miljoen dollar opgebracht."
    }), "\n", createVNode(_components.p, {
      children: "De eerste film uit 2018 draaide om de Abbott-familie die in stilheid moet\noverleven in een wereld waar geluid dodelijke aliens aantrekt. De film kreeg een\nOscarnominatie voor geluidsmontage. Het vervolg uit 2021, ondanks vertraging\ndoor COVID-19, bracht 57 miljoen dollar op tijdens het openingsweekend en\nontving een BAFTA-nominatie. De prequel “A Quiet Place: Day One” (2023) speelde\nzich af in New York met nieuwe personages."
    }), "\n", createVNode(_components.p, {
      children: "Wij kijken uit naar Krasinski’s plannen voor het vervolg. Hoewel onduidelijk is\nwelke acteurs terugkeren, verwachten we de Abbott-familie opnieuw te zien. De\nreleasedatum van 9 juli 2027 staat vast en wij tellen af naar deze nieuwe\ntoevoeging aan de geliefde reeks."
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

const url = "src/content/nieuws/een-derde-a-quiet-place-film-komt-eraan-in-2027.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/een-derde-a-quiet-place-film-komt-eraan-in-2027.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/een-derde-a-quiet-place-film-komt-eraan-in-2027.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
