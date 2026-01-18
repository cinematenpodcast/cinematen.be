import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Peaky Blinders zet de Shelby saga verder met twee nieuwe reeksen",
  "date": "2025-10-02T14:25:33.301Z",
  "soort": "TV",
  "thumbnail": "/images/article-images/l-intro-1759414442.jpg",
  "trailer": "",
  "slug": "peaky-blinders-zet-de-shelby-saga-verder-met-twee-nieuwe-reeksen",
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
      children: "Wij kunnen opgelucht ademhalen, want Peaky Blinders gaat verder. De BBC en\nNetflix hebben samen bekendgemaakt dat er twee nieuwe series komen die doorgaan\nna de gebeurtenissen van de nog komende film. Steven Knight, de maker van de\noorspronkelijke serie, schrijft ook deze nieuwe shows. Elke reeks krijgt zes\nafleveringen van een uur."
    }), "\n", createVNode(_components.p, {
      children: "Het verhaal speelt zich af in Groot-Brittannië in 1953. De zwaar gebombardeerde\nstad Birmingham wordt heropgebouwd en de Shelby familie staat opnieuw in het\nmiddelpunt van een harde strijd. Deze keer draait alles om wie de grote\nwederopbouw van de stad mag leiden."
    }), "\n", createVNode(_components.p, {
      children: "Ondertussen heeft Knight ook een nieuwe serie gemaakt voor Netflix: House of\nGuinness. Deze show gaat over de familie die het bekende biermerk Guinness heeft\nopgericht en krijgt vooral goede reacties. Net als bij Peaky Blinders weet\nKnight ook hier een historisch verhaal op een spannende manier te vertellen, al\nzijn er wel punten van kritiek. Sommigen vinden dat de show niet altijd de echte\ngeschiedenis volgt en het cliffhanger-einde van het eerste seizoen zorgde voor\ndiscussie."
    }), "\n", createVNode(_components.p, {
      children: "De grootste overeenkomst met Peaky Blinders is de verandering van locatie. In\nhet zesde seizoen van Peaky Blinders verplaatste een deel van het verhaal zich\nnaar Amerika, wat wij toen een rare en onlogische stap vonden. Birmingham was\naltijd het hart van de serie geweest. Nu lijkt House of Guinness hetzelfde te\ndoen. Hoewel de serie zich afspeelt in Dublin, Ierland, gaat een deel van het\nverhaal al snel naar Amerika omdat het bedrijf Guinness zijn producten\nwereldwijd wil verkopen."
    }), "\n", createVNode(_components.p, {
      children: "Of wij deze verandering net zo vreemd zullen vinden als bij Peaky Blinders is\nnog niet duidelijk. Omdat Guinness een wereldwijd bekend merk is, lijkt het\nlogischer dat het verhaal zich ook buiten Ierland afspeelt. Toch is het een\nrisico, zeker omdat de serie helemaal niet in Ierland of Amerika is gefilmd. De\nscènes in Dublin werden opgenomen in Engelse steden zoals Liverpool en\nManchester, en het New York van de serie kwam eigenlijk tot stand in Manchester."
    }), "\n", createVNode(_components.p, {
      children: "De toekomst van House of Guinness is nog onzeker - we weten niet hoeveel\nseizoenen de serie gaat krijgen. Maar het lijkt erop dat Amerika een belangrijke\nrol blijft spelen. Het bedrijf Guinness wil zijn bier over de hele wereld\nverkopen, dus het verhaal zal zich ook op meer plekken af moeten spelen. Of dat\ngoed gaat uitpakken voor de serie, moet nog blijken."
    }), "\n", createVNode(_components.p, {
      children: "Kortom, er is veel nieuws voor ons als kijkers van de series van Steven Knight.\nPeaky Blinders gaat door met twee nieuwe series en een film, en zijn nieuwe\nserie House of Guinness is nu te zien op Netflix. Beide shows vertellen een\nverhaal over een beroemde familie en hun strijd om macht, waarbij de vraag\ncentraal staat hoe ze omgaan met groei en verandering - zelfs als dat betekent\ndat ze hun vertrouwde omgeving moeten verlaten."
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

const url = "src/content/nieuws/peaky-blinders-zet-de-shelby-saga-verder-met-twee-nieuwe-reeksen.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/peaky-blinders-zet-de-shelby-saga-verder-met-twee-nieuwe-reeksen.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/peaky-blinders-zet-de-shelby-saga-verder-met-twee-nieuwe-reeksen.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
