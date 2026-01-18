import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "De trailer voor Longlegs is hier, de creepy horrorfilm met Nicolas Cage",
  "date": "2024-05-21T22:25:53.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/maika-monroe-and-nicolas-cage-star-in-longlegs-1716224146.jpg",
  "trailer": "OG7wOTE8NhE",
  "slug": "longlegs-nicolas-cage-keert-terug-in-angstaanjagende-horrorfilm",
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
      children: "De langverwachte thriller “Longlegs” is op komst, met niemand minder dan Nicolas Cage in de hoofdrol. Deze psychologische horrorfilm, geregisseerd door Osgood Perkins, belooft kijkers mee te nemen op een huiveringwekkende reis vol spanning en mysterie. Het verhaal draait om FBI-agent Lee Harker, gespeeld door Maika Monroe, die belast wordt met het oplossen van een onopgeloste zaak rond een meedogenloze seriemoordenaar, vertolkt door Cage."
    }), "\n", createVNode(_components.p, {
      children: "Het plot neemt al snel complexe wendingen als occulte elementen aan het licht komen. Harker ontdekt een persoonlijke connectie met de genadeloze moordenaar en moet haast maken om hem tegen te houden voordat er opnieuw onschuldige levens worden geclaimd. Alicia Witt en Blair Underwood maken ook deel uit van de cast, wat bijdraagt aan de beklemmende sfeer van de film."
    }), "\n", createVNode(_components.p, {
      children: "Een mix van klassieke Hollywood-psychothrillers en hedendaagse horror, “Longlegs” belooft een intense kijkervaring te bieden voor liefhebbers van het genre. Met een R-rating vanwege bloederig geweld, verontrustende beelden en grof taalgebruik, lijkt deze film niet voor angsthazen te zijn."
    }), "\n", createVNode(_components.p, {
      children: "Nicolas Cage fungeert niet alleen als hoofdrolspeler, maar ook als producent via zijn productiebedrijf Saturn Films. Samen met andere ervaren producers zoals Dan Kagan en Brian Kavanaugh-Jones brengt Cage deze duistere en intrigerende film naar het witte doek."
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

const url = "src/content/nieuws/de-trailer-voor-longlegs-is-hier-de-creepy-horrorfilm-met-nicolas-cage.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-trailer-voor-longlegs-is-hier-de-creepy-horrorfilm-met-nicolas-cage.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/de-trailer-voor-longlegs-is-hier-de-creepy-horrorfilm-met-nicolas-cage.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
