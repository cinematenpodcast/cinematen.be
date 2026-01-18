import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Yellowjackets krijgt een vierde en laatste seizoen",
  "date": "2025-10-14T01:16:07.144Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1760403349.jpg",
  "trailer": "",
  "slug": "yellowjackets-krijgt-een-vierde-en-laatste-seizoen",
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
      children: "De serie Yellowjackets gaat eindigen met een vierde en laatste seizoen. De\nmakers van de show, Ashley Lyle en Bart Nickerson, hebben dit bevestigd. Ze\nzeiden dat ze altijd het verhaal wilden volgen en stoppen wanneer dat verhaal\nklaar is om te eindigen."
    }), "\n", createVNode(_components.p, {
      children: "Yellowjackets is een spannende serie die we kunnen bekijken via Paramount+. Het\nverhaal volgt een meisjesvoetbalteam van wie het vliegtuig in 1996 neerstort in\neen wild bos. Ze moeten daar bijna twee jaar overleven, waarbij de situatie\nsteeds grimmiger wordt. De serie toont zowel hun overlevingsstrijd in het\nverleden als hun volwassen leven 25 jaar later."
    }), "\n", createVNode(_components.p, {
      children: "Het derde seizoen werd heel goed bekeken, maar toch stoppen de makers na vier\nseizoenen. Oorspronkelijk dachten ze aan vijf seizoenen, maar nu wordt het dus\nvier. Dit besluit zou te maken kunnen hebben met het vertrek van een belangrijke\nactrice. Juliette Lewis, die de volwassen Natalie speelde, zag haar personage in\nseizoen twee sterven."
    }), "\n", createVNode(_components.p, {
      children: "In seizoen drie zagen we hoe Natalie een telefoon vond waarmee ze om hulp kon\nbellen, waardoor we nu weten hoe de meisjes uiteindelijk gered worden. In het\nheden zijn al verschillende personages overleden en is er een conflict tussen\nShauna, Taissa en Misty. Shauna probeert opnieuw de leiding te nemen, net zoals\nin het bos."
    }), "\n", createVNode(_components.p, {
      children: "De makers lieten weten geïnspireerd te zijn door Succession, die ook na vier\npopulaire seizoenen stopte. Seizoen drie van Yellowjackets kreeg op Rotten\nTomatoes een score van 84%, wat lager is dan de 94% van seizoen twee en de\nperfecte 100% van seizoen één."
    }), "\n", createVNode(_components.p, {
      children: "Seizoen vier wordt nu geschreven en de opnames starten volgend jaar. We kunnen\nde serie waarschijnlijk in 2026 verwachten. We hopen te zien hoe de meisjes\nworden gered en wat er daarna met hen gebeurt. In het heden moet de ruzie tussen\nShauna en de anderen worden opgelost."
    }), "\n", createVNode(_components.p, {
      children: "Veel vragen zijn inmiddels beantwoord, zoals de identiteit van de Antler Queen –\nShauna – en dat Mari het meisje was dat in de put viel. Toch blijven we benieuwd\nnaar de betekenis van het mysterieuze symbool en hopen we dat alle resterende\nraadsels in het laatste seizoen worden opgehelderd."
    }), "\n", createVNode(_components.p, {
      children: "Hoewel we het jammer vinden dat de serie stopt, vinden we het ook fijn dat de\nmakers een mooi einde kunnen maken zonder het verhaal onnodig te rekken. We\nkijken uit naar een spannend laatste seizoen."
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

const url = "src/content/nieuws/yellowjackets-krijgt-een-vierde-en-laatste-seizoen.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/yellowjackets-krijgt-een-vierde-en-laatste-seizoen.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/yellowjackets-krijgt-een-vierde-en-laatste-seizoen.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
