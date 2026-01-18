import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Marvel pauzeert alle ontwikkeling van nieuwe series",
  "date": "2025-02-20T19:57:01.561Z",
  "soort": "tv",
  "thumbnail": "/images/article-images/l-intro-1740078967.jpg",
  "trailer": "",
  "slug": "marvel-pauzeert-alle-ontwikkeling-van-nieuwe-series",
  "tags": ["tv"]
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
      children: "Marvel heeft besloten om de ontwikkeling van drie geplande tv-series op Disney+\nstil te leggen. Dit betreft de shows “Nova”, “Strange Academy” en “Terror, Inc.”\nen is een gevolg van veranderingen in de strategie van Marvel voor hun\nstreamingdiensten. Onder leiding van Kevin Feige, de baas van Marvel, zijn er nu\nhele andere plannen ontstaan voor hoe ze hun series ontwikkelen."
    }), "\n", createVNode(_components.p, {
      children: "“Nova” was een van de meest besproken projecten. Het zou gaan over Richard\nRider, een superheld met een sterk kosmisch vermogen, die de rest van de Nova\nCorps vertegenwoordigt. Dit personage is al lange tijd in de maak en was\noorspronkelijk bedoeld als film, maar veranderde in een serie. “Strange Academy”\nzou zich richten op een nieuwe school voor magische jongeren, opgericht door\nDoctor Strange. “Terror, Inc.” zou de verhalen volgen van een antiheld met de\nmogelijkheid om het lichaam van anderen over te nemen."
    }), "\n", createVNode(_components.p, {
      children: "Deze projecten waren nog niet officieel goedgekeurd en hun stillegging betekent\nook niet dat ze nooit weer kunnen opduiken. Brad Winderbaum, de\nhoofdverantwoordelijke voor Marvel’s streamingdiensten, heeft eerder gezegd dat\nze meer als een traditionele studio gaan werken. In plaats van snel veel\nafleveringen aan te kondigen, willen ze nu meer aandacht besteden aan elk\nafzonderlijk project."
    }), "\n", createVNode(_components.p, {
      children: "Dit is een verandering van de eerdere manier van werken, waarbij Marvel vaak\nheel veel nieuwe titels aankondigde en later pas de details uitwerkte. Hun focus\nlijkt nu te liggen op het verbeteren van de kwaliteit van hun content."
    }), "\n", createVNode(_components.p, {
      children: "In de toekomst kan Marvel terugkomen op deze projecten, maar op dit moment gaat\nde aandacht uit naar andere series, zoals “Daredevil: Born Again”, dat binnenkort uitkomt op Disney+.\nDe veranderingen bij Marvel laten zien dat zij nadenken\nover hun aanpak en terug zeker willen zijn van de kwaliteit van hetgeen ze\naanbieden aan hun kijkers."
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

const url = "src/content/nieuws/marvel-pauzeert-alle-ontwikkeling-van-nieuwe-series.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/marvel-pauzeert-alle-ontwikkeling-van-nieuwe-series.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/marvel-pauzeert-alle-ontwikkeling-van-nieuwe-series.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
