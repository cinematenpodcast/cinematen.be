import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Star Wars Visions krijgt een volledige serie rond The Ninth Jedi",
  "date": "2025-10-30T09:04:31.706Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1761741334.jpg",
  "trailer": "",
  "slug": "star-wars-visions-krijgt-een-volledige-serie-rond-the-ninth-jedi",
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
      children: "Star Wars Visions is de tekenfilmserie waarin verschillende makers hun eigen\nStar Wars verhalen kunnen vertellen buiten de officiële canon. In het derde\nseizoen kregen we vervolgverhalen van twee populaire korte films uit het eerste\nseizoen, waaronder The Ninth Jedi: Child of Hope."
    }), "\n", createVNode(_components.p, {
      children: "Dit vervolgverhaal gaat verder waar het eerste verhaal stopte en volgt het jonge\nmeisje Kara, wiens vader - een sabersmith die lightsabers maakt - ontvoerd is.\nIn dit nieuwe avontuur raakt Kara gescheiden van haar Jedi-vrienden en belandt\nze op een oud ruimteschip in een asteroïdenveld. De enige aanwezige is de robot\nTeto, die zich uiteindelijk opoffert om haar te redden door een explosie te\nveroorzaken die de bounty hunters vernietigt. Het verhaal eindigt met Kara die\nnog steeds op zoek is naar haar vader."
    }), "\n", createVNode(_components.p, {
      children: "Tijdens Star Wars Celebration Japan kregen we goed nieuws: er komt een volledige\nserie genaamd Star Wars: Visions Presents – The Ninth Jedi. Kenji Kamiyama, die\nde twee korte films maakte, zal de serie begeleiden. De releasedatum is nog niet\nbekend."
    }), "\n", createVNode(_components.p, {
      children: "Wat The Ninth Jedi bijzonder maakt, is dat lightsabers hier anders werken dan in\nandere Star Wars verhalen. De kleur verandert based op de aura van de persoon in\nde Force. De nieuwe serie zal hier dieper op ingaan en Kara’s zoektocht naar\nhaar vader verder volgen."
    }), "\n", createVNode(_components.p, {
      children: "Star Wars Visions seizoen 3 staat nu op Disney+, met afleveringen van vijftien\ntot twintig minuten. The Duel kreeg eerder al een boek, en nu is The Ninth Jedi\naan de beurt voor een eigen serie. Dit laat zien hoe populair deze\nVisions-verhalen zijn geworden."
    }), "\n", createVNode(_components.p, {
      children: "Wij kijken uit naar meer antwoorden: wie heeft Kara’s vader ontvoerd? Hoe werken\nde lightsabers precies? Wat gebeurt er met Kara nu ze alleen verder moet? Star\nWars Visions blijft een verfrissend project binnen het Star Wars universum, waar\nmakers creatieve vrijheid krijgen om nieuwe concepten te verkennen."
    }), "\n", createVNode(_components.p, {
      children: "Voor nu kunnen we genieten van het derde seizoen op Disney+, met The Ninth Jedi:\nChild of Hope als één van de emotionele hoogtepunten. Wij kijken alvast uit naar\nde komende serie, ook al moeten we nog even geduld hebben voor de releasedatum."
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

const url = "src/content/nieuws/star-wars-visions-krijgt-een-volledige-serie-rond-the-ninth-jedi.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/star-wars-visions-krijgt-een-volledige-serie-rond-the-ninth-jedi.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/star-wars-visions-krijgt-een-volledige-serie-rond-the-ninth-jedi.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
