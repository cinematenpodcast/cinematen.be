import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Het Herrijzen van de \"10,000 Ships\" Spin-Off: Een Nieuw Hoofdstuk voor Game of Thrones Franchise",
  "date": "2024-06-12T20:26:11.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/intro-1718205806.jpg",
  "trailer": "",
  "slug": "het-herrijzen-van-de-10000-ships-spin-off-een-nieuw-hoofdstuk-voor-game-of-thrones-franchise",
  "tags": ["tv"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "een-nieuwe-schrijver-aan-het-roer",
    "text": "Een nieuwe schrijver aan het roer"
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
      children: "Game of Thrones fans wereldwijd kunnen zich verheugen, want een eerder geannuleerde spin-off uit de geliefde franchise lijkt nieuw leven te krijgen. George R.R. Martin, de schepper van de epische saga, heeft aangekondigd dat de pilot voor “10,000 Ships,” een prequel serie die ooit op de plank belandde, nu weer in ontwikkeling is."
    }), "\n", createVNode(_components.h2, {
      id: "een-nieuwe-schrijver-aan-het-roer",
      children: "Een nieuwe schrijver aan het roer"
    }), "\n", createVNode(_components.p, {
      children: "Het verhaal draait om Princess Nymeria, een legendarische figuur en voorouder van House Martell, die bekend staat als de stichter van het koninkrijk Dorne. De serie speelt zich af duizend jaar vóór de gebeurtenissen van Game of Thrones en biedt een diepgaande duik in de rijke geschiedenis van Westeros."
    }), "\n", createVNode(_components.p, {
      children: "In een recente blogpost op zijn website prees Martin schrijfster Eboni Booth voor haar Pulitzer Prize-winnende toneelstuk “Primary Truth” en onthulde hij dat Booth nu aan het roer staat van de heropleving van “10,000 Ships.” Hij noemde haar een buitengewoon getalenteerde jonge toneelschrijfster en uitte zijn enthousiasme over de hernieuwde samenwerking met HBO voor deze veelbelovende spin-off."
    }), "\n", createVNode(_components.p, {
      children: "Eerder dit jaar beschreef schrijver Brian Helgeland zijn werk aan de oorspronkelijke pilot van “10,000 Ships” als een mengeling van de Sinbad-films, The Odyssey en het bijbelse verhaal van Mozes. Ondanks de initiële annulering van het project door HBO, houdt Martin vol hoop vast aan de potentie van dit ambitieuze verhaal."
    }), "\n", createVNode(_components.p, {
      children: "Met de terugkeer van “10,000 Ships” en de betrokkenheid van een bekroonde schrijver zoals Booth, lijkt de toekomst van deze spin-off serie veelbelovend. Terwijl fans zich voorbereiden op de première van House of the Dragon Season 2, wordt er reikhalzend uitgekeken naar wat deze nieuwe toevoeging aan het Game of Thrones universum te bieden heeft."
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

const url = "src/content/nieuws/het-herrijzen-van-de-10000-ships-spin-off-een-nieuw-hoofdstuk-voor-game-of-thrones-franchise.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/het-herrijzen-van-de-10000-ships-spin-off-een-nieuw-hoofdstuk-voor-game-of-thrones-franchise.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/het-herrijzen-van-de-10000-ships-spin-off-een-nieuw-hoofdstuk-voor-game-of-thrones-franchise.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
