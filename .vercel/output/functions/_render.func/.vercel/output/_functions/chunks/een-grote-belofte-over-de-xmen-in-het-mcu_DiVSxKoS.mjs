import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Een grote belofte over de X-Men in het MCU",
  "date": "2024-12-20T20:59:43.364Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1734657553.jpg",
  "trailer": "",
  "slug": "een-grote-belofte-over-de-xmen-in-het-mcu",
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
      children: "De afgelopen jaren is er veel gepraat over de X-Men en hun plek in het Marvel\nCinematic Universe (MCU). Sinds Disney het bedrijf 20th Century Fox heeft\novergenomen, zijn er veel vragen over hoe de X-Men in de MCU zullen passen.\nMarvel heeft al een paar hints gegeven, zoals het optreden van Kelsey Grammer\nals Beast in een scène na de aftiteling van “The Marvels” (wellicht het enige\ngoede aan die film). Ook zagen we Deadpool en Wolverine samen in de film die dit\njaar is uitgebracht. Dus beetje bij beetje vervoegen de Mutants het MCU."
    }), "\n", createVNode(_components.p, {
      children: "En nu is er nieuws dat Sadie Sink, bekend van “Stranger Things”, mogelijk Jean\nGrey kan spelen in de komende X-Men film. Kevin Feige, de baas van Marvel, heeft\nal in 2019 gezegd dat ze plannen hadden voor een X-Men reboot binnen het MCU.\nHet lijkt nu ook dat het script voor de nieuwe X-Men film wordt geschreven door\nMichael Lesslie, die ook heeft gewerkt aan “The Hunger Games”."
    }), "\n", createVNode(_components.p, {
      children: "In de tussentijd blijven we geduldig afwachten op meer nieuws over de cast en de\nverhalen die komen gaan. Hopelijk zijn de X-Men in goede handen bij Marvel, of\ntoch alleszins beter dan bij Fox."
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

const url = "src/content/nieuws/een-grote-belofte-over-de-xmen-in-het-mcu.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/een-grote-belofte-over-de-xmen-in-het-mcu.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/een-grote-belofte-over-de-xmen-in-het-mcu.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
