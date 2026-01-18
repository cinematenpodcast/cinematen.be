import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Hollywood legende Donald Sutherland overleden op 88-jarige leeftijd",
  "date": "2024-06-22T10:59:45.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1718903430.jpg",
  "trailer": "",
  "slug": "hollywood-legende-donald-sutherland-overleden-op-88-jarige-leeftijd",
  "tags": ["film"]
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    em: "em",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Op donderdag kondigde Kiefer Sutherland, de zoon van de legendarische acteur Donald Sutherland, het overlijden van zijn vader aan via X (voorheen Twitter). Donald Sutherland is op 88-jarige leeftijd overleden na een langdurige ziekte in Miami. Hij wordt geprezen als een van de meest belangrijke acteurs in de geschiedenis van de film, bekend om zijn veelzijdige rollen en toewijding aan zijn vak."
    }), "\n", createVNode(_components.p, {
      children: ["Donald Sutherland, geboren op 17 juli 1935 in Saint John, New Brunswick, Canada, had een indrukwekkende carrière die meer dan 60 jaar besloeg met meer dan 200 film- en tv-credits. Hij verwierf bekendheid met zijn rol als Hawkeye in de film “M", createVNode(_components.em, {
        children: "A"
      }), "S*H” uit 1970 en speelde in tal van andere hits zoals “The Hunger Games,” “The Dirty Dozen,” “Invasion of the Body Snatchers,” en “Ordinary People.”"]
    }), "\n", createVNode(_components.p, {
      children: "Hoewel Sutherland nooit werd genomineerd voor een Oscar, ontving hij in 2017 een ere-Oscar als erkenning voor zijn bijdragen aan de filmwereld. In zijn dankwoord benadrukte hij de impact die de vele personages die hij vertolkte op zijn eigen leven hadden gehad."
    }), "\n", createVNode(_components.p, {
      children: "Als vader van vijf kinderen en echtgenoot van actrice Francine Racette sinds 1972, liet Sutherland een blijvende indruk achter in zowel de filmindustrie als in zijn persoonlijke kring. Hij was eerder getrouwd met Lois Hardwick en Shirley Douglas, met wie hij onder andere Kiefer en Rachel kreeg."
    }), "\n", createVNode(_components.p, {
      children: "Gedurende zijn loopbaan won Sutherland verschillende prestigieuze prijzen, waaronder een Golden Globe voor de televisiefilm “Path to War” en een Emmy en Golden Globe voor de miniserie “Citizen X.” Zijn veelzijdigheid als acteur strekte zich ook uit tot televisieproducties zoals “Trust,” “Dirty Sexy Money,” en “The Pillars of the Earth.”"
    }), "\n", createVNode(_components.p, {
      children: "Met zijn recente optreden als President Snow in de “Hunger Games”-films, waar hij bewust naar op zoek ging, toonde Sutherland zijn voortdurende passie voor acteren en zijn bereidheid om deel uit te maken van projecten die een belangrijke boodschap overbrachten."
    }), "\n", createVNode(_components.p, {
      children: "Donald Sutherland laat een blijvende erfenis na in de entertainmentindustrie en zal herinnerd worden als een acteur die zijn personages tot leven bracht met diepgang en emotie, en die generaties heeft geïnspireerd met zijn werk en toewijding aan zijn vak."
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

const url = "src/content/nieuws/hollywood-legende-donald-sutherland-overleden-op-88-jarige-leeftijd.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/hollywood-legende-donald-sutherland-overleden-op-88-jarige-leeftijd.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/hollywood-legende-donald-sutherland-overleden-op-88-jarige-leeftijd.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
