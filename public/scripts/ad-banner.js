/**
 * Ad banner: reads banners from data-banners on container, selects random, renders
 * Usage: container has data-banners='[{"image":"/images/ads/x.png","alt":"..."}]'
 */
(function() {
    function selectBanner(banners) {
        if (!banners || banners.length === 0) return null;
        var index = Math.floor(Math.random() * banners.length);
        return banners[index];
    }

    function renderBanner(banners) {
        var wrappers = document.querySelectorAll('#ad-banner-wrapper');
        if (!wrappers || wrappers.length === 0 || !banners || banners.length === 0) return;
        var selectedBanner = selectBanner(banners);
        if (!selectedBanner) return;
        var isMobile = window.innerWidth <= 767;
        var targetWrapper = null;
        wrappers.forEach(function(wrapper) {
            var parentSection = wrapper.closest('.ad-banner-section');
            if (parentSection) {
                var isInSidebar = parentSection.closest('.content-right') !== null;
                var isDesktopBanner = parentSection.closest('.ad-banner-desktop') !== null;
                if (isMobile && isInSidebar) targetWrapper = wrapper;
                else if (!isMobile && isDesktopBanner) targetWrapper = wrapper;
            }
        });
        if (!targetWrapper) {
            wrappers.forEach(function(wrapper) {
                var parentSection = wrapper.closest('.ad-banner-section');
                if (parentSection) {
                    var style = window.getComputedStyle(parentSection);
                    if (style.display !== 'none' && style.visibility !== 'hidden' && !targetWrapper) targetWrapper = wrapper;
                }
            });
        }
        if (!targetWrapper && wrappers.length > 0) targetWrapper = wrappers[0];
        if (!targetWrapper) return;
        targetWrapper.innerHTML = '';
        var bannerImage = document.createElement('img');
        bannerImage.src = selectedBanner.image;
        bannerImage.alt = selectedBanner.alt || 'Advertisement';
        bannerImage.loading = 'lazy';
        bannerImage.className = 'ad-banner-image';
        bannerImage.style.width = '100%';
        bannerImage.style.maxWidth = '100%';
        bannerImage.style.display = 'block';
        bannerImage.style.margin = '0 auto';
        bannerImage.style.height = 'auto';
        bannerImage.style.objectFit = 'contain';
        bannerImage.style.backgroundRepeat = 'no-repeat';
        bannerImage.style.backgroundSize = 'contain';
        if (window.innerWidth <= 479 || window.innerWidth <= 767) {
            bannerImage.style.width = '100%';
            bannerImage.style.minWidth = '100%';
            bannerImage.style.maxWidth = '100%';
            bannerImage.style.height = 'auto';
        }
        targetWrapper.appendChild(bannerImage);
        var lastViewport = window.innerWidth <= 767 ? 'mobile' : 'desktop';
        window.addEventListener('resize', function() {
            var currentViewport = window.innerWidth <= 767 ? 'mobile' : 'desktop';
            if (currentViewport !== lastViewport) {
                lastViewport = currentViewport;
                renderBanner(banners);
            } else if (window.innerWidth <= 479) {
                bannerImage.style.width = '100%';
                bannerImage.style.minWidth = '100%';
                bannerImage.style.maxWidth = '100%';
                bannerImage.style.height = 'auto';
            } else if (window.innerWidth <= 767) {
                bannerImage.style.width = '100%';
                bannerImage.style.minWidth = '100%';
                bannerImage.style.maxWidth = '100%';
                bannerImage.style.height = 'auto';
            } else {
                bannerImage.style.width = '100%';
                bannerImage.style.maxWidth = '970px';
                bannerImage.style.height = 'auto';
            }
        });
    }

    function moveBannerOnMobile() {
        if (window.innerWidth <= 767) {
            var bannerSection = document.querySelector('.content-right .ad-banner-section') ||
                document.querySelector('section.ad-banner-section') ||
                document.querySelector('[data-ad-banner="true"]');
            var stickWrapper = document.querySelector('.content-right .stick-wrapper');
            var featuredArticles = document.querySelector('.content-right .featured-articles');
            if (bannerSection && stickWrapper) {
                if (featuredArticles && featuredArticles.parentElement === stickWrapper) {
                    stickWrapper.insertBefore(bannerSection, featuredArticles);
                } else {
                    stickWrapper.insertBefore(bannerSection, stickWrapper.firstChild);
                }
            }
        }
    }

    function initBanner() {
        var container = document.querySelector('[data-ad-banner][data-banners]');
        if (!container) return;
        var data = container.getAttribute('data-banners');
        var banners;
        try { banners = JSON.parse(data); } catch (e) { return; }
        if (window.innerWidth <= 767) moveBannerOnMobile();
        renderBanner(banners);
        setTimeout(moveBannerOnMobile, 100);
        setTimeout(moveBannerOnMobile, 500);
        setTimeout(moveBannerOnMobile, 1000);
        window.addEventListener('resize', function() {
            setTimeout(moveBannerOnMobile, 200);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initBanner);
    } else {
        initBanner();
    }
})();
