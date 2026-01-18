import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Robert Redford is niet meer",
  "date": "2025-09-16T13:30:53.190Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1758027319.jpg",
  "trailer": "",
  "slug": "robert-redford-is-niet-meer",
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
      children: "Robert Redford is overleden op 89-jarige leeftijd. Verschillende nieuwsbronnen\nbevestigen dat hij thuis in de bergen van Utah, omringd door zijn familie,\nvredig in zijn slaap is heengegaan. Zijn woordvoerder Cindi Berger deelde het\nnieuws en de familie vraagt om privacy tijdens deze moeilijke tijd."
    }), "\n", createVNode(_components.p, {
      children: "Redford werd geboren op 18 augustus 1936 in Santa Monica, Californië. Zijn\ndoorbraak kwam er met de iconische film “Butch Cassidy and the Sundance Kid” uit\n1969, waarin hij naast Paul Newman speelde. Deze film bezorgde hem\ninternationale bekendheid en werd gevolgd door succesvolle rollen in “The\nSting”, “The Great Gatsby” en “All the President’s Men”."
    }), "\n", createVNode(_components.p, {
      children: "Naast acteren regisseerde Redford ook films. Zijn debuut als regisseur,\n“Ordinary People” uit 1980, leverde hem een Oscar voor beste regie op. In totaal\nwon hij twee Academy Awards en drie Golden Globes tijdens zijn carrière."
    }), "\n", createVNode(_components.p, {
      children: "Redfords impact reikte verder dan zijn acteer- en regiewerk. Hij richtte het\nSundance Film Festival op, dat nog steeds een cruciale platform biedt voor\nonafhankelijke filmmakers. Dankzij dit festival konden vele talentvolle\nregisseurs en films ontdekt worden."
    }), "\n", createVNode(_components.p, {
      children: "In zijn persoonlijke leven was hij getrouwd met Sibylle Szaggars en had hij\nkinderen uit een eerder huwelijk. Twee van zijn zonen zijn hem helaas al\nvoorgegaan."
    }), "\n", createVNode(_components.p, {
      children: "Ook op latere leeftijd bleef Redford actief. Wij herinneren hem nog in “All Is\nLost” uit 2013 en zijn verrassende rol in “Captain America: The Winter Soldier”.\nZijn laatste film was “The Old Man & the Gun” uit 2018."
    }), "\n", createVNode(_components.p, {
      children: "In 2016 ontving hij de Presidential Medal of Freedom van president Barack Obama,\neen van Amerika’s hoogste burgerlijke onderscheidingen. Redford laat een\nonuitwisbare erfenis na als veelzijdig artiest en visionair in de filmwereld."
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

const url = "src/content/nieuws/robert-redford-is-niet-meer.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/robert-redford-is-niet-meer.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/robert-redford-is-niet-meer.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
