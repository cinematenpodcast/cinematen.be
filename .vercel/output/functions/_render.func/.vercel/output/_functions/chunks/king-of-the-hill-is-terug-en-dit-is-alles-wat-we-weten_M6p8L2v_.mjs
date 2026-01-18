import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "King of the Hill is terug en dit is alles wat we weten",
  "date": "2025-05-30T17:32:57.502Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1748625534.jpg",
  "trailer": "",
  "slug": "king-of-the-hill-is-terug-en-dit-is-alles-wat-we-weten",
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
      children: "De populaire animatieserie “King of the Hill” keert terug op Hulu. Na 15 jaar na\nde laatste aflevering volgen we opnieuw de Hill-familie in het fictieve stadje\nArlen, Texas. Wij kunnen eindelijk zien wat er met onze favoriete personages is\ngebeurd."
    }), "\n", createVNode(_components.p, {
      children: "Hank en Peggy Hill komen terug uit Saudi-Arabië, waar Hank met propaan werkte.\nZe ontdekken dat Arlen flink is veranderd. Hun zoon Bobby is nu 21 en werkt als\nchef-kok in Dallas, waar hij zijn leven deelt met vrienden Connie, Joseph en\nChane."
    }), "\n", createVNode(_components.p, {
      children: "De nieuwe intro laat zien hoe Arlen er na 15 jaar bijligt. Dale probeerde zelfs\nburgemeester te worden! De stad kampt nu met scooters, drones en andere moderne\nproblemen waar Hank, als stem van redelijkheid, moeite mee heeft. Zijn\nconservatieve kijk op de wereld botst met deze veranderingen."
    }), "\n", createVNode(_components.p, {
      children: "Een pijnpunt: enkele originele stemacteurs zijn overleden. De makers gaan\nrespectvol om met hun afwezigheid door nieuwe stemmen in te zetten. Dit biedt\neen frisse ervaring met de vertrouwde structuur die we kennen."
    }), "\n", createVNode(_components.p, {
      children: "Op 4 augustus 2025 keren we terug naar Arlen. Wij zijn benieuwd hoe Hank, Peggy\nen Bobby omgaan met moderne uitdagingen. De show blijft trouw aan haar roots,\nmaar met nieuwe verhalen in deze hernieuwde setting. Tijd om opnieuw kennis te\nmaken met oude vrienden en hun ontwikkeling sinds onze laatste ontmoeting."
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

const url = "src/content/nieuws/king-of-the-hill-is-terug-en-dit-is-alles-wat-we-weten.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/king-of-the-hill-is-terug-en-dit-is-alles-wat-we-weten.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/king-of-the-hill-is-terug-en-dit-is-alles-wat-we-weten.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
