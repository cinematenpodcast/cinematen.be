import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "James Wan neemt Paranormal Activity onder zijn hoede",
  "date": "2025-12-04T21:01:27.536Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1764799188.jpg",
  "trailer": "",
  "slug": "james-wan-neemt-paranormal-activity-onder-zijn-hoede",
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
      children: "Er komt een nieuwe film in de Paranormal Activity-reeks en die krijgt een\nstevige boost. De horrorfilm wordt geproduceerd door twee zware namen: James\nWan, bekend van The Conjuring en Saw, en Jason Blum van het productiehuis\nBlumhouse. Hun bedrijven werken nu samen aan dit nieuwe project."
    }), "\n", createVNode(_components.p, {
      children: "De originele Paranormal Activity film uit 2007 werd gemaakt door Oren Peli met\neen minuscuul budget van slechts 15.000 dollar. Desondanks groeide het uit tot\neen wereldwijd fenomeen dat bijna 900 miljoen dollar opbracht over de hele reeks\nheen. Na de eerste film volgden er meerdere, waarvan de laatste, Paranormal\nActivity: Next of Kin, in 2021 rechtstreeks naar Paramount+ ging."
    }), "\n", createVNode(_components.p, {
      children: "Over deze nieuwe film is nog niet veel concreets bekend. We weten nog niet wat\nhet verhaal wordt, wie regisseert of wie het script schrijft. Wel is zeker dat\nhet een bioscoopfilm wordt, dus wij zullen er voor naar de zaal moeten trekken.\nDe makers benadrukken dat dit project nu een hoge prioriteit voor hen heeft."
    }), "\n", createVNode(_components.p, {
      children: "James Wan liet alvast weten een groot bewonderaar te zijn van de originele film.\nHij zegt: “Ik keek enorm op tegen de eerste film. Hij was langzaam en eng op een\nstille manier. Ik kijk ernaar uit om verder te gaan met wat deze serie begon.”\nOok Jason Blum is enthousiast: “Samen met James aan deze nieuwe film werken is\nprecies wat we wilden. We gaan iets meer geld uitgeven dan die 15.000 dollar van\nde eerste film. Maar één ding blijft hetzelfde: je moet de film niet alleen gaan\nkijken.”"
    }), "\n", createVNode(_components.p, {
      children: "Ook Oren Peli, de geestelijke vader van de reeks, en andere vertrouwde gezichten\nzoals Steven Schneider zijn betrokken als producenten."
    }), "\n", createVNode(_components.p, {
      children: "De timing voor een terugkeer lijkt logisch. Blumhouse heeft de laatste jaren een\npaar films afgeleverd die niet echt doorbraken qua opbrengsten. Terugkeren naar\neen bewezen, winstgevende franchise als Paranormal Activity, nu onder leiding\nvan een horrorvisionair als James Wan, voelt als een veilige en veelbelovende\nzet."
    }), "\n", createVNode(_components.p, {
      children: "Er is nog geen releasedatum bekend, dus wij moeten nog even geduld hebben. Maar\ndat er een nieuwe Paranormal Activity aankomt waar we beter niet alleen naartoe\ngaan, staat vast."
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

const url = "src/content/nieuws/james-wan-neemt-paranormal-activity-onder-zijn-hoede.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/james-wan-neemt-paranormal-activity-onder-zijn-hoede.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/james-wan-neemt-paranormal-activity-onder-zijn-hoede.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
