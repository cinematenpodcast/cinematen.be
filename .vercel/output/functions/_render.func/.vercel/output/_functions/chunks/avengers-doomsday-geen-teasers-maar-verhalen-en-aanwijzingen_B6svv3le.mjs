import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Geen teasers van Avengers Doomsday, maar verhalen en hints",
  "date": "2026-01-14T11:55:49.044Z",
  "soort": "film",
  "thumbnail": "https://login.wabliefteru.be/assets/ab168fb1-93e1-4e2a-b564-4ea573fb29ed",
  "trailer": "a4fsh63FKdM",
  "slug": "avengers-doomsday-geen-teasers-maar-verhalen-en-aanwijzingen"
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
      children: "De afgelopen vier weken heeft Marvel elke week een nieuwe video vrijgegeven voor\nde film Avengers: Doomsday. Normaal noemen we dat teasers of trailers, maar de\nregisseurs Joe en Anthony Russo zien dat anders. Op hun Instagram schreven ze:\n“Wat je de afgelopen vier weken hebt gezien… zijn geen teasers. Of trailers. Het\nzijn verhalen. Het zijn aanwijzingen… Let goed op.” Daarbij gebruikten ze de\nhashtag #DoomsdayHasBegun, oftewel ‘Doomsday is begonnen’."
    }), "\n", createVNode(_components.p, {
      children: "Wat bedoelen ze hiermee? Laten we de vier video’s eens bekijken. De eerste\nfocust op Steve Rogers, gespeeld door Chris Evans, de oude Captain America, die terugkeert als vader. De tweede video toont\nThor, gespeeld door Chris Hemsworth, die bidt tot zijn vader Odin voor kracht in\neen laatste gevecht om zijn dochter te beschermen."
    }), "\n", createVNode(_components.p, {
      children: "De derde video brengt de X-Men terug, met Professor X (Patrick Stewart), Magneto\n(Ian McKellen) en Cyclops (James Marsden) die zijn laserogen gebruikt, terwijl\neen Sentinel op de achtergrond staat. De vierde video speelt zich af in Wakanda\nen toont de Talokans, het volk van Namor, en de Wakandans samen met Ben Grimm van de Fantastic\nFour die verandert in The Thing."
    }), "\n", createVNode(_components.p, {
      children: "De Russos zijn erg geheimzinnig en dat is slim, want nu hebben we het er\nallemaal over. Sommigen speculeren dat de beelden niet in de film zelf zullen\nzitten, maar speciaal gemaakt zijn als preview. Anderen denken dat de video’s\ntonen op welke personages Dr. Doom zich richt, mogelijk gezien vanuit zijn\nperspectief."
    }), "\n", createVNode(_components.p, {
      children: "Er is ook een Doomsday Clock die aftelt naar de releasedatum op 18 december\n2026. Elke video eindigt ermee. Misschien is de klok zelf een aanwijzing."
    }), "\n", createVNode(_components.p, {
      children: "De cast van Avengers: Doomsday is enorm. Enkele bekende namen zijn: Chris\nHemsworth als Thor, Vanessa Kirby als Sue Storm, Sebastian Stan als Bucky\nBarnes, Letitia Wright als Shuri, Anthony Mackie als Sam Wilson, Paul Rudd als\nScott Lang, Wyatt Russell als John Walker, Tenoch Huerta Mejía als Namor, Ebon\nMoss-Bachrach als Ben Grimm, Simu Liu als Shang-Chi, Florence Pugh als Yelena\nBelova, Kelsey Grammer als Hank McCoy, Lewis Pullman als Bob, Danny Ramirez als\nJoaquin Torres, Joseph Quinn als Johnny Storm, David Harbour als Red Guardian,\nWinston Duke als M’Baku, Hannah John-Kamen als Ghost, Tom Hiddleston als Loki,\nPatrick Stewart als Charles Xavier, Ian McKellen als Erik Lehnsherr, Alan\nCumming als Kurt Wagner, Rebecca Romijn als Raven Darkhölme, James Marsden als\nScott Summers, Channing Tatum als Remy LeBeau, Pedro Pascal als Reed Richards,\nen Robert Downey Jr. als Victor von Doom, de slechterik van de film."
    }), "\n", createVNode(_components.p, {
      children: "Downey Jr. speelde eerder Iron Man, dus dit is een grote verandering. Met zoveel\npersonages belooft het een drukke film te worden, maar de video’s benadrukken\ndat elk personage een eigen verhaal heeft. De Russos zeggen dat deze verhalen\naanwijzingen zijn, dus we gaan alle details goed in de gaten houden. We hebben\nnog bijna een jaar te wachten, maar de hype is nu al begonnen. Wie weet krijgen we over een paar dagen een echte teaser…"
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

const url = "src/content/nieuws/avengers-doomsday-geen-teasers-maar-verhalen-en-aanwijzingen.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/avengers-doomsday-geen-teasers-maar-verhalen-en-aanwijzingen.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/avengers-doomsday-geen-teasers-maar-verhalen-en-aanwijzingen.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
