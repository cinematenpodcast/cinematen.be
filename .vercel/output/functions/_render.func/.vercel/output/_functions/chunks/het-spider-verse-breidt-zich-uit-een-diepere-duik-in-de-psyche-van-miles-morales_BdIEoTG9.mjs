import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Het Spider-Verse breidt zich uit: Een diepere duik in de psyche van Miles Morales",
  "date": "2024-03-27T00:00:00.000Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/the-spider-within-a-spider-verse-story-1711467416.jpg",
  "trailer": "FcGPpwFdE1Y",
  "slug": "het-spider-verse-breidt-zich-uit-een-diepere-duik-in-de-psyche-van-miles-morales",
  "draft": false,
  "tags": ["film", "trailer"]
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "In het universum van Spider-Man hebben we getuige kunnen zijn van een evolutie die verder gaat dan de traditionele live-action films. De geanimeerde “Spider-Verse” films hebben een frisse kijk geboden op het superheldengenre door complexe verhalen te vertellen met rijke visuele elementen. Eén van de meest geliefde personages die voortkwam uit deze nieuwe benadering is Miles Morales, een tiener die in een alternatief universum de mantel van Spider-Man op zich neemt."
    }), "\n", createVNode(_components.p, {
      children: "Recentelijk heeft Sony Pictures Animation een kortfilm uitgebracht met de titel “The Spider Within: A Spider-Verse Story.” Deze film, geregisseerd door Jarelle Dampier en geschreven door Khaila Amazan, werpt een schijnwerper op de innerlijke strijd van Miles Morales terwijl hij balanceert tussen zijn verantwoordelijkheden als student, vriend en superheld. In plaats van een specifieke superschurk tegenover zich te hebben, wordt Miles geconfronteerd met een belichaming van al zijn angsten en zorgen die voortkomen uit zijn dubbelleven als Spider-Man en de druk om te presteren in zijn dagelijks leven."
    }), "\n", createVNode(_components.p, {
      children: "Miles’ worstelingen worden tastbaar wanneer zijn angsten zich manifesteren in de vorm van een angstaanjagend monster. Dit thema van innerlijke strijd en het belang van het uiten van emoties vormen de kern van dit kortverhaal. Het project werd mogelijk gemaakt door het LENS-programma van Sony Pictures Animations, waarmee kansen worden geboden aan talenten uit ondervertegenwoordigde groepen om ervaring op te doen in leiderschapsposities binnen de animatiewereld."
    }), "\n", createVNode(_components.p, {
      children: "Het Spider-Verse blijft ons verrassen met zijn vermogen om diepe emotionele en psychologische thema’s te verkennen in combinatie met adembenemende visuals. “The Spider Within” is niet alleen een eerbetoon aan de complexiteit van Miles Morales als personage, maar ook een boodschap over het belang van zelfexpressie en het zoeken naar hulp in tijden van innerlijke turbulentie."
    }), "\n", createVNode(_components.p, {
      children: "Door de focus te leggen op de menselijke kant van superheldendom, herinnert deze kortfilm ons eraan dat heldhaftigheid niet alleen bestaat uit fysieke daden, maar ook uit de moed om kwetsbaarheid te tonen en verbinding te zoeken met anderen."
    }), "\n", createVNode(_components.p, {
      children: ["De gehele kortfilm “The Spider Within” is nu beschikbaar om online te bekijken dankzij een vruchtbare samenwerking met het Kevin Love Fund. Sony Pictures Animation en het Kevin Love Fund hebben gezamenlijk de geanimeerde kortfilm “The Spider Within: A Spider-Verse Story” uitgebracht, die digitaal beschikbaar is gesteld. Deze film zal worden opgenomen in het nieuwe lesplan van het Kevin Love Fund, genaamd “The Hero Within,” dat een focus legt op geestelijke gezondheid. Het lesplan heeft als doel studenten uit te nodigen om vanuit het perspectief van geestelijke gezondheid bewustzijn hun eigen verhaal te vertellen. Dit gebeurt via een interactief curriculum met onder andere een creatieve storyboard-activiteit. Voor meer informatie over dit initiatief kun je terecht op de website ", createVNode(_components.a, {
        href: "https://kevinlovefund.org",
        children: "https://kevinlovefund.org"
      }), "."]
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

const url = "src/content/nieuws/het-spider-verse-breidt-zich-uit-een-diepere-duik-in-de-psyche-van-miles-morales.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/het-spider-verse-breidt-zich-uit-een-diepere-duik-in-de-psyche-van-miles-morales.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/het-spider-verse-breidt-zich-uit-een-diepere-duik-in-de-psyche-van-miles-morales.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
