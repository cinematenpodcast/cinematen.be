import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Hugh Grant schittert in A24's nieuwste psychologische horrorfilm Heretic",
  "date": "2024-06-26T08:12:17.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/heretic-might-just-be-the-next-great-a24-horror-film-1719325169.jpg",
  "trailer": "O9i2vmFhSSY",
  "slug": "hugh-grant-schittert-in-a24s-nieuwste-psychologische-horrorfilm-heretic",
  "tags": ["film", "trailer"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "de-intrigerende-plot-van-heretic",
    "text": "De intrigerende plot van “Heretic”"
  }, {
    "depth": 2,
    "slug": "bekroonde-schrijvers-en-een-talentvolle-cast",
    "text": "Bekroonde schrijvers en een talentvolle cast"
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
      children: "Hugh Grant, bekend om zijn diverse acteerrollen, verrast het publiek opnieuw met zijn rol in de aankomende A24-film “Heretic.” Recent nog te zien als een Oompa Loompa in “Wonka” en in zijn ongemakkelijke Oscars-interviews, duikt hij nu diep in de wereld van horror. Samen met de getalenteerde Chloe East en Sophie Thatcher creëert hij een angstaanjagende sfeer die kijkers zal doen huiveren."
    }), "\n", createVNode(_components.h2, {
      id: "de-intrigerende-plot-van-heretic",
      children: "De intrigerende plot van “Heretic”"
    }), "\n", createVNode(_components.p, {
      children: "In de onheilspellende trailer van “Heretic” zien we hoe Grant’s personage, Mr. Reed, twee christelijke missionarissen, gespeeld door East en Thatcher, uitnodigt in zijn huis. Wat begint als een ogenschijnlijk normale ontmoeting neemt al snel een duistere wending. De missionarissen beseffen al snel dat ze gevangen zitten in een angstaanjagend spel opgezet door de sinistere eigenaar."
    }), "\n", createVNode(_components.p, {
      children: "Grant’s personage dwingt de meisjes tot een angstaanjagende keuze: een deur kiezen op basis van geloof. Terwijl de spanning stijgt in de film, belooft Grant hen een ervaring die hun harten sneller zal laten kloppen en zelfs de wens om te sterven kan opwekken."
    }), "\n", createVNode(_components.h2, {
      id: "bekroonde-schrijvers-en-een-talentvolle-cast",
      children: "Bekroonde schrijvers en een talentvolle cast"
    }), "\n", createVNode(_components.p, {
      children: "De film “Heretic” is het nieuwste werk van Scott Beck en Bryan Woods, bekend van hun succesvolle scripts voor “A Quiet Place” en andere opmerkelijke projecten. Met Sophie Thatcher en Chloe East als medespelers belooft deze productie een meeslepende kijkervaring te worden."
    }), "\n", createVNode(_components.p, {
      children: "Deze angstaanjagende creatie wordt visueel versterkt door Chung Chung-hoon, een gerenommeerde Zuid-Koreaanse cinematograaf die zijn vakmanschap inbrengt om de duistere sfeer van de film te versterken."
    }), "\n", createVNode(_components.p, {
      children: "“Heretic” belooft het publiek op 15 november 2024 binnen te leiden in een angstaanjagende wereld, waarin de grens tussen geloof en waanzin vervagen."
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

const url = "src/content/nieuws/hugh-grant-schittert-in-a24s-nieuwste-psychologische-horrorfilm-heretic.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/hugh-grant-schittert-in-a24s-nieuwste-psychologische-horrorfilm-heretic.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/hugh-grant-schittert-in-a24s-nieuwste-psychologische-horrorfilm-heretic.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
