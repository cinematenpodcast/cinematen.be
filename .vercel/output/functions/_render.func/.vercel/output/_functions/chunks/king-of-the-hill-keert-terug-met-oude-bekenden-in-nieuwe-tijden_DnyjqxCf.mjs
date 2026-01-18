import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "King of the Hill keert terug met oude bekenden in nieuwe tijden",
  "date": "2025-08-04T11:14:32.799Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1753968237.jpg",
  "trailer": "",
  "slug": "king-of-the-hill-keert-terug-met-oude-bekenden-in-nieuwe-tijden",
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
      children: "“King of the Hill” is terug op Hulu, maar verwacht niet exact dezelfde show als\nvroeger. We kunnen na jaren wachten opnieuw kennismaken met de inwoners van\nArlen, Texas. De nieuwe afleveringen tonen hoe onze geliefde personages zijn\nveranderd en gegroeid in een modernere wereld."
    }), "\n", createVNode(_components.p, {
      children: "Hank en Peggy Hill keren terug naar Arlen na jaren in Saudi-Arabië te hebben\ngewoond. Hun zoon Bobby is nu een volwassen man en werkt als chef-kok in een\nrestaurant met een opvallende mix van Japanse en Texaanse keukenstijlen. Hank\nmoet leren omgaan met nieuwe technologieën zoals Zoom en Uber, wat voor de\nonveranderlijke hoofdpersoon tot flinke frustratie leidt."
    }), "\n", createVNode(_components.p, {
      children: "Dale Gribble keert ook terug met zijn kenmerkende eigenaardigheden. Hij\nprobeerde zelfs burgemeester van Arlen te worden via een bizarre strategie\ntijdens de COVID-19-pandemie, passend bij zijn samenzweringstheorieën. Andere\nvertrouwde gezichten zijn Nancy Gribble, nu co-presentator van een realityshow\nover onroerend goed, en John Redcorn."
    }), "\n", createVNode(_components.p, {
      children: "We zien interessante ontwikkelingen zoals Bobby’s hereniging met zijn\njeugdliefde Connie. Bill Dauterive heeft het moeilijk na zijn pensioen, maar de\nterugkeer van de Hills biedt mogelijk nieuwe kansen voor hem. Hoewel de wereld\nveranderd is, blijft de herkenbare humor en onderlinge dynamiek tussen de\npersonages behouden."
    }), "\n", createVNode(_components.p, {
      children: "Het veertiende seizoen van “King of the Hill” is nu volledig te streamen op\nHulu. We leren de personages op een nieuwe manier kennen terwijl ze zich door\nmoderne uitdagingen navigeren."
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

const url = "src/content/nieuws/king-of-the-hill-keert-terug-met-oude-bekenden-in-nieuwe-tijden.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/king-of-the-hill-keert-terug-met-oude-bekenden-in-nieuwe-tijden.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/king-of-the-hill-keert-terug-met-oude-bekenden-in-nieuwe-tijden.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
