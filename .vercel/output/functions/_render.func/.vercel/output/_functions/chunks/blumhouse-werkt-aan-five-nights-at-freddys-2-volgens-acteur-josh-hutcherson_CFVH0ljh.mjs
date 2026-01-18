import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Blumhouse werkt aan Five Nights at Freddy's 2, volgens acteur Josh Hutcherson",
  "date": "2024-01-09T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1704730694.jpg",
  "trailer": "",
  "slug": "blumhouse-werkt-aan-five-nights-at-freddys-2-volgens-acteur-josh-hutcherson",
  "draft": false,
  "tags": ["film"]
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
      children: "Er komt een vervolg op de populaire horrorfilm “Five Nights at Freddy’s”, zo blijkt uit een recent interview met acteur Josh Hutcherson. Hoewel er nog geen officiële aankondiging is gedaan, deelde Hutcherson mee dat er momenteel wordt gewerkt aan het verhaal voor “Five Nights at Freddy’s 2” en dat de studio snel stappen wil zetten om het project van de grond te krijgen."
    }), "\n", createVNode(_components.p, {
      children: "Hutcherson sprak onlangs met Variety tijdens de promotie van zijn nieuwe film “The Beekeeper”. Hij bevestigde dat er concrete plannen zijn voor het vervolg en dat de studio zo snel mogelijk wil beginnen met de productie. De acteur liet weten dat hij erg dankbaar is om deel uit te maken van zo’n succesvolle film en dat de onverwachte populariteit zelfs hen heeft verrast."
    }), "\n", createVNode(_components.p, {
      children: "De film “Five Nights at Freddy’s”, gebaseerd op de gelijknamige populaire videogame-serie, werd uitgebracht vlak voor Halloween vorig jaar. Ondanks dat de film tijdens de release al beschikbaar was op Peacock, wisten bioscoopbezoekers wereldwijd bijna 300 miljoen dollar op te brengen, terwijl het budget slechts 20 miljoen dollar bedroeg. Een nieuwe horrorfranchise is geboren en fans kijken reikhalzend uit naar het volgende deel."
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

const url = "src/content/nieuws/blumhouse-werkt-aan-five-nights-at-freddys-2-volgens-acteur-josh-hutcherson.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/blumhouse-werkt-aan-five-nights-at-freddys-2-volgens-acteur-josh-hutcherson.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/blumhouse-werkt-aan-five-nights-at-freddys-2-volgens-acteur-josh-hutcherson.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
