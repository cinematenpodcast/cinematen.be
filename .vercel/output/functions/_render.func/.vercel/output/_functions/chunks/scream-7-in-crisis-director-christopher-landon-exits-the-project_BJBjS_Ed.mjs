import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Scream 7 in crisis, regisseur Christopher Landon stapt op",
  "date": "2023-12-24T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1703368186.jpg",
  "trailer": "",
  "slug": "scream-7-in-crisis-regisseur-christopher-landon-stapt-op",
  "draft": false,
  "tags": ["film"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "scream-7-heeft-nu-geen-regisseur-of-hoofdrolspelers",
    "text": "Scream 7 heeft nu geen regisseur of hoofdrolspelers"
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
      children: "Een nieuwe ontwikkeling in de “Scream” filmfranchise: regisseur Christopher Landon bevestigd dat hij niet langer de regisseur zal zijn van “Scream 7,” de langverwachte vervolgfilm die al eerder acteurs Melissa Barrera en Jenna Ortega verloor. “Ik denk dat nu het juiste moment is om aan te kondigen dat ik weken geleden officieel ben gestopt met Scream 7,” schreef de regisseur van “Freaky” vandaag in een bericht op X. “Dit zal sommigen teleurstellen en anderen verheugen. Het was een droombaan die veranderde in een nachtmerrie.”"
    }), "\n", createVNode(_components.p, {
      children: "Hoewel gedetailleerde informatie over de productie van “Scream 7” waarschijnlijk pas later bekend zal worden, zijn er al veel controverses publiekelijk aan het licht gekomen voorafgaand aan de opnames van de film. Oorspronkelijke hoofdrolspeelster Neve Campbell koos ervoor om niet terug te keren naar de serie vanaf “Scream 6,” vanwege een teleurstellend salarisvoorstel. Campbell gebruikte de ervaring als een kans om op te komen voor eerlijke lonen in Hollywood en vertelde People: “Als vrouw in deze branche is het heel belangrijk voor ons om gewaardeerd te worden en te vechten voor waardering.”"
    }), "\n", createVNode(_components.h2, {
      id: "scream-7-heeft-nu-geen-regisseur-of-hoofdrolspelers",
      children: "Scream 7 heeft nu geen regisseur of hoofdrolspelers"
    }), "\n", createVNode(_components.p, {
      children: "Voor sommige fans is de genadeslag voor “Scream 7” gekomen toen actrice Melissa Barrera “verwijderd” werd uit de aankomende film vanwege wat een woordvoerder van Spyglass “antisemitisme en het aanzetten tot haat” noemde. Deze beslissing werd door velen gezien als een reactie op pro-Palestijnse berichten die Barrera op Instagram had gedeeld. De actrice verklaarde later in een statement dat ze antisemitisme, islamofobie en “haat en vooroordelen tegen welke groep dan ook” veroordeelt. Te midden van commentaar waarin Barrera’s ontslag werd gezien als het begin van een nieuwe Hollywood Blacklist, werd even later bekend dat ook Jenna Ortega niet zou terugkeren naar de film, een beslissing die naar verluidt al genomen was voordat haar mede-actrice werd ontslagen."
    }), "\n", createVNode(_components.p, {
      children: "Landon sprak zich eerder uit toen het nieuws over Barrera’s ontslag bekend werd, hij plaatste op X: “Dit is mijn statement. Alles stinkt. Stop met schreeuwen. Dit was niet mijn beslissing om te nemen.” Hoewel het nieuws over Barrera iets meer dan een maand geleden bekend werd, is onduidelijk wanneer ze daadwerkelijk is ontslagen en of het vertrek van Landon zeven weken geleden plaatsvond vóór of als reactie op die beslissing. In zijn recente post schreef hij: “Mijn hart brak voor iedereen die erbij betrokken was. Iedereen. Maar het is tijd om verder te gaan.” En vervolgde hij met: “Ik heb niets meer toe te voegen aan het gesprek behalve dat ik hoop dat het nalatenschap van Wes Craven voortleeft en boven het rumoer van een verdeelde wereld uitstijgt. Wat hij en schrijver Kevin Williamson hebben gecreëerd is iets geweldigs en ik was vereerd om ook maar heel even in hun schijnwerpers te staan.”"
    }), "\n", createVNode(_components.p, {
      children: "Met geen regisseur of hoofdrolspelers en een ronduit slecht imago, is het moeilijk voor te stellen hoe “Scream 7” nu verder kan gaan. Misschien is het tijd om Ghostface met pensioen te laten gaan."
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

const url = "src/content/nieuws/scream-7-in-crisis-director-christopher-landon-exits-the-project.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/scream-7-in-crisis-director-christopher-landon-exits-the-project.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/scream-7-in-crisis-director-christopher-landon-exits-the-project.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
