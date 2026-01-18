import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Andrew Garfield en Florence Pugh EN HET VERSCHRIKKELIJKE PAARD",
  "date": "2024-08-16T11:06:21.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1723734301.jpg",
  "trailer": "",
  "slug": "het-verhaal-achter-we-live-in-time",
  "tags": ["film"]
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    img: "img",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "A24 heeft onlangs een nieuwe promotieafbeelding vrijgegeven voor de film “We Live in Time”, een romantisch drama dat zich over meerdere decennia uitstrekt en sterren bevat als Florence Pugh en Andrew Garfield. Op het eerste gezicht lijkt het verhaal te draaien om de relatie tussen Almut (gespeeld door Pugh) en Tobias (gespeeld door Garfield), van hun eerste ontmoeting tot het starten van een gezin samen. Met fragmenten uit hun leven belooft de film een aangrijpende toon te zetten, waarbij het paar elkaar ondersteunt door carrièrehoogtepunten en gezondheidsproblemen."
    }), "\n", createVNode(_components.p, {
      children: "In de nieuwste promotionele foto van “We Live in Time” wordt een schijnbaar vroeg moment in hun relatie afgebeeld, waar Pugh en Garfield lachen terwijl ze samen genieten van een romantische draaimolenrit. Echter, wat mogelijk een briljante marketingzet of een grove nalatigheid is, wordt de gelukkige koppel volledig overschaduwd door het demonische voorkomen van het draaimolenpaard naast hen."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://www.slashfilm.com/img/uploads/embed/it-4aJbQA-1723734045.jpg",
        alt: "we live in time normale foto"
      })
    }), "\n", createVNode(_components.p, {
      children: "Het angstaanjagende paard, met zijn uitpuilend, zielloos oog en gapende muil, eist de aandacht van de kijker op en weigert ons toe te staan om gedachteloos te genieten van het zien van Pugh en Garfield die doen alsof ze verliefd zijn. Gevangen in wat ik alleen maar kan aannemen een stille schreeuw is, lijkt het gekwelde pony bijna de vierde muur te doorbreken door rechtstreeks naar de kijkers te staren. HELP MEEEE!"
    }), "\n", createVNode(_components.p, {
      children: "Direct na het verschijnen van dit verontrustende paard richtten gebruikers van sociale media zich erop, braken hun photoshop uit met vreugde. Het paardje ging snel viraal en inspireerde talloze memes, waarbij mensen het in andere films monteerden of het bovenop de hoofden van Garfield en Pugh plaatsten. Zelfs Late Show-presentator Stephen Colbert mengde zich in het gesprek over dit gekwelde dier."
    }), "\n", createVNode(_components.p, {
      children: "“Kijk, ik ga zeggen wat we allemaal denken,” grapte Colbert tijdens zijn monoloog op woensdagavond. “Dat pony tript hem helemaal op ketamine.”"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://www.slashfilm.com/img/uploads/embed/it-FM7VmG-1723733615.jpg",
        alt: "paard meme"
      })
    }), "\n", createVNode(_components.p, {
      children: "Het is onduidelijk of deze sinistere hengst eerder in het wild bestond, of specifiek voor “We Live in Time” werd gecreëerd door een setontwerper die zijn roeping als existentieel kunstenaar heeft gemist. Terwijl de film in Londen werd gefilmd, lijken de paarden op de beroemde Golden Carousel aan de South Bank meer kleurrijk en minder alsof ze je ziel zouden opeten."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://www.slashfilm.com/img/uploads/embed/it-91zigc-1723733665.jpg",
        alt: "paard alien"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://www.slashfilm.com/img/uploads/embed/it-PTQ0AG-1723734169.jpg",
        alt: "paard prada"
      })
    }), "\n", createVNode(_components.p, {
      children: "“We Live in Time” en zijn verschrikkelijke paard komen op 11 oktober in de bioscoop."
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

const url = "src/content/nieuws/andrew-garfield-en-florence-pugh-en-het-verschrikkelijke-paard.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/andrew-garfield-en-florence-pugh-en-het-verschrikkelijke-paard.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/andrew-garfield-en-florence-pugh-en-het-verschrikkelijke-paard.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
