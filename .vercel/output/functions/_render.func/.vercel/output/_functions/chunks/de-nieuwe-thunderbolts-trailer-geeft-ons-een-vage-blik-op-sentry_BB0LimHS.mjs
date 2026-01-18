import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "De nieuwe Thunderbolts trailer geeft ons een vage blik op Sentry",
  "date": "2025-02-10T14:21:44.222Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1739145574.jpg",
  "trailer": "hUUszE29jS0",
  "slug": "de-nieuwe-thunderbolts-trailer-geeft-ons-een-vage-blik-op-sentry",
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
      children: "Marvel Studios heeft onlangs een nieuwe trailer voor de film Thunderbolts*\nuitgebracht, die tijdens de Super Bowl werd getoond. Deze trailer biedt ons een\neerste blik op Sentry, de schurk in het verhaal. Sentry is vergelijkbaar met een\nevil Superman en in de trailer zien we hem chaos veroorzaken in New York City."
    }), "\n", createVNode(_components.p, {
      children: "In de Thunderbolts film zien we het avontuur van een team van antihelden. Deze\ngroep bevat interessante personages zoals Yelena Belova, gespeeld door Florence\nPugh, en Red Guardian, gespeeld door David Harbour. Ook zien we Ghost,\nTaskmaster, U.S. Agent en uiteraard de Winter Soldier, Bucky Barnes. We kennen\nze allemaal al uit verschillende Marvel verhalen, maar nu moeten ze samenwerken\nom een groot gevaar te bestrijden. Dit team van helden en schurken zal hun\npersoonlijke problemen moeten overwinnen om samen te kunnen werken."
    }), "\n", createVNode(_components.p, {
      children: "De film komt uit op 2 mei 2025 en is een onderdeel van de Marvel Cinematic\nUniverse. Dit is ook de afronding van het vijfde fase van Marvel, die een mix\nvan successen en enkele mislukte films heeft gehad."
    }), "\n", createVNode(_components.p, {
      children: "De trailer belooft veel actie. Ondanks dat de film veel vechtscènes bevat,\ndraait het verhaal ook om de relaties tussen de leden van het team. Hoe zullen\nze met elkaar omgaan? De eerste reacties op de trailer zijn positief, en de\nnieuwsgierigheid naar de film groeit. Fans van Marvel en nieuwkomers kunnen niet\nwachten om te zien wat dit team van antihelden in petto heeft. Het wordt\ninteressant om te ontdekken hoe dit avontuur zich ontvouwt in de bioscoop."
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

const url = "src/content/nieuws/de-nieuwe-thunderbolts-trailer-geeft-ons-een-vage-blik-op-sentry.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-nieuwe-thunderbolts-trailer-geeft-ons-een-vage-blik-op-sentry.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-nieuwe-thunderbolts-trailer-geeft-ons-een-vage-blik-op-sentry.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
