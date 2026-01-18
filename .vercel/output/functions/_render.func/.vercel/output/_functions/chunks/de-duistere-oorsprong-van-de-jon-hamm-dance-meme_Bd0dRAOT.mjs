import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "De duistere oorsprong van de Jon Hamm dance meme",
  "date": "2025-12-20T16:21:15.903Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1765924019.jpg",
  "trailer": "",
  "slug": "de-duistere-oorsprong-van-de-jon-hamm-dance-meme",
  "tags": ["TV"]
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
      children: "Wie de laatste tijd op TikTok of Instagram scrollt, is hem vast al tegengekomen:\nJon Hamm die onbezorgd danst in een club, met een snee op zijn neus. Het filmpje\nis uitgegroeid tot een enorme internetmem die overal opduikt."
    }), "\n", createVNode(_components.p, {
      children: "De dansscène komt uit de Apple TV+ serie ‘Your Friends & Neighbors’. Jon Hamm\nspeelt hierin Coop, een man die zijn hoogbetaalde baan verliest en vervolgens\nspullen begint te stelen van zijn rijke vrienden en buren om de schijn op te\nhouden."
    }), "\n", createVNode(_components.p, {
      children: "Het specifieke fragment is een slow-motion dansmoment uit aflevering 8,\noorspronkelijk op de muziek ‘Sentient System’ van Joseph William Morgan. In de\nmemes wordt hier echter vaak het vrolijke nummer ‘Turn the Lights Off’ van DJ\nKato overheen gezet, een knipoog naar de jaren 2010."
    }), "\n", createVNode(_components.p, {
      children: "Mensen gebruiken het fragment vooral bij video’s over blijdschap of even niks\naan je hoofd hebben. Dat past perfect bij de serie, waar dansen voor Coop een\nontsnapping is aan zijn problemen. Het is opvallend hoe populair de meme is\ngeworden, terwijl wij de serie zelf misschien nog niet hebben gezien."
    }), "\n", createVNode(_components.p, {
      children: "‘Your Friends & Neighbors’ is bedacht door Jonathan Tropper, die wij ook kennen\nvan ‘Banshee’. De serie begint als een komedie over rijke mensen, maar draait al\nsnel bij naar een donkerdere, grimmigere toon. Zelfs schrijver Stephen King\nnoemde de serie “deliriously nasty”. Jon Hamm krijgt voor zijn rol als Coop veel\nlof, velen beschouwen het als een van zijn beste prestaties."
    }), "\n", createVNode(_components.p, {
      children: "Naast Hamm spelen ook Amanda Peet (als zijn ex-vrouw), Olivia Munn, Lena Hall en\nHoon Lee mee in de serie. Hamm zelf gaf aan dat de serie gaat over de hebzucht\nin onze cultuur, over het constante verlangen naar meer dat nooit wordt gestild."
    }), "\n", createVNode(_components.p, {
      children: "Het eerste seizoen staat nu al op Apple TV+. Voor het tweede seizoen moeten we\nnog even geduld hebben: dat start pas op vrijdag 3 april 2026. Het dansfilmpje\nwerd trouwens al negen maanden geleden door Apple online gezet, maar brak pas\nrecent echt door. Zelfs USA Today schreef erover, maar wat Hamm zelf van zijn\nmeme-status vindt, is nog niet bekend."
    }), "\n", createVNode(_components.p, {
      children: "De volgende keer dat je die dansende Jon Hamm ziet, weet je dat het meer is dan\neen grappig filmpje. Het is een glimp uit een serie over een man die doet alsof\nzijn leven perfect is, terwijl het in werkelijkheid uit elkaar valt."
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

const url = "src/content/nieuws/de-duistere-oorsprong-van-de-jon-hamm-dance-meme.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-duistere-oorsprong-van-de-jon-hamm-dance-meme.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-duistere-oorsprong-van-de-jon-hamm-dance-meme.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
