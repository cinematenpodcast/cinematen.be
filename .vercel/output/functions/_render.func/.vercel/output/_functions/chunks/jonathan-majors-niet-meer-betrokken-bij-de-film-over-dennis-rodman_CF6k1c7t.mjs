import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Jonathan Majors niet meer betrokken bij de film over Dennis Rodman",
  "date": "2024-01-13T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1705094980.jpg",
  "trailer": "",
  "slug": "jonathan-majors-niet-meer-betrokken-bij-de-film-over-dennis-rodman",
  "draft": false,
  "tags": ["film", "casting"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "het-wilde-weekend-van-dennis-rodman",
    "text": "Het wilde weekend van Dennis Rodman"
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
      children: "Jonathan Majors zal niet langer de rol van Dennis Rodman spelen in de aankomende film, zo vertelt een bron aan CNN. Hoewel de acteur officieel nog niet is verwijderd van het project - dat voorlopig de titel “48 Hours in Vegas” draagt - wordt er gezegd dat de film zonder Majors wordt aangeboden, nadat het oorspronkelijke project dreigde uit het budget te lopen. Zoals een bron het verwoordde: “Ik kan me niet voorstellen dat dit doorgaat met Jonathan.”"
    }), "\n", createVNode(_components.p, {
      children: "Majors was de afgelopen jaren een opkomende ster en kreeg lof voor zijn rollen in projecten zoals “The Last Black Man in San Francisco”, “Creed III” en “Da 5 Bloods”. Hij kreeg ook een grote rol in het Marvel Cinematic Universe als schurk Kang the Conqueror. Echter, in maart 2023 werd Majors gearresteerd voor een incident van huiselijk geweld en later schuldig bevonden aan mishandeling en intimidatie."
    }), "\n", createVNode(_components.p, {
      children: "Na zijn veroordeling verbrak Marvel officieel de banden met Majors en het aanstaande project waar hij in zou spelen, de thriller “Magazine Dreams” van het Sundance Film Festival, ontbreekt in de releasedatum van Searchlight Pictures. Er is ook geen nieuws meer over Spike Lee’s in ontwikkeling zijnde film “Da Understudy” sinds Majors werd genoemd als hoofdrolspeler in maart 2023, enkele weken voor zijn arrestatie."
    }), "\n", createVNode(_components.h2, {
      id: "het-wilde-weekend-van-dennis-rodman",
      children: "Het wilde weekend van Dennis Rodman"
    }), "\n", createVNode(_components.p, {
      children: "“48 Hours in Vegas” werd voor het eerst aangekondigd in maart 2023, waarbij Majors de excentrieke basketbalsuperster zou spelen tijdens een film die draait om wat mogelijk het wildste weekend van zijn NBA-carrière was. De voormalige forward van de Chicago Bulls verliet destijds halverwege de NBA-finale om een trip naar Las Vegas te maken, waar hij naar verluidt feestte met Carmen Electra en deelnam aan een evenement van het World Championship Wrestling naast Hulk Hogan."
    }), "\n", createVNode(_components.p, {
      children: "Zoals verteld in de Netflix-docuserie “The Last Dance”, stond coach Phil Jackson Rodman toe om tijdens de post-season een korte vakantie te nemen, maar toen hij niet op tijd terugkeerde, moesten Jackson en teamgenoot Michael Jordan zelf naar Sin City om hem op te halen. Ten tijde van de oorspronkelijke aankondiging van de film in 2021 (toen Majors nog niet verbonden was), citeerde CBS Sports Lionsgate’s Nathan Kahane, die zei:"
    }), "\n", createVNode(_components.p, {
      children: "“Er is maar één Dennis Rodman. In 1998 was er niemand op aarde met wie het leuker - of misschien gevaarlijker - zou zijn om te feesten. Maar dat is nog niet eens de helft van wie hij is. Deze film neemt je mee op een onvergetelijke rit met de mythe, de legende en ook de man die Dennis is, achter alles wat je denkt te weten.”"
    }), "\n", createVNode(_components.p, {
      children: "Volgens bronnen van CNN heeft Lionsgate het project nu vrijgegeven aan de producenten, zodat het aan andere potentiële kopers kan worden aangeboden. Het kan een nieuwe thuis vinden, het kan uiteindelijk terugkeren naar Lionsgate, of het kan gewoon vastzitten in ontwikkelingshel."
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

const url = "src/content/nieuws/jonathan-majors-niet-meer-betrokken-bij-de-film-over-dennis-rodman.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jonathan-majors-niet-meer-betrokken-bij-de-film-over-dennis-rodman.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/jonathan-majors-niet-meer-betrokken-bij-de-film-over-dennis-rodman.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
