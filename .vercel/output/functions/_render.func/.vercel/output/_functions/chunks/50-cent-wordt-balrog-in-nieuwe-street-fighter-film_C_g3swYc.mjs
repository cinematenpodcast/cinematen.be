import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "50 Cent wordt Balrog in nieuwe Street Fighter film",
  "date": "2025-09-16T20:26:38.350Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1758053330.jpg",
  "trailer": "",
  "slug": "50-cent-wordt-balrog-in-nieuwe-street-fighter-film",
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
      children: "Er komt een nieuwe live-action film van het bekende vechtspel Street Fighter. De\nopnames zijn momenteel bezig in Australië onder regie van de Japanse regisseur\nKitao Sakurai. De release is gepland voor 16 oktober 2026."
    }), "\n", createVNode(_components.p, {
      children: "Rapper 50 Cent heeft de rol van Balrog gekregen, de bokser uit het spel. Hij\ndeelt op sociale media hoe hij zich voorbereidt op de rol met een nieuw kapsel\nen intensieve training. Hij post filmpjes met grappige onderschriften waarin hij\nbenadrukt hoe hard hij werkt voor de film."
    }), "\n", createVNode(_components.p, {
      children: "Dit is niet de eerste Street Fighter verfilming. Eerdere films vielen niet in de\nsmaak, maar ze proberen het opnieuw met een sterke cast. Jason Momoa speelt\nBlanka, Noah Centineo is Ken Masters en Andrew Koji vertolkt Ryu. Callina Liang\nneemt de rol van Chun-Li voor haar rekening. Ook worstelaars Roman Reigns\n(Akuma) en Cody Rhodes (Guile) zijn van de partij, samen met David Dastmalchian\nals M. Bison en Orville Peck als Vega."
    }), "\n", createVNode(_components.p, {
      children: "50 Cent hoopt ook in eventuele vervolgfilms te verschijnen en verwijst naar\nStreet Fighter II Balrog. Eerdere acteurs die Balrog speelden waren Grand L.\nBush en Michael Clarke Duncan."
    }), "\n", createVNode(_components.p, {
      children: "De film probeert trouw te blijven aan het originele spel, zowel in uiterlijk als\nuitstraling van de personages. De acteurs trainen hard om de iconische vechters\ngeloofwaardig neer te zetten."
    }), "\n", createVNode(_components.p, {
      children: "Street Fighter is een populair spel, net als andere games die succesvol verfilmd\nwerden zoals The Last of Us, Fallout, The Super Mario Bros. Movie en Sonic.\nOorspronkelijk zouden Danny en Michael Philippou regisseren, maar zij stapten\nover naar een ander project. Wij kijken uit naar het resultaat van deze nieuwe\npoging."
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

const url = "src/content/nieuws/50-cent-wordt-balrog-in-nieuwe-street-fighter-film.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/50-cent-wordt-balrog-in-nieuwe-street-fighter-film.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/50-cent-wordt-balrog-in-nieuwe-street-fighter-film.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
