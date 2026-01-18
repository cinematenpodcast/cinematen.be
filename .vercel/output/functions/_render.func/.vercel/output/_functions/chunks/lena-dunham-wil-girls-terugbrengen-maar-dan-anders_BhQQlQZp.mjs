import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Lena Dunham wil Girls terugbrengen… maar dan anders",
  "date": "2025-07-08T18:34:38.600Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1751996691.jpg",
  "trailer": "",
  "slug": "lena-dunham-wil-girls-terugbrengen-maar-dan-anders",
  "tags": ["TV"]
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
      children: "Lena Dunham, de maker van de HBO-serie “Girls”, heeft recent gesproken over een\nmogelijke terugkeer van de reeks. De serie, die van 2012 tot 2017 liep, draaide\nrond jonge vrouwen in New York en zorgde destijds voor veel gespreksstof. Dunham\nschreef, regisseerde en produceerde de show zelf."
    }), "\n", createVNode(_components.p, {
      children: "Ze is open voor een reboot, maar alleen als de verhalen zich afspelen op een\nandere leeftijd. Dunham wil de vier hoofdpersonages terugzien als oudere vrouwen\nmet nieuwe levensfases. Zo stelt ze zich voor dat Shoshanna nu een\nsportkleding-startup runt, eerst trouwde met de burgemeester van New York maar\nintussen gescheiden is. Marnie zou aan haar derde huwelijk toe zijn, terwijl\nHannah lesgeeft op een college en een gezinsleven heeft."
    }), "\n", createVNode(_components.p, {
      children: "“Girls” behandelde thema’s als vriendschap, relaties en mentale gezondheid, die\nnog steeds relevant zijn. Hoewel de serie aanvankelijk kritiek kreeg omdat de\npersonages niet alle vrouwen vertegenwoordigden, waarderen we de reeks nu meer."
    }), "\n", createVNode(_components.p, {
      children: "Dunham blijft actief met nieuwe projecten. Haar Netflix-serie “Too Much” komt op\n10 juli uit en volgt een vrouw die na een slechte relatie naar Londen verhuist.\nDunham speelt hier een bijrol. Daarnaast werkt ze aan een romantische komedie\nmet Natalie Portman (“Good Sex”) en een musical gebaseerd op “10 Things I Hate\nAbout You” met Carly Rae Jepsen."
    }), "\n", createVNode(_components.p, {
      children: "De originele “Girls” is nog steeds te streamen op HBO Max. We zijn benieuwd of\nDunham haar plannen voor een reboot zal waarmaken en hoe de personages zich dan\nontwikkeld hebben."
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

const url = "src/content/nieuws/lena-dunham-wil-girls-terugbrengen-maar-dan-anders.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/lena-dunham-wil-girls-terugbrengen-maar-dan-anders.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/lena-dunham-wil-girls-terugbrengen-maar-dan-anders.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
