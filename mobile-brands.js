(function () {
  var MOBILE_LIMIT = 20;

  document.querySelectorAll('.home-partners').forEach(function (section) {
    var groups = Array.from(section.querySelectorAll('.home-partners-main'));

    groups.forEach(function (group) {
      var items = Array.from(group.querySelectorAll('.home-partners-item.w-dyn-item'));
      if (items.length <= MOBILE_LIMIT) return;

      items.slice(MOBILE_LIMIT).forEach(function (item) {
        item.classList.add('mobile-brand-extra');
      });

      Array.from(group.querySelectorAll('.home-partners-section-label')).forEach(function (label) {
        var nextItem = label.nextElementSibling;
        while (nextItem && !nextItem.classList.contains('home-partners-item')) {
          nextItem = nextItem.nextElementSibling;
        }
        if (nextItem && nextItem.classList.contains('mobile-brand-extra')) {
          label.classList.add('mobile-brand-extra');
        }
      });

      group.classList.add('mobile-brands-collapsed');

      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'mobile-brands-toggle';
      button.setAttribute('aria-expanded', 'false');
      button.textContent = 'Смотреть ещё';
      group.appendChild(button);

      button.addEventListener('click', function () {
        var isExpanded = button.getAttribute('aria-expanded') === 'true';
        group.classList.toggle('mobile-brands-collapsed', isExpanded);
        button.setAttribute('aria-expanded', String(!isExpanded));
        button.textContent = isExpanded ? 'Смотреть ещё' : 'Свернуть';
      });
    });
  });
})();
