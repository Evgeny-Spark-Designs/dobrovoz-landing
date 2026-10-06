(() => {
  const preloadAnimationImages = () => {
    const images = document.querySelectorAll([
      '.home-service img',
      '.home-service-new-truck img',
      '.home-service-mb-crane img',
      '.home-service-mb-truck img'
    ].join(','));

    images.forEach((image) => {
      image.loading = 'eager';
      image.fetchPriority = 'high';

      const source = image.currentSrc || image.src;
      if (!source || image.complete) return;

      const preload = new Image();
      preload.decoding = 'async';
      preload.fetchPriority = 'high';
      preload.src = source;
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadAnimationImages, { once: true });
  } else {
    preloadAnimationImages();
  }
})();
