/**
 * Shared initialization: Webflow classes + Google Analytics (deferred)
 * Used by BaseHead, BaseHeadExclude, BaseHeadNieuws
 */
(function() {
    // Webflow touch detection
    document.documentElement.className += " w-mod-js";
    if ("ontouchstart" in window) document.documentElement.className += " w-mod-touch";

    // Google Analytics (deferred to not block rendering)
    window.addEventListener('load', function() {
        var s = document.createElement('script');
        s.src = 'https://www.googletagmanager.com/gtag/js?id=G-KZ3KYRB0T1';
        s.async = true;
        document.head.appendChild(s);
        s.onload = function() {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KZ3KYRB0T1');
        };
    });
})();
