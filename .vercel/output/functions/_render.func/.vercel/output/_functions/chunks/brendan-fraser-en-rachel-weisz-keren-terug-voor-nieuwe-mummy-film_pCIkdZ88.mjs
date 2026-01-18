import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Brendan Fraser en Rachel Weisz keren terug voor nieuwe Mummy film!",
  "date": "2025-11-06T18:15:38.210Z",
  "soort": "film",
  "thumbnail": "https://login.wabliefteru.be/assets/6af1ba84-3472-49e0-9fd9-8cee1cbc03f0",
  "trailer": "",
  "slug": "brendan-fraser-en-rachel-weisz-keren-terug-voor-nieuwe-mummy-film"
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
      children: "Het is officieel: er komt een nieuwe film in The Mummy-reeks met Brendan Fraser\nen Rachel Weisz die hun iconische rollen opnieuw vertolken. Beide acteurs\nspeelden de hoofdrollen in de eerste twee films uit 1999 en 2001, en keren nu\nterug voor wat het vierde deel in de serie wordt."
    }), "\n", createVNode(_components.p, {
      children: "Universal, het bedrijf achter de originele films, heeft Radio Silence aangesteld\nals regisseurs. Dat team van Matt Bettinelli-Olpin en Tyler Gillett is bekend\nvan hun werk aan horrorfilms zoals Ready or Not en de recente Scream-films.\nEerder maakten ze al de vampierenfilm Abigail voor Universal."
    }), "\n", createVNode(_components.p, {
      children: "Brendan Fraser speelde de avonturier Rick O’Connell en Rachel Weisz de\nonderzoeker Evelyn Carnahan in de originele films. In het derde deel uit 2008\nspeelde Weisz niet meer mee - haar rol werd overgenomen door Maria Bello - maar\nde nieuwe film negeert die gebeurtenissen volledig en is een direct vervolg op\nde eerste twee films."
    }), "\n", createVNode(_components.p, {
      children: "Het script wordt geschreven door David Coggeshall, die dit zelf op sociale media\nheeft bevestigd. Sean Daniel, producent van de eerste films, keert terug in\ndiezelfde rol, samen met William Sherak, James Vanderbilt en Paul Neinstein."
    }), "\n", createVNode(_components.p, {
      children: "De eerste Mummy-film was een verrassend succes voor Universal met een\nwereldwijde opbrengst van meer dan 400 miljoen dollar. The Mummy Returns deed\nhet zelfs nog beter en maakte van Brendan Fraser een internationale filmster. Na\nde minder goed ontvangen Mummy-film met Tom Cruise in 2017, leek de reeks dood\nte zijn. Maar afgelopen jaar kreeg de originele film opnieuw aandacht vanwege\nzijn 25-jarig bestaan met heruitvoeringen in bioscopen."
    }), "\n", createVNode(_components.p, {
      children: "Brendan Fraser vierde recent een comeback met een Oscar voor zijn rol in The\nWhale, terwijl Rachel Weisz te zien was in Dead Ringers en Black Widow. Beide\nacteurs hebben eerder aangegeven met plezier terug te kijken op hun tijd in The\nMummy-films."
    }), "\n", createVNode(_components.p, {
      children: "Radio Silence is momenteel nog bezig met Ready or Not 2, dat in 2026 verschijnt,\nwaarna ze kunnen starten met de nieuwe Mummy film. Er is nog geen releasedatum\nbekend, maar wij kijken nu al uit naar de terugkeer van dit iconische duo."
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

const url = "src/content/nieuws/brendan-fraser-en-rachel-weisz-keren-terug-voor-nieuwe-mummy-film.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/brendan-fraser-en-rachel-weisz-keren-terug-voor-nieuwe-mummy-film.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/brendan-fraser-en-rachel-weisz-keren-terug-voor-nieuwe-mummy-film.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
