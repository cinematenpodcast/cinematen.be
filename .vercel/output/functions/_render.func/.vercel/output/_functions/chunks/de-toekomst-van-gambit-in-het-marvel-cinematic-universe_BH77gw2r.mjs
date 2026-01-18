import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "De toekomst van Gambit in het Marvel Cinematic Universe",
  "date": "2024-08-29T13:39:31.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1724768735.jpg",
  "trailer": "",
  "slug": "de-toekomst-van-gambit-in-het-marvel-cinematic-universe",
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
      children: "Ryan Reynolds heeft onlangs een verwijderde scène gedeeld uit “Deadpool en Wolverine”, waarin Gambit (gespeeld door Channing Tatum) de aanval overleeft die werd gepleegd door Allioth in The Void. Deze onthulling werpt vragen op over de toekomst van dit X-Men personage binnen het Marvel Cinematic Universe."
    }), "\n", createVNode(_components.p, {
      children: "In The Void, een locatie aan het einde der tijden, belanden personages uit verschillende tijdlijnen verbannen. In deze bijna verlaten wereld heerst Cassandra Nova, terwijl Allioth alles verslindt wat daar terechtkomt."
    }), "\n", createVNode(_components.p, {
      children: "Het feit dat Gambit nog in leven is, brengt speculaties met zich mee over zijn mogelijke verschijning in toekomstige MCU-producties. Zal hij eindelijk zijn opwachting maken na jarenlang in de koelkast te hebben gelegen? Misschien krijgt Gambit wel zijn eigen solofilm, gezien het succes en de acceptatie van zijn rol in “Deadpool en Wolverine”."
    }), "\n", createVNode(_components.p, {
      children: "In de verwijderde scene, die trouwens te zien is op één van de monitors bij de TVA tijdens de post-credit scène van de film, zien we Gambit over het verwoeste slagveld wandelen tot hij zich omdraait naar de camera en we de reflectie van een Doctor Strange-achtige magisch portaal zien in zijn ogen alsook de typische gele gloed van de nu wel bekende Marvel magie."
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

const url = "src/content/nieuws/de-toekomst-van-gambit-in-het-marvel-cinematic-universe.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-toekomst-van-gambit-in-het-marvel-cinematic-universe.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-toekomst-van-gambit-in-het-marvel-cinematic-universe.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
