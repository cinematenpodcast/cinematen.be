import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Superman krijgt censuur in India Kusscènes verdwijnen",
  "date": "2025-07-15T16:34:05.310Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1752595262.jpg",
  "trailer": "",
  "slug": "superman-krijgt-censuur-in-india-kusscnes-verdwijnen",
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
      children: "James Gunn’s nieuwe Superman-film is eindelijk in de bioscopen te zien, met\nDavid Corenswet als Clark Kent en Rachel Brosnahan als Lois Lane. Deze herstart\nvan hun iconische romance markeert de officiële kick-off van het DC Universe.\nWereldwijd scoort de film goed, maar in India is er ophef over censuur."
    }), "\n", createVNode(_components.p, {
      children: "De Central Board of Film Certification (CBFC) heeft twee zoenscènes verwijderd,\nwaaronder een mid-air kus van 33 seconden. Zij vinden deze “te sensueel” en\nwillen zo een U/A-rating (13+) behouden. Wij merkten tijdens de première dat\ndelen van deze scènes behouden bleven terwijl andere werden geschrapt, wat tot\nverwarring leidt over de logica achter deze beslissingen."
    }), "\n", createVNode(_components.p, {
      children: "Naast de kusscènes sneuvelden ook enkele ongepaste woorden, waardoor de\nspeelduur nu op 130 minuten en 44 seconden staat. Dit soort aanpassingen is niet\nuniek. Andere Hollywoodfilms kregen eerder soortgelijke behandelingen, zoals\naangepaste emoji’s waar een middelvinger in een vuist veranderde."
    }), "\n", createVNode(_components.p, {
      children: "De censuurregels verschillen sterk per land, en wij vragen ons af waarom een\nromantische kus als problematischer wordt gezien dan gewelddadige content.\nOndanks deze ingrepen blijft Superman wereldwijd succesvol. Warner Bros. lijkt\ntevreden met de prestaties, wat aantoont hoe belangrijk aanpassingen voor lokale\nmarkten zijn bij grote budgetfilms."
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

const url = "src/content/nieuws/superman-krijgt-censuur-in-india-kusscnes-verdwijnen.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/superman-krijgt-censuur-in-india-kusscnes-verdwijnen.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/superman-krijgt-censuur-in-india-kusscnes-verdwijnen.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
