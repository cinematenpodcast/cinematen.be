import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Wicked For Good komt eraan!",
  "date": "2025-06-05T02:03:03.845Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1749086871.jpg",
  "trailer": "BRt-qexTWy4",
  "slug": "wicked-for-good-komt-eraan",
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
      children: "De nieuwe film ‘Wicked: For Good’ verschijnt op 21 november 2025 in de\nbioscopen. Dit is het vervolg op het eerste deel dat in november 2024 uitkwam.\nBeide films zijn geregisseerd door Jon M. Chu, die we kennen van ‘Crazy Rich\nAsians’ en ‘In the Heights’. De films zijn gebaseerd op de populaire\nBroadway-musical van Stephen Schwartz en Winnie Holzman."
    }), "\n", createVNode(_components.p, {
      children: "We zien opnieuw Cynthia Erivo als Elphaba en Ariana Grande als Glinda. Het\nverhaal speelt zich jaren na de gebeurtenissen van de eerste film af. Elphaba en\nGlinda staan nu tegenover elkaar in een strijd voor gerechtigheid in het\nmagische land Oz. De eerste teaser trailer toont Glinda in een prachtige witte\njurk, terwijl Elphaba vanaf een balkon in haar zwarte tovenaarsoutfit toekijkt.\nGlinda roept dat ze weet dat Elphaba daar is, waarop Elphaba antwoordt dat er\nvoor haar geen weg terug is."
    }), "\n", createVNode(_components.p, {
      children: "Naast Erivo en Grande keren Jonathan Bailey als Fiyero en Michelle Yeoh als\nMadame Morrible terug. In de teaser horen we fragmenten van iconische nummers\nzoals “No Good Deed” en het emotionele duet “For Good”. Deze nummers dragen\nsterk bij aan de diepte van de karakters."
    }), "\n", createVNode(_components.p, {
      children: "De eerste film was een groot succes. Hij bracht meer dan 114 miljoen dollar op\nin Noord-Amerika tijdens de eerste week en versloeg zelfs ‘Gladiator II’.\nCritici prezen de film en hij ontving meerdere Oscar-nominaties, waaronder Beste\nFilm en Beste Actrice voor Cynthia Erivo."
    }), "\n", createVNode(_components.p, {
      children: "Het creative team besloot het verhaal in twee films te splitsen omdat het te\ngroot was voor één film. Hierdoor kregen de karakters meer ruimte voor\nontwikkeling. Wij kijken uit naar de originele nummers die de filmervaring\nzullen versterken."
    }), "\n", createVNode(_components.p, {
      children: "De opnames voor ‘Wicked: For Good’ werden in delen gefilmd en waren al in\njanuari 2024 afgerond. Cynthia Erivo deelde dit nieuws op Instagram met een foto\nvan zichzelf op een bezemsteel als afscheid van haar rol. De teaser trailer\ngeeft ons nu al een voorproefje van de spannende verhaallijn waarin Elphaba en\nGlinda elkaar opnieuw kruisen."
    }), "\n", createVNode(_components.p, {
      children: "Met zijn sterke verhaal, prachtige muziek en geweldige cast hopen wij dat\n‘Wicked: For Good’ net zo’n impact maakt als zijn voorganger. Wij kijken vooral\nuit naar de emotionele confrontatie tussen deze twee iconische personages."
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

const url = "src/content/nieuws/wicked-for-good-komt-eraan.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/wicked-for-good-komt-eraan.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/wicked-for-good-komt-eraan.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
