import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Robbie Williams als CGI aap in zijn biopic",
  "date": "2024-10-03T09:49:06.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/better-man-is-the-greatest-showman-on-drugs-1727877939.jpg",
  "trailer": "84PGKvnTYHc",
  "slug": "robbie-williams-als-cgi-aap-in-zijn-biopic",
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
      children: "2025 belooft een buitengewoon jaar te worden met de release van “Better Man”, een muzikale biopic over de Britse popmuziek-superster Robbie Williams. Geregisseerd door Michael Gracey, bekend van “The Greatest Showman”, neemt de film het publiek mee op een reis door Williams’ carrière, van zijn tijd als jongste lid van de succesvolle boyband Take That tot zijn recordbrekende solocarrière."
    }), "\n", createVNode(_components.p, {
      children: "Wat “Better Man” onderscheidt van traditionele biopics is de keuze om Williams als een CGI-chimpansee weer te geven. Dit excentrieke element weerspiegelt perfect Williams’ eigen creatieve stijl en brengt een verrassende draai aan het genre. De teaser trailer onthult een fascinerende kijk op de artiest en belooft een bioscoopervaring die zowel bizar als betoverend is."
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

const url = "src/content/nieuws/robbie-williams-als-cgi-aap-in-zijn-biopic.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/robbie-williams-als-cgi-aap-in-zijn-biopic.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/robbie-williams-als-cgi-aap-in-zijn-biopic.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
