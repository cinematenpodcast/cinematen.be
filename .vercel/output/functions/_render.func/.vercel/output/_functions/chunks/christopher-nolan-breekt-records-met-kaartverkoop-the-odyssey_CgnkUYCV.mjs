import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Christopher Nolan breekt records met kaartverkoop The Odyssey",
  "date": "2025-10-27T15:51:20.636Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1761578294.jpg",
  "trailer": "",
  "slug": "christopher-nolan-breekt-records-met-kaartverkoop-the-odyssey",
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
      children: "Christopher Nolan’s nieuwe film “The Odyssey” komt pas op 17 juli 2026 in de\nbioscoop, maar de kaartverkoop voor de IMAX 70mm vertoningen is nu al gestart.\nDe tickets waren in minder dan 20 minuten volledig uitverkocht, wat bijzonder is\naangezien er nog geen trailer of poster van de film te zien is."
    }), "\n", createVNode(_components.p, {
      children: "IMAX 70mm is een speciale filmtechniek die een extreem scherp en groot beeld\ngeeft. Nolan beschouwt dit als de beste manier om films te bekijken en gebruikt\nal jaren IMAX camera’s voor zijn projecten. Voor “The Odyssey” zet hij zelfs een\nnieuwe IMAX camera in die bijna niet op tijd klaar was voor de opnames."
    }), "\n", createVNode(_components.p, {
      children: "Wereldwijd zijn er slechts 30 bioscopen die IMAX 70mm kunnen tonen. Daarom\nwerken IMAX en Cinemark samen om 12 extra bioscopen aan te passen met IMAX met\nLaser technologie. Deze nieuwe zalen komen in steden zoals Chicago en Colorado\nSprings, maar niet in New York of Los Angeles. Ook in het buitenland zijn de\nkaartjes al schaars - zowel BFI IMAX in Londen als Cineplex in Toronto zijn\nvolledig uitverkocht."
    }), "\n", createVNode(_components.p, {
      children: "Meer filmmakers omarmen deze filmtechniek. Denis Villeneuve gaat “Dune: Part 3”\nopnemen met IMAX camera’s, en ook Quentin Tarantino en Paul Thomas Anderson\nwerken met deze methode. De grote filmrollen worden soms viral op sociale media,\nwaar mensen gefascineerd zijn door het maakproces."
    }), "\n", createVNode(_components.p, {
      children: "Over het verhaal van “The Odyssey” is weinig bekend, maar het zou een vervolg\nkunnen zijn op “Interstellar”. Nolan werkt opnieuw samen met cameraman Hoyte van\nHoytema en ze testen samen de nieuwe IMAX camera’s. Het feit dat er bijna geen\nwerkende IMAX camera’s meer zijn, doet vermoeden dat er mogelijk speciale\ncamera’s voor Nolan worden gemaakt."
    }), "\n", createVNode(_components.p, {
      children: "IMAX heeft beloofd meer vertoningen toe te voegen en mensen kunnen zich\ninschrijven voor updates over nieuwe kaartjes. Wij kopen dus al tickets zonder\nook maar één beeld van de film te hebben gezien, wat aantoont hoeveel vertrouwen\nwe in Nolan’s werk hebben."
    }), "\n", createVNode(_components.p, {
      children: "De film volgt de reis van Odysseus met de slogan “Trotseer de goden”, waar hij\nna een oorlog naar huis moet terugkeren en onderweg talloze obstakels tegenkomt.\nHoe Nolan dit epische verhaal gaat brengen blijft een verrassing, maar we weten\nzeker dat hij weer iets bijzonders maakt met IMAX 70mm."
    }), "\n", createVNode(_components.p, {
      children: "Deze vroege kaartverkoop is uniek in de filmwereld - nooit eerder verkocht IMAX\nzo vroeg tickets. Net zoals hij met “Oppenheimer” IMAX 70mm populair maakte,\ndoet Nolan dit opnieuw met “The Odyssey”. Zo leren steeds meer mensen over deze\nbijzondere filmstijl."
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

const url = "src/content/nieuws/christopher-nolan-breekt-records-met-kaartverkoop-the-odyssey.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/christopher-nolan-breekt-records-met-kaartverkoop-the-odyssey.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/christopher-nolan-breekt-records-met-kaartverkoop-the-odyssey.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
