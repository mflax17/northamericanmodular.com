(function () {
    var nav = document.getElementById('nav');
    var onScroll = function () {
        if (window.scrollY > 40) { nav.classList.add('scrolled'); } else { nav.classList.remove('scrolled'); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    var btn = document.getElementById('menu-btn');
    var links = document.getElementById('nav-links');
    if (btn && links) {
        btn.addEventListener('click', function () {
            var open = links.classList.toggle('open');
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
            btn.textContent = open ? 'Close' : 'Menu';
            if (open) { nav.classList.add('scrolled'); } else { onScroll(); }
        });
    }

    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var els = document.querySelectorAll('.rv');
    if (!reduce && 'IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
            });
        }, { threshold: 0.12 });
        els.forEach(function (el) { io.observe(el); });
    } else {
        els.forEach(function (el) { el.classList.add('in'); });
    }
})();
