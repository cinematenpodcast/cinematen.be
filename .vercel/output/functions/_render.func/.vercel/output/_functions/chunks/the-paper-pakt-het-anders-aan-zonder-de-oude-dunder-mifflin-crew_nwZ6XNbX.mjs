import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "The Paper pakt het anders aan zonder de oude Dunder Mifflin crew",
  "date": "2025-09-04T12:26:48.109Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1756308321.jpg",
  "trailer": "",
  "slug": "the-paper-pakt-het-anders-aan-zonder-de-oude-dunder-mifflin-crew",
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
      children: "The Paper is een nieuwe mockumentary-serie op Peacock en dient als spin-off van\nde iconische serie The Office. In de eerste aflevering leren we dat Dunder\nMifflin niet meer bestaat. Bob Vance – bekend van Vance Refrigeration – legt uit\ndat het kantoor al een tijdje gesloten is. De oude locatie huisvest nu een\nlaserontharingsbedrijf."
    }), "\n", createVNode(_components.p, {
      children: "Dunder Mifflin werd in 2019 overgenomen door het Ohio-based bedrijf Enervate,\ndat gespecialiseerd is in papieren producten zoals wc-papier en kranten. Bijna\ngeen enkel oud-lid van Dunder Mifflin is nog in dienst, op Oscar Martinez na.\nHij verhuisde mee naar Ohio en is nu niet alleen hoofdaccountant bij Enervate,\nmaar werkt ook voor de lokale krant de Toledo Truth Teller."
    }), "\n", createVNode(_components.p, {
      children: "De serie speelt zich af in Toledo, Ohio en volgt de medewerkers van de Toledo\nTruth Teller, een krant die ooit belangrijk was maar nu kampt met geldgebrek en\nonderbezetting. Net zoals bij Dunder Mifflin wordt er een documentaire gedraaid\nover deze werkplek."
    }), "\n", createVNode(_components.p, {
      children: "Ned, de baas van de krant, wil de krant weer relevant maken. Omdat er bijna geen\nechte journalisten meer over zijn, moeten accountants en advertentiemedewerkers\nartikelen schrijven. Esmeralda, de manager, is meer geïnteresseerd in clicks\nhalen met sensationele verhalen over beroemdheden, wat zorgt voor conflict met\nNed’s visie voor serieuzere journalistiek."
    }), "\n", createVNode(_components.p, {
      children: "Naast Ned en Esmeralda zijn er nieuwe personages zoals Mare, die wél\njournalistieke ervaring heeft, en uiteraard Oscar, die eigenlijk niet opnieuw in\nzo’n documentaire wilde verschijnen. De krant bezet nu maar een klein hoekje op\neen verdieping die vooral in gebruik is door het wc-papierbedrijf – een treffend\nsymbool voor de neergang van lokale journalistiek."
    }), "\n", createVNode(_components.p, {
      children: "The Paper is gemaakt door Greg Daniels, die ook verantwoordelijk was voor The\nOffice, en deelt dezelfde mockumentary-stijl. De serie balanceert tussen\nkomische situaties en een serieuzere kijk op de uitdagingen van een lokale krant\nin deze tijd."
    }), "\n", createVNode(_components.p, {
      children: "Het is geen pure kopie van The Office; het heeft een eigen verhaal en eigen\npersonages. Alleen Oscar keert terug. Wij vinden het een fijne nieuwe show, of\nje nu fan was van The Office of niet. De tien afleveringen staan klaar op\nPeacock. We zijn benieuwd of er een seizoen 2 aankomt."
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

const url = "src/content/nieuws/the-paper-pakt-het-anders-aan-zonder-de-oude-dunder-mifflin-crew.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-paper-pakt-het-anders-aan-zonder-de-oude-dunder-mifflin-crew.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-paper-pakt-het-anders-aan-zonder-de-oude-dunder-mifflin-crew.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
