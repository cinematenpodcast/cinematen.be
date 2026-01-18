import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Geen tweede seizoen voor Agatha All Along",
  "date": "2025-01-29T06:57:07.234Z",
  "soort": "tv",
  "thumbnail": "/images/article-images/l-intro-1738086883.jpg",
  "trailer": "",
  "slug": "geen-tweede-seizoen-voor-agatha-all-along",
  "tags": ["tv"]
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
      children: "Patti LuPone, die de rol van Lilia speelt in de serie Agatha All Along, heeft\nbevestigd dat er geen tweede seizoen komt. Tijdens een gesprek in de podcast van\nAndy Cohen vertelde ze dat de showrunner, Jac Schaeffer, haar had verteld dat\nhaar personage zou sterven aan het einde van het eerste seizoen. LuPone zei dat\nze had gehoopt op een vervolg, maar dat dat er niet zal komen."
    }), "\n", createVNode(_components.p, {
      children: "De serie, die zich richtte op Agatha Harkness, gespeeld door Kathryn Hahn, kwam\nvoort uit de populaire show WandaVision. Het idee was dat Agatha een eigen\nverhaal zou hebben, maar nu lijkt het erop dat het succes van het eerste seizoen\nniet genoeg was om een vervolg het groene licht te geven."
    }), "\n", createVNode(_components.p, {
      children: "De eerste (en enige) serie over Agatha Harkness, draait om een verhaallijn\nwaarin Agatha haar magische krachten verliest. Ze werkt samen met een jongen die\nhaar helpt om op een avontuurlijke reis te gaan. Samen met andere magische\nvrouwen vormen ze een heksencoven en moeten ze verschillende uitdagingen\noverwinnen. Ondanks enkele mindere momenten was dit toch één van de betere\nseries die Marvel tot nu heeft uitgebracht."
    }), "\n", createVNode(_components.p, {
      children: "Op dit moment blijft Agatha All Along beschikbaar om te streamen op Disney+, en\nwie de serie nog niet heeft gezien, kan de avonturen van Agatha en haar nieuwe\nvrienden nog wel bekijken."
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

const url = "src/content/nieuws/geen-tweede-seizoen-voor-agatha-all-along.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/geen-tweede-seizoen-voor-agatha-all-along.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/geen-tweede-seizoen-voor-agatha-all-along.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
