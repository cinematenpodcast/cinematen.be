/**
 * Mobile nav menu toggle
 */
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var navLinks = document.getElementById('nav-links');
    var headerContent = document.querySelector('.header_content');
    if (!menuToggle || !navLinks) return;
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        if (headerContent) {
            if (navLinks.classList.contains('active')) {
                headerContent.style.opacity = '0';
                headerContent.style.transform = 'translateX(100%)';
            } else {
                headerContent.style.opacity = '1';
                headerContent.style.transform = 'translateX(0)';
            }
        }
    });
});
