import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Daniel Radcliffe speelt binnenkort misschien Clayface",
  "date": "2025-03-06T12:43:13.797Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/daniel-radcliffe-clayface.jpg",
  "trailer": "",
  "slug": "daniel-radcliffe-speelt-binnenkort-misschien-clayface",
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
      children: "Er is veel buzz over de aankomende Clayface film van DC Studios, die snel op\ngang komt. De film zal worden geregisseerd door James Watkins en geschreven door\nMike Flanagan. Als je niet bekend bent met Clayface, hij is een bekende schurk\nuit de Batman verhalen. De film is gepland om in de bioscoop te komen op 11\nseptember 2026."
    }), "\n", createVNode(_components.p, {
      children: "Clayface gaat over Basil Karlo, een acteur die een geheimzinnig goedje in\nzichzelf injecteert om zijn carrière een oppepper te geven. Dit leidt tot een\ngruwelijke verandering waarbij zijn lichaam verandert in een soort klei. Dit\nverhaal zal worden neergezet als een horror film, wat goed past bij Flanagan’s\nstijl, aangezien hij bekend is met het maken van spannende films en series. Hij\nheeft in het verleden gewerkt aan dingen zoals The Haunting of Hill House en\nMidnight Mass."
    }), "\n", createVNode(_components.p, {
      children: "Er zijn geruchten dat Daniel Radcliffe, de acteur die beroemd werd door de Harry\nPotter films, in aanmerking komt voor de rol van Clayface. Sommige mensen denken\ndat hij goed zou passen bij de rol, terwijl anderen vinden dat Clayface\nmisschien een oudere acteur nodig heeft."
    }), "\n", createVNode(_components.p, {
      children: "De film heeft een budget van 40 miljoen dollar en sommige vergelijken hem nu al\nmet de film Joker, die veel lof. De Clayface film is een van de eerste grote\nprojecten in de nieuwe DC Universe, die een frisse start probeert te maken voor\nDC films na eerdere inconsistenties. Dit kan ook helpen om nieuwe fans te\ntrekken, vooral als Radcliffe, een bekende naam, de hoofdrol speelt."
    }), "\n", createVNode(_components.p, {
      children: "Dit is niet de eerste keer dat Clayface in de DC wereld verschijnt. Hij had al\neen rol in de geanimeerde serie Creature Commandos, waar hij werd ingesproken\ndoor Alan Tudyk. Ook al is dit castingnieuws voorlopig nog een gerucht, het zou\nons dus wel verrassen want James Gunn beweerde dat de stemacteurs uit Creature\nCommandos’s ook de life action versies van hun personages zouden spelen in de\nkomende jaren. Dat zou dus betekenen dat Tudyk eigenlijk de rol zou moeten\nspelen."
    }), "\n", createVNode(_components.p, {
      children: "Hoe dan ook zien we wel uit naar dit project. De aankomende film belooft\ndreigende en spannende elementen die typerend zijn voor het werk van Flanagan."
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

const url = "src/content/nieuws/daniel-radcliffe-speelt-binnenkort-misschien-clayface.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/daniel-radcliffe-speelt-binnenkort-misschien-clayface.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/daniel-radcliffe-speelt-binnenkort-misschien-clayface.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
