import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Komen de Muppets eindelijk terug?",
  "date": "2025-09-18T20:47:42.639Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1758226616.jpg",
  "trailer": "",
  "slug": "komen-de-muppets-eindelijk-terug",
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
      children: "Disney heeft aangekondigd dat The Muppet Show terugkeert op Disney+ met een\nnieuwe special in 2026, precies vijftig jaar na de originele reeks. Popster\nSabrina Carpenter is niet alleen te gast in de aflevering, maar ze helft ook mee\nachter de schermen bij het maken van de show."
    }), "\n", createVNode(_components.p, {
      children: "Wij zijn blij met dit nieuws en op sociale media zien we veel enthousiaste\nreacties. Sabrina Carpenter en de Muppets lijken voor elkaar gemaakt, en we\nhopen vooral op een leuke dynamiek met Miss Piggy – of het nu als vriendinnen of\nals rivalen is."
    }), "\n", createVNode(_components.p, {
      children: "Achter de schermen wordt gewerkt door een team van ervaren producers. Seth Rogen\nen Evan Goldberg, die net Emmy’s wonnen voor hun comedyserie The Studio, zijn\nvan de partij. Ook David Lightbody, Leigh Slaughter en Michael Steinbach van The\nMuppets Studio werken mee. Albertina Rizzo schrijft de special en Alex Timbers\nstaat in voor de regie."
    }), "\n", createVNode(_components.p, {
      children: "De vertrouwde poppenspelers keren ook terug: Bill Barretta, Dave Goelz, Eric\nJacobson, Peter Linz, David Rudman en Matt Vogel brengen Kermit de Kikker, Miss\nPiggy en de rest weer tot leven."
    }), "\n", createVNode(_components.p, {
      children: "Disney kocht de rechten van de Muppets al in 2004, maar sindsdien verliep het\nniet altijd even vlot. De film The Muppets uit 2011 was een succes, maar het\nvervolg viel tegen. Op televisie probeerde Disney meerdere keren iets nieuws,\nzoals een serie op ABC die stopgezet werd, en later de Disney+ series Muppets\nNow en The Muppets Mayhem."
    }), "\n", createVNode(_components.p, {
      children: "Toch blijven we hoopvol. Op Reddit lazen we dat velen de Muppets zien als\ntroostrijke televisie en een comeback toejuichen. Maar niet alles is positief:\nsommigen uiten ook bezorgdheid, vooral na recente gebeurtenissen bij ABC (ook\nvan Disney), waar Jimmy Kimmel van de buis gehaald werd na opmerkingen over\nCharlie Kirk. Op sociale media vragen we ons af of Disney met dit Muppets-nieuws\nafleiding probeert te creëren."
    }), "\n", createVNode(_components.p, {
      children: "De exacte releasedatum en verdere details moeten nog bekendgemaakt worden door\nDisney+. We hopen in ieder geval op een geslaagde comeback."
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

const url = "src/content/nieuws/komen-de-muppets-eindelijk-terug.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/komen-de-muppets-eindelijk-terug.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/komen-de-muppets-eindelijk-terug.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
