async function getMod() {
						return import('./disney-onthult-release-data-voor-grote-aankomende-films_D-R1RC4G.mjs');
					}
					const collectedLinks = [];
					const collectedStyles = [];
					const collectedScripts = [];
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts };

export { defaultMod as default };
