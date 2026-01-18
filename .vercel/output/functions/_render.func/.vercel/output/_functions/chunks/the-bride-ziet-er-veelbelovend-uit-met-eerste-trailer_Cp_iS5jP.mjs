import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "The Bride! ziet er veelbelovend uit met eerste trailer",
  "date": "2025-09-23T17:59:24.986Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1758648959.jpg",
  "trailer": "LJraZRHhFwQ",
  "slug": "the-bride-ziet-er-veelbelovend-uit-met-eerste-trailer",
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
      children: "De eerste trailer voor Maggie Gyllenhaals nieuwe horrorfilm “The Bride!” is\nuitgekomen. De film draait vanaf 6 maart 2026 in de bioscoop. Dit is de tweede\nfilm die Gyllenhaal regisseert, na “The Lost Daughter”."
    }), "\n", createVNode(_components.p, {
      children: "Christian Bale speelt het monster van Frankenstein en Jessie Buckley vertolkt de\nbruid. Het verhaal speelt zich af in het Chicago van de jaren 1930, waar het\neenzame monster een dokter, Dr. Euphronius, inschakelt om een partner voor zich\nte creëren. Samen wekken ze een vermoorde vrouw tot leven, maar de bruid blijkt\nanders dan verwacht. Ze worden verliefd en moeten samen op de vlucht voor de\npolitie."
    }), "\n", createVNode(_components.p, {
      children: "De film beschikt over een sterrencast met naast Bale en Buckley ook Penélope\nCruz, Annette Bening, Peter Sarsgaard, Julianne Hough en Jake Gyllenhaal. Warner\nBros. Pictures brengt de film uit, nadat deze oorspronkelijk voor Netflix was\nbedoeld."
    }), "\n", createVNode(_components.p, {
      children: "“The Bride!” is een nieuwe interpretatie van Mary Shelley’s klassieker, in de\nlijn van films als “Bride of Frankenstein” uit 1935. Uit de trailer blijkt een\nvisuele stijl die verwijst naar films uit de jaren 30, met donkere, sfeervolle\nbeelden en invloeden van “Bonnie and Clyde”. Het monster heeft een opvallend\nander uiterlijk en de bruid valt op met haar blonde haar."
    }), "\n", createVNode(_components.p, {
      children: "De release was eerst gepland voor oktober 2025, maar is verschoven naar maart\n2026. In Noord-Amerika start de film op 6 maart, in andere landen al op 4 maart.\nDe film is ook te zien in Imax-bioscopen."
    }), "\n", createVNode(_components.p, {
      children: "Maggie Gyllenhaal schreef het script zelf en werkt samen met producers Emma\nTillinger Koskoff, Talia Kleinhendler en Osnat Handelsman Keren. Cinematograaf\nLawrence Sher zorgde voor het visuele aspect."
    }), "\n", createVNode(_components.p, {
      children: "Met horrorfilms die populair zijn, past “The Bride!” perfect in het rijtje van\nrecente successen. Voor ons als liefhebbers van het genre en het\nFrankenstein-verhaal ziet dit eruit als een must-see. We kijken uit naar maart\n2026."
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

const url = "src/content/nieuws/the-bride-ziet-er-veelbelovend-uit-met-eerste-trailer.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-bride-ziet-er-veelbelovend-uit-met-eerste-trailer.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-bride-ziet-er-veelbelovend-uit-met-eerste-trailer.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
