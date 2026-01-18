import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Anaconda is terug, maar deze keer als komedie",
  "date": "2025-09-17T15:16:10.263Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1758120211.jpg",
  "trailer": "az8M5Mai0X4",
  "slug": "anaconda-is-terug-maar-deze-keer-als-komedie",
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
      children: "Er komt een nieuwe Anaconda film uit op 25 december 2025, met Jack Black en Paul\nRudd in de hoofdrollen. Zij spelen twee vrienden, Doug en Griff, die als kind al\nfan waren van de originele film uit 1997 met Jennifer Lopez, Ice Cube en Owen\nWilson."
    }), "\n", createVNode(_components.p, {
      children: "De nieuwe film pakt het helemaal anders aan. In plaats van een enge monsterfilm,\nis het deze keer een komedie geworden. Jack Black en Paul Rudd spelen mannen die\nhun eigen versie van de Anaconda-film willen maken en daarvoor naar het\nAmazonewoud trekken. Al snel komen ze oog in oog te staan met een echte\nreuzenslang, wat hun leuke project tot een gevaarlijk avontuur maakt."
    }), "\n", createVNode(_components.p, {
      children: "Wij kennen de originele film goed, vooral omdat die in Zuid-Afrika bijna een\ncultstatus bereikte door de frequente televisieherhalingen. De nieuwe film lijkt\ndaar op een humoristische manier op in te spelen, met grappen en een\nmeta-verhaal over filmmaken."
    }), "\n", createVNode(_components.p, {
      children: "Of deze komische aanval werkt, weten we pas als we de film gezien hebben. De\ncombinatie van Jack Blacks gekke humor en Paul Rudds charmante optreden ziet er\nin ieder geval veelbelovend uit. Voor wie de originele film kent, zullen er vast\nextra grapjes te herkennen zijn."
    }), "\n", createVNode(_components.p, {
      children: "Anaconda draait vanaf kerstdag in de bioscoop. Als je van komedies houdt of\nbenieuwd bent naar deze nieuwe interpretatie, is het zeker de moeite waard om\neen kijkje te nemen."
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

const url = "src/content/nieuws/anaconda-is-terug-maar-deze-keer-als-komedie.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/anaconda-is-terug-maar-deze-keer-als-komedie.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/anaconda-is-terug-maar-deze-keer-als-komedie.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
