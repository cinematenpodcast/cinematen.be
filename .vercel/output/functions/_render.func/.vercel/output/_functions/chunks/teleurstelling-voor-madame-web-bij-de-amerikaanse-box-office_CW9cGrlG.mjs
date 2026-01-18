import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Teleurstelling voor Madame Web bij de Amerikaanse box office",
  "date": "2024-02-20T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "https://www.slashfilm.com/img/gallery/madame-webs-box-office-is-bad-enough-to-squash-sonys-spider-man-spin-off-plans/intro-1708367022.jpg",
  "trailer": "",
  "slug": "teleurstelling-voor-madame-web-bij-de-amerikaanse-box-office",
  "draft": false,
  "tags": ["film", "comics"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "lage-opbrengst-en-negatieve-recensies",
    "text": "Lage opbrengst en negatieve recensies"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Het recente project “Madame Web” van Sony en Marvel’s samenwerkende Spider-Verse-films, heeft het moeilijk gehad aan de box office tijdens het Presidents’ Day weekend. De film met Dakota Johnson, Sydney Sweeney en Adam Scott in de hoofdrollen verdiende slechts $17,6 miljoen tijdens het vakantieweekend, met een totaal van $25,8 miljoen in eigen land sinds de première op Valentijnsdag."
    }), "\n", createVNode(_components.h2, {
      id: "lage-opbrengst-en-negatieve-recensies",
      children: "Lage opbrengst en negatieve recensies"
    }), "\n", createVNode(_components.p, {
      children: "Ondanks dat “Madame Web” eindigde als nummer 2 aan de Amerikaanse box office in de openingsweek, bleef de totale opbrengst teleurstellend laag. Met slechts $26,2 miljoen in binnenlandse brutoverkopen volgens schattingen van Comscore op maandag, staat de film nu bekend als de superheldenfilm met de laagste box office-opening ooit van Sony Pictures."
    }), "\n", createVNode(_components.p, {
      children: "De kritieken waren vernietigend, met critici die de film bekritiseerden vanwege slordige editing, een rommelig plot en trage actiesequenties. Dit resulteerde in een erbarmelijke score van 13 procent bij critici op Rotten Tomatoes tot maandagochtend."
    }), "\n", createVNode(_components.p, {
      children: "Het gebrek aan directe banden met andere Spider-Man-films of projecten was ook een punt van zorg onder fans. Ondanks het feit dat personages zoals Spider-Woman en Madame Web zelf voorkomen, zijn er slechts subtiele verwijzingen naar door spinnen aangedreven helden en de familie van Peter Parker."
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

const url = "src/content/nieuws/teleurstelling-voor-madame-web-bij-de-amerikaanse-box-office.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/teleurstelling-voor-madame-web-bij-de-amerikaanse-box-office.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/teleurstelling-voor-madame-web-bij-de-amerikaanse-box-office.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
