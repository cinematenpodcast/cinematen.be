/**
 * Open external links in new tab with noopener noreferrer
 */
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.blog-text a');
    links.forEach(function(link) {
        if (link.hostname !== window.location.hostname) {
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        }
    });
});
