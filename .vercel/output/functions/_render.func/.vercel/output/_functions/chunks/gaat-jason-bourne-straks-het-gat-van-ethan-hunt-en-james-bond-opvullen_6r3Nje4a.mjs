import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Gaat Jason Bourne straks het gat van Ethan Hunt en James Bond opvullen?",
  "date": "2025-03-24T06:48:40.880Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/M8DBOID_EC001-EMBED-2024.jpg",
  "trailer": "",
  "slug": "gaat-jason-bourne-straks-het-gat-van-ethan-hunt-en-james-bond-opvullen",
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
      children: "Jason Bourne, de bekende spion, is een personage dat alom bekend maar vaak\nvergeten is. Hij verscheen voor het eerst in de film “The Bourne Identity” in\n2002, gebaseerd op het boek van Robert Ludlum. Dit was het begin van een\nsuccesvolle filmreeks. In totaal zijn er meerdere films gemaakt met Bourne,\ngespeeld door Matt Damon. Deze films volgden Bourne terwijl hij zijn geheugen\nprobeerde te herstellen en tegelijkertijd mensen moest uitschakelen die hem\nachterna zaten."
    }), "\n", createVNode(_components.p, {
      children: "Nu, bijna tien jaar na de laatste film “Jason Bourne” in 2016, zijn er\nveranderingen gaande. De rechten van de Jason Bourne films zijn nu beschikbaar.\nVerschillende bedrijven zoals Skydance, Apple en Netflix hebben interesse\ngetoond. Ze willen kijken of ze Bourne kunnen terugbrengen op het scherm."
    }), "\n", createVNode(_components.p, {
      children: "Universal, het bedrijf dat eerder Bourne films maakte, kan ook misschien de\nrechten terugkopen als ze een goed bod doen. Over de betrokkenheid van Matt\nDamon bij een nieuwe film is nog niets zeker. De franchise kan nu een nieuwe\nrichting inslaan, waardoor een nieuwe Jason Bourne misschien een nieuw publiek\nkan bereiken."
    }), "\n", createVNode(_components.p, {
      children: "Er zijn dus nog veel vragen. Gaan wij opnieuw naar de cinema om Bourne aan het\nwerk te zien? Of zal hij alleen op een streamingdienst verschijnen?"
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

const url = "src/content/nieuws/gaat-jason-bourne-straks-het-gat-van-ethan-hunt-en-james-bond-opvullen.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/gaat-jason-bourne-straks-het-gat-van-ethan-hunt-en-james-bond-opvullen.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/gaat-jason-bourne-straks-het-gat-van-ethan-hunt-en-james-bond-opvullen.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
