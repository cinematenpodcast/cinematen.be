async function getMod() {
						return import('./de-nieuwe-muzikale-creatie-van-lin-manuel-miranda-warriors-conceptalbum_BC1_2-GA.mjs');
					}
					const collectedLinks = [];
					const collectedStyles = [];
					const collectedScripts = [];
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts };

export { defaultMod as default };
