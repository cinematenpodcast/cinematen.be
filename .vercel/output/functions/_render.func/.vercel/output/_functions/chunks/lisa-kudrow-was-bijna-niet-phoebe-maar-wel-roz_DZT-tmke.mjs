import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Lisa Kudrow was bijna niet Phoebe maar wel Roz",
  "date": "2024-11-01T23:15:54.997Z",
  "soort": "tv",
  "thumbnail": "/images/article-images/l-intro-1730423004.jpg",
  "trailer": "",
  "slug": "lisa-kudrow-was-bijna-niet-phoebe-maar-wel-roz",
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
      children: "Lisa Kudrow is bekend van de populaire show “Friends”, maar voordat ze die rol\nkreeg, had ze een kans om een andere grote rol te spelen in de sitcom “Frasier”.\nIn “Frasier” zou Kudrow de rol van Roz Doyle spelen, de radio-producente van de\nhoofdpersoon Frasier Crane, gespeeld door Kelsey Grammer. Dit leek een geweldige\nkans voor Kudrow, maar het liep anders."
    }), "\n", createVNode(_components.p, {
      children: "Tijdens de repetities werd Lisa Kudrow laten vallen omdat de makers vonden dat\nze niet de juiste keuze was voor de rol. De regisseur, James Burrows, vertelde\nKudrow dat het niet werkte. Dit nieuws kwam voor Kudrow hard aan, omdat\n“Frasier” veelbelovend en al populair was door de eerdere show “Cheers”. De rol\nvan Roz werd uiteindelijk gegeven aan Peri Gilpin, die perfect paste bij de\nkaraktereigenschappen die de schrijvers zochten. Gilpin bracht een sarcastische\nen sterke persoonlijkheid in de rol en later bleek dat zij toch de betere keuze\nwas."
    }), "\n", createVNode(_components.p, {
      children: "Kudrow legde uit dat ze zich misschien niet goed kon aanpassen aan de rol. Roz\nhad een sterke uitstraling nodig, iets wat Kudrow ze niet kon geven. Dit was een\nheel belangrijke les voor haar, omdat de juiste match tussen een acteur en een\nrol cruciaal is. Het lijkt misschien een mislukking voor Kudrow, maar dit leidde\nuiteindelijk tot een van de grootste kansen in haar carrière."
    }), "\n", createVNode(_components.p, {
      children: "Na het verliezen van de rol in “Frasier”, kreeg Kudrow al snel een kans om\nPhoebe Buffay te spelen in “Friends”. Deze rol paste veel beter bij haar stijl\nvan acteren, die meer speels en onvoorspelbaar was. “Friends” werd een\ngigantische hit en Kudrow’s carrière kwam in sneltempo van de grond. Ze groeide\nuit tot één van de meest geliefde personages op televisie en verdiende zelfs $1\nmiljoen per aflevering in de latere seizoenen van de show."
    }), "\n", createVNode(_components.p, {
      children: "Uiteindelijk kunnen we zeggen dat het verliezen van de rol in “Frasier” een\ngrote kans was voor Kudrow om Phoebe te worden. Dit laat zien dat soms dingen\nniet gaan zoals we hopen, maar dat het ook leidt tot geweldige mogelijkheden.\nKudrow heeft laten zien dat elke deur die sluit, kan leiden tot een andere,\nmisschien nog betere deur die opent."
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

const url = "src/content/nieuws/lisa-kudrow-was-bijna-niet-phoebe-maar-wel-roz.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/lisa-kudrow-was-bijna-niet-phoebe-maar-wel-roz.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/lisa-kudrow-was-bijna-niet-phoebe-maar-wel-roz.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
