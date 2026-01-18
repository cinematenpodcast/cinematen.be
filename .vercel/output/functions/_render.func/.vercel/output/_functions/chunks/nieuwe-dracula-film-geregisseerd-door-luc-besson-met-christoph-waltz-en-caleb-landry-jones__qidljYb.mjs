async function getMod() {
						return import('./nieuwe-dracula-film-geregisseerd-door-luc-besson-met-christoph-waltz-en-caleb-landry-jones_CA3zmRIX.mjs');
					}
					const collectedLinks = [];
					const collectedStyles = [];
					const collectedScripts = [];
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts };

export { defaultMod as default };
