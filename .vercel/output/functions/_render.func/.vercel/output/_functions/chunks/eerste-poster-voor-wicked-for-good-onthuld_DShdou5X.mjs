import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Eerste poster voor Wicked For Good onthuld",
  "date": "2025-03-31T18:51:57.647Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/Wickedforgood.jpg",
  "trailer": "",
  "slug": "eerste-poster-voor-wicked-for-good-onthuld",
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
      children: "“Wicked: For Good” is de veel verwachte opvolger van de succesvolle musicalfilm\n“Wicked”. Deze nieuwe film komt in de bioscoop op 21 november 2025. Het verhaal\ndraait om de personages Elphaba, gespeeld door Cynthia Erivo, en Glinda,\ngespeeld door Ariana Grande."
    }), "\n", createVNode(_components.p, {
      children: "De eerste film, “Wicked”, was een groot succes. Het heeft meer dan 640 miljoen\ndollar opgebracht en is daarmee de hoogste omzet van alle Broadway-adaptaties\ntot nu toe. De film heeft verschillende prijzen gewonnen, waaronder Oscars."
    }), "\n", createVNode(_components.p, {
      children: "De makers hebben net de eerste poster gedeeld. Deze laat zien hoe Elphaba en\nGlinda eruitzien in de nieuwe film. We kunnen zien dat de personages wel wat\nzijn veranderd, Elphaba heeft een nieuwe leren outfit, terwijl Glinda in een\nprachtige jurk verschijnt. Ze staan ook aan weerszijden van een ravijn. De twee\nactrices hebben ook hints gegeven over de ontwikkeling van hun personages en de\nuitdagingen die ze zullen tegenkomen."
    }), "\n", createVNode(_components.p, {
      children: "Director Jon M. Chu heeft aangekondigd dat de film niet alleen verder gaat met\nhet verhaal van Elphaba en Glinda, maar dat er ook mogelijk verwikkelingen met\nDorothy uit “The Wizard of Oz” zullen zijn. Hij heeft echter niet bevestigd hoe\ngroot haar rol zal zijn in deze opvolger."
    }), "\n", createVNode(_components.p, {
      children: "De opnames van de twee films zijn back-to-back gedaan. Dit betekent dat de\nmakers meteen met beide films aan de slag zijn gegaan. Daarom moeten we nu\nminder lang wachten op de vervolgfilm."
    }), "\n", createVNode(_components.p, {
      children: "Er zijn al veel geruchten dat Universal Pictures plannen maakt voor spin-offs en\nnieuwe projecten rondom “Wicked”. De populariteit van de eerste film heeft de\nstudio overtuigd dat er meer in dit verhaal zit. Dit zou kunnen betekenen dat\nwij in de toekomst nog meer van deze wereld kunnen zien."
    }), "\n", createVNode(_components.p, {
      children: "We kijken ernaar uit om terug te keren naar het magische verhaal dat ons heeft\nbetoverd en we zijn benieuwd hoe het verhaal tot een conclusie zal komen."
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

const url = "src/content/nieuws/eerste-poster-voor-wicked-for-good-onthuld.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/eerste-poster-voor-wicked-for-good-onthuld.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/eerste-poster-voor-wicked-for-good-onthuld.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
