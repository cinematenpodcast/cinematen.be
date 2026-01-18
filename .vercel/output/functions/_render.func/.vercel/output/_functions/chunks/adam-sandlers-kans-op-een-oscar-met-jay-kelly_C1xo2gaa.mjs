import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Adam Sandler's kans op een Oscar met Jay Kelly",
  "date": "2025-12-04T20:52:14.183Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1764712224.jpg",
  "trailer": "",
  "slug": "adam-sandlers-kans-op-een-oscar-met-jay-kelly",
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
      children: "Adam Sandler is al jaren een bekende acteur in grappige films, maar hij heeft\nnog nooit een Oscar-nominatie gekregen. Zijn nieuwe film “Jay Kelly”, die op\nNetflix komt, zou daar verandering in kunnen brengen."
    }), "\n", createVNode(_components.p, {
      children: "De film wordt geregisseerd door Noah Baumbach en George Clooney speelt de\nhoofdrol van de beroemde filmster Jay Kelly. Sandler speelt een belangrijke\nbijrol als Ron Sukenick, de manager van Jay. Ron regelt al jaren het werk voor\nJay, maar moet ook balanceren met zijn eigen gezinsleven."
    }), "\n", createVNode(_components.p, {
      children: "Baumbach schreef de rol van Ron speciaal voor Sandler. De twee werkten eerder\nsamen in “The Meyerowitz Stories”. Baumbach vertelde dat hij Sandler geschikt\nvond omdat beiden hun familie erg belangrijk vinden en vaak in hun films\nbetrekken. Sandler zelf zei in een interview met Vanity Fair dat hij meteen ja\nzei toen hij het script las. Hij vond het personage interessant omdat Ron heel\nveel om Jay geeft, en hij keek ernaar uit om dat met George Clooney te spelen.\nSandler gaf ook toe dat zijn eigen leven als bekende acteur enigszins lijkt op\ndat van Jay Kelly."
    }), "\n", createVNode(_components.p, {
      children: "Sandler is vooral bekend van komedies, maar hij heeft ook indruk gemaakt in\nserieuze rollen zoals in “Punch-Drunk Love”, “Funny People”, “Hustle” en vooral\n“Uncut Gems” uit 2019. Voor die laatste rol vonden wij dat hij een\nOscar-nominatie verdiende, maar die bleef uit. Baumbach weet na hun eerdere\nsamenwerking en na “Uncut Gems” dat Sandler intense rollen aankan. “Jay Kelly”\nbiedt Sandler dus een nieuwe kans om zijn dramatische kant te laten zien."
    }), "\n", createVNode(_components.p, {
      children: "De film komt op 5 december 2025 op Netflix. Wij hopen dat deze rol Sandler\neindelijk die felbegeerde Oscar-nominatie oplevert. Alleen de tijd zal het\nleren."
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

const url = "src/content/nieuws/adam-sandlers-kans-op-een-oscar-met-jay-kelly.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/adam-sandlers-kans-op-een-oscar-met-jay-kelly.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/adam-sandlers-kans-op-een-oscar-met-jay-kelly.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
