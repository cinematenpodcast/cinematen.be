import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Johnny Knoxville bewijst zijn acteertalent in The Last Frontier",
  "date": "2025-12-05T14:18:44.901Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1764875756.jpg",
  "trailer": "",
  "slug": "johnny-knoxville-bewijst-zijn-acteertalent-in-the-last-frontier",
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
      children: "Johnny Knoxville is natuurlijk bekend van de stunts en grappen in ‘Jackass’,\nmaar hij speelt ook in series en films. Zo deed hij mee aan de Apple TV-serie\n‘The Last Frontier’. De serie volgt een marshal in Alaska die moet samenwerken\nmet een CIA-agent en een mysterieuze gevangene nadat een vliegtuig met\ngevaarlijke gevangenen is neergestort. In elke aflevering moet hij een ontsnapte\ngevangene vangen."
    }), "\n", createVNode(_components.p, {
      children: "In de serie speelt Knoxville de slechterik S.T. Covington, een crimineel met\ntattoos in zijn gezicht. Hij doet het verrassend goed in deze serieuze rol. Jon\nBokenkamp, de bedenker van de serie, deelde een grappig verhaal over Knoxville.\nKnoxville stuurde hem mails over een andere acteur die rare eisen zou stellen,\nzoals gekke kleren dragen in de kou. Bokenkamp geloofde het en wilde de acteur\naanspreken, tot hij ontdekte dat Knoxville een grap met hem uithaalde. Met zijn\nachtergrond verbaast dat natuurlijk niemand."
    }), "\n", createVNode(_components.p, {
      children: "Knoxville doet niet alleen alsof, hij ondergaat ook echte gevaren. In zijn film\n‘Action Point’ deed hij al zijn eigen stunts. De film gaat over een gevaarlijk\npretpark en Knoxville wilde geen computer-effecten of veiligheidstouwen\ngebruiken. Hij raakte dan ook vaak gewond: vier hersenschuddingen, een gebroken\nhand, een beschadigde knie en zijn gezichtsbotten braken zo fijn dat ze als\npoeder werden. Op een keer, na een ziekenhuisbezoek, blies hij zijn neus en\nschoot zijn oog bijna uit zijn hoofd."
    }), "\n", createVNode(_components.p, {
      children: "Waarom doet hij dit? Knoxville zegt simpelweg: “Het is wat ik doe.” Hij vindt\nstunts doen leuk en weet dat hij niet eeuwig door kan gaan, maar hij heeft nog\nwel een paar stunts in zich. Zijn team was blij met zijn inzet. Ondertussen\ndenkt hij ook aan een nieuwe ‘Jackass’-film. Er zijn nog geen plannen, maar het\nzou kunnen, net als bij de vorige films die ontstonden omdat hij en zijn\nvrienden er zin in kregen."
    }), "\n", createVNode(_components.p, {
      children: "Wij kunnen Knoxville nu zien in ‘The Last Frontier’. De serie is afgelopen, maar\nhij is te streamen op Apple TV. Hier zien we hem in een andere rol dan gewend:\nniet als grappenmaker, maar als een gemene gevangene. En achter de schermen\nhaalde hij gewoon een grap uit. Sommige dingen veranderen nooit."
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

const url = "src/content/nieuws/johnny-knoxville-bewijst-zijn-acteertalent-in-the-last-frontier.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/johnny-knoxville-bewijst-zijn-acteertalent-in-the-last-frontier.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/johnny-knoxville-bewijst-zijn-acteertalent-in-the-last-frontier.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
