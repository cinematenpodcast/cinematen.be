import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "The Running Man remake een frisse start met Glen Powell?",
  "date": "2025-07-02T09:42:43.612Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1751392367.jpg",
  "trailer": "",
  "slug": "the-running-man-remake-een-frisse-start-met-glen-powell",
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
      children: "De remake van “The Running Man” is in de maak en de eerste trailer is net\nuitgekomen. Glen Powell neemt de hoofdrol van Ben Richards over, een gewone man\ndie meedoet aan een levensgevaarlijk spel om geld te verdienen voor zijn zieke\ndochter. Deze nieuwe versie is gebaseerd op Stephen King’s boek uit 1982."
    }), "\n", createVNode(_components.p, {
      children: "Ben Richards moet dertig dagen overleven terwijl hij wordt opgejaagd door\nprofessionele moordenaars. Alles wat hij doet wordt live uitgezonden in een\npopulaire tv-show. De producer, gespeeld door Josh Brolin, overtuigt Ben om mee\nte doen. Het lijkt een kans op veel geld, maar het spel is levensgevaarlijk."
    }), "\n", createVNode(_components.p, {
      children: "Edgar Wright, bekend van “Shaun of the Dead” en “Hot Fuzz”, regisseert deze\nremake. Hij is fan van de originele film uit 1987 met Arnold Schwarzenegger.\nSlimme verwijzingen naar dat origineel zitten erin verstopt, zoals beelden van\nSchwarzenegger op $100-biljetten."
    }), "\n", createVNode(_components.p, {
      children: "Stephen King was geen fan van de oude filmversie omdat Schwarzenegger volgens\nhem niet de ‘gewone man’ was die het personage moest zijn. Glen Powell lijkt\nhier beter bij te passen. Powell gaf zelf aan dat hij de verantwoordelijkheid\nvoelt om deze iconische rol nieuw leven in te blazen."
    }), "\n", createVNode(_components.p, {
      children: "De trailer toont een actievolle Ben Richards die gevaarlijke sprongen maakt en\nexplosies ontwijkt. Deze remake lijkt meer gericht op spanning en geweld, met\neen flinke dosis zwarte humor. Dat geeft een ander gevoel dan het campy en\nlichtvoetige origineel."
    }), "\n", createVNode(_components.p, {
      children: "Naast Powell en Brolin spelen William H. Macy, Emilia Jones en Michael Cera mee\nin de film. De release staat gepland voor 7 november 2025. Wij kijken uit naar\nwat Edgar Wright met dit verhaal doet. Het is een moderne versie van een verhaal\ndat al tientallen jaren meegaat, met nieuwe technologie en ideeën. Met een sterk\nverhaal en sterke cast belooft dit veel kijkplezier."
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

const url = "src/content/nieuws/the-running-man-remake-een-frisse-start-met-glen-powell.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-running-man-remake-een-frisse-start-met-glen-powell.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-running-man-remake-een-frisse-start-met-glen-powell.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
