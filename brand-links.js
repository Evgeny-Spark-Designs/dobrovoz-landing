(() => {
  const brandSites = {
    'Adidas': 'https://www.adidas.com/',
    'Amazon': 'https://www.amazon.de/',
    'ASOS': 'https://www.asos.com/',
    'Bershka': 'https://www.bershka.com/',
    'Bosch': 'https://www.bosch.com/',
    'Decathlon': 'https://www.decathlon.com/',
    'Douglas': 'https://www.douglas.de/',
    'eBay': 'https://www.ebay.com/',
    'Farfetch': 'https://www.farfetch.com/',
    'H&M': 'https://www2.hm.com/',
    'IKEA': 'https://www.ikea.com/',
    'JBL': 'https://www.jbl.com/',
    'JYSK': 'https://jysk.com/',
    'Lacoste': 'https://www.lacoste.com/',
    'LEGO': 'https://www.lego.com/',
    'Mango': 'https://shop.mango.com/',
    'Massimo Dutti': 'https://www.massimodutti.com/',
    'New Balance': 'https://www.newbalance.com/',
    'Nike': 'https://www.nike.com/',
    'Philips': 'https://www.philips.com/',
    'Pull&Bear': 'https://www.pullandbear.com/',
    'Puma': 'https://www.puma.com/',
    'Reebok': 'https://www.reebok.com/',
    'Rossmann': 'https://www.rossmann.de/',
    'Samsung': 'https://www.samsung.com/',
    'Sephora': 'https://www.sephora.com/',
    'Siemens': 'https://www.siemens.com/',
    'Sony': 'https://www.sony.com/',
    'The North Face': 'https://www.thenorthface.com/',
    'Under Armour': 'https://www.underarmour.com/',
    'Uniqlo': 'https://www.uniqlo.com/',
    'Zalando': 'https://www.zalando.com/',
    'Zara': 'https://www.zara.com/',
  };

  const applyBrandLinks = () => {
    document.querySelectorAll('.home-partners-item').forEach((item) => {
      if (item.querySelector('.home-partners-brand-link')) return;

      const logo = item.querySelector('.home-partners-item-thumb img[alt]');
      const brand = logo?.alt?.trim();
      const href = brandSites[brand];
      if (!href) return;

      item.style.position = 'relative';

      const link = document.createElement('a');
      link.className = 'home-partners-brand-link';
      link.href = href;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', `Открыть официальный сайт ${brand}`);
      link.style.position = 'absolute';
      link.style.inset = '0';
      link.style.zIndex = '3';
      link.style.cursor = 'pointer';
      item.appendChild(link);
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyBrandLinks, { once: true });
  } else {
    applyBrandLinks();
  }
})();
