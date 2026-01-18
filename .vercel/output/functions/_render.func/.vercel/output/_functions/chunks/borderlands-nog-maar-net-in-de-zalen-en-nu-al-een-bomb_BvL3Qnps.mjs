import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Borderlands nog maar net in de zalen en nu al een bomb",
  "date": "2024-08-08T10:33:28.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1723046933.jpg",
  "trailer": "",
  "slug": "borderlands-de-teleurstelling-van-een-video-game-verfilming",
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
      children: "De afgelopen dagen zijn de eerste reacties op de langverwachte “Borderlands” film van Eli Roth binnengekomen, en ze vertellen allemaal hetzelfde verhaal: teleurstelling. De bekende video game franchise “Borderlands” leek een uitdagende maar potentiële bron voor een succesvolle filmadaptatie, maar de werkelijkheid lijkt anders uit te pakken."
    }), "\n", createVNode(_components.p, {
      children: "Na de wereldpremière op 6 augustus in Los Angeles, uitten critici en kijkers hun ongenoegen op sociale media over de actiefilm van Eli Roth. De termen “baffling,” “uninspired,” en zelfs “an abomination” werden gebruikt om de film te beschrijven. Hoewel enkele lofuitingen naar voren kwamen voor de centrale prestaties van Cate Blanchett, Jack Black en Ariana Greenblatt, bleef de algehele teneur van de reacties negatief."
    }), "\n", createVNode(_components.p, {
      children: "Critici bekritiseren vooral het ontbreken van diepgang in het plot, de matige CGI-effecten, en het geforceerde en flauwe karakter van de humor."
    }), "\n", createVNode(_components.p, {
      children: "Met een PG-13 rating lijkt de film te worstelen met zijn identiteit, wat resulteert in een geforceerde poging tot een fantasievolle ruimteavontuur."
    }), "\n", createVNode(_components.p, {
      children: "De cast, met namen als Kevin Hart, Edgar Ramírez, Florian Munteanu, Gina Gershon en Jamie Lee Curtis, levert solide werk af, maar kan niet voorkomen dat de film als voorspelbaar en bijna onkijkbaar wordt bestempeld."
    }), "\n", createVNode(_components.p, {
      children: "“Borderlands” had alle ingrediënten voor een succesvolle videospelverfilming met een sterrencast en ervaren regisseur, maar helaas heeft het de filmcritici en het publiek niet weten te overtuigen. De verfilming lijkt vast te zitten tussen verschillende stijlen en kwaliteiten, resulterend in een product dat meer vragen oproept dan beantwoordt."
    }), "\n", createVNode(_components.p, {
      children: "Het is duidelijk dat “Borderlands” niet heeft kunnen voldoen aan de hoge verwachtingen die het franchise met zich meebracht. De toekomst van deze film als startpunt voor een mogelijke franchise lijkt twijfelachtig gezien de uitgesproken teleurstelling die heerst onder critici en kijkers."
    }), "\n", createVNode(_components.p, {
      children: "Wij zien er alvast naar uit om deze film te bekijken en onze eigen mening te droppen op Cinematen.be of in de Cinematen podcast!"
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

const url = "src/content/nieuws/borderlands-nog-maar-net-in-de-zalen-en-nu-al-een-bomb.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/borderlands-nog-maar-net-in-de-zalen-en-nu-al-een-bomb.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/borderlands-nog-maar-net-in-de-zalen-en-nu-al-een-bomb.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
