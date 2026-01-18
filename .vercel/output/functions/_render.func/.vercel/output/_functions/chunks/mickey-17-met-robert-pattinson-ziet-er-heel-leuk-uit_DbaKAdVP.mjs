import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Mickey 17 met Robert Pattinson ziet er heel leuk uit!",
  "date": "2024-09-18T16:15:23.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/mickey-17-looks-like-bonkers-fun-1726620438.jpg",
  "trailer": "osYpGSz_0i4",
  "slug": "mickey-17-bong-joon-hos-nieuwe-sciencefiction-avontuur-met-robert-pattinson",
  "tags": ["film", "trailer"]
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
      children: "Na zijn indrukwekkende overwinning bij de Oscars met “Parasite,” keert regisseur Bong Joon Ho terug naar het witte doek met een nieuwe sciencefictionfilm genaamd “Mickey 17.” Deze langverwachte film belooft een boeiende mix van donkere humor, spanning en verrassende wendingen."
    }), "\n", createVNode(_components.p, {
      children: "In “Mickey 17” volgen we het leven van Mickey, een zogenoemde “expendable” die keer op keer sterft in zijn pogingen om een bevroren planeet te koloniseren. Telkens wanneer Mickey sterft, wordt hij geregenereerd met zijn oude herinneringen in een nieuw lichaam. De film onthult dat er nu twee varianten van Mickey - 17 en 18 - zijn die proberen zich voor te doen als één persoon, aangezien meerdere expendables niet tegelijk mogen bestaan in deze wereld."
    }), "\n", createVNode(_components.p, {
      children: "Het verhaal belooft niet alleen actievolle scènes waarin Robert Pattinson’s personage herhaaldelijk sterft, maar ook een ontdekkingstocht naar identiteit, existentiële vraagstukken en complexe relaties tussen de verschillende versies van Mickey. Met ondersteunende rollen van Steven Yeun, Mark Ruffalo, Toni Collette en Naomie Ackie, belooft “Mickey 17” een ensemblecast van formaat."
    }), "\n", createVNode(_components.p, {
      children: "Bong Joon Ho staat bekend om zijn unieke kijk op het vertellen van verhalen en zijn vermogen om diepgaande thema’s te verkennen binnen het sci-fi genre. Na het succes van films als “Snowpiercer” en “Okja,” keert hij nu terug met “Mickey 17,” gebaseerd op Edward Ashton’s roman “Mickey7.” Deze film markeert niet alleen Bong’s terugkeer naar het internationale toneel en het sci-fi genre, maar belooft ook een frisse kijk op het concept van identiteit en menselijke ervaring."
    }), "\n", createVNode(_components.p, {
      children: "De teaser trailer suggereert een film die de kijker uitdaagt om na te denken over wat het betekent om mens te zijn, om te sterven en opnieuw geboren te worden, en om geconfronteerd te worden met je eigen sterfelijkheid."
    }), "\n", createVNode(_components.p, {
      children: "We gaan nog eventjes moeten wachten want “Mickey 17” komt pas 31 januari 2025 in de zalen."
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

const url = "src/content/nieuws/mickey-17-met-robert-pattinson-ziet-er-heel-leuk-uit.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/mickey-17-met-robert-pattinson-ziet-er-heel-leuk-uit.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/mickey-17-met-robert-pattinson-ziet-er-heel-leuk-uit.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
