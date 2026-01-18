import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "War of the Worlds wint het van de critici",
  "date": "2025-08-01T22:13:00.715Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1753987057.jpg",
  "trailer": "",
  "slug": "war-of-the-worlds-wint-het-van-de-critici",
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
      children: "Het klassieke verhaal van “War of the Worlds” blijft ons boeien, meer dan een\neeuw na H.G. Wells’ origineel uit 1898 over een buitenaardse aanval op aarde.\nHet inspireerde talloze bewerkingen, waaronder Orson Welles’ legendarische\nradio-uitzending uit 1938 die paniek veroorzaakte omdat luisteraars dachten dat\nhet echt gebeurde."
    }), "\n", createVNode(_components.p, {
      children: "In 2025 verscheen een nieuwe filmversie met Ice Cube als Will Radford, een\nanalist van de Homeland Security. Deze moderne interpretatie speelt zich af in\nons digitale tijdperk, met Zoom-gesprekken, Facebook-berichten en dronebeelden\ndie de invasie in beeld brengen via de “screenlife”-stijl. Die filmtechniek,\nbekend van “Searching” en “Unfriended”, werd tijdens de COVID-19-pandemie\ngrotendeels vanuit huis opgenomen."
    }), "\n", createVNode(_components.p, {
      children: "De film raakt actuele thema’s zoals privacy en datalekken, waarbij de\nbuitenaardse wezens geïnteresseerd zijn in onze data. Hoewel Ice Cube bekend\nstaat van successen als “Friday” en “Barbershop”, kreeg deze film gemengde tot\nnegatieve recensies. Critici noemden de uitwerking zwak en de stijl goedkoop."
    }), "\n", createVNode(_components.p, {
      children: "Toch blijkt de film op Prime Video een onverwacht succes. We zien hoge\nkijkcijfers en een plek in de internationale top 10 van veel landen. Dit bewijst\ndat we nog steeds nieuwsgierig zijn naar nieuwe versies van klassieke verhalen,\nzelfs als de critici er niet over te spreken zijn."
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

const url = "src/content/nieuws/war-of-the-worlds-wint-het-van-de-critici.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/war-of-the-worlds-wint-het-van-de-critici.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/war-of-the-worlds-wint-het-van-de-critici.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
