(function () {
  // Карточки брендов скрываются (autoAlpha:0) и проявляются ScrollTrigger.batch по позициям,
  // посчитанным при загрузке. Если высота страницы потом меняется, часть карточек не проявляется никогда.
  function reveal(group) {
    group.querySelectorAll('.home-partners-item').forEach(function (it) {
      if (getComputedStyle(it).opacity === '0') {
        it.style.transition = 'opacity .4s ease';
        it.style.visibility = 'inherit';
        it.style.opacity = '1';
      }
    });
  }

  function init() {
    var groups = document.querySelectorAll('.home-partners-main');
    if (!groups.length || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          setTimeout(function () { reveal(e.target); }, 900);
        }
      });
    }, { threshold: 0.05 });
    groups.forEach(function (g) { io.observe(g); });
    document.addEventListener('click', function (e) {
      if (!e.target.closest || !e.target.closest('.home-partners-tab')) return;
      setTimeout(function () {
        var g = document.querySelector('.home-partners-main.active');
        if (g) reveal(g);
      }, 900);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
