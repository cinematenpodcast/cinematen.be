import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "De trailer van Moana 2 is hier, geen dankje",
  "date": "2024-05-29T16:00:34.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/see-the-line-where-the-sky-meets-the-sea-it-calls-me-again-1707406981.jpg",
  "trailer": "IcM9aj5nUI8",
  "slug": "moana-2-een-nieuw-avontuur-aan-de-horizon",
  "tags": ["film", "trailer"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "nieuwe-reis-nieuwe-gevaren",
    "text": "Nieuwe reis, nieuwe gevaren"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "In november 2024 zal Disney Animation Studios het langverwachte vervolg op de geliefde film “Moana” uitbrengen, genaamd “Moana 2”. Dit nieuws komt als een aangename verrassing voor fans van de avontuurlijke Pacific Islander prinses en haar kompaan Maui."
    }), "\n", createVNode(_components.h2, {
      id: "nieuwe-reis-nieuwe-gevaren",
      children: "Nieuwe reis, nieuwe gevaren"
    }), "\n", createVNode(_components.p, {
      children: "“Moana 2” belooft een ongekend avontuur te worden voor de hoofdrolspeelster, Moana, die dit keer wordt opgeroepen door haar voorouders voor een gevaarlijke missie naar verre zeeën in Oceanië. De film, oorspronkelijk bedoeld als televisieserie, is nu omgevormd tot een grootschalige bioscoopervaring die volgens CEO Bob Iger “anders is dan alles wat ze ooit heeft meegemaakt”."
    }), "\n", createVNode(_components.p, {
      children: "De regie van “Moana 2” ligt in handen van Dave Derrick Jr., terwijl de muziek wordt verzorgd door Grammy-winnaars Abigail Barlow en Emily Bear, samen met Mark Mancina en Grammy-genomineerde Opetaia Foa’i. Hoewel er nog geen details zijn vrijgegeven over de stemacteurs, belooft de film een visueel en muzikaal spektakel te worden dat fans van de originele film zeker zal bekoren en we horen alvast wel de stem van Dwayne The Rock Johnson als Maui."
    }), "\n", createVNode(_components.p, {
      children: "Het eerste deel van de “Moana”-franchise was een wereldwijd succes, met een opbrengst van meer dan $680 miljoen aan de wereldwijde box office en meer dan 1 miljard uur gestreamd op Disney+. Deze cijfers getuigen van de immense populariteit van de film en vormen een solide basis voor het succes van het vervolg."
    }), "\n", createVNode(_components.p, {
      children: "Met de release van “Moana 2” in het vooruitzicht en een live-action versie van “Moana” waar Dwayne Johnson aan werkt, lijkt de toekomst van de franchise helder en veelbelovend. Fans kunnen niet wachten om zich opnieuw onder te dompelen in de magische wereld van Moana en Maui, klaar voor een nieuw hoofdstuk vol avontuur en wonderen."
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

const url = "src/content/nieuws/de-trailer-van-moana-2-is-hier-geen-dankje.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-trailer-van-moana-2-is-hier-geen-dankje.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-trailer-van-moana-2-is-hier-geen-dankje.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
