import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Neil Druckmann stopt als showrunner bij The Last of Us",
  "date": "2025-07-02T19:05:36.061Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1751482031.jpg",
  "trailer": "",
  "slug": "neil-druckmann-stopt-als-showrunner-bij-the-last-of-us",
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
      children: "Neil Druckmann, de mede-bedenker van de HBO-serie “The Last of Us”, gaat niet\nterugkeren als co-showrunner voor het derde seizoen. Hij maakte dit bekend via\neen verklaring op de Instagram-pagina van Naughty Dog, het bedrijf waar hij aan\nhet hoofd staat. De reden? Hij wil zich volledig richten op nieuwe projecten bij\nNaughty Dog, waaronder het schrijven en regisseren van het nieuwe spel\n“Intergalactic: The Heretic Prophet.”"
    }), "\n", createVNode(_components.p, {
      children: "Druckmann speelde een cruciale rol in de ontwikkeling van de serie. Hij was niet\nalleen co-showrunner, maar schreef ook de originele game uit 2013. Samen met\nCraig Mazin werkte hij aan de eerste twee seizoenen. Hij noemt het een eer om\nmet Mazin te hebben samengewerkt en is dankbaar voor het harde werk van de cast\nen crew die het verhaal naar televisie brachten."
    }), "\n", createVNode(_components.p, {
      children: "Met zijn vertrek wordt Mazin nu de enige showrunner voor seizoen 3. Druckmann\nblijft wel betrokken als co-creator en executive producer. Hij houdt dus\ninvloed, maar verliest de dagelijkse regie over de serie."
    }), "\n", createVNode(_components.p, {
      children: "Deze beslissing volgt op het tweede seizoen, dat gemengde reacties kreeg en een\nlichte daling in kijkcijfers liet zien. Dat seizoen baseerde zich sterk op “The\nLast of Us Part II”, een game die minder succesvol was dan de eerste."
    }), "\n", createVNode(_components.p, {
      children: "Mazin reageerde positief op het vertrek. Hij noemde de samenwerking een droom en\ngaf aan enthousiast te zijn over Druckmanns volgende stap. Mazin neemt nu de\nvolledige leiding over de productie."
    }), "\n", createVNode(_components.p, {
      children: "Druckmann regisseerde ook enkele iconische afleveringen. In seizoen 1 was dat\n“Infected”, waarin de wereldwijde virusuitbraak werd getoond, en in seizoen 2\n“The Price”, met een belangrijke terugblik op Joel en Ellie."
    }), "\n", createVNode(_components.p, {
      children: "Wij kijken uit naar het derde seizoen van “The Last of Us”, dat nu te streamen\nis op HBO Max."
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

const url = "src/content/nieuws/neil-druckmann-stopt-als-showrunner-bij-the-last-of-us.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/neil-druckmann-stopt-als-showrunner-bij-the-last-of-us.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/neil-druckmann-stopt-als-showrunner-bij-the-last-of-us.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
