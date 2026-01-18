import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Saltburn",
  "date": "2024-01-15T00:00:00.000Z",
  "soort": "Film review",
  "schrijver": "Yorrick",
  "thumbnail": "https://image.demorgen.be/238841936/width/2480/barry-keoghan-in-saltburn-van-emerald-fennell",
  "poster": "https://resizing.flixster.com/vw4fqr7FfM7s72DaiYj-YSc4RW4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzk4Mjk4OTA5LTk1ZTgtNDViNS04YTdkLWM2OTJmOGViZDkyMi5qcGc=",
  "trailer": "lALMdJf6UUE",
  "summary": "Saltburn is een deftige film die misschien een beetje overhyped werd door sociale media. De acteerprestaties zijn goed, de beeldvoering is prachtig en uniek maar het verhaal is jammer genoeg voorspelbaar en niet voldoende onderbouwd.",
  "slug": "saltburn",
  "draft": false,
  "rating": 2.5,
  "tags": ["drama", "Film"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "ik-had-zotter-verwacht",
    "text": "Ik had zotter verwacht"
  }, {
    "depth": 2,
    "slug": "rich-people-zijn-weird",
    "text": "Rich people zijn weird"
  }, {
    "depth": 2,
    "slug": "is-het-de-drie-uur-waard",
    "text": "Is het de drie uur waard?"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "ik-had-zotter-verwacht",
      children: "Ik had zotter verwacht"
    }), "\n", createVNode(_components.p, {
      children: "Mijn review van “Saltburn” is er één van gemengde gevoelens. Met hoge verwachtingen door de online hype, was ik nieuwsgierig voor deze film. Ondanks dat ik de goeie punten ervan wel in zie - zoals de unieke beeldvoering en overtuigende acteerprestaties van de meeste castleden, waaronder zeker Barry Keoghan in de rol van Oliver, het hoofdpersonage - voelde ik me enigszins teleurgesteld na het zien van de film."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "De film volgt het verhaal van Oliver, een jongen uit de middenklasse die de kans krijgt om op Oxford te studeren. Daar raakt hij betrokken bij de vriendenkring van de rijkste en meest populaire student van zijn jaar, Felix. die hem adopteert als beste vriend en Oliver uitnodigt om de zomer door te brengen op Saltburn, het aristocratische domein van zijn familie."
      })
    }), "\n", createVNode(_components.p, {
      children: "De plotwendingen beloofden veel, maar naar mijn mening werden ze niet volledig overtuigend uitgewerkt. Vooral de poging van de film om tegen het einde een grote twist te introduceren, waarbij Oliver naar voren komt als een soort mastermind, voelde geforceerd en onvoldoende onderbouwd. Als er hints doorheen de film waren naar het einde zijn die ver over mijn hoofd gevlogen waardoor ik de twist wat van de pot gerukt vond. Ik had graag wat meer aanwijzingen naar de ware bedoelingen van Oliver opgemerkt doorheen de drie uur durende film waarvan ik pas gewaar zou worden als ik het volledige plaatje zag, maar helaas."
    }), "\n", createVNode(_components.h2, {
      id: "rich-people-zijn-weird",
      children: "Rich people zijn weird"
    }), "\n", createVNode(_components.p, {
      children: "Thematisch heeft de film interessante elementen, zoals de kritische blik op de Engelse aristocratie. Acteurs zoals Richard E. Grant leverden sterke prestaties, die de kijker een inzicht geven in de vervormde natuur van rijkdom en privilege. Toch misten sommige aspecten van de film diepgang. Bovendien leek het verhaal soms te leunen op schokkende scènes die helaas niet zo impactvol waren als ik had gehoopt. Bij de beruchte badkuip scène moest ik even kokhalsen maar daar bleef het bij en het echte nut buiten de kijker ‘ieuw’ te laten zeggen zag ik er niet van in."
    }), "\n", createVNode(_components.p, {
      children: "Visueel is “Saltburn” zonder twijfel artistiek, goed uitgevoerd en uniek. De kleuren zijn prachtig en de shots zijn een plezier voor het oog. Het gebruik van symboliek, zoals de Minotaurus in het doolhof van Saltburn die strookt met het personage van Oliver, was creatief bedacht, maar slaagde er spijtig genoeg niet in om het verhaal naar een volgend niveau te tillen."
    }), "\n", createVNode(_components.h2, {
      id: "is-het-de-drie-uur-waard",
      children: "Is het de drie uur waard?"
    }), "\n", createVNode(_components.p, {
      children: "“Saltburn” is mogelijk interessant voor diegenen die nieuwsgierig zijn naar de hype. Toch zou ik willen waarschuwen voor een potentiële teleurstelling."
    }), "\n", createVNode(_components.p, {
      children: "Toen ik de hype rond de film zag zei ik tegen Maarten dat dit wellicht een film kon zijn om te bespreken in de Podcast. Maar al terwijl ik hem keek liet ik hem weten om geen moeite te doen. Hoewel de film enkele sterke punten heeft, leeft het niet op tot de hype die eromheen is gecreëerd. “Saltburn” zal waarschijnlijk wel een paar nominaties opleveren tijdens award season maar echt winnen? Goh, waarschijnlijk niet."
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

const url = "src/content/reviews/saltburn.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/reviews/saltburn.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/reviews/saltburn.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
