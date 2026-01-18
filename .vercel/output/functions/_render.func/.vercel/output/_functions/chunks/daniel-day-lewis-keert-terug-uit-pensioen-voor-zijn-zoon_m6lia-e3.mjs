import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Daniel Day-Lewis keert terug uit pensioen voor zijn zoon",
  "date": "2024-10-03T09:11:14.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1727797070.jpg",
  "trailer": "",
  "slug": "daniel-day-lewis-een-comeback-in-de-wereld-van-film",
  "tags": ["film", "casting"]
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
      children: "De gerenommeerde acteur Daniel Day-Lewis maakt zijn langverwachte terugkeer naar het witte doek, zeven jaar na zijn aankondiging om met pensioen te gaan. De 67-jarige drievoudige Oscarwinnaar heeft besloten om weer te acteren in een film genaamd “Anemone,” geregisseerd door zijn zoon Ronan Day-Lewis."
    }), "\n", createVNode(_components.p, {
      children: "Na zijn laatste film in 2017, waarin hij schitterde in Paul Thomas Anderson’s “Phantom Thread,” leek het alsof Day-Lewis voorgoed afscheid nam van acteren. In een interview met W Magazine onthulde hij destijds dat de drang om te stoppen zo sterk was dat het een dwingende noodzaak werd. Echter, recente ontmoetingen en activiteiten wijzen op een op handen zijnde terugkeer naar de schijnwerpers."
    }), "\n", createVNode(_components.p, {
      children: "Verschillende bronnen bevestigen dat Daniel Day-Lewis en mede-acteur Sean Bean onlangs werden gezien terwijl ze samen op een motorfiets door Manchester, Engeland reden. Deze gebeurtenis wakkerde de nieuwsgierigheid aan over de mogelijke terugkeer van Day-Lewis naar de wereld van film."
    }), "\n", createVNode(_components.p, {
      children: "Terwijl Day-Lewis gedurende de afgelopen jaren spaarzaam in het openbaar verscheen, verraste hij velen door in januari op te dagen bij de National Board of Review Awards. Tijdens dit evenement reikte hij een prijs uit aan regisseur Martin Scorsese, met wie hij eerder had samengewerkt aan films zoals “Gangs of New York” (2002) en “The Age of Innocence” (1993)."
    }), "\n", createVNode(_components.p, {
      children: "“Anemone,” het aankomende project waarin Daniel Day-Lewis zal schitteren, is een co-productie van Focus Features en Plan B. De film markeert het regiedebuut van zijn zoon Ronan Day-Lewis en belooft de complexe relaties tussen vaders, zonen en broers te verkennen, evenals de dynamiek van familiebanden."
    }), "\n", createVNode(_components.p, {
      children: "Ronan Day-Lewis, een getalenteerde schilder die al eerder zijn werken in New York tentoonstelde, debuteert nu internationaal met zijn eerste solotentoonstelling in Hong Kong. Peter Kujawski, voorzitter van Focus Features, benadrukte de opwinding rond de samenwerking met de getalenteerde visuele kunstenaar Ronan Day-Lewis en zijn vader Daniel Day-Lewis, die samen een uitzonderlijk script hebben geschreven."
    }), "\n", createVNode(_components.p, {
      children: "Het publiek kan zich verheugen op de gezamenlijke visie van deze twee creatieve geesten die binnenkort op het grote scherm tot leven zal komen."
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

const url = "src/content/nieuws/daniel-day-lewis-keert-terug-uit-pensioen-voor-zijn-zoon.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/daniel-day-lewis-keert-terug-uit-pensioen-voor-zijn-zoon.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/daniel-day-lewis-keert-terug-uit-pensioen-voor-zijn-zoon.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
