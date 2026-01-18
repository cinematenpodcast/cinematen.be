import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "The Old Guard 2 Korter maar Gehaast",
  "date": "2025-07-03T17:13:25.680Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1751551816.jpg",
  "trailer": "",
  "slug": "the-old-guard-2-korter-maar-gehaast",
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
      children: "“The Old Guard 2” is nu te zien op Netflix als opvolger van de populaire\nactiefilm uit 2020 over onsterfelijke huurlingen. Charlize Theron keert terug\nals Andy, de leider van dit bijzondere team dat vecht tegen nieuwe dreigingen.\nVictoria Mahoney nam de regie over en benadrukt het belang van menselijke\nemoties en relaties tussen de personages, naast de actie."
    }), "\n", createVNode(_components.p, {
      children: "Andy en haar team krijgen te maken met twee wraakzuchtige onsterfelijken,\nwaaronder Quynh. Dit personage ontsnapt uit een eeuwenlange marteling in een\nijzeren kist en sluit zich nu aan bij de schurk Discord, gespeeld door Uma\nThurman. Deze krachtige tegenstanders zorgen voor een nieuwe uitdaging."
    }), "\n", createVNode(_components.p, {
      children: "De film duurt slechts 97 minuten, bijna een halfuur korter dan het eerste deel\nvan 125 minuten. Hoewel dit voor een strak tempo zorgt, voelt het verhaal\ndaardoor soms gehaast en onvoldoende uitgediept. Mahoney wilde vooral de\ndynamiek tussen Theron en Thurman benadrukken in hun gevechtsscènes, waarbij\nTheron ook als uitvoerend producent betrokken was."
    }), "\n", createVNode(_components.p, {
      children: "Er zijn gesprekken over een derde film, maar concrete plannen ontbreken nog.\nTheron gaf aan dat een vervolg geen garantie is. De cliffhanger op het einde\nlaat veel vragen open over de toekomst van de personages. Ondanks gemengde\nreacties biedt deze kortere terugkeer genoeg actie en spanning om ons als\nliefhebbers van deel één te boeien."
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

const url = "src/content/nieuws/the-old-guard-2-korter-maar-gehaast.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-old-guard-2-korter-maar-gehaast.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/the-old-guard-2-korter-maar-gehaast.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
