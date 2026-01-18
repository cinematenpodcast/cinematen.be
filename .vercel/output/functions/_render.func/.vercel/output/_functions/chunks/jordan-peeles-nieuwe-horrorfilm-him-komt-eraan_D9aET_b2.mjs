import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Jordan Peele's nieuwe horrorfilm Him komt eraan!",
  "date": "2025-09-14T01:13:20.257Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1757538256.jpg",
  "trailer": "",
  "slug": "jordan-peeles-nieuwe-horrorfilm-him-komt-eraan",
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
      children: "Jordan Peele is een bekende naam in de horrorwereld. Hij brak door met zijn film\nGet Out, die wij massaal goed vonden en die zelfs een Oscar won. Daarna volgden\nandere enge films zoals Us en Nope. Tegenwoordig werkt hij niet alleen als\nregisseur maar ook als producer, waarbij hij andere regisseurs ondersteunt."
    }), "\n", createVNode(_components.p, {
      children: "Zijn nieuwste project is de horrorfilm Him, geregisseerd door Justin Tipping\nmaar geproduceerd door Peele zelf. De film draait in de bioscoop vanaf 19\nseptember 2025 en gaat over een American football-speler die na een blessure\ngaat trainen bij een andere speler op een afgelegen locatie, waar rare en enge\ndingen beginnen gebeuren."
    }), "\n", createVNode(_components.p, {
      children: "Universal, de filmmaatschappij achter Him, hoopt flink wat geld te verdienen met\nde release. Omdat de film uitkomt rond het American football-seizoen en vlak\nvoor Halloween, verwachten wij dat veel mensen hem zullen willen zien. De\nschattingen voor het openingsweekend liggen tussen 17 en 27 miljoen dollar.\nAndere films die in dezelfde periode uitkomen, zoals een film met Colin Farrell\nen Margot Robbie, worden minder hoog ingeschat."
    }), "\n", createVNode(_components.p, {
      children: "Eerdere films van Peele waren erg succesvol. Get Out kostte slechts 4,5 miljoen\ndollar om te maken maar bracht meer dan 33 miljoen dollar op in het eerste\nweekend en stond zeven dagen op nummer één. Us was eveneens een hit en stond een\ntijdje op Netflix."
    }), "\n", createVNode(_components.p, {
      children: "Horrorfilms met een klein budget kunnen vaak grote winsten maken. The Purge\nkostte 3 miljoen dollar maar bracht 34 miljoen op in het eerste weekend. Saw\nkostte amper 1,2 miljoen dollar en verdiende 18 miljoen dollar. Paranormal\nActivity is een extreem voorbeeld: de film kostte maar 15.000 dollar en groeide\nuit tot een gigantisch succes, met meerdere vervolgen."
    }), "\n", createVNode(_components.p, {
      children: "Met Him hopen wij dat Peele opnieuw weet wat mensen eng vinden. Zijn timing,\nrond Halloween en het football-seizoen, is perfect. Wij kijken uit naar de\nrelease en zijn benieuwd of Him aan de hoge verwachtingen kan voldoen."
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

const url = "src/content/nieuws/jordan-peeles-nieuwe-horrorfilm-him-komt-eraan.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jordan-peeles-nieuwe-horrorfilm-him-komt-eraan.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jordan-peeles-nieuwe-horrorfilm-him-komt-eraan.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
