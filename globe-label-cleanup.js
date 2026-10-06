(() => {
  const mobileCities = new Set([
    'HAMBURG',
    'MILAN',
    'LATVIA',
    'ISTANBUL',
    'MOSCOW',
    'ST PETERSBURG',
    'IRKUTSK',
    'VLADIVOSTOK',
  ]);

  const markMobileCityLabels = (root = document) => {
    root.querySelectorAll('.globe-label').forEach((label) => {
      const city = label.querySelector('.globe-label-text')?.textContent?.trim().toUpperCase();
      label.classList.toggle('dobrovoz-mobile-city', mobileCities.has(city));
    });
  };

  const removeDuplicateLabelLayers = () => {
    document.querySelectorAll('.home-hero-globe').forEach((globe) => {
      const layers = [...globe.children].filter((element) => element.querySelectorAll?.('.globe-label').length);
      layers.slice(0, -1).forEach((layer) => layer.remove());
      markMobileCityLabels(globe);
    });
  };

  window.addEventListener('load', () => {
    const globe = document.querySelector('.home-hero-globe');
    if (!globe) return;
    const observer = new MutationObserver(removeDuplicateLabelLayers);
    observer.observe(globe, { childList: true, subtree: true });
    window.setTimeout(removeDuplicateLabelLayers, 500);
  }, { once: true });
})();
