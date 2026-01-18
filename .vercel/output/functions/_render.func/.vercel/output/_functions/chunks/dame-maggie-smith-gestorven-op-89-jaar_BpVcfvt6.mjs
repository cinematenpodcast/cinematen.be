import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Dame Maggie Smith gestorven op 89 jaar",
  "date": "2024-09-27T15:39:52.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1727443632.jpg",
  "trailer": "",
  "slug": "dame-maggie-smith-een-leven-gewijd-aan-de-kunst",
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
      children: "Dame Maggie Smith, een legendarische Britse actrice die bekend stond om haar iconische rollen in de Harry Potter-films en Downton Abbey, is op 89-jarige leeftijd overleden. Het trieste nieuws werd bevestigd door haar zonen, Toby Stephens en Chris Larkin, die aankondigden dat zij vredig in het ziekenhuis overleed. Smith, met een indrukwekkende carrière die begon in het theater en uitmondde in internationaal succes op het grote scherm, heeft generaties geboeid met haar talent en charisma."
    }), "\n", createVNode(_components.p, {
      children: "Gedurende haar ruim acht decennia durende carrière heeft Maggie Smith de harten van velen veroverd met haar onmiskenbare talent en veelzijdigheid als actrice. Haar eerste Bafta-nominatie ontving ze in 1958 voor de film “Nowhere to Go.” Ze brak door in de jaren ‘60 met haar rol als Desdemona tegenover Laurence Olivier’s Othello, zowel op het toneel als later in de filmadaptatie. Dit leverde haar haar eerste Oscar-nominatie op, een van vele die zouden volgen."
    }), "\n", createVNode(_components.p, {
      children: "Smith excelleerde niet alleen in dramatische rollen, maar bewees ook haar komische talent in films zoals “Murder by Death” en “Gosford Park,” waarin ze schitterde te midden van een sterrencast. Naast haar filmwerk was ze een prominente figuur in het theater, met memorabele optredens in stukken als “A German Life.”"
    }), "\n", createVNode(_components.p, {
      children: "Maggie Smith, die in 1990 tot Dame werd benoemd door Queen Elizabeth II en later in 2014 tot Companion of Honour werd gekroond, heeft talloze prijzen en erkenningen ontvangen voor haar bijdragen aan de kunsten. Met twee Oscars, acht Bafta Awards, en talloze andere onderscheidingen, laat ze een blijvende erfenis achter in de wereld van entertainment."
    }), "\n", createVNode(_components.p, {
      children: "Haar meest recente rollen in de “Harry Potter” franchise en “Downton Abbey” hebben haar geliefd gemaakt bij een nieuwe generatie kijkers, terwijl haar eerdere werk in klassiekers als “The Prime of Miss Jean Brodie” en “California Suite” haar status als een van ‘s werelds meest getalenteerde actrices bevestigde."
    }), "\n", createVNode(_components.p, {
      children: "In de loop der jaren heeft Maggie Smith keer op keer bewezen dat ze een ongeëvenaarde kracht was in zowel drama als komedie. Haar nalatenschap zal voortleven in de harten van velen die haar bewonderden en geïnspireerd raakten door haar uitzonderlijke talent en toewijding aan haar ambacht."
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

const url = "src/content/nieuws/dame-maggie-smith-gestorven-op-89-jaar.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/dame-maggie-smith-gestorven-op-89-jaar.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/dame-maggie-smith-gestorven-op-89-jaar.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
