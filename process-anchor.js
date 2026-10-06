(() => {
  const HOME_URL = './index.html?nocache=logo-target-1';
  const REVIEWS_URL = 'https://dobrovozturk.ru/about#reviews:~:text=Отзывы';
  const normalizeText = (element) => element?.textContent?.replace(/\s+/g, ' ').trim().toLowerCase() || '';

  // Страница на Lenis (smooth-scroll поверх нативного скролла): его RAF-цикл
  // каждый кадр возвращает scrollTop к своей внутренней цели, поэтому обычный
  // window.scrollTo(...) тут же "отменяется" и клики по меню/кнопкам никуда
  // не докручивали. Двигаем через API самого Lenis. Инстанс нигде не
  // экспортирован в window - достаём тем же ES-модулем, что использует сам
  // сайт (модуль кэшируется по URL, поэтому получаем тот же живой singleton).
  let smoothScrollSingleton = null;
  import('./_assets/united-carriers.netlify.app/chunks/lenis-_dxIi_hK.js')
    .then((mod) => { smoothScrollSingleton = mod?.n || null; })
    .catch(() => {});

  const smoothScrollTo = (top, smooth) => {
    const lenis = smoothScrollSingleton?.lenis;
    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(Math.max(0, top), smooth ? {} : { immediate: true });
    } else {
      window.scrollTo({ top: Math.max(0, top), behavior: smooth ? 'smooth' : 'auto' });
    }
  };

  const configureHomeLinks = () => {
    document.querySelectorAll('a.header-logo').forEach((link) => {
      link.setAttribute('href', HOME_URL);
    });

    document.querySelectorAll('a.header-dropdown-link').forEach((link) => {
      if (normalizeText(link) === 'главная') link.setAttribute('href', HOME_URL);
    });
  };

  const configureCartLinks = () => {
    document.querySelectorAll('[aria-label="Корзина"], [aria-label="корзина"]').forEach((link) => {
      link.setAttribute('href', '#order-form');
    });
  };

  const isProcessControl = (element) => {
    if (!element) return false;
    const href = element.getAttribute?.('href');
    const label = normalizeText(element);
    return href === '#how-it-works'
      || element.id === 'howItWorksBtn'
      || element.id === 'howItWorksBtnFooter'
      || label === 'как заказать'
      || label === 'как это работает';
  };

  const processTarget = () => document.querySelector(
    '.home-service-sub-content .home-service-sub-list.dobrovoz-process-list'
  );

  const controlName = (element) => {
    if (!element) return null;
    const href = element.getAttribute?.('href');
    const label = normalizeText(element);

    if (isProcessControl(element)) return 'process';
    if (href === '#service-info' || label === 'о сервисе' || label === 'подробнее о сервисе') return 'service';
    if (href === '#categories' || label === 'категории') return 'categories';
    if (href === '#contacts' || label === 'контакты') return 'contacts';
    if (href === '#order-form' || element.getAttribute?.('aria-label')?.toLowerCase() === 'корзина') return 'order';
    if (label === 'отзывы') return 'reviews';
    return null;
  };

  const alignProcessScreen = (smooth = true) => {
    if (window.innerWidth < 992) return false;

    const target = processTarget();
    if (!target) return false;

    const top = window.scrollY + target.getBoundingClientRect().top - window.innerHeight * 0.15;
    smoothScrollTo(top, smooth);
    history.replaceState(null, '', '#how-it-works');
    return true;
  };

  const alignService = (smooth = true) => {
    const service = document.querySelector('.home-intro, #service-info');
    if (!service) return false;

    const top = window.scrollY + service.getBoundingClientRect().top - window.innerHeight * 0.06;
    smoothScrollTo(top, smooth);
    history.replaceState(null, '', '#service-info');
    return true;
  };

  const alignTruckStart = (smooth = true) => {
    if (window.innerWidth < 992) return false;

    const categoryStage = document.querySelector('.home-service-main');
    if (!categoryStage) return false;

    const moveToFrame = (isSmooth) => {
      const top = window.scrollY + categoryStage.getBoundingClientRect().top - window.innerHeight * 0.4;
      smoothScrollTo(top, isSmooth);
    };

    moveToFrame(smooth);
    if (smooth) window.setTimeout(() => moveToFrame(true), 750);
    history.replaceState(null, '', '#categories');
    return true;
  };

  const alignContacts = (smooth = true) => {
    // .footer-main имеет display:contents (Webflow-грид трюк) - у таких
    // элементов getBoundingClientRect() всегда нулевой, к ним нельзя
    // проскроллить. Берём реальный контейнер футера.
    const contacts = document.querySelector('.footer');
    if (!contacts) return false;

    const top = window.scrollY + contacts.getBoundingClientRect().top - window.innerHeight * 0.06;
    smoothScrollTo(top, smooth);
    history.replaceState(null, '', '#contacts');
    return true;
  };

  const alignOrder = (smooth = true) => {
    const order = document.querySelector('#order-form');
    if (!order) return false;

    const top = window.scrollY + order.getBoundingClientRect().top - window.innerHeight * 0.06;
    smoothScrollTo(top, smooth);
    history.replaceState(null, '', '#order-form');
    return true;
  };

  const configureReviewLinks = () => {
    document.querySelectorAll('a, button').forEach((control) => {
      if (normalizeText(control) !== 'отзывы') return;
      control.setAttribute('href', REVIEWS_URL);
      control.setAttribute('target', '_blank');
      control.setAttribute('rel', 'noopener noreferrer');
    });
  };

  window.addEventListener('click', (event) => {
    const control = event.target.closest?.('a, button');
    if (control?.classList.contains('header-logo')) {
      event.preventDefault();
      event.stopImmediatePropagation();
      const cleanUrl = `${window.location.pathname}${window.location.search}`;
      history.replaceState(null, '', cleanUrl);
      smoothScrollTo(0, true);
      return;
    }

    const name = controlName(control);
    if (!name) return;

    if (name === 'reviews') {
      control.setAttribute('href', REVIEWS_URL);
      control.setAttribute('target', '_blank');
      control.setAttribute('rel', 'noopener noreferrer');
      return;
    }

    if (name === 'process' && window.innerWidth < 992) return;
    if (name === 'categories' && window.innerWidth < 992) return;

    event.preventDefault();
    event.stopImmediatePropagation();
    if (name === 'service') alignService(true);
    if (name === 'process') alignProcessScreen(true);
    if (name === 'categories') alignTruckStart(true);
    if (name === 'contacts') alignContacts(true);
    if (name === 'order') alignOrder(true);
  }, true);

  const alignFromHash = () => {
    const hash = window.location.hash;
    window.setTimeout(() => {
      if (hash === '#how-it-works') alignProcessScreen(false);
      if (hash === '#service-info') alignService(false);
      if (hash === '#categories') alignTruckStart(false);
      if (hash === '#contacts') alignContacts(false);
      if (hash === '#order-form') alignOrder(false);
    }, 450);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      configureHomeLinks();
      configureCartLinks();
      configureReviewLinks();
    }, { once: true });
  } else {
    configureHomeLinks();
    configureCartLinks();
    configureReviewLinks();
  }

  if (document.readyState === 'complete') {
    alignFromHash();
    window.setTimeout(configureReviewLinks, 500);
  } else {
    window.addEventListener('load', () => {
      alignFromHash();
      configureHomeLinks();
      configureCartLinks();
      window.setTimeout(configureReviewLinks, 500);
    }, { once: true });
  }
  window.addEventListener('hashchange', alignFromHash);
})();
