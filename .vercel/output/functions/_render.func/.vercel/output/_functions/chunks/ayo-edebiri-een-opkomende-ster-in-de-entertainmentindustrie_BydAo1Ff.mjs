import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Ayo Edebiri keert ook terug in The Bear seizoen 3 en 4",
  "date": "2024-03-15T00:00:00.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/intro-1710455392.jpg",
  "trailer": "",
  "slug": "ayo-edebiri-keert-ook-terug-in-the-bear-seizoen-3-en-4",
  "draft": false,
  "tags": ["tv"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "toekomstige-projecten-en-erkenning",
    "text": "Toekomstige Projecten en Erkenning"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Ayo Edebiri, geboren op 3 oktober 1995, heeft de entertainmentwereld veroverd met haar veelzijdige talenten als actrice, komiek en scenarioschrijver. Met een achtergrond die haar roots heeft in Boston, Massachusetts, is ze uitgegroeid tot een bekende naam in zowel televisie als film."
    }), "\n", createVNode(_components.p, {
      children: "Edebiri keert ook in seizoen 3 van The Bear terug als Sydney Adamu. Naar verluidt worden seizoen drie en seizoen vier van de Emmy winnende reeks back-to-back opgenomen waardoor we niet lang zouden moeten wachten tussen de seizoenen."
    }), "\n", createVNode(_components.p, {
      children: "Vanaf haar debuut in de serie “Defectives” in 2014 tot haar recente optreden als gastvrouw bij Saturday Night Live, heeft Edebiri gestaag aan haar carrière gewerkt en zichzelf bewezen als een kracht om rekening mee te houden in de entertainmentindustrie."
    }), "\n", createVNode(_components.p, {
      children: "Haar doorbraak kwam met haar rol als Sydney Adamu in de hitserie “The Bear”, waarvoor ze lof heeft ontvangen en prestigieuze prijzen heeft gewonnen, waaronder een Golden Globe Award en een Primetime Emmy Award. Haar veelzijdigheid blijkt ook uit haar werk als schrijver en stemactrice in populaire programma’s zoals “Big Mouth” en “What We Do in the Shadows”."
    }), "\n", createVNode(_components.h2, {
      id: "toekomstige-projecten-en-erkenning",
      children: "Toekomstige Projecten en Erkenning"
    }), "\n", createVNode(_components.p, {
      children: "Naast haar succesvolle optredens op het kleine scherm heeft Edebiri zich ook laten gelden op het witte doek. Zo speelde ze in films als “Shithouse” en “Hello, Goodbye and Everything in Between”, waar haar talent en veelzijdigheid opnieuw werden bevestigd."
    }), "\n", createVNode(_components.p, {
      children: "Met een indrukwekkende lijst van projecten op haar naam, blijft Edebiri niet stilstaan. Ze zal binnenkort te zien zijn in de horrorfilm “Opus” naast John Malkovich en een rol spelen in James L. Brooks’s comedy film “Ella McCay”. Daarnaast zal ze Envy vertolken in de langverwachte Pixar-film “Inside Out 2”, die in 2024 zal worden uitgebracht."
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

const url = "src/content/nieuws/ayo-edebiri-een-opkomende-ster-in-de-entertainmentindustrie.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/ayo-edebiri-een-opkomende-ster-in-de-entertainmentindustrie.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/ayo-edebiri-een-opkomende-ster-in-de-entertainmentindustrie.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
