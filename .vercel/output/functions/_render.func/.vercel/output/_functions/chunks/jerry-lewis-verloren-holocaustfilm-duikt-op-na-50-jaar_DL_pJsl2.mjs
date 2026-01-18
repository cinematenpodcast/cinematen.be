import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Jerry Lewis' verloren Holocaust-film duikt op na 50 jaar",
  "date": "2025-05-31T13:03:12.460Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1748540485.jpg",
  "trailer": "",
  "slug": "jerry-lewis-verloren-holocaustfilm-duikt-op-na-50-jaar",
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
      children: "Jerry Lewis maakte in 1972 “The Day the Clown Cried”, een film over een Duitse\nclown in een concentratiekamp die kinderen vermaakt en uiteindelijk naar hun\ndood leidt. De film is nooit officieel uitgebracht omdat Lewis ontevreden was en\nhem opborg in een kluis."
    }), "\n", createVNode(_components.p, {
      children: "Sinds de jaren ‘70 heeft niemand de volledige film gezien, wat hem tot een\nlegende maakte in de filmgeschiedenis. In 2023 onthulde Zweedse acteur Hans\nCrispin dat hij een volledige versie bezit. Hij stal de film in 1980 van\nproductiebedrijf Europafilm, maakte een VHS-kopie en bewaarde die in een\nbankkluis. Crispin liet de film in het geheim aan vrienden zien, maar wil hem nu\nbreder toegankelijk maken. Hij verklaarde: “Het moet gezien worden!”"
    }), "\n", createVNode(_components.p, {
      children: "Het onderwerp is extreem gevoelig: komedie gecombineerd met de Holocaust. Lewis\nhad zelf gemengde gevoelens en critici gaven tegenstrijdige reacties. Er waren\nook juridische problemen omdat Lewis geen toestemming had voor de film. Toen hij\nin 2017 overleed, gaf hij zijn materiaal aan de Library of Congress, maar dat\nbleek onvolledig."
    }), "\n", createVNode(_components.p, {
      children: "Crispin hoopt zijn versie te verkopen aan een producent voor restauratie met\nnieuwe technologie. Wij zijn hoopvol dat we eindelijk deze legendarische film\nkunnen zien. Het blijft een mysterie dat besproken moet worden."
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

const url = "src/content/nieuws/jerry-lewis-verloren-holocaustfilm-duikt-op-na-50-jaar.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jerry-lewis-verloren-holocaustfilm-duikt-op-na-50-jaar.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jerry-lewis-verloren-holocaustfilm-duikt-op-na-50-jaar.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
