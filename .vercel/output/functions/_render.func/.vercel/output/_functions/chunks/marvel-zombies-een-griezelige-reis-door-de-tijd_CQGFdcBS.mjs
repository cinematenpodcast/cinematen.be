import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Marvel Zombies een griezelige reis door de tijd",
  "date": "2025-09-27T10:59:13.359Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1758119043.jpg",
  "trailer": "",
  "slug": "marvel-zombies-een-griezelige-reis-door-de-tijd",
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
      children: "Marvel Zombies is een fenomeen dat begon in de stripboekenwereld en nu zijn weg\nheeft gevonden naar Disney+. Wij duiken in de geschiedenis van deze\nzombie-invasie binnen het Marvel Universum."
    }), "\n", createVNode(_components.p, {
      children: "Het allereerste begin was Simon Garth, die in 1953 verscheen in MENACE #5. Na\neen magisch ritueel werd hij een zombie die nog een beetje eigen wil had, maar\nbestuurd kon worden via een speciale hanger. Jaren later, in 2009, sloot hij een\nzombie-virus op in zijn eigen lichaam en werkte hij zelfs samen met de Howling\nCommandos."
    }), "\n", createVNode(_components.p, {
      children: "Ook in de Thor-stripboeken speelden zombies een rol via de godin Hela. In een\nverhaal uit 1966 probeerde zij de wereld van de levenden aan te vallen met haar\nzombieleger. Het personage Skurge offerde zich toen op door alleen op een brug\nte vechten en zo zijn vrienden te redden."
    }), "\n", createVNode(_components.p, {
      children: "In het Ultimate Universe doken zombies op in Ultimate X-Men #24 uit 2001.\nCyclops, Wolverine en Shadowcat ontdekten zombies in een grot, die werden\nbestuurd door een computer. Shadowcat vernielde de computer om iedereen te\nredden."
    }), "\n", createVNode(_components.p, {
      children: "De echte doorbraak kwam met Ultimate Fantastic Four #21 in 2005. Reed Richards\nreisde naar een alternatieve wereld waar alle superhelden zombies waren\ngeworden. Zij volgden hem terug naar zijn eigen universum, maar werden\nuiteindelijk verslagen door Doctor Doom. Dit leidde tot de uitgebreide Marvel\nZombies-reeks, waarin de zombieplaag de multiverse bedreigt."
    }), "\n", createVNode(_components.p, {
      children: "In 2010 kreeg The Punisher zijn eigen zombie-verhaal. Frank Castle was bijna de\nlaatste mens op aarde en vocht tegen zombie-versies van bekende helden. Later\nvond hij andere overlevenden en groeide hij uit tot een held in deze\napocalyptische wereld."
    }), "\n", createVNode(_components.p, {
      children: "Recentelijk zagen we zombies in Venom War (2024), waar de slechterik Meridius\n“Zombiotes” introduceerde. Deze wezens besmetten mensen via beten, en de helden\nmoesten samenwerken om New York te redden. In Marvel Zombies: Dawn of Decay uit\nhetzelfde jaar werd Captain America besmet door een zieke Groot, wat leidde tot\neen zombie-uitbraak bij de Avengers. Groot en de Hulk probeerden de ziekte te\nstoppen."
    }), "\n", createVNode(_components.p, {
      children: "Nu is er de animatieserie “Marvel Zombies” op Disney+. Hier speelt Wanda\nMaximoff, de Scarlet Witch, een centrale rol als de Queen of the Dead. Zij\nbestuurt de zombies en heeft aan het einde van het seizoen de kracht van de\nInfinity Stones. Ze creëert een nep-wereld voor Kamala Khan, wat opvallend is\nomdat slechteriken in de MCU zelden een permanente overwinning behalen. Ter\nvergelijking: Thanos maakte de helft van het universum weg, maar dat werd\nongedaan gemaakt. Loki, Kang en Ultron kenden ook maar tijdelijke successen.\nAlleen Wanda heeft zichzelf ooit tegengehouden, zoals in “WandaVision”."
    }), "\n", createVNode(_components.p, {
      children: "Wij kunnen deze griezelige verhalen ontdekken via Marvel Unlimited voor de\nstrips en op Disney+ voor de nieuwe serie."
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

const url = "src/content/nieuws/marvel-zombies-een-griezelige-reis-door-de-tijd.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/marvel-zombies-een-griezelige-reis-door-de-tijd.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/marvel-zombies-een-griezelige-reis-door-de-tijd.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
