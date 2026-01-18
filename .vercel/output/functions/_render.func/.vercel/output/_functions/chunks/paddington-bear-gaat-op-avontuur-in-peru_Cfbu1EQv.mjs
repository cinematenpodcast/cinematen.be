import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Paddington Bear gaat op avontuur in Peru",
  "date": "2024-06-13T09:05:15.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/paddington-and-the-browns-set-off-on-a-jungle-cruise-1718196768.jpg",
  "trailer": "Ap8GfXXJCNM",
  "slug": "paddington-bear-van-peru-naar-avontuur",
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
      children: "Sinds zijn debuut in 1981 is de Indiana Jones-franchise een integraal onderdeel geworden van de Amerikaanse popcultuur. Referenties naar de filmreeks zijn overal te vinden, van televisieseries en films tot muziek en andere media sinds de release van de originele film."
    }), "\n", createVNode(_components.p, {
      children: "De Paddington-filmreeks, geïnspireerd door het geliefde literaire personage van Michael Bond, blijft het publiek verrassen. Na het succes van “Paddington 2” staat nu “Paddington in Peru” op het punt om het grote scherm te veroveren. De derde film in de live-action serie, geregisseerd door de ervaren muziekvideoregisseur Dougal Wilson, belooft een Indiana Jones-achtig avontuur voor Paddington en zijn metgezellen."
    }), "\n", createVNode(_components.p, {
      children: "Het verhaal neemt ons mee op reis met Paddington en de familie Brown naar zijn Zuid-Amerikaanse thuisland Peru. Wat begint als een bezoek aan zijn geliefde tante Lucy, verandert al snel in een spannend avontuur wanneer ze ontdekken dat tante Lucy zelf op een avontuurlijke tocht is vertrokken. Vastbesloten om haar te vinden, begeven Paddington en de Browns zich op een zoektocht die doet denken aan een betere versie van de film “Jungle Cruise”. Met actrice Olivia Colman als een vrolijke, muzikaal aangelegde non die hen helpt, belooft de reis vol verrassingen en opwinding te zitten."
    }), "\n", createVNode(_components.p, {
      children: "In “Paddington in Peru” wordt de geliefde beer opnieuw ingesproken door de onnavolgbare Ben Whishaw, terwijl Hugh Bonneville, Madeleine Harris, Samuel Joslin en Julie Walters terugkeren als leden van de Brown-familie en Mrs. Bird. Emily Mortimer neemt de rol van Mary Brown over van Sally Hawkins. Het Britse publiek zal het geluk hebben om Paddington’s nieuwste avontuur enkele maanden eerder te zien dan de rest van de wereld, met een geplande release later dit jaar in het Verenigd Koninkrijk, gevolgd door een release in de Verenigde Staten op 17 januari 2025."
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

const url = "src/content/nieuws/paddington-bear-gaat-op-avontuur-in-peru.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/paddington-bear-gaat-op-avontuur-in-peru.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/paddington-bear-gaat-op-avontuur-in-peru.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
