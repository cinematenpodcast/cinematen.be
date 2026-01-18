import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Denzel Washington Oscars? Die kunnen hem weinig schelen!",
  "date": "2025-08-14T22:14:35.880Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1755192469.jpg",
  "trailer": "",
  "slug": "denzel-washington-oscars-die-kunnen-hem-weinig-schelen",
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
      children: "Denzel Washington is al meer dan 40 jaar een krachtpatser in de filmwereld. We\nkennen hem allemaal van iconische rollen in “Glory”, “Training Day”, “Malcolm X”\nen “Fences”. Met twee Oscars op de schouw en maar liefst negen nominaties zou je\ndenken dat die beeldjes zijn trots zijn. Niets is minder waar. Tijdens een\npersconferentie voor zijn nieuwe film “Highest 2 Lowest” gaf hij een verrassend\neerlijk antwoord: “Ik geef niet zoveel om Oscars.”"
    }), "\n", createVNode(_components.p, {
      children: "Voor Washington draait alles om het vakmanschap, niet om de prijzenkast. Hij\nbekende dat hij in zijn lange carrière momenten meemaakte waarop hij won terwijl\nhij het niet verdiende, en omgekeerd. Zijn filosofie? “Mensen geven de prijzen,\nmaar God geeft de echte beloning.” Zijn eerste Oscar kreeg hij in 1990 voor zijn\nbijrol in “Glory”, de tweede volgde in 2002 als hoofdrolspeler in “Training\nDay”. Toch relativeert hij die successen: “Die Oscars zullen me op m’n laatste\ndag niet veel opleveren.” Op de vraag waar hij ze bewaart, antwoordt hij\nlakoniek: “Nou, naast de andere.”"
    }), "\n", createVNode(_components.p, {
      children: "Zijn collega Ethan Hawke, die met hem speelde in “Training Day”, bevestigt deze\nhouding. Hawke vertelde dat Washington niet wil dat de prijs zijn status\nverhoogt, maar dat zijn prestaties de prijs betekenis moeten geven. Dit jaar was\ner zelfs een opmerkelijke “Oscar snub” voor zijn rol in “Gladiator II”, maar dat\nliet hem koud. Washington was liever bezig met zijn theaterwerk aan “Othello” op\nBroadway."
    }), "\n", createVNode(_components.p, {
      children: "Wat ons betreft blijft Denzel een inspiratie. Hij blijft zich ontwikkelen in\ndiverse genres – van actie tot drama – en blijft leren. Zijn nieuwe film\n“Highest 2 Lowest”, een samenwerking met Spike Lee en een moderne versie van\nKurosawa’s “High and Low”, bewijst dat zijn passie voor acteren brandend blijft.\nEn dat zonder jacht op gouden beeldjes."
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

const url = "src/content/nieuws/denzel-washington-oscars-die-kunnen-hem-weinig-schelen.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/denzel-washington-oscars-die-kunnen-hem-weinig-schelen.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/denzel-washington-oscars-die-kunnen-hem-weinig-schelen.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
