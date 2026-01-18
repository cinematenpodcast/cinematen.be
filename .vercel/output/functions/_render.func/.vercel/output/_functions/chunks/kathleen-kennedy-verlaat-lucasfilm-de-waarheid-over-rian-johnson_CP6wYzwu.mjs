import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const MDXLayout = async function ({children}) {
  const Layout = (await import('./NieuwsLayout_Cr_3Kiaz.mjs')).default;
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode(Layout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "layout": "../../layouts/NieuwsLayout.astro",
  "title": "Kathleen Kennedy verlaat Lucasfilm De waarheid over Rian Johnson",
  "date": "2026-01-16T15:58:33.303Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1768578240.jpg",
  "trailer": "",
  "slug": "kathleen-kennedy-verlaat-lucasfilm-de-waarheid-over-rian-johnson",
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
      children: "Het nieuws waar wij al lang op zaten te wachten is nu officieel: Kathleen\nKennedy vertrekt als president van Lucasfilm. Ooit uitgekozen door George Lucas\nzelf, kijkt ze nu terug op een decennium dat niet altijd liep zoals gepland.\nDenk maar aan de vele problemen met regisseurs, zoals het ontslag van Phil Lord\nen Chris Miller bij de Han Solo-film en de wissel van regisseurs bij Episode 9. Dave Filoni en\nLynwen Brennan zullen nu haar taken overnemen."
    }), "\n", createVNode(_components.p, {
      children: "In haar laatste interview sprak Kennedy openhartig over iets waar wij ons al\njaren vragen bij stellen: waar blijven die beloofde Star Wars-films van Rian\nJohnson? Na The Last Jedi werd er trots een volledige nieuwe trilogie van zijn\nhand aangekondigd, maar daar hebben we sindsdien bitter weinig van vernomen. Het\nofficiële verhaal was altijd dat hij het simpelweg te druk had met zijn Knives\nOut-deal bij Netflix, een beetje zoals Shawn Levy die vastzat aan Stranger\nThings."
    }), "\n", createVNode(_components.p, {
      children: "Maar nu komt de aap uit de mouw: Johnson is bang geworden. Hoewel Kennedy hem\neen briljante filmmaker noemt en vindt dat hij één van de beste films uit de\nreeks maakte, hebben de vele negatieve reacties hem doen schrikken. Hij wilde onze\nverwachtingen door elkaar schudden en de reeks niet met fluwelen handschoenen\naanpakken, maar hij had niet verwacht dat de haat zo diep zou zitten. Hij voelt\nzich hierdoor niet meer prettig om terug te keren naar de franchise."
    }), "\n", createVNode(_components.p, {
      children: "Dit probleem met online haat is de laatste jaren helaas alleen maar groter\ngeworden. Niet alleen regisseurs, maar ook acteurs zoals John Boyega, Daisy\nRidley, Kelly Marie Tran en recenter de cast van The Acolyte en Moses Ingram\nkregen het zwaar te verduren. Kennedy geeft toe dat bots de haat soms erger doen\nlijken, maar ze waarschuwt nieuw talent nu vooraf. Vrouwen en minderheden worden\nvaak oneerlijk behandeld door een luidruchtige groep binnen onze community. Ze\nadviseert mensen met een minder dikke huid om de baan niet aan te nemen, omdat\nze niet kan beloven dat Lucasfilm hen tegen al die nare berichten kan\nbeschermen."
    }), "\n", createVNode(_components.p, {
      children: "Kennedy laat bij haar vertrek wel nog enkele projecten achter die al in de\nsteigers staan. The Mandalorian and Grogu zit momenteel in de post-productie. In\n2027 kunnen we Star Wars: Starfighter verwachten met Ryan Gosling in de\nhoofdrol. De plannen voor een film over Ben Solo met Adam Driver liggen\nmomenteel stil, maar volgens Kennedy is alles mogelijk als iemand het risico\ndurft te nemen. Het is nu aan de nieuwe bazen om te zien hoe het verder moet."
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

const url = "src/content/nieuws/kathleen-kennedy-verlaat-lucasfilm-de-waarheid-over-rian-johnson.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/kathleen-kennedy-verlaat-lucasfilm-de-waarheid-over-rian-johnson.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/kathleen-kennedy-verlaat-lucasfilm-de-waarheid-over-rian-johnson.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
