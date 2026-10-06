(function () {
  var footer = document.querySelector('.footer');
  if (!footer) return;

  var copyright = footer.querySelector('.footer-gb-copyright.hidden-mb .footer-copyright-text p');
  if (copyright) {
    copyright.innerHTML = '© 2026 DobroVozTurk<br>ИП Добрынин А.А.<br>ИНН 500913600241';
  }

  var legalMenu = footer.querySelector('.footer-gb-legal-menu');
  if (legalMenu) legalMenu.style.columnGap = '2.8rem';

  if (footer.querySelector('.footer-dobrovoz-truck')) return;

  var footerBottom = footer.querySelector('.footer-bot');
  if (!footerBottom) return;

  var picture = document.createElement('div');
  picture.className = 'footer-dobrovoz-truck';
  picture.setAttribute('aria-hidden', 'true');

  var image = document.createElement('img');
  image.src = './_assets/brand-client/footer-truck.png';
  image.alt = '';
  image.loading = 'lazy';
  image.decoding = 'async';
  picture.appendChild(image);

  footerBottom.insertAdjacentElement('beforebegin', picture);

  var contactCol = footer.querySelector('.footer-main-contact');
  var firstContactItem = contactCol ? contactCol.querySelector('.footer-content-item') : null;
  if (contactCol && firstContactItem && !contactCol.querySelector('.footer-dobrovoz-truck-mobile')) {
    var pictureMobile = picture.cloneNode(true);
    pictureMobile.className = 'footer-dobrovoz-truck-mobile';
    firstContactItem.insertAdjacentElement('beforebegin', pictureMobile);
  }
})();
