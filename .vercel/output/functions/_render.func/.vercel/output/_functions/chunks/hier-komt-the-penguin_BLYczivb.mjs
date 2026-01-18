import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Hier komt The Penguin",
  "date": "2024-06-24T12:50:38.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/The-Penguin-lounging.jpg",
  "trailer": "D2uSwItbBAg",
  "slug": "de-opkomst-van-the-penguin-een-diepere-duik-in-de-max-serie",
  "tags": ["tv", "trailer"]
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
      children: "De aankomende Max-serie “The Penguin” belooft een duistere en gewelddadige kijk te bieden op het Gotham City van de beruchte crimineel Oswald Cobblepot. Gespeeld door Colin Farrell, zal deze serie het verhaal vertellen van Oswald’s ambitie om de top van de criminele wereld te bereiken te midden van chaos en rivaliteit."
    }), "\n", createVNode(_components.p, {
      children: "Colin Farrell, die eerder indruk maakte als de Penguin in Matt Reeves’ “The Batman,” onthulde dat “The Penguin” een intense en gewelddadige sfeer zal bevatten. Hij beschreef de serie als zwaar en duister, waarbij de kijker wordt meegenomen op de reis van één man naar macht en sociale status. Met de dood van Carmine Falcone wordt een machtsvacuüm gecreëerd in Gotham, waardoor Oswald Cobblepot en andere personages strijden om de controle over de onderwereld."
    }), "\n", createVNode(_components.p, {
      children: "Cristin Milioti schittert als Sofia Falcone, dochter van de overleden Carmine Falcone, terwijl Michael Zegen de rol van Alberto, Carmine’s zoon, op zich neemt. Clancy Brown vervoegt de cast als Salvatore Maroni, een voormalige topgangster van Gotham. De serie, geleid door showrunner Lauren LeFranc, belooft een diepgaande kijk te bieden op de sinistere onderwereld van Gotham City."
    }), "\n", createVNode(_components.p, {
      children: "Voorafgaand aan de release van “The Batman” was er veel discussie over de mogelijke R-rating van de film. Hoewel de film uiteindelijk een PG-13 rating kreeg, lijkt “The Penguin” de honger van fans naar een grimmige en gewelddadige weergave van Gotham te stillen. Matt Reeves benadrukte dat zijn visie voor “The Batman” altijd bedoeld was als een duistere en grensverleggende film binnen de PG-13-classificatie."
    }), "\n", createVNode(_components.p, {
      children: "“The Penguin” zal later dit jaar op Max in première gaan, en het blijft de vraag of Farrell terug zal keren als Penguin in “The Batman Part II.” Ondertussen kijken fans reikhalzend uit naar de duistere reis van Oswald Cobblepot in de komende Max-serie."
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

const url = "src/content/nieuws/hier-komt-the-penguin.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/hier-komt-the-penguin.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/hier-komt-the-penguin.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
