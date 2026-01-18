import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Joker Folie à Deux wordt wellicht dé musical van dit najaar",
  "date": "2024-07-23T13:21:46.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/the-world-smiles-with-joker-folie-deux-this-fall-1721742076.jpg",
  "trailer": "_OKAwz2MsJs",
  "slug": "joker-folie-a-deux-wordt-wellicht-de-musical-van-dit-najaar",
  "tags": ["trailer", "film"]
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
      children: "Warner Bros. en DC’s aankomende film, “Joker: Folie à Deux,” belooft opnieuw het publiek te betoveren met de iconische karakters van Joker en Harley Quinn. Regisseur Todd Phillips onthult in de nieuwste trailer een wereld van chaos en mysterie rondom deze duistere figuren. Na het succes van de eerste “Joker” in 2019, waar Joaquin Phoenix schitterde en de film lof en prijzen oogstte, is het vervolg nauwlettend gevolgd door fans en critici."
    }), "\n", createVNode(_components.p, {
      children: "Met de Golden Lion winst op het Venice Film Festival in 2019 en 11 Oscar-nominaties voor het origineel, vestigt “Joker: Folie à Deux” hoge verwachtingen. Joaquin Phoenix zal opnieuw de rol van Arthur Fleck op zich nemen, vergezeld door de spraakmakende Lady Gaga als Harley Quinn. Het duo belooft sinister vermaak en een reis vol duisternis in deze veelbelovende sequel."
    }), "\n", createVNode(_components.p, {
      children: "In de nieuwe trailer zien we Arthur Fleck, alias Joker, geconfronteerd worden met roem en mysterie, terwijl Harley Quinn hem bijstaat in zijn turbulente reis naar het hart van waanzin. De setting lijkt voornamelijk in Arkham Asylum te zijn, waar Fleck worstelt met zijn identiteit en liefde vindt temidden van chaos en muziek."
    }), "\n", createVNode(_components.p, {
      children: "Het feit dat “Joker: Folie à Deux” zich losmaakt van andere DC-films en een unieke wereld creëert voor Joker en Harley Quinn om in te gedijen, belooft een frisse kijk op deze geliefde personages. Met Todd Phillips aan het roer als regisseur en co-auteur, naast mede-schrijver Scott Silver en producer Bradley Cooper, lijkt deze film klaar om opnieuw de grenzen van het genre te verkennen."
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

const url = "src/content/nieuws/joker-folie-a-deux-wordt-wellicht-de-musical-van-dit-najaar.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/joker-folie-a-deux-wordt-wellicht-de-musical-van-dit-najaar.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/joker-folie-a-deux-wordt-wellicht-de-musical-van-dit-najaar.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
