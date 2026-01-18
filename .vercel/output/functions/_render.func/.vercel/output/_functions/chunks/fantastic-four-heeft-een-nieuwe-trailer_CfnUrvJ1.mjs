import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Fantastic Four heeft een nieuwe trailer",
  "date": "2025-04-18T10:00:53.984Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1744910499.jpg",
  "trailer": "pAsmrKyMqaA",
  "slug": "fantastic-four-heeft-een-nieuwe-trailer",
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
      children: "De nieuwe film van Marvel, “The Fantastic Four: First Steps”, heeft zijn eerste\nvolledige trailer uitgebracht. In deze film komen de bekende superhelden van de\nFantastic Four weer op het witte doek, met een focus op Reed Richards, beter\nbekend als Mr. Fantastic, deze keer gespeeld door Pedro Pascal. Wij zijn\nnieuwsgierig naar hoe zijn speciale kracht om te rekken en te vervormen eruit\nzal zien, vooral omdat dit nog niet eerder zo goed is gedaan in films."
    }), "\n", createVNode(_components.p, {
      children: "In de trailers zien we ook andere leden van het team. Johnny Storm, de Human\nTorch, en Sue Storm, die de onzichtbare vrouw wordt, zijn te zien terwijl ze hun\nkrachten gebruiken. The Thing, een sterke rotsachtige held. In de eerste teaser\nwerd Reed niet echt getoond terwijl hij zijn krachten gebruikte. De recente\ntrailer laat nu echter zien dat Reed wel degelijk zijn krachten gebruikt, ook al\nzien we het maar voor heel eventjes."
    }), "\n", createVNode(_components.p, {
      children: "Het is duidelijk dat Marvel veel aandacht heeft besteed aan de visuele effecten\nin deze film. Wij waren bezorgd dat wij teleurgesteld zouden worden met hoe\nReed’s krachten eruit zouden zien, vooral omdat er in het verleden minder\ngeslaagde pogingen zijn gedaan om deze krachten realistisch te laten lijken. De\nnieuwe trailer laat echter zien dat Reed in een spannende scène te zien is\nterwijl hij zijn lichaam uitrekt om onder vallend puin door te glijden.\nVoorlopig ziet het er allemaal wel degelijk uit."
    }), "\n", createVNode(_components.p, {
      children: "De film speelt zich af in een alternatieve realiteit, die er retro-futuristisch\nuitziet en sterk doet denken aan de jaren ‘60. Dit sluit mooi aan bij de\noorsprong van de Fantastic Four in de strips. Het verhaal biedt een kans om de\nklassieke uitstraling en het gevoel van de strips naar het witte doek te\nbrengen."
    }), "\n", createVNode(_components.p, {
      children: "Er is veel buzz over de film, vooral omdat het Marvel Cinematic Universe (MCU)\nin de laatste jaren niet altijd zo succesvol is geweest. Dit maakt het\nbelangrijker voor Marvel om een sterke eerste indruk te maken met “The Fantastic\nFour: First Steps”."
    }), "\n", createVNode(_components.p, {
      children: "Naast Reed’s krachten leren we ook dat Sue Storm zwanger is en we krijgen kansen\nom te zien hoe de wereld deze superhelden ziet en wat hun rol is in de\nsamenleving. Allemaal zeer veelbelovend."
    }), "\n", createVNode(_components.p, {
      children: "Deze film zal op 25 juli 2025 in de bioscoop te zien zijn."
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

const url = "src/content/nieuws/fantastic-four-heeft-een-nieuwe-trailer.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/fantastic-four-heeft-een-nieuwe-trailer.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/fantastic-four-heeft-een-nieuwe-trailer.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
