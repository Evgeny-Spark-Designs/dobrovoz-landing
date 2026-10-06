(function () {
  'use strict';

  var root = document.documentElement;
  var startedAt = performance.now();
  var minimumVisibleTime = 850;
  // Never leave the page hidden behind the first-load layer while a slow or
  // unavailable third-party asset is still loading (notably on mobile data).
  var maximumWaitTime = 1500;
  var finished = false;

  function waitForWindowLoad() {
    if (document.readyState === 'complete') return Promise.resolve();
    return new Promise(function (resolve) {
      window.addEventListener('load', resolve, { once: true });
    });
  }

  function waitForFonts() {
    return document.fonts && document.fonts.ready
      ? document.fonts.ready.catch(function () {})
      : Promise.resolve();
  }

  function waitForInitialImages() {
    var viewportLimit = window.innerHeight * 1.35;
    var images = Array.prototype.filter.call(document.images, function (image) {
      var rect = image.getBoundingClientRect();
      return image.loading !== 'lazy' || (rect.top < viewportLimit && rect.bottom > 0);
    });

    return Promise.all(images.map(function (image) {
      if (image.complete) {
        return typeof image.decode === 'function'
          ? image.decode().catch(function () {})
          : Promise.resolve();
      }

      return new Promise(function (resolve) {
        image.addEventListener('load', resolve, { once: true });
        image.addEventListener('error', resolve, { once: true });
      });
    }));
  }

  function updateProgress(completed, total) {
    var progress = Math.round((completed / total) * 100);
    root.style.setProperty('--dv-loader-progress', progress);
    var loader = document.querySelector('.loader');
    if (loader) {
      loader.dataset.progress = String(progress);
      loader.setAttribute('aria-valuenow', String(progress));
    }
  }

  function finish() {
    if (finished) return;
    finished = true;

    var elapsed = performance.now() - startedAt;
    window.setTimeout(function () {
      var loader = document.querySelector('.loader');
      updateProgress(1, 1);
      root.classList.add('dv-loader-leaving');

      window.setTimeout(function () {
        root.classList.remove('dv-loader-pending', 'dv-loader-leaving');
        if (loader) {
          loader.style.display = 'none';
          loader.style.pointerEvents = 'none';
          loader.setAttribute('aria-hidden', 'true');
        }
        window.dispatchEvent(new CustomEvent('dobrovoz:page-ready'));
      }, 560);
    }, Math.max(0, minimumVisibleTime - elapsed));
  }

  function start() {
    var loader = document.querySelector('.loader');
    if (loader) {
      loader.setAttribute('role', 'progressbar');
      loader.setAttribute('aria-label', 'Загрузка страницы');
      loader.setAttribute('aria-valuemin', '0');
      loader.setAttribute('aria-valuemax', '100');
    }

    var tasks = [waitForWindowLoad(), waitForFonts(), waitForInitialImages()];
    var completed = 0;
    updateProgress(completed, tasks.length);

    tasks.forEach(function (task) {
      Promise.resolve(task).then(function () {
        completed += 1;
        updateProgress(completed, tasks.length);
      });
    });

    Promise.all(tasks).then(function () {
      requestAnimationFrame(function () {
        requestAnimationFrame(finish);
      });
    });

    window.setTimeout(finish, maximumWaitTime);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
