import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Golden Globe Awards 2025 (want bijna vergeten te reporten hierover)",
  "date": "2025-01-09T20:01:00.878Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/golden-globes-2025-winners-list.jpg",
  "trailer": "",
  "slug": "golden-globe-awards-2025-want-bijna-vergeten-te-reporten-hierover",
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
      children: "Op zondag 5 januari 2025 werden de 82ste Golden Globe Awards gehouden in het\nBeverly Hilton in Beverly Hills, Californië. Deze avond was gevuld met sterren,\nspanning en veel verrassingen. Nikki Glaser, een bekende comedian, was de\ngastvrouw van het evenement en zorgde voor veel gelach in de zaal."
    }), "\n", createVNode(_components.p, {
      children: "De grote winnaar van de avond was de film “Emilia Pérez”. Deze film won de prijs\nvoor beste muzikale of komediefilm. Ook kreeg de film de prijs voor beste\nniet-Engelstalige film. Het nummer “El Mal” uit de film won de prijs voor beste\norigineel lied."
    }), "\n", createVNode(_components.p, {
      children: "Adrien Brody kreeg de prijs voor beste acteur in een dramafilm voor zijn\nindrukwekkende rol in “The Brutalist”, dat ook de prijs voor beste dramafilm\nwon."
    }), "\n", createVNode(_components.p, {
      children: "De prijs voor beste dramaserie ging naar “Shogun”. Vooraanstaande acteurs zoals\nAnna Sawai en Hiroyuki Sanada wonnen ook Globes voor hun acteerwerk in de serie."
    }), "\n", createVNode(_components.p, {
      children: "De comedyserie “Hacks” werd ook beloond. Jean Smart won de prijs voor beste\nactrice in een musical of comedy, terwijl de show zelf werd bekroond als beste\nTV-serie in die categorie."
    }), "\n", createVNode(_components.p, {
      children: "Demi Moore, Zoe Saldaña, en Kieran Culkin waren ook onder de winnaars van de\navond. Demi Moore won de prijs voor beste actrice in een muzikale of komediefilm\nvoor haar rol in “The Substance”. Kieran Culkin werd bekroond als beste acteur\nin een bijrol voor zijn werk in “A Real Pain” en Zoe Saldaña won voor beste\nactrice in een bijrol voor haar rol in “Emilia Pérez”."
    }), "\n", createVNode(_components.p, {
      children: "Deze Golden Globes waren bijzonder omdat ze het resultaat waren van een nieuw\nstemproces. Een diverse groep journalisten uit verschillende landen stemde dit\nkeer, in plaats van de Hollywood Foreign Press Association, die jarenlang de\nprijzen organiseerde. Over of dit nu ook effectief beter was voor de resultaten\nkan best zelf oordelen."
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

const url = "src/content/nieuws/golden-globe-awards-2025-want-bijna-vergeten-te-reporten-hierover.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/golden-globe-awards-2025-want-bijna-vergeten-te-reporten-hierover.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/golden-globe-awards-2025-want-bijna-vergeten-te-reporten-hierover.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
