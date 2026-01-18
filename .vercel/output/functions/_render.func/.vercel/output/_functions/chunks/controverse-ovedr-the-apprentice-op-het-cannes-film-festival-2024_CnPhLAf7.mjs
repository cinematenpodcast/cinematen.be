import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Controverse over The Apprentice op het Cannes Film Festival 2024",
  "date": "2024-05-20T22:44:54.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1716226561.jpg",
  "trailer": "",
  "slug": "de-controverse-achter-the-apprentice-op-het-cannes-film-festival-2024",
  "tags": ["film"]
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
      children: "Achter de schermen van het prestigieuze Cannes Film Festival 2024 broeit er een drama rond de langverwachte film “The Apprentice”, gericht op de vroege jaren van Donald Trump. Volgens bronnen is miljardair Dan Snyder, die geïnvesteerd heeft in de film, niet tevreden over hoe de jonge Donald - gespeeld door acteur Sebastian Stan - wordt neergezet en heeft hij specifieke bezwaren tegen een “gewelddadige” verkrachtingsscène die in eerdere versies van de film voorkwam."
    }), "\n", createVNode(_components.p, {
      children: "Snyder, de voormalige eigenaar van de Washington Commanders die berucht weigerde de naam van het NFL-team van Redskins te veranderen, is bevriend met Trump en doneerde meer dan $1 miljoen aan zijn inauguratiecomité en Trump Victory in 2016. Snyder investeerde ook in de film omdat hij naar verluidt dacht dat deze de 45e president in een positief daglicht zou stellen."
    }), "\n", createVNode(_components.p, {
      children: "Naar verluidt was Snyder ontevreden toen hij de vroege versies van de film “The Apprentice” in februari zag, en de spanning zou blijven oplopen tussen het door Snyder gesteunde bedrijf Kinematics en degenen die verantwoordelijk zijn voor de creatieve richting van de film."
    }), "\n", createVNode(_components.p, {
      children: "“The Apprentice” zal de vroege jaren van Trump behandelen, waarin hij werd gecoacht door politieke fixer Roy Cohn en zijn huwelijk met zijn eerste vrouw, Ivana."
    }), "\n", createVNode(_components.p, {
      children: "Verschillende insiders hebben gemeld dat Snyder meerdere bezwaren had tegen verschillende aspecten van de film en ervoor zorgde dat zijn standpunten werden gehoord over wat wel en niet de uiteindelijke montage van “The Apprentice” zou halen, inclusief een scène waarin Trump Ivana (gespeeld door Maria Bakalova) verkracht. Een persoon beschreef de scène als “gewelddadig” en “ongemakkelijk”."
    }), "\n", createVNode(_components.p, {
      children: "In 1989 beschuldigde Ivana Trump Donald van verkrachting, maar zij ontkrachtte deze beweringen in 2015 door te stellen: “Het verhaal is volledig ongegrond. Donald en ik zijn de beste vrienden en hebben samen drie kinderen grootgebracht waar we dol op zijn en trots op zijn.”"
    }), "\n", createVNode(_components.p, {
      children: "Deze controverse werpt een schaduw over de première van “The Apprentice” op het Cannes Film Festival vanavond. Het is onduidelijk of Snyder de debuutbijeenkomst zal bijwonen."
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

const url = "src/content/nieuws/controverse-ovedr-the-apprentice-op-het-cannes-film-festival-2024.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/controverse-ovedr-the-apprentice-op-het-cannes-film-festival-2024.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/controverse-ovedr-the-apprentice-op-het-cannes-film-festival-2024.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
