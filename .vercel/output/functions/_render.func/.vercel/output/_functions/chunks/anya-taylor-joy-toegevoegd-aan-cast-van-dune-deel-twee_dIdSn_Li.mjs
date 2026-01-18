import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Anya Taylor-Joy toegevoegd aan cast van Dune: Deel Twee",
  "date": "2024-02-16T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1708027157.jpg",
  "trailer": "",
  "slug": "anya-taylor-joy-toegevoegd-aan-cast-van-dune-deel-twee",
  "draft": false,
  "tags": ["film", "casting"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "het-verhaal-van-dune-deel-twee",
    "text": "Het verhaal van “Dune: Deel Twee”"
  }, {
    "depth": 2,
    "slug": "succesvolle-carrière-van-anya-taylor-joy",
    "text": "Succesvolle carrière van Anya Taylor-Joy"
  }, {
    "depth": 2,
    "slug": "positieve-reacties-op-dune-deel-twee",
    "text": "Positieve reacties op “Dune: Deel Twee”"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Taylor-Joy voegt zich bij een indrukwekkende lijst van nieuwkomers, waaronder Austin Butler, Florence Pugh, Léa Seydoux, Souheila Yacoub, Christopher Walken en Tim Blake Nelson. De hoofdrollen worden opnieuw gespeeld door Timothée Chalamet en Zendaya. Daarnaast keren ook Rebecca Ferguson, Josh Brolin, Dave Bautista, Javier Bardem, Stellan Skarsgård en Charlotte Rampling terug."
    }), "\n", createVNode(_components.p, {
      children: "Er is nog geen informatie vrijgegeven over de rol die Taylor-Joy zal spelen in “Dune: Deel Twee”. De film is het vervolg op de succesvolle verfilming van het epische sciencefictionboek van Frank Herbert, geregisseerd door Denis Villeneuve en geproduceerd door Warner Bros. en Legendary Entertainment. Het eerste deel, uitgebracht in het najaar van 2021, won zes Oscars en bracht wereldwijd meer dan $402 miljoen op."
    }), "\n", createVNode(_components.h2, {
      id: "het-verhaal-van-dune-deel-twee",
      children: "Het verhaal van “Dune: Deel Twee”"
    }), "\n", createVNode(_components.p, {
      children: "“Dune: Deel Twee” pakt het verhaal weer op met Paul Atreides (Chalamet) die zich verenigt met Chani (Zendaya) en de Fremen terwijl hij wraak zoekt op de samenzweerders die zijn familie hebben vernietigd. Villeneuve heeft het script geschreven en produceert de film samen met Mary Parent, Cale Boyter, Tanya Lapointe en Patrick McCormick. Onder de uitvoerende producenten bevinden zich onder andere Josh Grode, Herbert W. Gains, Brian Herbert, Byron Merritt, Kim Herbert, Thomas Tull, Jon Spaihts, Richard P. Rubinstein en John Harrison, terwijl Kevin J. Anderson fungeert als creatief consultant. De oorspronkelijke releasedatum van de film was gepland op 3 november, maar werd verschoven naar 1 maart vanwege logistieke redenen in verband met de PR van de cast."
    }), "\n", createVNode(_components.h2, {
      id: "succesvolle-carrière-van-anya-taylor-joy",
      children: "Succesvolle carrière van Anya Taylor-Joy"
    }), "\n", createVNode(_components.p, {
      children: "Anya Taylor-Joy is vooral bekend van haar rollen in Netflix’s “The Queen’s Gambit”, Robert Eggers’ “The Witch” en Searchlight’s “The Menu”. Onlangs vertolkte ze de rol van Princess Peach in “The Super Mario Bros. Movie”, die een van de grote kassuccessen van 2023 was. Een ander aankomend project waarin ze te zien zal zijn, is Warner Bros’ “Furiosa: A Mad Max Saga”, waarin ze de rol van Imperator Furiosa speelt. Deze film van regisseur George Miller zal op 24 mei in de bioscoop te zien zijn."
    }), "\n", createVNode(_components.h2, {
      id: "positieve-reacties-op-dune-deel-twee",
      children: "Positieve reacties op “Dune: Deel Twee”"
    }), "\n", createVNode(_components.p, {
      children: "De wereldpremière van “Dune: Deel Twee” vond plaats in Londen en de film ontving lovende reacties van filmjournalisten. De film werd omschreven als “meesterlijk”, “indrukwekkend” en een “triomf”, waarbij de gevechtsscènes werden vergeleken met die uit Peter Jackson’s “The Lord of the Rings: The Two Towers”. Het succes van het eerste deel en de positieve reacties op het vervolg zijn goed nieuws voor iedereen die betrokken is bij het project."
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

const url = "src/content/nieuws/anya-taylor-joy-toegevoegd-aan-cast-van-dune-deel-twee.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/anya-taylor-joy-toegevoegd-aan-cast-van-dune-deel-twee.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/anya-taylor-joy-toegevoegd-aan-cast-van-dune-deel-twee.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
