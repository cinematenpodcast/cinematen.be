import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Bad Boys: Ride or Die - De iconische hereniging van Mike Lowrey en Marcus Burnett",
  "date": "2024-03-26T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/bad-boys-ride-or-die-comes-to-theaters-this-summer-1711460676.jpg",
  "trailer": "hRFY_Fesa9Q",
  "slug": "bad-boys-ride-or-die---de-iconische-hereniging-van-mike-lowrey-en-marcus-burnett",
  "draft": false,
  "tags": ["film", "trailer"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "een-terugblik-op-de-franchise",
    "text": "Een terugblik op de franchise"
  }, {
    "depth": 2,
    "slug": "whats-next",
    "text": "What’s next?"
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
      children: "De iconische “Bad Boys” franchise is terug met een knal. Will Smith en Martin Lawrence schitteren opnieuw als de onverschrokken Miami PD-detectives Mike Lowrey en Marcus Burnett in het langverwachte vierde deel, getiteld “Bad Boys: Ride or Die”. De trailer, recentelijk vrijgegeven door Sony Pictures, belooft een mix van actie, humor en de kenmerkende chemie tussen de hoofdrolspelers."
    }), "\n", createVNode(_components.h2, {
      id: "een-terugblik-op-de-franchise",
      children: "Een terugblik op de franchise"
    }), "\n", createVNode(_components.p, {
      children: "Het avontuur van Mike en Marcus begon in 1995, toen ze voor het eerst samenwerkten om illegale drugshandel in Miami te bestrijden. Na het succes van de eerste twee films, geregisseerd door Michael Bay, namen Adil El Arbi en Bilall Fallah het stokje over voor “Bad Boys for Life” en zijn ze nu terug voor deze nieuwste aflevering."
    }), "\n", createVNode(_components.p, {
      children: "Zeventien jaar scheidden de release van “Bad Boys II” in 2003 en “Bad Boys for Life” in 2020. Het derde deel behaalde wereldwijd $426,5 miljoen aan de box office, net voordat de COVID-19-pandemie de bioscoopwereld lamlegde. Fans van de franchise waren verheugd toen Smith en Lawrence via sociale media de komst van het vierde deel aankondigden, met de veelzeggende boodschap “IT’S ABOUT THAT TIME!”"
    }), "\n", createVNode(_components.h2, {
      id: "whats-next",
      children: "What’s next?"
    }), "\n", createVNode(_components.p, {
      children: "In deze nieuwe film vinden Mike en Marcus zichzelf geconfronteerd met een uitdaging van formaat: de naam van hun overleden politiecaptain zuiveren, die wordt beschuldigd van corruptie en samenzwering met het kartel. De trailer onthult dat de ‘Bad Boys’ op een bepaald moment zelf in de criminaliteit terechtkomen, wat zorgt voor een intrigerende wending in het verhaal."
    }), "\n", createVNode(_components.p, {
      children: "“Bad Boys: Ride or Die” belooft spanning, intensieve vuurgevechten, hoge snelheidsachtervolgingen en natuurlijk een flinke dosis humor. De chemie tussen Smith en Lawrence, die zo kenmerkend is voor deze serie, blijft ook in deze film overeind staan. Het vervolg is gepand voor release op 7 juni en lijkt in lijn te zijn met het kwaliteitsniveau van zijn voorganger, die lovende kritieken ontving en commercieel zeer succesvol was."
    }), "\n", createVNode(_components.p, {
      children: "Net zoals “Bad Boys for Life” zal “Ride or Die” worden geregisseerd door Adil El Arbi en Bilall Fallah, die ook werken aan andere grote projecten zoals “Batgirl” voor Warner Bros. Discovery en afleveringen van de MCU-serie “Ms. Marvel” voor Disney."
    }), "\n", createVNode(_components.p, {
      children: "In onze review van “Bad Boys for Life” schreef IGN: “Bad Boys for Life vindt het wiel niet opnieuw uit, maar als je fan bent van de franchise, zul je waarschijnlijk dol zijn op dit knettergekke vervolg.”"
    }), "\n", createVNode(_components.p, {
      children: "Taylor, reporter bij IGN, merkte op: “Vandaag onthuld dat ‘Bad Boys: Ride or Die’ grinta, intense schietpartijen, hoge snelheid achtervolgingen en vooral veel humor bevat. Optredens van Smith en Lawrence hebben altijd gezorgd voor een chemie en gevatte opmerkingen, en ‘Bad Boys: Ride or Die’ lijkt hierop geen uitzondering te zijn.”"
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

const url = "src/content/nieuws/bad-boys-ride-or-die---de-iconische-hereniging-van-mike-lowrey-en-marcus-burnett.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/bad-boys-ride-or-die---de-iconische-hereniging-van-mike-lowrey-en-marcus-burnett.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/bad-boys-ride-or-die---de-iconische-hereniging-van-mike-lowrey-en-marcus-burnett.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
