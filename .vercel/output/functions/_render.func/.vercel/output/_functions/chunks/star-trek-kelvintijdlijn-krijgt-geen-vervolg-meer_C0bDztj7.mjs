import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Star Trek Kelvin-tijdlijn krijgt geen vervolg meer",
  "date": "2025-11-04T20:16:14.231Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1762284655.jpg",
  "trailer": "",
  "slug": "star-trek-kelvintijdlijn-krijgt-geen-vervolg-meer",
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
      children: "Het ziet er naar uit dat we afscheid moeten nemen van de Star Trek films met de\nacteurs die we de afgelopen jaren zo goed leerden kennen. Paramount heeft\nbesloten de plannen voor een vierde film stop te zetten, wat betekent dat Chris\nPine, Zachary Quinto, Zoe Saldana en de rest van de crew niet meer terugkeren."
    }), "\n", createVNode(_components.p, {
      children: "Deze films speelden zich af in de zogenaamde Kelvin-tijdlijn en omvatten drie\navonturen: “Star Trek” uit 2009, “Star Trek: Into Darkness” uit 2013 en “Star\nTrek Beyond” uit 2016. Hierin zagen we bekende acteurs als jonge versies van de\niconische personages uit de originele serie."
    }), "\n", createVNode(_components.p, {
      children: "De problemen voor een vierde film begonnen eigenlijk al bij de tegenvallende\nfinanciële resultaten van “Star Trek Beyond” in 2016. Daarna kwam de studio maar\nniet uit de startblokken voor een vervolg. Er passeerden verschillende\nregisseurs de revue die allemaal afhaakten - eerst Quentin Tarantino, toen\niemand die Chris Hemsworth wilde terugbrengen als Kirks vader, en uiteindelijk\nook Matt Shakman die voor een ander project koos."
    }), "\n", createVNode(_components.p, {
      children: "In een groot artikel over de nieuwe baas van Paramount werd duidelijk dat de\nstudio wel nieuwe Star Trek films wil maken, maar dan met volledig nieuwe\nacteurs en een nieuw verhaal. De geplande releasedatum voor “Star Trek 4” in\ndecember 2023 is inmiddels volledig van de kalender geschrapt."
    }), "\n", createVNode(_components.p, {
      children: "Paramount werkt wel aan een andere Star Trek film die zich afspeelt bij het\nbegin van de United Federation of Planets, na de serie “Star Trek: Enterprise”\nmaar voor de allereerste Star Trek serie. Toby Haynes, bekend van “Andor”, zal\nregisseren en Seth Grahame-Smith schrijft het script."
    }), "\n", createVNode(_components.p, {
      children: "Op televisie gaat het gelukkig wel goed met Star Trek dankzij de verschillende\nseries op Paramount+, maar in de bioscoop moeten we dus nog even geduld hebben.\nEn wanneer er een nieuwe film komt, zal dat met een compleet nieuwe cast en\nverhaallijn zijn."
    }), "\n", createVNode(_components.p, {
      children: "Voor ons als fans van de films met Chris Pine als Kirk en Zachary Quinto als\nSpock is dit natuurlijk jammer nieuws. We houden in ieder geval mooie\nherinneringen over aan drie films vol ruimte-avonturen met deze acteurs."
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

const url = "src/content/nieuws/star-trek-kelvintijdlijn-krijgt-geen-vervolg-meer.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/star-trek-kelvintijdlijn-krijgt-geen-vervolg-meer.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/star-trek-kelvintijdlijn-krijgt-geen-vervolg-meer.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
