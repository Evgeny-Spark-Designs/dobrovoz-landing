(() => {
  const ROOT = '/';
  const sectionRoutes = new Map([
    ['/about', '#service-info'],
    ['/services', '#categories'],
    ['/industries', '#how-it-works'],
    ['/careers', '#how-it-works'],
    ['/contact', '#contacts'],
  ]);

  const secureAndNormalizeLinks = () => {
    document.documentElement.lang = 'ru';

    document.querySelectorAll('a[target="_blank"]').forEach((link) => {
      link.rel = 'noopener noreferrer';
    });

    document.querySelectorAll('a[href^="/"]').forEach((link) => {
      const raw = link.getAttribute('href');
      if (!raw || raw.startsWith(ROOT)) return;
      const target = sectionRoutes.get(raw.replace(/\/$/, ''));
      if (target) link.setAttribute('href', target);
    });
  };

  const initialize = () => {
    secureAndNormalizeLinks();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  } else {
    initialize();
  }
})();
