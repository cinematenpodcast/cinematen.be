async function getMod() {
						return import('./star-wars-visions-krijgt-een-volledige-serie-rond-the-ninth-jedi_sf662_p4.mjs');
					}
					const collectedLinks = [];
					const collectedStyles = [];
					const collectedScripts = [];
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts };

export { defaultMod as default };
