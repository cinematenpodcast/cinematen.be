import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Strange New Worlds stopt na seizoen 5 Wat nu voor Star Trek?",
  "date": "2025-06-12T20:19:43.262Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1749743982.jpg",
  "trailer": "",
  "slug": "strange-new-worlds-stopt-na-seizoen-5-wat-nu-voor-star-trek",
  "tags": ["TV"]
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
      children: "Star Trek: Discovery bracht ons in 2017 terug naar de USS Discovery, tien jaar\nvóór de originele serie, met Commander Michael Burnham en haar bemanning. Deze\nshow wilde een nieuwe generatie aanspreken met moderne verteltechnieken en\nfrisse personages. In seizoen 2 werd Captain Pike, gespeeld door Anson Mount,\nzo’n hit dat het leidde tot Star Trek: Strange New Worlds. Die serie volgt Pike\nen zijn bemanning in de jaren vóór Captain Kirk en lanceerde in 2022."
    }), "\n", createVNode(_components.p, {
      children: "Strange New Worlds voelt klassiek aan maar ziet er modern uit. Het grootste\nverschil met Discovery? Hier krijgt elke aflevering een eigen verhaal, ideaal om\nin te stappen zonder alles te moeten volgen. Wij vinden het jammer dat Paramount\nnu aankondigt dat de show stopt na seizoen 5, vooral omdat de reacties zo\npositief waren. Makers Akiva Goldsman, Henry Alonso Myers en Alex Kurtzman zijn\nwel dankbaar dat ze vijf seizoenen mochten maken."
    }), "\n", createVNode(_components.p, {
      children: "Deze laatste seizoenen komen er midden in kostenbesparingen bij de studio.\nSeizoen 5 wordt korter: slechts zes afleveringen in plaats van tien. Dat kan\ngevolgen hebben voor de verhaallijnen en personages. Ondertussen houdt de serie\nwel de kernwaarden van Star Trek hoog en verwijst duidelijk naar eerdere series.\nAls prequel kan het ons zelfs nieuwsgierig maken naar The Original Series."
    }), "\n", createVNode(_components.p, {
      children: "Gelukkig stopt het Star Trek-universum niet hier. Starfleet Academy is al in\nproductie en komt waarschijnlijk in 2026 uit. Wij kijken uit naar de laatste\nafleveringen van Strange New Worlds en deze nieuwe serie. De reis van Captain\nPike en zijn team blijft een waardevolle toevoeging, en we zijn benieuwd hoe de\nfranchise verder groeit."
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

const url = "src/content/nieuws/strange-new-worlds-stopt-na-seizoen-5-wat-nu-voor-star-trek.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/strange-new-worlds-stopt-na-seizoen-5-wat-nu-voor-star-trek.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/strange-new-worlds-stopt-na-seizoen-5-wat-nu-voor-star-trek.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
