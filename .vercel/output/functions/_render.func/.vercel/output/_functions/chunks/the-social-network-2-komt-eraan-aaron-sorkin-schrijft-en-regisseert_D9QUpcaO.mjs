import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "The Social Network 2 komt eraan Aaron Sorkin schrijft en regisseert!",
  "date": "2025-07-31T17:42:20.652Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1753982850.jpg",
  "trailer": "",
  "slug": "the-social-network-2-komt-eraan-aaron-sorkin-schrijft-en-regisseert",
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
      children: "“The Social Network”, dé film over Mark Zuckerberg en het ontstaan van Facebook\nuit 2010, krijgt een vervolg. Aaron Sorkin, de legendarische scenarist van de\noriginele film, keert terug om zowel het script te schrijven als de regie te\ndoen voor “The Social Network Part II”. Dit vervolg zal zich niet alleen op\nFacebook richten, maar vooral op de maatschappelijke impact van sociale media.\nHet verhaal is gebaseerd op “The Facebook Files”, een reeks artikelen uit de\nWall Street Journal in 2021 die de schaduwkanten van het platform belichtten,\nvooral rond politieke gebeurtenissen in de VS."
    }), "\n", createVNode(_components.p, {
      children: "Jeremy Strong, die we kennen als Kendall Roy uit “Succession”, is de\ntopkandidaat om Zuckerberg te spelen. Jesse Eisenberg, de originele vertolker,\nkeert niet terug. Daarnaast zijn er gesprekken met Jeremy Allen White en\nOscarwinnares Mikey Madison voor andere hoofdrollen. Opvallend: Zuckerbergs rol\nwordt kleiner dan in de eerste film. Het vervolg zoomt uit naar de bredere\ngevolgen van sociale netwerken."
    }), "\n", createVNode(_components.p, {
      children: "Hoewel Sorkin al tijden aan het vervolg werkt en zijn ideeën bijschaafde na\nrecente Facebook-ontwikkelingen, staat alles nog in de kinderschoenen. Er zijn\ngeen productie- of releasedata bekend. Wij herinneren ons dat de eerste film\nmaar liefst acht Oscarnominaties kreeg en er drie won, waaronder Beste\nAangepaste Scenario voor Sorkin. Dat succes verklaart waarom zoveel acteurs en\nfilmmakers graag met hem willen samenwerken."
    }), "\n", createVNode(_components.p, {
      children: "Wij kijken uit naar hoe deze sequel zich ontvouwt. Het onderwerp blijft brandend\nactueel, en Sorkins scherpe dialogen beloven opnieuw een meeslepend verhaal.\nMaar geduld is geboden: er moet nog heel wat gebeuren voor de film in de\nbioscoop verschijnt."
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

const url = "src/content/nieuws/the-social-network-2-komt-eraan-aaron-sorkin-schrijft-en-regisseert.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-social-network-2-komt-eraan-aaron-sorkin-schrijft-en-regisseert.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-social-network-2-komt-eraan-aaron-sorkin-schrijft-en-regisseert.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
