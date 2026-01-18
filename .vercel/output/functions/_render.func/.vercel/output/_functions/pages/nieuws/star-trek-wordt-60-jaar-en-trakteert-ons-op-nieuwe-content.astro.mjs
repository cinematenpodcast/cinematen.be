import { c as createComponent, b as renderComponent, r as renderTemplate, u as unescapeHTML } from '../../chunks/astro/server_Cu2gcJ3R.mjs';
import 'kleur/colors';
import $$NieuwsLayout from '../../chunks/NieuwsLayout_Cr_3Kiaz.mjs';
export { renderers } from '../../renderers.mjs';

const html = "<p>Het is vandaag 15 januari 2026 en dat is een enorm belangrijke datum voor ons.\nHet is namelijk exact zestig jaar geleden dat de allereerste aflevering van Star\nTrek op de beeldbuis verscheen in 1966. Om dit diamanten jubileum te vieren,\nstaat er het hele jaar van alles op de planning. Vandaag start bijvoorbeeld de\nnieuwe reeks Star Trek: Starfleet Academy. De eerste twee afleveringen staan nu\nop Paramount+ en de introductievideo toont beelden uit bijna alle oude series,\nwat ons nostalgisch hartje sneller doet slaan.</p>\n<p>Maar ook Pluto TV, de streamingdienst waar je gratis televisie kan kijken mits\nwat reclame, doet mee met de feestvreugde. Ze hebben speciaal voor ons een\nnieuwe pop-up categorie toegevoegd aan hun aanbod. Deze staat volledig in het\nteken van Star Trek en sluit naadloos aan bij de nieuwe serie. Het idee is dat\nwij zelf terug naar de schoolbanken keren op de academie om lessen te volgen\nover de geschiedenis van de ruimtevloot.</p>\n<p>Vanaf vandaag kunnen we vijf verschillende kanalen terugvinden in de gids. Elk\nkanaal is gekoppeld aan een iconische kapitein en de periode waarin zij leefden:</p>\n<p>Deze speciale pop-up categorie in het menu blijft staan tot en met 31 januari\n2026. Het is de ideale kans om duizenden uren aan televisie opnieuw te beleven\nof om bepaalde hiaten in onze kennis op te vullen.</p>\n<p>Na 31 januari verandert de situatie wel. De speciale groep verdwijnt dan uit het\nhoofdmenu en jammer genoeg moeten we dan ook afscheid nemen van het Star Trek:\nEnterprise kanaal. De andere vier series blijven gelukkig wel beschikbaar. Vanaf\n1 februari verhuizen The Original Series, The Next Generation, Deep Space Nine\nen Voyager naar de algemene categorie voor sciencefiction op Pluto TV. Iedereen\nmet de app kan dus vanaf vandaag beginnen studeren voor Starfleet Academy!</p>";

				const frontmatter = {"layout":"../../layouts/NieuwsLayout.astro","title":"Star Trek wordt 60 jaar en trakteert ons op nieuwe content!","date":"2026-01-15T21:23:26.773Z","soort":"TV","thumbnail":"/images/article-images/l-intro-1768511556.jpg","trailer":"","slug":"star-trek-wordt-60-jaar-en-trakteert-ons-op-nieuwe-content","tags":["TV"]};
				const file = "/Users/yorrickschoonheydt/Documents/_Cinematen/cinematen.be-v2/src/pages/nieuws/star-trek-wordt-60-jaar-en-trakteert-ons-op-nieuwe-content.md";
				const url = "/nieuws/star-trek-wordt-60-jaar-en-trakteert-ons-op-nieuwe-content";
				function rawContent() {
					return "\nHet is vandaag 15 januari 2026 en dat is een enorm belangrijke datum voor ons.\nHet is namelijk exact zestig jaar geleden dat de allereerste aflevering van Star\nTrek op de beeldbuis verscheen in 1966. Om dit diamanten jubileum te vieren,\nstaat er het hele jaar van alles op de planning. Vandaag start bijvoorbeeld de\nnieuwe reeks Star Trek: Starfleet Academy. De eerste twee afleveringen staan nu\nop Paramount+ en de introductievideo toont beelden uit bijna alle oude series,\nwat ons nostalgisch hartje sneller doet slaan.\n\nMaar ook Pluto TV, de streamingdienst waar je gratis televisie kan kijken mits\nwat reclame, doet mee met de feestvreugde. Ze hebben speciaal voor ons een\nnieuwe pop-up categorie toegevoegd aan hun aanbod. Deze staat volledig in het\nteken van Star Trek en sluit naadloos aan bij de nieuwe serie. Het idee is dat\nwij zelf terug naar de schoolbanken keren op de academie om lessen te volgen\nover de geschiedenis van de ruimtevloot.\n\nVanaf vandaag kunnen we vijf verschillende kanalen terugvinden in de gids. Elk\nkanaal is gekoppeld aan een iconische kapitein en de periode waarin zij leefden:\n\nDeze speciale pop-up categorie in het menu blijft staan tot en met 31 januari\n2026. Het is de ideale kans om duizenden uren aan televisie opnieuw te beleven\nof om bepaalde hiaten in onze kennis op te vullen.\n\nNa 31 januari verandert de situatie wel. De speciale groep verdwijnt dan uit het\nhoofdmenu en jammer genoeg moeten we dan ook afscheid nemen van het Star Trek:\nEnterprise kanaal. De andere vier series blijven gelukkig wel beschikbaar. Vanaf\n1 februari verhuizen The Original Series, The Next Generation, Deep Space Nine\nen Voyager naar de algemene categorie voor sciencefiction op Pluto TV. Iedereen\nmet de app kan dus vanaf vandaag beginnen studeren voor Starfleet Academy!";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$NieuwsLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
