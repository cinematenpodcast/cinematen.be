import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Hier is de trailer voor de prequel op Lord of the Rings: The War of the Rohirrim",
  "date": "2024-08-26T11:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/the-war-of-the-rohirrim-is-an-origin-story-for-helms-deep-with-a-punch-1724346736.jpg",
  "trailer": "gCUg6Td5fgQ",
  "slug": "prequel-op-lord-of-the-rings-the-war-of-the-rohirrim---een-diepgaande-blik",
  "tags": ["film", "trailer"]
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
      children: "Warner Bros. heeft onlangs de eerste trailer uitgebracht voor “The Lord of the Rings: The War of the Rohirrim,” een geanimeerde film die dient als prequel op de live-action Lord of the Rings-films. Deze nieuwe toevoeging aan het Tolkien-universum belooft een spannend verhaal te onthullen dat zich ongeveer 200 jaar voor de gebeurtenissen van The Lord of the Rings afspeelt. Het centrale personage is Helm Hammerhand, de voormalige heerser van Rohan, die wordt vertolkt door Brian Cox."
    }), "\n", createVNode(_components.p, {
      children: "De plot draait om een bloederig conflict tussen Rohan en de Dunlendings nadat een gearrangeerd huwelijk tussen Helms dochter Hèra (gespeeld door Gaia Wise) en de prins van Dunland, Wulf (vertolkt door Luke Pasqualino), mislukt en leidt tot de dood van Wulfs vader Freca (gespeeld door Shaun Dooley). Hierdoor verklaart Wulf de oorlog aan Rohan. In een tijd waarin Helm zijn koninkrijk mobiliseert, zou de vastberaden Hèra wellicht de enige hoop kunnen zijn voor Rohans overleving."
    }), "\n", createVNode(_components.p, {
      children: "Miranda Otto keert terug in haar rol als Éowyn, zij het als de verteller van het verhaal. Door voornamelijk gebruik te maken van J.R.R. Tolkiens appendices uit de Lord of the Rings-boeken, worden enkele achtergrondverhalen en personages verder uitgediept, waardoor de wereld van Midden-aarde nog meer tot leven komt. Echter, met het personage Hèra duikt de film dieper in de geschiedenis dan Tolkien zelf ooit deed."
    }), "\n", createVNode(_components.p, {
      children: "Naast de Engelse trailer heeft het Japanse kantoor van Warner Bros. een Japanse versie uitgebracht met een bijna volledig andere montage. Er zijn verschillende scènes, extra personages en zelfs lijkt de animatie soepeler te zijn. De Japanse versie geeft meer nadruk aan personages zoals Haleth, Hama en Saruman, naast Helm en Hèra."
    }), "\n", createVNode(_components.p, {
      children: "Reacties van diverse TORn-medewerkers tonen enthousiasme voor de manier waarop regisseur Kenji Kamiyama en het creatieve team enkele pagina’s uit Appendix A hebben omgezet naar kunst. De animatiestijl doet denken aan klassieke anime-heldinnenverhalen."
    }), "\n", createVNode(_components.p, {
      children: "Het is duidelijk dat “The Lord of the Rings: The War of the Rohirrim” niet alleen een aanvulling is op de bestaande verhalen, maar ook een eigen unieke draai geeft aan de rijke mythologie van Midden-aarde."
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

const url = "src/content/nieuws/hier-is-de-trailer-voor-de-prequel-op-lord-of-the-rings-the-war-of-the-rohirrim.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/hier-is-de-trailer-voor-de-prequel-op-lord-of-the-rings-the-war-of-the-rohirrim.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/hier-is-de-trailer-voor-de-prequel-op-lord-of-the-rings-the-war-of-the-rohirrim.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
