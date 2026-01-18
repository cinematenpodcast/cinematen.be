import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Eyes of Wakanda is een bloedige animatieserie",
  "date": "2025-08-03T11:12:41.801Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1753993104.jpg",
  "trailer": "",
  "slug": "eyes-of-wakanda-is-een-bloedige-animatieserie",
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
      children: "De nieuwe animatieserie “Eyes of Wakanda” staat nu op Disney+. Deze korte reeks\nvan vier afleveringen duikt diep in het verleden van Wakanda, het technologisch\nwonderland uit het Marvel Cinematic Universe. We volgen Wakandese spionnen, de\nzogenaamde War Dogs, die hun kostbare Vibranium proberen te beschermen en terug\nte stelen."
    }), "\n", createVNode(_components.p, {
      children: "Elke aflevering van zo’n 30 minuten vertelt een apart verhaal uit Wakanda’s\ngeschiedenis. Hierdoor leren wij niet alleen meer over dit mysterieuze land,\nmaar ook over de personages die het verdedigden. De verhalen nemen ons mee op\nspannende missies waar Vibranium steeds centraal staat."
    }), "\n", createVNode(_components.p, {
      children: "Wat ons opviel, is het geweld. Deze serie toont bloediger en expliciere\ngevechten dan we van Marvel gewoon zijn. Hoofdpersonages zoals Noni en B’kai\nvechten met traditionele wapens, wat leidt tot rauwe en soms brutale actiescènes\ndie afwijken van de typische Marvel-stijl."
    }), "\n", createVNode(_components.p, {
      children: "De serie schetst Wakanda als een land dat zijn buren vaak in de steek liet. De\nzogenaamde helden blijken niet altijd nobel te handelen. Dit thema komt terug\nbij Erik Killmonger, waar Chadwick Boseman ooit opmerkte dat hij mogelijk de\néchte held van Wakanda is. Killmonger daagt immers het conservatieve beleid van\nT’Challa uit."
    }), "\n", createVNode(_components.p, {
      children: "Visueel is de serie een festijn. De animaties zijn kleurrijk en levendig, met\nstijlen die perfect passen bij Wakanda’s cultuur. Creatieve gevechten in diverse\nomgevingen springen in het oog."
    }), "\n", createVNode(_components.p, {
      children: "“Eyes of Wakanda” valt op door zijn focus op geschiedenis in plaats van bekende\nhelden. Voor ons die meer willen weten over dit land, is dat verfrissend. Er\nzitten verwijzingen naar het bredere Marvel-universum in, maar de serie staat\nsterk op zichzelf. Hoewel de korte afleveringen belangrijke historische momenten\nsamenvatten, voelen we wel wat onbenut potentieel."
    }), "\n", createVNode(_components.p, {
      children: "Al bij al is het een waardevolle toevoeging aan de Marvel-collectie. Wij krijgen\neen boeiende kijk op Wakanda’s complexe verleden en de uitdagingen van zijn\nbewakers. Een aanrader, ook al had er wat meer in gezeten."
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

const url = "src/content/nieuws/eyes-of-wakanda-is-een-bloedige-animatieserie.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/eyes-of-wakanda-is-een-bloedige-animatieserie.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/eyes-of-wakanda-is-een-bloedige-animatieserie.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
