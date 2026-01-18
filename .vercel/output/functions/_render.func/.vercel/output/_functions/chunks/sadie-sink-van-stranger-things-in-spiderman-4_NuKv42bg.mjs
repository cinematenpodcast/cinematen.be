import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Sadie Sink van Stranger Things in Spider-Man 4",
  "date": "2025-03-12T18:40:09.013Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1741802907.jpg",
  "trailer": "",
  "slug": "sadie-sink-van-stranger-things-in-spiderman-4",
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
      children: "Sadie Sink, bekend van de populaire serie “Stranger Things”, is aangekondigd als\neen nieuwe castlid voor de vierde Spider-Man film met Tom Holland in de\nhoofdrol. De film zal beginnen met filmen later dit jaar en is gepland om op 31\njuli 2026 in de bioscoop te verschijnen."
    }), "\n", createVNode(_components.p, {
      children: "Er is veel speculatie over welke rol Sink in de film zal spelen. Wij denken dat\nze Mary Jane Watson kan spelen, Peter Parker’s beroemde vriendin met rode haren.\nDit zou echter ingewikkeld kunnen zijn, omdat Peter al een relatie heeft met\nMichelle “MJ” Jones, gespeeld door Zendaya. Aan het einde van de vorige film,\n“Spider-Man: No Way Home”, heeft MJ haar herinneringen aan Peter verloren en\nweet ze niet meer wie hij is. Dit geeft Marvel wel de gelegenheid om Mary Jane\ntoch op een nieuwe manier in te voeren."
    }), "\n", createVNode(_components.p, {
      children: "Daarnaast is er ook gesproken over de mogelijkheid dat Sink Jean Grey kan\nspelen, een personage uit de X-Men. Dit maakt de situatie nog interessanter, het\nis nog onduidelijk hoe haar rol in de Spider-Man films past, vooral met de\nkomende X-Men reboot in het Marvel Cinematic Universe."
    }), "\n", createVNode(_components.p, {
      children: "Kevin Feige, de baas van Marvel Studios, heeft eerder gesuggereerd dat we\nbinnenkort meer X-Men-personages in de Marvel-films kunnen zien. De nieuwe\nSpider-Man film zal dus zonder twijfel veel aandacht trekken, vooral met de\naanhoudende nieuwsgierigheid over wie Sink zal spelen."
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

const url = "src/content/nieuws/sadie-sink-van-stranger-things-in-spiderman-4.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/sadie-sink-van-stranger-things-in-spiderman-4.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/sadie-sink-van-stranger-things-in-spiderman-4.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
