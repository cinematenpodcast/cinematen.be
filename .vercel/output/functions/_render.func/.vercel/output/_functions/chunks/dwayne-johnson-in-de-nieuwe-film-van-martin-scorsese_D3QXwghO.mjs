import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Dwayne Johnson in de nieuwe film van Martin Scorsese",
  "date": "2025-02-21T06:43:17.032Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/Martin-Scorsese-and-Dwayne-Johnson.jpeg",
  "trailer": "",
  "slug": "dwayne-johnson-in-de-nieuwe-film-van-martin-scorsese",
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
      children: "Dwayne “The Rock” Johnson gaat samenwerken met de bekende regisseur Martin\nScorsese aan een film over de georganiseerde misdaad op Hawaii in de jaren ‘60\nen ‘70. In dit verhaal wil Johnson de rol van een echte gangsterman spelen die\nprobeert de controle over de Hawaiianse eilanden te krijgen, terwijl hij te\nmaken krijgt met andere criminelen."
    }), "\n", createVNode(_components.p, {
      children: "In deze film zal ook Leonardo DiCaprio een rol spelen, samen met Emily Blunt. De\nnieuwe film, die nog geen titel heeft, is gebaseerd op waargebeurde feiten en\nricht zich op de strijd tussen verschillende bendes op de eilanden."
    }), "\n", createVNode(_components.p, {
      children: "Het script voor de film is geschreven door Nick Bilton, die bekend is van een\nHBO-documentaire. Naast Scorsese, Johnson en de andere acteurs zullen ook\nmeerdere producers bij het project betrokken zijn. Scorsese staat bekend om zijn\nfilms over de maffia, zoals “Goodfellas” en “The Departed”."
    }), "\n", createVNode(_components.p, {
      children: "Johnson, DiCaprio en Blunt hebben zich in het verleden ingezet voor\nmilieuprojecten, zoals het beschermen van de Mauna Kea, een belangrijke berg op\nHawaii. De film zal ook laten zien hoe de maffia betrokken was bij het\nbeschermen van de eilanden tegen Amerikaanse zakelijke belangen."
    }), "\n", createVNode(_components.p, {
      children: "Dit project is anders dan andere films waarin Johnson eerder heeft gespeeld,\naangezien het een meer dramatische rol is. Johnson heeft in de loop der jaren\nvele actiehelden gespeeld, maar deze keer gaat hij zich in een serieuzere rol\nverdiepen."
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

const url = "src/content/nieuws/dwayne-johnson-in-de-nieuwe-film-van-martin-scorsese.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/dwayne-johnson-in-de-nieuwe-film-van-martin-scorsese.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/dwayne-johnson-in-de-nieuwe-film-van-martin-scorsese.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
