/**
 * ikwilmee.html specific: WebFont load + Webflow classes
 */
(function() {
    if (typeof WebFont !== 'undefined') {
        WebFont.load({
            google: {
                families: [
                    "Rubik:300,regular,500,600,700,800,900,300italic,italic,500italic,600italic,700italic,800italic,900italic",
                    "Rubik Mono One:regular",
                ],
            },
        });
    }
    var n = document.documentElement, t = " w-mod-";
    n.className += t + "js";
    if ("ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch)) {
        n.className += t + "touch";
    }
})();
