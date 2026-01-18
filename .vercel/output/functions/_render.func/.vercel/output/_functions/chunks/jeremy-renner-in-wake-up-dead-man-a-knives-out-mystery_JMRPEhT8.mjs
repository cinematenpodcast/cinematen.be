import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Jeremy Renner in Wake Up Dead Man: A Knives Out Mystery",
  "date": "2024-05-31T13:58:22.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1717088225.jpg",
  "trailer": "",
  "slug": "renner-en-craig-verenigd-in-netflixs-knives-out-3",
  "tags": ["film", "casting"]
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
      children: "Het is bevestigd dat Jeremy Renner zich zal voegen bij de groeiende cast van Netflix’s sequel, “Wake Up Dead Man: A Knives Out Mystery,” onder regie van Rian Johnson. Na zijn terugkeer na een ernstig ongeluk, sluit Renner zich aan bij Daniel Craig in deze mysterieuze franchise. De film belooft wederom een bonte verzameling verdachten en wordt geproduceerd door schrijver-regisseur Johnson en Ram Bergman."
    }), "\n", createVNode(_components.p, {
      children: "Naast Renner en Craig zullen ook acteurs zoals Kerry Washington, Josh O’Connor, Cailee Spaeny, Glenn Close en Andrew Scott hun opwachting maken in dit nieuwste hoofdstuk van de Knives Out-serie. Het verhaal van de aankomende film blijft vooralsnog geheim, maar de productie staat gepland om binnenkort van start te gaan onder leiding van Johnson."
    }), "\n", createVNode(_components.p, {
      children: "Met Renner nu aan boord van dit spraakmakende project, markeert dit zijn eerste grote filmrol na een moeilijke herstelperiode na een ernstig ongeval. Zijn motivatie en vastberadenheid schitteren in zijn recente optredens, waaronder in de succesvolle Paramount+-serie “Mayor of Kingstown.” Dit aankomende derde deel van Knives Out belooft net zo intrigerend en spannend te worden als zijn voorgangers."
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

const url = "src/content/nieuws/jeremy-renner-in-wake-up-dead-man-a-knives-out-mystery.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jeremy-renner-in-wake-up-dead-man-a-knives-out-mystery.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jeremy-renner-in-wake-up-dead-man-a-knives-out-mystery.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
