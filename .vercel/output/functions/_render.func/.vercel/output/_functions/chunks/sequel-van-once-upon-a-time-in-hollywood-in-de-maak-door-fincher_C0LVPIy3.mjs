import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Sequel van Once Upon a Time in Hollywood in de maak door Fincher",
  "date": "2025-04-03T14:59:43.075Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1743551216.jpg",
  "trailer": "",
  "slug": "sequel-van-once-upon-a-time-in-hollywood-in-de-maak-door-fincher",
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
      children: "Brad Pitt speelt binnenkort opnieuw de rol van Cliff Booth, een stuntman, in een\nnieuwe film. Deze film is een vervolg op “Once Upon a Time in Hollywood.” De\nberoemde regisseur David Fincher zal de film maken en Quentin Tarantino schrijft\nhet script. Het vervolg op de film die in 2019 uitkwam, wordt nu gemaakt voor\nNetflix."
    }), "\n", createVNode(_components.p, {
      children: "“Once Upon a Time in Hollywood” was een zeer populaire film die door Tarantino\nwerd geschreven en geregisseerd. Brad Pitt won een Oscar voor zijn rol in deze\nfilm. In de originele film speelde Pitt een stuntman die bevriend was met de\nacteur Rick Dalton, gespeeld door Leonardo DiCaprio. Het verhaal speelt zich af\nin de jaren ’60 en ’70 en gaat over de filmindustrie van die tijd."
    }), "\n", createVNode(_components.p, {
      children: "Tarantino had eerder plannen voor een andere film, genaamd “The Movie Critic.”\nDeze film zou zijn tiende en laatste film worden. Er wordt nu gespeculeerd dat\nhet script voor “The Movie Critic” verband houdt met Cliff Booth en dat dit\nverhaal nu dus verder gaat in het vervolg. Het is nog niet bekend of Leonardo\nDiCaprio ook in de nieuwe film zal spelen. Er zijn geruchten dat hij met Pitt\nzou samenwerken, maar dit is nog niet bevestigd."
    }), "\n", createVNode(_components.p, {
      children: "De nieuwe film zal waarschijnlijk veel van de thema’s en stijlen van het\noriginele “Once Upon a Time in Hollywood” behouden. Tarantino is bekend om zijn\nunieke manier van verhalen vertellen en het verkennen van personages. De opnames\nzouden deze zomer van start moeten gaan."
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

const url = "src/content/nieuws/sequel-van-once-upon-a-time-in-hollywood-in-de-maak-door-fincher.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/sequel-van-once-upon-a-time-in-hollywood-in-de-maak-door-fincher.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/sequel-van-once-upon-a-time-in-hollywood-in-de-maak-door-fincher.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
