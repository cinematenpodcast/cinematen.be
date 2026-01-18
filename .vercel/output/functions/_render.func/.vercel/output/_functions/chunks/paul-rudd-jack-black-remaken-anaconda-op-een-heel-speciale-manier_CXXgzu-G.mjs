import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Paul Rudd & Jack Black remaken Anaconda op een heel speciale manier",
  "date": "2025-01-30T08:36:21.335Z",
  "soort": "Film",
  "thumbnail": "https://assets.telegraphindia.com/telegraph/2024/Dec/1734760422_anaconda-reboot.jpg ",
  "trailer": "",
  "slug": "paul-rudd-jack-black-remaken-anaconda-op-een-heel-speciale-manier",
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
      children: "Er komt een nieuwe film van Anaconda, en deze keer is het geen gewone\nhorrorfilm. Paul Rudd en Jack Black gaan samen een herinterpretatie maken van\nhet monsterlijke verhaal dat zal uitkomen op 25 december 2025. In de originele\nfilm uit 1997 zagen we beroemde sterren zoals Jennifer Lopez en Ice Cube, die\nsamen op zoek waren naar een verloren stam in de jungle. Ze kwamen echter oog in\noog te staan met een enorme, gevaarlijke slang met veel gruwelijke slachtoffers\ntot gevolg."
    }), "\n", createVNode(_components.p, {
      children: "De nieuwe film neemt het verhaal op een andere manier aan en wordt een komedie.\nIn deze nieuwe Anaconda film volgen we een groep vrienden die door een\nmidlifecrisis momentje besluiten om hun favoriete film, Anaconda uit 1997, te\nhermaken en op avontuur te gaan in de jungle. Ze krijgen daar niet alleen te\nmaken met de enorme slang, maar ook met andere gevaren zoals natuurlijke rampen\nen gewelddadige criminelen."
    }), "\n", createVNode(_components.p, {
      children: "De cast bevat een aantal andere talentvolle acteurs zoals Selton Mello, Ione\nSkye, Thandiwe Newton en Steve Zahn. Black gaat de rol van de filmmaker spelen,\nterwijl Rudd een acteur in een politieshow speelt die zijn dromen najaagt. We\nkijken al uit naar al het plezier en chaos die deze groep vrienden te wachten\nstaat!"
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

const url = "src/content/nieuws/paul-rudd-jack-black-remaken-anaconda-op-een-heel-speciale-manier.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/paul-rudd-jack-black-remaken-anaconda-op-een-heel-speciale-manier.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/paul-rudd-jack-black-remaken-anaconda-op-een-heel-speciale-manier.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
