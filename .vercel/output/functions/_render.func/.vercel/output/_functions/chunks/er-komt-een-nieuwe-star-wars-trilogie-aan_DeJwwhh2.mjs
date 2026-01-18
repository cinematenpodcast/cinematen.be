import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Er komt een nieuwe Star Wars trilogie aan",
  "date": "2024-11-07T18:28:00.247Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1731000709.jpg",
  "trailer": "",
  "slug": "er-komt-een-nieuwe-star-wars-trilogie-aan",
  "tags": ["film"]
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
      children: "Star Wars-fans rejoice!! Er zijn grote plannen voor nieuwe films in het Star\nWars-universum. Lucasfilm werkt aan een hele nieuwe trilogie, wat betekent dat\ner drie nieuwe films kunnen komen. Simon Kinberg, die bekend is van andere\npopulaire films en series zoals “Deadpool” en “Star Wars Rebels”, gaat helpen\nbij het maken van deze nieuwe films."
    }), "\n", createVNode(_components.p, {
      children: "Er zijn nog niet veel details bekend over het verhaal van deze films. Sommige\nmensen denken dat deze trilogie verder gaat met het verhaal na “Star Wars:\nEpisode IX – The Rise of Skywalker”, terwijl anderen geloven dat het misschien\neen totaal nieuw verhaal wordt."
    }), "\n", createVNode(_components.p, {
      children: "Daarnaast hebben we ook te horen gekregen dat Daisy Ridley, die Rey speelt,\nterugkomt in een nieuwe film die zich richt op haar training van een nieuw\ngroepje Jedi. Volgens ons is Rey niet het beste personage om mee verder te gaan,\nmaar beggars can’t be choosers!"
    }), "\n", createVNode(_components.p, {
      children: "Toch zijn er in het verleden veel plannen geweest voor Star Wars-films die nooit\nzijn gemaakt. Rian Johnson kreeg ooit de kans om een trilogie te maken, maar dat\nging niet door. Ook andere filmprojecten werden stopgezet. Dit maakt het\nmoeilijk om nu al echt te weten welke films er echt gaan komen."
    }), "\n", createVNode(_components.p, {
      children: "Wat we wel weten is dat Jon Favreau en Dave Filoni, die bekend zijn van “The\nMandalorian”, ook werken aan nieuwe Star Wars-projecten. De film “The\nMandalorian en Grogu” is gepland voor 22 mei 2026. Dit zal een grote terugkeer\nnaar de bioscoop zijn voor Star Wars en geeft ons toch iets om naar uit te\nkijken."
    }), "\n", createVNode(_components.p, {
      children: "Kortom, de toekomst van Star Wars ziet er spannend uit met nieuwe films en\nverhalen die in de maak zijn. Maar we moeten geduldig wachten en zien wat\nLucasfilm voor ons in petto heeft."
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

const url = "src/content/nieuws/er-komt-een-nieuwe-star-wars-trilogie-aan.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/er-komt-een-nieuwe-star-wars-trilogie-aan.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/er-komt-een-nieuwe-star-wars-trilogie-aan.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
