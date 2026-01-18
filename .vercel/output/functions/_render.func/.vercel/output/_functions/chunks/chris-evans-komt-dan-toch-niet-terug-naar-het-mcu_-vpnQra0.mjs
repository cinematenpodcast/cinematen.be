import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Chris Evans komt dan toch niet terug naar het MCU",
  "date": "2025-01-30T21:17:30.961Z",
  "soort": "film",
  "thumbnail": "/images/article-images/l-intro-1738255568.jpg",
  "trailer": "",
  "slug": "chris-evans-komt-dan-toch-niet-terug-naar-het-mcu",
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
      children: "Chris Evans, de acteur die bekend is als Captain America, heeft onlangs\ngereageerd op berichten over zijn mogelijke terugkeer in de Marvel Cinematic\nUniverse (MCU) voor de film “Avengers: Doomsday.” Sinds zijn laatste\nverschijning als Captain America in 2019’s “Avengers: Endgame,” zijn er al veel\ngeruchten geweest dat hij opnieuw in de rol zal kruipen. Evans vertelde dat deze\nverhalen niet waar zijn en dat hij met pensioen is. Hij zei dat zulke geruchten\nelke paar jaar opduiken sinds hij zijn laatste rol speelde en ook dit keer is\nhet niet waar."
    }), "\n", createVNode(_components.p, {
      children: "Anthony Mackie, die de nieuwe Captain America speelt, was verrast toen hij\nhoorde van de berichten over Evans. Hij vertelde dat hij met Evans had gesproken\nen dat er toen geen plannen waren voor een comeback. Mackie vroeg Evans direct\nof hij terug zou komen, en volgens Mackie vertelde Evans hem dat hij “gelukkig\nmet pensioen” is. Dit bevestigt dat er op dit moment geen officiële plannen zijn\nvoor Evans om terug te keren naar de MCU."
    }), "\n", createVNode(_components.p, {
      children: "Er zijn wel eerdere voorbeelden waarin acteurs, zoals Andrew Garfield, ontkenden\ndat ze terugkwamen in films, terwijl ze dat uiteindelijk wel deden. Dit soort\ngeheimhouding en dwaalsporen zijn vrij gebruikelijk bij Marvel. Het is duidelijk\ndat Chris Evans een geliefd figuur is voor fans van de MCU, en hoewel hij zegt\ndat hij met pensioen is, blijft het spannend om te zien wat Marvel in de\ntoekomst voor ons in petto heeft."
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

const url = "src/content/nieuws/chris-evans-komt-dan-toch-niet-terug-naar-het-mcu.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/chris-evans-komt-dan-toch-niet-terug-naar-het-mcu.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/chris-evans-komt-dan-toch-niet-terug-naar-het-mcu.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
