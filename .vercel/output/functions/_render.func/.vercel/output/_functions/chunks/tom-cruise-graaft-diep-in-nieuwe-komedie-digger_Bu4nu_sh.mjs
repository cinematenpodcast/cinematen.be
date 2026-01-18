import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Tom Cruise graaft diep in nieuwe komedie Digger",
  "date": "2025-12-18T21:31:04.359Z",
  "soort": "film",
  "thumbnail": "https://login.wabliefteru.be/assets/0d9550a9-f532-4f4f-bf60-1579a81b362e",
  "trailer": "CAI-mIvLbXk",
  "slug": "tom-cruise-graaft-diep-in-nieuwe-komedie-digger"
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
      children: "Warner Bros. heeft bekendgemaakt dat Tom Cruise gaat meespelen in de nieuwe\nkomedie Digger. De film komt op 2 oktober 2026 in de bioscoop. Dit is een\nopvallende keuze, want Cruise is vooral bekend van spannende actiefilms zoals\nMission: Impossible en Top Gun."
    }), "\n", createVNode(_components.p, {
      children: "De film wordt geregisseerd door de beroemde Alejandro G. Iñárritu, die films als\nThe Revenant en Birdman op zijn naam heeft. Voor het script werkt hij opnieuw\nsamen met de schrijvers van Birdman. De film wordt omschreven als “een komedie\nvan catastrofale proporties”."
    }), "\n", createVNode(_components.p, {
      children: "Naast Tom Cruise heeft de film een grote en sterke cast. Daarin vinden we John\nGoodman, Michael Stuhlbarg, Jesse Plemons, Emma D’Arcy, Sandra Hüller, Sophie\nWilde, Riz Ahmed, Burn Gorman en Pip Torrens."
    }), "\n", createVNode(_components.p, {
      children: "Wat de film precies gaat over gaat, is nog grotendeels een geheim. Er is wel een\neerste korte teaser vrijgegeven. Daarin is te zien hoe een man in een korte\nbroek en cowboylaarzen, waarschijnlijk Tom Cruise, een schep oppakt en zijn\nspieren rekt. Hij danst binnenshuis op muziek van Gorillaz met de schep in zijn\nhand. Vervolgens zien we hem buiten op een pier, waar hij op een leuning klimt\nen uitkijkt over een paarse zonsondergang. Opvallend is dat Cruise er met zware\nmake-up of protheses anders uitziet, met wijde kleren en dun, warrig haar."
    }), "\n", createVNode(_components.p, {
      children: "Er gaan geruchten dat Cruise een machtig persoon speelt die zichzelf als een\nredder probeert neer te zetten. Regisseur Iñárritu liet tijdens het filmfestival\nvan Cannes al iets los: “Dit is een wilde komedie van catastrofale proporties.\nHij is krankzinnig. Hij maakt me elke dag aan het lachen. De mogelijkheden die\nik bij Tom ontdekte als acteur, zijn voor mij als regisseur ongekend.”"
    }), "\n", createVNode(_components.p, {
      children: "Digger wordt opgenomen op 35mm VistaVision film, een speciale, ouderwetse\ntechniek. Het script is geschreven door Iñárritu, Alexander Dinelaris, Nicolas\nGiacobone en toneelschrijver Sabina Berman. Voor Tom Cruise is dit zijn eerste\nkomedie in meer dan tien jaar."
    }), "\n", createVNode(_components.p, {
      children: "We moeten nog even geduld hebben tot oktober 2026. In de tussentijd zullen\nongetwijfeld meer trailers en details volgen, zodat we langzaam het mysterie van\nDigger zien ontrafelen."
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

const url = "src/content/nieuws/tom-cruise-graaft-diep-in-nieuwe-komedie-digger.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/tom-cruise-graaft-diep-in-nieuwe-komedie-digger.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/tom-cruise-graaft-diep-in-nieuwe-komedie-digger.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
