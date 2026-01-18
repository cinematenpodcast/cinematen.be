import { l as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_Cu2gcJ3R.mjs';
import { $ as $$Image } from './_astro_assets_CZpVmLws.mjs';
import 'clsx';

const frontmatter = {
  "title": "Alden Ehrenreich staat open voor terugkeer als Han Solo",
  "date": "2025-09-02T17:57:14.204Z",
  "soort": "Film",
  "thumbnail": "/images/article-images/l-intro-1756831318.jpg",
  "trailer": "",
  "slug": "alden-ehrenreich-staat-open-voor-terugkeer-als-han-solo",
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
      children: "Alden Ehrenreich, die de jonge Han Solo speelde in de film “Solo: A Star Wars\nStory” uit 2018, heeft in een recent interview aangegeven dat hij best weer de\niconische ruimtesmokkelaar wil vertolken. Wel benadrukte hij dat dit alleen kan\nals het op de juiste manier gebeurt."
    }), "\n", createVNode(_components.p, {
      children: "In “Solo” zagen we hoe Han Solo uitgroeide tot de beroemde smokkelaar en hoe hij\nvrienden werd met Chewbacca en Lando Calrissian. Helaas was de film geen groot\nsucces in de bioscoop. Hij bracht minder op dan andere Star Wars-films en kreeg\ngemengde reacties. Tijdens de productie waren er ook problemen, waardoor de\noorspronkelijke regisseurs vervangen werden door Ron Howard."
    }), "\n", createVNode(_components.p, {
      children: "Ondanks de tegenvallende resultaten vonden wij dat Alden Ehrenreich uitstekend\nwerk leverde. Het is geen gemakkelijke taak om Harrison Ford’s iconische rol\nover te nemen, maar Alden kreeg terecht lof voor zijn prestatie. Sindsdien heeft\nhij zich bewezen in andere projecten zoals “Oppenheimer” en “Weapons”, waar hij\nzijn veelzijdigheid als acteur toonde."
    }), "\n", createVNode(_components.p, {
      children: "In een recent interview gaf Alden aan niet bang te zijn om opnieuw Han Solo te\nspelen, mits het script goed is en de sfeer op de set positief. Hij zei: “Het\nzou echt de juiste versie moeten zijn.” Hij benadrukte ook het belang van een\nveilige werkomgeving, waarbij hij aangaf dat stress tijdens het acteren soms\nnuttig kan zijn, maar dat welzijn voorop moet staan."
    }), "\n", createVNode(_components.p, {
      children: "Er gaan geruchten dat Disney en Lucasfilm mogelijk nieuwe films over jonge Han\nSolo of Lando Calrissian overwegen. Donald Glover, die Lando speelde, zou ook\nkunnen terugkeren. Wij hopen dat Alden hier deel van uitmaakt, maar voor nu is\nniets zeker."
    }), "\n", createVNode(_components.p, {
      children: "Alden kijkt tevreden terug op zijn ervaring met “Solo” en geeft aan dat die rol\nhem heeft geholpen in zijn verdere carrière. Of hij ooit weer Han Solo speelt,\nhangt af van Disney’s plannen en of het project zijn interesse wekt. Voor nu\nkunnen we genieten van zijn huidige werk, zoals “Weapons” dat momenteel in de\nbioscoop te zien is."
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

const url = "src/content/nieuws/alden-ehrenreich-staat-open-voor-terugkeer-als-han-solo.mdx";
const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/alden-ehrenreich-staat-open-voor-terugkeer-als-han-solo.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/content/nieuws/alden-ehrenreich-staat-open-voor-terugkeer-als-han-solo.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
