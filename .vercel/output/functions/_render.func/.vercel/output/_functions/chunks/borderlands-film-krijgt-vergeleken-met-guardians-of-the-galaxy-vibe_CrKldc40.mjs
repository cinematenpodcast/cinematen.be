import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Borderlands film trailer ziet er leuk uit",
  "date": "2024-02-22T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/the-borderlands-movie-has-been-a-long-time-coming-1708457649.jpg",
  "trailer": "lU_NKNZljoQ",
  "slug": "borderlands-film-trailer-ziet-er-leuk-uit",
  "draft": false,
  "tags": ["film", "trailer"]
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
      children: "Na lang wachten is eindelijk de eerste trailer voor de “Borderlands” film uitgebracht. Geregisseerd door Eli Roth (“Hostel,” “Thanksgiving”), is dit de langverwachte adaptatie van de populaire serie videospellen van Gearbox en 2K. Lionsgate heeft achter de schermen jarenlang aan de film gewerkt, en met de releasedatum gepland voor deze zomer, heeft de studio eindelijk besloten om te tonen wat ze hebben gemaakt."
    }), "\n", createVNode(_components.p, {
      children: "Voor iedereen die de spellen heeft gespeeld, lijken Roth en de filmmakers zeker veel van de stijl te hebben vastgelegd. Claptrap (het robotkarakter met de stem van Jack Black) ziet eruit als zichzelf. De wereld lijkt op de wereld van de spellen. Het voelt juist aan op dat vlak. Het voelt ook cinematografisch als een mix tussen de “Guardians of the Galaxy” films van Marvel en “Mad Max.” Of het nu net zo goed is als die franchises moet nog blijken; toegegeven, dat zijn hoge standaarden om te halen. Misschien is het niet eerlijk om de verwachtingen voor deze film te hoog te leggen met die vergelijkingen, maar het is moeilijk om ze niet te trekken wanneer de trailer zo duidelijk wil dat je dat doet."
    }), "\n", createVNode(_components.p, {
      children: "De film pronkt met een A-lijst cast onder leiding van Oscar-winnaar Cate Blanchett (“Thor: Ragnarok”) als Lilith. Het kernteam bestaat ook uit Kevin Hart (“Central Intelligence”) als Roland, Jack Black (“The Super Mario Bros. Movie”) als Claptrap, Jamie Lee Curtis (“Halloween”) als Tannis, Ariana Greenblatt (“Barbie”) als Tiny Tina, Florian Munteanu (“Creed II”) als Krieg, en Edgar Ramirez (“Yes Day”) als Atlas."
    }), "\n", createVNode(_components.p, {
      children: "Roth staat als medeschrijver van het scenario naast Joe Crombie genoemd. Echter, Craig Mazin, bekend van “The Last of Us” en “Chernobyl”, was oorspronkelijk een van de schrijvers. Hij heeft uiteindelijk gevochten om zijn naam van het project te laten verwijderen, wat destijds voor wat opgetrokken wenkbrauwen zorgde."
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

const url = "src/content/nieuws/borderlands-film-krijgt-vergeleken-met-guardians-of-the-galaxy-vibe.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/borderlands-film-krijgt-vergeleken-met-guardians-of-the-galaxy-vibe.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/borderlands-film-krijgt-vergeleken-met-guardians-of-the-galaxy-vibe.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
