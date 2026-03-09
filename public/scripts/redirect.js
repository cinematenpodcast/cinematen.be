/**
 * Redirect to URL from data-redirect-url attribute
 * Usage: <script src="/scripts/redirect.js" data-redirect-url="https://..."></script>
 */
(function() {
    var script = document.currentScript;
    var url = script && script.getAttribute('data-redirect-url');
    if (url) {
        location.replace(url);
    }
})();
