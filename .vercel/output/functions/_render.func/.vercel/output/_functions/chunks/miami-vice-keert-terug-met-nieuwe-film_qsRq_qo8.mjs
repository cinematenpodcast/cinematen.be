import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Miami Vice keert terug met nieuwe film",
  "date": "2025-10-24T19:15:57.058Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1761331924.jpg",
  "trailer": "",
  "slug": "miami-vice-keert-terug-met-nieuwe-film",
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
      children: "Er komt een nieuwe Miami Vice film in de bioscoop op 6 augustus 2027. Dit is een\nreboot van de bekende politie serie uit de jaren 80 over twee politieagenten in\nMiami."
    }), "\n", createVNode(_components.p, {
      children: "Austin Butler en Michael B. Jordan spelen de hoofdrollen als Sonny Crockett en\nRicardo Tubbs. Deze rollen werden oorspronkelijk vertolkt door Don Johnson en\nPhilip Michael Thomas in de televisieserie. Joseph Kosinski, bekend van Top Gun:\nMaverick, regisseert de film voor Universal Pictures. Het script is geschreven\ndoor Eric Michael Singer en Dan Gilroy."
    }), "\n", createVNode(_components.p, {
      children: "De film speelt zich net als de originele serie af in de jaren 80 en wordt\nspeciaal opgenomen voor Imax. De opnames beginnen volgend jaar."
    }), "\n", createVNode(_components.p, {
      children: "Er was eerder een Miami Vice film in 2006 met Colin Farrell en Jamie Foxx onder\nregie van Michael Mann, maar die was geen groot succes. Austin Butler is bekend\nvan zijn Golden Globe-winnende rol als Elvis Presley en speelde in films zoals\nOnce Upon a Time in Hollywood en Dune: Part Two. Michael B. Jordan is vooral\nbekend van de Creed films en Black Panther."
    }), "\n", createVNode(_components.p, {
      children: "De originele serie liep vijf seizoenen en was beroemd om zijn unieke stijl - de\nkleding, auto’s en muziek waren heel herkenbaar. Joseph Kosinski werkt momenteel\nook aan een UFO-film voor Apple, maar het is niet duidelijk of dit invloed heeft\nop de Miami Vice productie."
    }), "\n", createVNode(_components.p, {
      children: "Universal Pictures heeft de plannen nog niet officieel bevestigd, maar volgens\nbetrouwbare bronnen gaat de film zeker door. De film wordt geproduceerd door\nDylan Clark en Joseph Kosinski en is gebaseerd op de personages van Anthony\nYerkovich, de bedenker van de originele serie."
    }), "\n", createVNode(_components.p, {
      children: "Wij kijken uit naar deze nieuwe versie en zijn benieuwd of de film dezelfde\nsfeer kan vangen als de iconische serie. Austin Butler en Michael B. Jordan zijn\nbeide populaire jonge acteurs, wat ons hoopvol stemt voor het resultaat."
    }), "\n", createVNode(_components.p, {
      children: "De filmindustrie volgt dit project met interesse, zeker omdat de vorige\nfilmverwerking niet zo succesvol was. Aangezien de film pas over twee jaar\nuitkomt, verwachten we de komende tijd meer nieuws, foto’s en trailers te zien."
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

const url = "src/content/nieuws/miami-vice-keert-terug-met-nieuwe-film.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/miami-vice-keert-terug-met-nieuwe-film.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/miami-vice-keert-terug-met-nieuwe-film.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
