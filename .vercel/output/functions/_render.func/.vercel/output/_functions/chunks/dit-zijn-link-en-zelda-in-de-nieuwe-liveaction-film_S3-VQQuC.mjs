import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Dit zijn Link en Zelda in de nieuwe live-action film!",
  "date": "2025-07-16T13:24:32.366Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1752671246.jpg",
  "trailer": "",
  "slug": "dit-zijn-link-en-zelda-in-de-nieuwe-liveaction-film",
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
      children: "The Legend of Zelda, een van de populairste videospellen ooit, krijgt eindelijk\nzijn eigen live-action film. Die komt op 7 mei 2027 in de bioscoop. Nintendo\nwerkt hiervoor samen met Sony Pictures en heeft Wes Ball aangesteld als\nregisseur. Hij maakte eerder The Maze Runner en Kingdom of the Planet of the\nApes."
    }), "\n", createVNode(_components.p, {
      children: "Shigeru Miyamoto, de bedenker van Zelda, onthulde via sociale media dat Bo\nBragason Princess Zelda gaat spelen en Benjamin Evan Ainsworth de rol van Link\nkrijgt. Dat was best verrassend, want wij speculeerden massaal dat Hunter\nSchafer (bekend van Euphoria) Zelda zou worden. Zelda is slim, dapper en helpt\nLink altijd in zijn avonturen. Link is de held die het koninkrijk Hyrule moet\nredden en de prinses moet bevrijden. Belangrijk detail: Link en Zelda worden dus\ndoor twee verschillende acteurs gespeeld."
    }), "\n", createVNode(_components.p, {
      children: "Beide acteurs zijn relatief nieuw. Bo Bragason speelde eerder kleine rollen in\nseries zoals The Jetty en Renegade Nell. Benjamin Evan Ainsworth is wat bekender\ndoor The Haunting of Bly Manor en als stem van Pinocchio in de live-action film.\nDe keuze voor deze jonge acteurs zou goed kunnen zijn voor eventuele\nvervolgfilms."
    }), "\n", createVNode(_components.p, {
      children: "De verwachtingen zijn hoog, zeker na het succes van game-verfilmingen zoals The\nSuper Mario Bros. Movie en Sonic the Hedgehog. Wel blijft het nog onduidelijk\nwelke verhaallijnen of elementen precies uit de games zullen verschijnen. De\nreleasedatum is trouwens al meermaals verschoven, wat in de filmindustrie vaak\nvoorkomt bij productieproblemen. Wij kijken er enorm naar uit om onze favoriete\npersonages op het grote scherm te zien!"
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

const url = "src/content/nieuws/dit-zijn-link-en-zelda-in-de-nieuwe-liveaction-film.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/dit-zijn-link-en-zelda-in-de-nieuwe-liveaction-film.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/dit-zijn-link-en-zelda-in-de-nieuwe-liveaction-film.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
