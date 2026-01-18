import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Benoit Blanc gaat waarschijnlijk door met speuren!",
  "date": "2025-11-19T20:20:22.178Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1763572399.jpg",
  "trailer": "",
  "slug": "benoit-blanc-gaat-waarschijnlijk-door-met-speuren",
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
      children: "Regisseur Rian Johnson en acteur Daniel Craig hebben nu drie films gemaakt over\nspeurder Benoit Blanc. De eerste was “Knives Out” uit 2019, gevolgd door “Glass\nOnion” en de binnenkort verschijnende “Wake Up Dead Man”."
    }), "\n", createVNode(_components.p, {
      children: "Zowel Johnson als Craig geeft aan door te willen gaan met de reeks. Johnson\nvoelt zich nog vol energie voor nieuwe verhalen en Craig wil graag zijn rol als\nde speurder blijven spelen. Ze zijn zelfs al aan het brainstormen over een\nvolgende film."
    }), "\n", createVNode(_components.p, {
      children: "Na het bioscoopsucces van de eerste film, gingen de opvolgers vooral naar\nNetflix. Dat betaalde veel voor de rechten, maar die deal is nu afgelopen.\nHierdoor mogen Johnson en Craig zelf kiezen wie de volgende film financiert."
    }), "\n", createVNode(_components.p, {
      children: "Daniel Craig was niet tevreden over de korte bioscooprelease van “Glass Onion”.\nHij geeft de voorkeur aan een langere bioscoopdraaitijd, iets wat Netflix\nmeestal niet biedt. Andere studios zoals Warner Bros of Paramount zouden de film\ngraag willen hebben, wat een betere optie zou kunnen zijn."
    }), "\n", createVNode(_components.p, {
      children: "Eerst komt “Wake Up Dead Man” op 26 november 2025 in de bioscoop, gevolgd door\nde Netflix-release op 12 december 2025. Er zijn nog talloze mysteries te\nbedenken voor Benoit Blanc over de hele wereld. Zolang Johnson en Craig plezier\nhouden in het maken van deze films, kunnen wij waarschijnlijk nog veel meer\navonturen van de slimme speurder verwachten."
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

const url = "src/content/nieuws/benoit-blanc-gaat-waarschijnlijk-door-met-speuren.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/benoit-blanc-gaat-waarschijnlijk-door-met-speuren.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/benoit-blanc-gaat-waarschijnlijk-door-met-speuren.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
