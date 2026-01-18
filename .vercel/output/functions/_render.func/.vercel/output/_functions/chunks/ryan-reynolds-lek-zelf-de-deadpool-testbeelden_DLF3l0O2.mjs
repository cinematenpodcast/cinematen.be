import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Ryan Reynolds lek zelf de Deadpool testbeelden!",
  "date": "2025-09-08T16:36:18.368Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1757346815.jpg",
  "trailer": "",
  "slug": "ryan-reynolds-lek-zelf-de-deadpool-testbeelden",
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
      children: "Ryan Reynolds heeft eindelijk toegegeven dat hij degene was die in 2014 de\ntestbeelden van Deadpool online heeft gezet. Dit bekende hij onlangs op een\nfilmfestival in Toronto. De beelden waren een proef voor een potentiële film\nover de superheld Deadpool, met Reynolds in de hoofdrol en Tim Miller als\nregisseur. De filmstudio Fox wilde de film aanvankelijk niet maken, maar na het\nlekken van de beelden draaiden ze bij."
    }), "\n", createVNode(_components.p, {
      children: "Slechts vier mensen hadden toegang tot die testbeelden: Ryan Reynolds, regisseur\nTim Miller en de schrijvers Rhett Reese en Paul Wernick. Reynolds vertelde dat\nhij het lek pleegde omdat hij dacht dat wij de film wilden zien. Hij vond het\neerst eng omdat het eigenlijk niet mocht, maar het werkte. Fox besloot al één\ndag later om de film wél te maken."
    }), "\n", createVNode(_components.p, {
      children: "De testbeelden toonden een actiescène waarin Deadpool vecht op een snelweg,\ngekleed in zijn iconische rode pak en met zijn typische grappen. Wij vonden het\nmeteen geweldig en wilden meer. Deadpool is immers een personage dat weet dat\nhij in een film zit en soms rechtstreeks tegen ons praat, wat we erg cool\nvonden."
    }), "\n", createVNode(_components.p, {
      children: "Voordien wilde Fox geen Deadpool-film maken, mede door de eerdere versie van het\npersonage in X-Men Origins: Wolverine, die wij niet leuk vonden. Reynolds werkte\njaren aan een nieuwe aanpak en samen met Miller en de schrijvers maakten ze de\ntestbeelden om hun visie te tonen. Fox vond het nog steeds te riskant."
    }), "\n", createVNode(_components.p, {
      children: "Toen de beelden online verschenen, werd er massaal over gepraat. Fox kreeg\nzoveel vragen dat ze van gedachten veranderden. De eerste Deadpool-film kwam uit\nin 2016 en werd een enorm succes: hij verdiende bijna 800 miljoen dollar\nwereldwijd, terwijl het budget slechts 58 miljoen dollar bedroeg. Later volgden\nnog twee succesvolle vervolgen, Deadpool 2 en Deadpool & Wolverine."
    }), "\n", createVNode(_components.p, {
      children: "Reynolds is blij dat hij de beelden lekte, anders was de film er misschien nooit\ngekomen. Miller gaf eerder aan geschrokken te zijn, maar uiteindelijk was\niedereen tevreden. Ryan Reynolds kreeg zijn zin en wij kregen een reeks\nfantastische films."
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

const url = "src/content/nieuws/ryan-reynolds-lek-zelf-de-deadpool-testbeelden.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/ryan-reynolds-lek-zelf-de-deadpool-testbeelden.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/ryan-reynolds-lek-zelf-de-deadpool-testbeelden.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
