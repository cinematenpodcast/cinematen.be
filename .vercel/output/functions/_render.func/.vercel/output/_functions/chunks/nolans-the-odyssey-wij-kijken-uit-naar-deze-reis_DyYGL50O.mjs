import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Nolans The Odyssey Wij Kijken Uit Naar Deze Reis",
  "date": "2025-07-01T18:53:41.447Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1751395215.jpg",
  "trailer": "",
  "slug": "nolans-the-odyssey-wij-kijken-uit-naar-deze-reis",
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
      children: "Christopher Nolan is druk bezig met zijn nieuwe film “The Odyssey”, een\nverfilming van het oude Griekse epos van Homerus. Door de sterke cast met Matt\nDamon, Anne Hathaway en Tom Holland heeft de film al veel aandacht gekregen. Dit\nproject moet het goed doen, zeker na het enorme succes van “Oppenheimer” dat\nbijna $1 miljard verdiende."
    }), "\n", createVNode(_components.p, {
      children: "Matt Damon kruipt in de huid van Odysseus, de held die na de Trojaanse oorlog\nnaar huis probeert te keren. Zijn zoon Telemachus wordt vertolkt door Tom\nHolland. In de teaser trailer zien we Telemachus op een feest vragen stellen aan\neen oudere man (Jon Bernthal) over zijn vader. Bernthals personage antwoordt dat\niedereen een ander verhaal over Odysseus heeft."
    }), "\n", createVNode(_components.p, {
      children: "De trailer, typisch mysterieus zoals we van Nolan gewend zijn, toont beelden van\nTelemachus en de eindeloze oceaan. Dit benadrukt het gemis van Odysseus en hoe\nzijn zoon daarmee omgaat. Wij maken ons wel wat zorgen over hoe Nolan een\nschokkende gebeurtenis uit het epos zal aanpakken: het moment waar Odysseus een\nkind doodt tijdens de oorlog. Dit wordt een uitdaging voor zowel regisseur als\nacteur."
    }), "\n", createVNode(_components.p, {
      children: "Het blijft ook onduidelijk hoe de film alle avonturen van Odysseus en de vele\nbijpersonages in balans zal brengen. Maar de typische Nolan-stijl staat vast.\nThe Odyssey gaat in première op 17 juli 2026. Met zo’n sterke cast en een episch\nverhaal zijn de verwachtingen hoog. Nolan heeft al bewezen dat zijn naam alleen\nal garant staat voor succes. Wij kijken dan ook uit naar zijn unieke aanpak van\ndit klassieke verhaal."
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

const url = "src/content/nieuws/nolans-the-odyssey-wij-kijken-uit-naar-deze-reis.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nolans-the-odyssey-wij-kijken-uit-naar-deze-reis.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/nolans-the-odyssey-wij-kijken-uit-naar-deze-reis.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
