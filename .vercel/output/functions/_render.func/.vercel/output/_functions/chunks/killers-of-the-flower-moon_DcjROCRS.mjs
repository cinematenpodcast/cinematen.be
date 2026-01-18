import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Killers of the Flower Moon",
  "date": "2023-12-25T00:00:00.000Z",
  "soort": "Film review",
  "schrijver": "Yorrick",
  "thumbnail": "https://www.hollywoodreporter.com/wp-content/uploads/2023/08/killers-of-the-flower-moon-KillersOfTheFlowerMoon_Feature_06688F_rgb.jpg?w=1296",
  "poster": "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781398513341/killers-of-the-flower-moon-9781398513341_hr.jpg",
  "trailer": "7cx9nCHsemc",
  "summary": "Killers of the Flower Moon is een lange maar prachtige vertelling over een vergeten (of verzwegen?) stukje Amerikaanse geschiedenis. De acteerprestaties zijn supergoed en wat tegenwoordig bijna verwacht wordt van een Scorsese film. Hoewel ik deze film niet snel een tweede keer zal opzetten is het wel een bijna verplichte watch voor filmfans die houden van historische vertellingen.",
  "slug": "killers-of-the-flower-moon",
  "draft": false,
  "rating": 4,
  "tags": ["drama", "Film"],
  "featured": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "een-tragisch-verhaal-eindelijk-verteld",
    "text": "Een tragisch verhaal, eindelijk verteld"
  }, {
    "depth": 2,
    "slug": "een-emotioneel-einde-van-scorsese-himself",
    "text": "Een emotioneel einde van Scorsese himself"
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
    children: [createVNode(_components.h2, {
      id: "een-tragisch-verhaal-eindelijk-verteld",
      children: "Een tragisch verhaal, eindelijk verteld"
    }), "\n", createVNode(_components.p, {
      children: "De nieuwste film van Martin Scorsese, “Killers of the Flower Moon”, met Leonardo DiCaprio en Robert De Niro, is een uitgebreide reis van drie en een half uur. Ik heb besloten de film in twee delen te bekijken om mijn aandacht er volledig bij te kunnen houden, getriggerd door het intrigerende onderwerp. De film onthult het verhaal van de Osage Nation, een Indiaanse gemeenschap die in het begin van de 20e eeuw rijkdom verwerft door een olievondst, waardoor ze één van de rijkste gemeenschappen in Amerika worden. Het plot verdiept zich in de duistere pogingen van de blanke bevolking om deze rijkdom te bemachtigen, vaak met dodelijke gevolgen."
    }), "\n", createVNode(_components.p, {
      children: "Leonardo DiCaprio en Lily Gladstone vertolken op indrukwekkende wijze de rollen van Ernest en Molly Burkhardt, maar het is Robert De Niro die voor mij de show steelt. Ondanks zijn leeftijd van tachtig jaar, levert De Niro een indrukwekkende prestatie. Samenwerking met Scorsese garandeert bijna een meesterwerk, hoewel ik moet toegeven dat “Killers of the Flower Moon” een trager tempo heeft dan eerdere Scorsese films zoals “Gans of New York” of “The Wolf of Wall Street”. Het is een gedetailleerde geschiedenisles, vergelijkbaar met de impactvolle manier waarop Spielberg “Schindler’s List” heeft gemaakt, en brengt een vaak vergeten of genegeerd deel van de Amerikaanse geschiedenis aan het licht: de tragische en bijna systematische uitmoording van honderden Osage-indianen over enkele decennia."
    }), "\n", createVNode(_components.p, {
      children: "Hoewel de film misschien niet bol staat van de snelle Hollywood-actie, is het een prachtige en educatieve weergave van een donker stuk geschiedenis. Met zijn aandacht voor detail en de sterke acteerprestaties is “Killers of the Flower Moon” een film die ongetwijfeld veel aandacht zal krijgen tijdens de komende Oscar-uitreikingen."
    }), "\n", createVNode(_components.h2, {
      id: "een-emotioneel-einde-van-scorsese-himself",
      children: "Een emotioneel einde van Scorsese himself"
    }), "\n", createVNode(_components.p, {
      children: "In “Killers of the Flower Moon”, regisseerde Martin Scorsese een pijnlijk en ingetogen verhaal, waarin de subtiele en genuanceerde acteerprestaties de kijker verrassen. De film leunt zwaar op de sterkte van zijn cast en de zorgvuldige reconstructie van waargebeurde gebeurtenissen. Het verhaal is moeilijk te verteren door zijn pijnlijke inhoud, maar de film weet toch te boeien door de details en de diepgang van de personages."
    }), "\n", createVNode(_components.p, {
      children: "Lily Gladstone’s acteerprestaties, met name de kleine nuances in haar rol, zijn bijzonder opmerkelijk. De film bevat ook verrassende optredens van bekende acteurs zoals John Lithgow, Brendan Fraser, en Jesse Plemons, die elk een unieke bijdrage leveren, ondanks hun korte verschijningen. Het einde van de film is bijzonder ontnuchterend en effectief, ook hier weer vergelijkbaar met het emotionele slot van “Schindler’s List”, waar het een eerbetoon brengt aan de werkelijke slachtoffers en overlevenden van de tragedie."
    }), "\n", createVNode(_components.p, {
      children: "De cinematografie en muziek ondersteunen het verhaal prachtig, en elk karakter draagt geloofwaardig bij aan de opbouw van deze zorgvuldig vormgegeven wereld. “Killers of the Flower Moon” is een film die misschien maar één keer bekeken wordt, maar het is een essentiële kijkervaring voor liefhebbers van kwaliteitsfilms en belangrijke historische vertellingen."
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

const url = "src/content/reviews/killers-of-the-flower-moon.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/reviews/killers-of-the-flower-moon.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/reviews/killers-of-the-flower-moon.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
