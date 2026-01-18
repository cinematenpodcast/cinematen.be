import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Jeffrey Wright speelt mee in The Last of Us seizoen 2",
  "date": "2024-05-25T10:43:01.000Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/intro-1716576264.jpg",
  "trailer": "",
  "slug": "jeffrey-wright-keert-terug-naar-the-last-of-us-universe",
  "tags": ["tv", "casting"]
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
      children: "De veelgeprezen acteur Jeffrey Wright, bekend van zijn indrukwekkende acteerprestaties in verschillende films en series, heeft onlangs bevestigd dat hij zal terugkeren naar het universum van “The Last of Us”. Wright zal de rol van Isaac vertolken, een krachtige leider van een militie die in een voortdurende oorlog verwikkeld raakt met een geduchte vijand. Deze rol speelde hij eerder in de video game versie “The Last of Us Part II” waar de serie op gebaseerd is. Het is duidelijk dat Wrights veelzijdigheid en talent opnieuw zullen schitteren in dit ambitieuze project."
    }), "\n", createVNode(_components.p, {
      children: "Naast Jeffrey Wright zullen ook andere bekende gezichten terugkeren naar het scherm in het vervolg van “The Last of Us”. Pedro Pascal en Bella Ramsey zullen opnieuw te zien zijn als Joel en Ellie, terwijl Gabriel Luna en Rutina Wesley hun rollen voortzetten. Nieuwe castleden voor dit seizoen zijn onder andere Kaitlyn Dever als Abby, Isabela Merced als Dina, en Catherine O’Hara in een nog niet onthulde rol."
    }), "\n", createVNode(_components.p, {
      children: "“The Last of Us”, gebaseerd op de gelijknamige video game van Naughty Dog, speelt zich af in een post-apocalyptische wereld waar Joel en Ellie zich een weg banen door een verwoeste samenleving. De serie belooft een meeslepende reis vol spanning en emotie, waarbij de kijker wordt meegezogen in de uitdagende omstandigheden waarmee de personages worden geconfronteerd."
    }), "\n", createVNode(_components.p, {
      children: "Het tweede seizoen van “The Last of Us” wordt momenteel geproduceerd en wordt naar verwachting in 2025 uitgezonden op HBO. Met Craig Mazin en Neil Druckmann aan het roer als schrijvers en uitvoerende producenten, belooft dit seizoen wederom een meeslepende kijkervaring te worden die zeer trouw blijft aan zijn bronmateriaal."
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

const url = "src/content/nieuws/jeffrey-wright-speelt-mee-in-the-last-of-us-seizoen-2.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jeffrey-wright-speelt-mee-in-the-last-of-us-seizoen-2.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jeffrey-wright-speelt-mee-in-the-last-of-us-seizoen-2.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
