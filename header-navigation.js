(() => {
  const normalizeText = (element) => element?.textContent?.replace(/\s+/g, " ").trim().toLowerCase() || "";
  const selectors = {
    service: ".home-intro",
    categories: ".home-service-main",
    process: ".home-service-sub-list.dobrovoz-process-list",
    order: "#order-form",
    contacts: ".footer",
  };
  const sectionFor = (name) => {
    if (name === "process" && window.innerWidth <= 991) {
      return [...document.querySelectorAll(".home-service-mb-text-wrap")]
        .find((section) => normalizeText(section).includes("как это работает"))
        || document.querySelector(selectors[name]);
    }
    return document.querySelector(selectors[name]);
  };

  const markSections = () => {
    const ids = { service: "service-info", categories: "categories", process: "how-it-works", contacts: "contacts" };
    Object.entries(ids).forEach(([name, id]) => {
      const section = sectionFor(name);
      if (section) section.id = id;
    });
  };

  const scrollToSection = (name) => {
    const section = sectionFor(name);
    if (!section) return;
    if (name === "process" && window.innerWidth >= 992) {
      const targetTop = window.scrollY + section.getBoundingClientRect().top - window.innerHeight * 0.24;
      window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
    } else {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (section.id) history.replaceState(null, "", `#${section.id}`);
  };

  const sectionNameForLink = (link) => {
    if (link.getAttribute?.("href") === "#how-it-works") return "process";
    const label = normalizeText(link);
    if (label === "о сервисе" || label === "подробнее о сервисе") return "service";
    if (label === "категории") return "categories";
    if (label === "как заказать" || label === "как это работает") return "process";
    if (label === "контакты") return "contacts";
    if (label === "рассчитать заказ") return "order";
    return null;
  };

  const configureLinks = () => {
    markSections();
    const heroDescription = document.querySelector(".home-hero-desc .txt");
    if (heroDescription) {
      heroDescription.textContent = "IKEA, Zara, Nike и тысячи других магазинов. Выкупаем, проверяем и доставляем до вас. Оплачиваете — удобным способом.";
    }

    document.querySelectorAll(".related-news-links a").forEach((link) => {
      const label = normalizeText(link);
      if (["telegram-бот заказов", "канал", "телеграм-канал"].includes(label)) {
        link.href = "https://t.me/dobrovozTurk";
        link.target = "_blank";
        const textNode = link.querySelector(".txt");
        if (textNode) textNode.textContent = "Телеграм-канал";
      }
      if (label === "отследить заказ") {
        link.href = "https://t.me/AlexDobryiy";
        link.target = "_blank";
      }
    });

    document.querySelectorAll(".header-link, .header-dropdown-link").forEach((link) => {
      const label = normalizeText(link);
      if (label.includes("доставка")) {
        link.closest(".header-link-wrap")?.remove();
        if (link.classList.contains("header-dropdown-link")) link.remove();
        return;
      }
      if (label === "отзывы") {
        link.href = "https://dobrovozturk.ru/about#reviews:~:text=Отзывы";
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        return;
      }
      const name = sectionNameForLink(link);
      if (name) link.href = `#${sectionFor(name)?.id || name}`;
    });

    document.querySelectorAll(".home-intro-btn, #howItWorksBtn, #howItWorksBtnFooter, .home-hero .btn, .footer-link").forEach((link) => {
      const label = normalizeText(link);
      if (label === "отзывы") {
        link.href = "https://dobrovozturk.ru/about#reviews:~:text=Отзывы";
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        return;
      }
      const name = sectionNameForLink(link);
      if (name) link.setAttribute("href", `#${sectionFor(name)?.id || name}`);
    });
  };

  const mobileNavMedia = window.matchMedia("(max-width: 767px)");

  const setMobileNavOpen = (open) => {
    const header = document.querySelector(".header");
    const dropdown = header?.querySelector(".header-dropdown");
    const toggles = header?.querySelectorAll(".header-menu-toggle") || [];
    if (!header || !dropdown) return;

    const shouldOpen = Boolean(open && mobileNavMedia.matches);
    header.classList.toggle("on-open-nav", shouldOpen);
    dropdown.classList.toggle("active", shouldOpen);
    toggles.forEach((toggle) => {
      toggle.classList.toggle("active", shouldOpen);
      toggle.setAttribute("aria-expanded", String(shouldOpen));
      toggle.setAttribute("aria-label", shouldOpen ? "Закрыть меню" : "Открыть меню");
    });
    document.documentElement.classList.toggle("dobrovoz-mobile-nav-open", shouldOpen);
  };

  const installMobileNavFallback = () => {
    if (document.documentElement.dataset.dobrovozMobileNav === "ready") return;
    document.documentElement.dataset.dobrovozMobileNav = "ready";

    document.addEventListener("click", (event) => {
      const toggle = event.target.closest?.(".header-menu-toggle");
      if (toggle && mobileNavMedia.matches) {
        event.preventDefault();
        event.stopImmediatePropagation();
        const header = toggle.closest(".header");
        setMobileNavOpen(!header?.classList.contains("on-open-nav"));
        return;
      }

      if (mobileNavMedia.matches && event.target.closest?.(".header-dropdown-link, .header-btn")) {
        setMobileNavOpen(false);
      }
    }, true);

    document.addEventListener("pointerdown", (event) => {
      if (mobileNavMedia.matches && event.target.closest?.(".header-dropdown-link, .header-btn")) {
        setMobileNavOpen(false);
      }
    }, true);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setMobileNavOpen(false);
    });

    const resetForViewport = () => {
      if (!mobileNavMedia.matches) setMobileNavOpen(false);
    };
    if (mobileNavMedia.addEventListener) mobileNavMedia.addEventListener("change", resetForViewport);
    else mobileNavMedia.addListener(resetForViewport);

    document.querySelectorAll(".header-menu-toggle").forEach((toggle) => {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Открыть меню");
    });
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => {
    configureLinks();
    installMobileNavFallback();
  }, { once: true });
  else {
    configureLinks();
    installMobileNavFallback();
  }
  window.addEventListener("load", () => window.setTimeout(() => {
    configureLinks();
  }, 400), { once: true });
  // Сам скролл по клику на #якоря делает process-anchor.js (он перехватывает
  // клик раньше всех, на window в capture-фазе) - здесь просто выставляем
  // href/id, чтобы process-anchor.js знал, куда вести.
})();
