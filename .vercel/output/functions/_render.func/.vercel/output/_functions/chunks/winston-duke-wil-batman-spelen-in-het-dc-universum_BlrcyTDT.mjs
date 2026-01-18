import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Winston Duke wil Batman spelen in het DC Universum",
  "date": "2024-05-03T11:06:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/intro-1714661570.jpg",
  "trailer": "",
  "slug": "winston-duke-wil-batman-spelen-in-het-dc-universum",
  "tags": ["film", "casting"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "ervaring-als-bruce-waynebatman",
    "text": "Ervaring als Bruce Wayne/Batman"
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
      children: "Black Panther-acteur Winston Duke heeft recentelijk zijn interesse geuit om de iconische superheld Batman te vertolken in het DC Universe. In een interview met /Film ter promotie van de film “The Fall Guy”, deelde Duke enthousiast zijn wens om deze rol op zich te nemen. Hij moedigde zelfs fans aan om een campagne te starten en hem te steunen in zijn streven naar deze uitdagende rol."
    }), "\n", createVNode(_components.h2, {
      id: "ervaring-als-bruce-waynebatman",
      children: "Ervaring als Bruce Wayne/Batman"
    }), "\n", createVNode(_components.p, {
      children: "Duke heeft al enige ervaring met het personage van Batman. Eerder sprak hij de stem in van Bruce Wayne/Batman in de scripted podcast “Batman Unburied” op Spotify, waar hij tegenover Hasan Minhaj als The Riddler, Gina Rodriguez als Barbara Gordon en Jason Isaacs als Alfred Pennyworth stond. Deze serie herschiep Bruce Wayne als een forensisch patholoog zonder geheugen van zijn bestaan als Batman, wat Barbara dwong om The Riddler in te schakelen om de nieuwste seriemoordenaar in Gotham te stoppen."
    }), "\n", createVNode(_components.p, {
      children: "Terwijl “Batman Unburied” vernieuwd werd voor een tweede seizoen in 2022, is het nog onbekend of Duke terug zal keren om de titelheld te vertolken. Eerder werd hij vervangen door Colman Domingo voor de spin-off serie “The Riddler: Secrets in the Dark” in 2023."
    }), "\n", createVNode(_components.p, {
      children: "Op dit moment wordt verwacht dat Batman zijn debuut zal maken in het DCU in de film “The Brave and the Bold”, geregisseerd door Andy Muschietti, bekend van “The Flash”. Hoewel specifieke plotdetails nog onbekend zijn, heeft James Gunn, hoofd van DC Studios, onthuld dat de film inspiratie zal putten uit het werk van schrijver Grant Morrison en kunstenaar Andy Kubert op het gebied van Batman in de stripboeken, met name uit het verhaal “Batman and Son” uit 2006."
    }), "\n", createVNode(_components.p, {
      children: "Het verhaal uit de stripboeken staat vooral bekend bij de DC-fans omdat het Bruce Wayne’s zoon, Damian, toevoegde aan de belangrijkste DC Comics continuïteit. Dit volgde op zijn niet-canonieke debuut als naamloze baby in de grafische roman uit 1987, “Batman: Son of the Demon”."
    }), "\n", createVNode(_components.p, {
      children: "De releasedatum van “The Brave and the Bold” is op dit moment nog niet bekend."
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

const url = "src/content/nieuws/winston-duke-wil-batman-spelen-in-het-dc-universum.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/winston-duke-wil-batman-spelen-in-het-dc-universum.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/winston-duke-wil-batman-spelen-in-het-dc-universum.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
