(() => {
  const steps = [
    ['01', 'Выберите товар', 'Выберите товар на сайтах интернет-магазинов Европы.'],
    ['02', 'Создайте заявку', 'Создайте заявку на нашем сайте.'],
    ['03', 'Получите расчёт', 'Команда рассчитает точную стоимость логистики и подтвердит сумму заказа.'],
    ['04', 'Оплатите заказ', 'Выберите удобный способ: карта или перевод. После оплаты получите чек.'],
    ['05', 'Доставим в Москву', 'Товары приедут на наш склад в Европе, затем отправятся в Москву.'],
    ['06', 'Получите заказ', 'Доставим по вашему адресу или подготовим заказ к самовывозу.'],
  ];

  const stepsMarkup = () => steps.map(([number, title, description]) => `
    <div class="home-service-sub-item dobrovoz-process-step" role="listitem">
      <div class="home-service-sub-ic dobrovoz-process-number" aria-hidden="true">${number}</div>
      <div class="home-service-sub-title"><h3 class="heading h6">${title}</h3></div>
      <div class="home-service-sub-desc"><div class="txt fs-16">${description}</div></div>
    </div>
  `).join('');

  const updateBlock = (title, description, list) => {
    if (!title || !description || !list || list.dataset.dobrovozProcess === 'true') return;
    title.innerHTML = '<span class="cl-note">КАК</span><br>ЭТО РАБОТАЕТ';
    description.textContent = 'От выбора товара до доставки — весь путь понятен и под контролем.';
    list.innerHTML = stepsMarkup();
    list.dataset.dobrovozProcess = 'true';
    list.classList.add('dobrovoz-process-list');
  };

  const apply = () => {
    document.querySelectorAll('.home-service-sub-content').forEach((section) => {
      const title = section.querySelector('.home-service-title.sub .heading');
      const description = section.querySelector('.home-service-desc.sub .txt');
      if (title && /контролируем/i.test(title.textContent)) {
        updateBlock(title, description, section.querySelector('.home-service-sub-list'));
      }
    });

    document.querySelectorAll('.home-service-mb-text-wrap').forEach((section) => {
      const title = section.querySelector('.home-service-mb-title .heading');
      const description = section.querySelector('.home-service-mb-desc .txt');
      if (title && /контролируем/i.test(title.textContent)) {
        updateBlock(title, description, section.querySelector('.home-service-sub-list'));
      }
    });
  };

  const setupDesktopTruckExit = () => {
    const list = document.querySelector('.home-service-sub-list.dobrovoz-process-list');
    const truckStick = document.querySelector('.home-service-new-truck-stick');
    if (!list || !truckStick || truckStick.dataset.dobrovozExit === 'true') return;

    truckStick.dataset.dobrovozExit = 'true';
    truckStick.style.willChange = 'transform';
    let frame = 0;
    let currentOffset = 0;
    let targetOffset = 0;

    const update = () => {
      frame = 0;

      if (window.innerWidth < 992) {
        currentOffset = 0;
        targetOffset = 0;
        truckStick.style.removeProperty('transform');
        return;
      }

      const viewportHeight = window.innerHeight;
      const listRect = list.getBoundingClientRect();
      const timelineProgress = (viewportHeight * 0.7 - listRect.top)
        / (listRect.height + viewportHeight * 0.2);
      const exitProgress = Math.max(0, Math.min(1, (timelineProgress - 0.64) / 0.36));
      const easedProgress = exitProgress * exitProgress * exitProgress
        * (exitProgress * (exitProgress * 6 - 15) + 10);

      targetOffset = 115 * easedProgress;
      currentOffset += (targetOffset - currentOffset) * 0.09;

      if (Math.abs(targetOffset - currentOffset) < 0.02) currentOffset = targetOffset;
      truckStick.style.transform = `translate3d(0, ${currentOffset}vh, 0)`;

      if (currentOffset !== targetOffset) frame = window.requestAnimationFrame(update);
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });
    requestUpdate();
  };

  const setupDesktopTruckStraightening = () => {
    const rotators = Array.from(document.querySelectorAll('.home-service-new-truck-rot'));
    if (!rotators.length || rotators.some((item) => item.dataset.dobrovozStraight === 'true')) return;

    rotators.forEach((item) => { item.dataset.dobrovozStraight = 'true'; });

    const matrixValues = (element) => {
      const transform = window.getComputedStyle(element).transform;
      if (!transform || transform === 'none') return null;

      const match = transform.match(/^matrix\(([^)]+)\)$/);
      if (!match) return null;

      const values = match[1].split(',').map(Number);
      return values.length === 6 && values.every(Number.isFinite) ? values : null;
    };

    const removeRotation = (element) => {
      const values = matrixValues(element);
      if (!values) return;

      const [a, b, c, d, x, y] = values;
      const scaleX = Math.hypot(a, b);
      if (!scaleX) return;

      const scaleY = ((a * d) - (b * c)) / scaleX;
      element.style.transform = `matrix(${scaleX}, 0, 0, ${scaleY}, ${x}, ${y})`;
    };

    const alignStraightSection = () => {
      if (window.innerWidth < 992) return;

      rotators.forEach((rotator) => {
        const values = matrixValues(rotator);
        if (!values) return;

        const [a, b, c, d, x, y] = values;
        const angle = Math.atan2(b, a) * 180 / Math.PI;

        /* The original transition rocks the cab and trailer separately. Once
           the truck is entering the straight road, finish the turn and remove
           that residual rocking while preserving its scale and position. */
        if (angle < 86 || angle > 94) return;

        const scaleX = Math.hypot(a, b);
        const scaleY = ((a * d) - (b * c)) / scaleX;
        rotator.style.transform = `matrix(0, ${scaleX}, ${-scaleY}, 0, ${x}, ${y})`;

        const truck = rotator.querySelector('.home-service-new-truck-inner');
        if (truck) removeRotation(truck);
      });
    };

    let frame = 0;
    let passes = 0;
    const run = () => {
      frame = 0;
      alignStraightSection();
      passes += 1;
      if (passes < 8) frame = window.requestAnimationFrame(run);
    };
    const requestAlignment = () => {
      passes = 0;
      if (!frame) frame = window.requestAnimationFrame(run);
    };

    window.addEventListener('scroll', requestAlignment, { passive: true });
    window.addEventListener('resize', requestAlignment, { passive: true });
    requestAlignment();
  };

  const init = () => {
    apply();
    setupDesktopTruckExit();
    setupDesktopTruckStraightening();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
