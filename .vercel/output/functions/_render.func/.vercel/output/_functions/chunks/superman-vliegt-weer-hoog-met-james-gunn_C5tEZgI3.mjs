import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Superman vliegt weer hoog met James Gunn",
  "date": "2025-07-14T21:14:43.449Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1752525795.jpg",
  "trailer": "",
  "slug": "superman-vliegt-weer-hoog-met-james-gunn",
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
      children: "De nieuwe Superman-film van James Gunn is net in de bioscoop en meteen een\nknaller. Als start van het nieuwe DC Universum haalde de film wereldwijd $220\nmiljoen binnen in zijn eerste weekend, waarvan $125 miljoen uit de Verenigde\nStaten. Dat is meer dan de vorige solo-film met Henry Cavill uit 2013, die toen\n$116,9 miljoen binnenhaalde."
    }), "\n", createVNode(_components.p, {
      children: "James Gunn zelf is opgetogen over dit succes. Op sociale media legt hij uit dat\nhij bewust koos voor een andere invalshoek dan eerdere filmmakers. In plaats van\nde donkere kanten van Superman te belichten, zette hij de vriendelijkheid en\ngoede eigenschappen van de held centraal. Een aanpak die wij duidelijk\nwaarderen, gezien het enthousiasme. De cijfers bevestigen dat: Rotten Tomatoes\ngeeft de film 83% goedkeuring en het publiekscijfer staat op 93%, terwijl\nCinemaScore een A- toekent."
    }), "\n", createVNode(_components.p, {
      children: "Opmerkelijk genoeg was het sinds 2013 wachten op een nieuwe solo-film over\nSuperman. Hoewel hij daarna wel verscheen in “Batman v Superman” en “Justice\nLeague”, stonden die nooit volledig in zijn teken. De timing van deze release\nkon bijna niet beter. Marvel-films presteerden recent wat minder, dus wij\nsmachtten naar een sterke superheldenblockbuster. En wat is er betrouwbaarder\ndan Superman?"
    }), "\n", createVNode(_components.p, {
      children: "Met een budget van ruim $200 miljoen is het belangrijk dat de film goed blijft\nlopen. Gelukkig is de concurrentie deze week beperkt, met enkel een nieuwe\nSmurfs-film en een reboot van “I Know What You Did Last Summer”. Specialisten\nverwachten dan ook een stevig tweede weekend."
    }), "\n", createVNode(_components.p, {
      children: "Alle ogen zijn nu gericht op de toekomst van het DC Universum. De volgende film\nwordt “Supergirl” in 2026, en Gunn heeft al plannen genoeg voor de lange\ntermijn. Door Superman weer optimistisch en hoopvol neer te zetten, heeft hij\nniet alleen de held nieuw leven ingeblazen maar ook een frisse start voor het\nhele DC Universum gemaakt. Wij zijn alvast benieuwd."
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

const url = "src/content/nieuws/superman-vliegt-weer-hoog-met-james-gunn.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/superman-vliegt-weer-hoog-met-james-gunn.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/superman-vliegt-weer-hoog-met-james-gunn.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
