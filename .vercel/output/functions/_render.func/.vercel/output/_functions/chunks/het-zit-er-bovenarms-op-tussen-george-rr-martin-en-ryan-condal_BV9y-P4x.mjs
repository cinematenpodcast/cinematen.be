import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const MDXLayout = async function ({children}) {
  const Layout = (await import('./NieuwsLayout_Cr_3Kiaz.mjs')).default;
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode(Layout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "layout": "../../layouts/NieuwsLayout.astro",
  "title": "Het is ambras tussen George R.R. Martin en HBO",
  "date": "2026-01-15T21:47:51.964Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1768503375.jpg",
  "trailer": "",
  "slug": "het-zit-er-bovenarms-op-tussen-george-rr-martin-en-ryan-condal",
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
      children: "Er is groot nieuws naar buiten gekomen over House of the Dragon en het klinkt\nniet bepaald rooskleurig. George R.R. Martin, het brein achter de boeken, heeft\nin een interview met The Hollywood Reporter laten weten dat zijn relatie met\nshowrunner Ryan Condal momenteel “vreselijk” is. Dat is pijnlijk om te horen,\nzeker omdat de twee in het begin twee handen op één buik waren. Martin had\nCondal nochtans zelf gekozen als partner en tijdens het eerste seizoen liep\nalles gesmeerd: hij gaf feedback en Condal luisterde. Zelfs toen Miguel\nSapochnik vertrok, bleef Martin zijn showrunner steunen."
    }), "\n", createVNode(_components.p, {
      children: "Maar bij de productie van het tweede seizoen liep het mis. Martin’s tips en\nopmerkingen werden genegeerd of op de lange baan geschoven. De frustraties\nliepen zo hoog op dat HBO ingreep: Martin mocht niet meer rechtstreeks met\nCondal communiceren en moest zijn notities via de zender doorgeven. Het\ndieptepunt kwam er tijdens een Zoom-call over de plannen voor seizoen 3. Martin\nwas het absoluut niet eens met de veranderingen in het verhaal en liet duidelijk\nverstaan: “Dit is mijn verhaal niet meer.”"
    }), "\n", createVNode(_components.p, {
      children: "Wij herinneren ons allemaal nog die beruchte blogpost uit september 2024 waarin\nMartin openlijk kritiek uitte. Hij waarschuwde voor een ‘vlindereffect’ door de\ndood van een specifiek personage in seizoen 2, wat de logica van het verdere\nverhaal zou breken. Condal zou zijn belofte hierover verbroken hebben. Die post\nverdween echter verdacht snel. Blijkbaar heeft HBO, terwijl Martin lag te\nslapen, via zijn manager en assistent geregeld dat het offline werd gehaald.\nMartin liet het daarbij om niet gek over te komen, hoewel hij ook complimenten\nhad uitgedeeld."
    }), "\n", createVNode(_components.p, {
      children: "Voor Martin zijn zijn personages zijn kinderen, aangezien hij er zelf geen\nheeft. Hij wil dat aanpassingen steek houden en trouw blijven aan het boek.\nCondal verdedigt zich door te zeggen dat tv maken nu eenmaal praktische limieten\nheeft qua tijd en budget, iets wat Martin volgens hem niet altijd snapt. Hij is\nteleurgesteld, maar hoopt dat de plooien ooit nog gladgestreken kunnen worden."
    }), "\n", createVNode(_components.p, {
      children: "De sfeer blijft dus onder het vriespunt, ook al is Martin nog steeds betrokken.\nEen groot contrast met A Knight of the Seven Kingdoms, die andere spin-off die\nbijna van start gaat op 18 januari 2026. Daar loopt de samenwerking wel vlot en\nkeurt Martin de veranderingen goed. Ondertussen wachten we op het derde seizoen\nvan House of the Dragon, dat gepland staat voor juni 2026. Ook interessant: de\nJon Snow-serie lijkt van de baan en vervangen te worden door een project rond\nArya Stark. De wereld van Westeros blijft dus groeien, ruzies of niet."
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

const url = "src/content/nieuws/het-zit-er-bovenarms-op-tussen-george-rr-martin-en-ryan-condal.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/het-zit-er-bovenarms-op-tussen-george-rr-martin-en-ryan-condal.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/het-zit-er-bovenarms-op-tussen-george-rr-martin-en-ryan-condal.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
