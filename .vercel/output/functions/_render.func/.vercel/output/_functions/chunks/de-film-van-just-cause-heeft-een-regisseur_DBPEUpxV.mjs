import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "De film van Just Cause heeft een regisseur",
  "date": "2024-05-30T13:56:27.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1717013441.jpg",
  "trailer": "",
  "slug": "de-opkomst-van-de-just-cause-franchise",
  "tags": ["film"]
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
      children: "De succesvolle Just Cause franchise, gecreëerd door Avalanche Studios en Square Enix, heeft de wereld van actie-avonturenspellen stormenderhand veroverd sinds de release van het eerste deel. Met een reeks van vier games die spelers meenemen naar verschillende fictieve eilanden en archipels, heeft Just Cause een reputatie opgebouwd voor zijn uitgestrekte open-wereldomgevingen, over-the-top actie en humoristische insteek."
    }), "\n", createVNode(_components.p, {
      children: "De populariteit van de Just Cause-serie heeft geleid tot plannen voor een filmadaptatie genaamd Just Cause: Scorpion Rising, die echter nooit werd gerealiseerd. Producenten hebben geprobeerd een gedeelde universum van Square Enix-films te creëren, inclusief Just Cause, Hitman, Tomb Raider, Deus Ex en Thief, hoewel dergelijke plannen niet tot uiting kwamen."
    }), "\n", createVNode(_components.p, {
      children: "Recentelijk heeft de aankondiging van de filmadaptatie van Just Cause onder regisseur Ángel Manuel Soto en producenten Kelly McCormick en David Leitch de fans enthousiast gemaakt over wat komen gaat. Met de belofte van een episch avontuur en spectaculaire actiescènes, lijkt Just Cause zich verder uit te breiden buiten de gamewereld naar het witte doek."
    }), "\n", createVNode(_components.p, {
      children: "Inspirerend en grensverleggend, heeft Just Cause zijn plaats stevig ingenomen tussen andere iconische franchises, en blijft het gamers en liefhebbers van actieavonturen boeien met zijn unieke mix van gameplay, verhaal en karakter."
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

const url = "src/content/nieuws/de-film-van-just-cause-heeft-een-regisseur.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-film-van-just-cause-heeft-een-regisseur.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-film-van-just-cause-heeft-een-regisseur.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
