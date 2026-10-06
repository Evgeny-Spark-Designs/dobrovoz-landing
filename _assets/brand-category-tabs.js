(function () {
  document.querySelectorAll('.home-partners').forEach(function (section, sectionIndex) {
    const labelWraps = Array.from(section.querySelectorAll('.home-partners-label-wrap'));
    const groups = Array.from(section.querySelectorAll('.home-partners-main'));
    if (groups.length <= 1) return;

    const firstCate = labelWraps[0].querySelector('.home-partners-cate');
    if (!firstCate) return;

    const names = labelWraps.map(function (wrap) {
      const txt = wrap.querySelector('.home-partners-cate .txt');
      return txt ? txt.textContent.trim() : '';
    });

    const tabs = document.createElement('div');
    tabs.className = 'home-partners-tabs';

    const mobileDropdownWrap = document.createElement('div');
    mobileDropdownWrap.className = 'home-partners-select-wrap';

    const mobileDropdownLabel = document.createElement('span');
    mobileDropdownLabel.className = 'home-partners-select-label';
    mobileDropdownLabel.textContent = 'Категории брендов';

    const mobileDropdownButton = document.createElement('button');
    mobileDropdownButton.type = 'button';
    mobileDropdownButton.className = 'home-partners-select';
    mobileDropdownButton.setAttribute('aria-haspopup', 'listbox');
    mobileDropdownButton.setAttribute('aria-expanded', 'false');

    const dropdownId = 'brand-category-dropdown-' + sectionIndex;
    const mobileDropdown = document.createElement('div');
    mobileDropdown.id = dropdownId;
    mobileDropdown.className = 'home-partners-dropdown';
    mobileDropdown.setAttribute('role', 'listbox');
    mobileDropdown.setAttribute('aria-label', 'Категории брендов');
    mobileDropdownButton.setAttribute('aria-controls', dropdownId);

    mobileDropdownWrap.appendChild(mobileDropdownLabel);
    mobileDropdownWrap.appendChild(mobileDropdownButton);
    mobileDropdownWrap.appendChild(mobileDropdown);

    let buttons = [];
    let dropdownOptions = [];

    function closeDropdown(returnFocus) {
      mobileDropdownWrap.classList.remove('is-open');
      mobileDropdownButton.setAttribute('aria-expanded', 'false');
      if (returnFocus) mobileDropdownButton.focus();
    }

    function openDropdown(focusSelected) {
      mobileDropdownWrap.classList.add('is-open');
      mobileDropdownButton.setAttribute('aria-expanded', 'true');
      if (focusSelected) {
        const selected = dropdownOptions.find(function (option) {
          return option.getAttribute('aria-selected') === 'true';
        });
        if (selected) selected.focus();
      }
    }

    function activateCategory(i, scrollTab) {
      buttons.forEach(function (button, j) {
        button.classList.toggle('active', j === i);
        button.setAttribute('aria-pressed', j === i ? 'true' : 'false');
      });
      dropdownOptions.forEach(function (option, j) {
        option.classList.toggle('active', j === i);
        option.setAttribute('aria-selected', j === i ? 'true' : 'false');
      });
      groups.forEach(function (group, j) {
        group.classList.toggle('active', j === i);
      });
      mobileDropdownButton.textContent = names[i];

      if (scrollTab) {
        buttons[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }

    buttons = names.map(function (name, i) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'home-partners-tab' + (i === 0 ? ' active' : '');
      btn.textContent = name;
      btn.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
      btn.addEventListener('click', function () {
        activateCategory(i, true);
      });
      tabs.appendChild(btn);
      return btn;
    });

    dropdownOptions = names.map(function (name, i) {
      const option = document.createElement('button');
      option.type = 'button';
      option.className = 'home-partners-dropdown-option' + (i === 0 ? ' active' : '');
      option.textContent = name;
      option.setAttribute('role', 'option');
      option.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      option.addEventListener('click', function () {
        activateCategory(i, false);
        closeDropdown(true);
      });
      option.addEventListener('keydown', function (event) {
        let nextIndex = i;
        if (event.key === 'ArrowDown') nextIndex = (i + 1) % dropdownOptions.length;
        if (event.key === 'ArrowUp') nextIndex = (i - 1 + dropdownOptions.length) % dropdownOptions.length;
        if (event.key === 'Home') nextIndex = 0;
        if (event.key === 'End') nextIndex = dropdownOptions.length - 1;
        if (event.key === 'Escape') {
          event.preventDefault();
          closeDropdown(true);
          return;
        }
        if (event.key === 'Tab') {
          closeDropdown(false);
          return;
        }
        if (nextIndex !== i) {
          event.preventDefault();
          dropdownOptions[nextIndex].focus();
        }
      });
      mobileDropdown.appendChild(option);
      return option;
    });

    mobileDropdownButton.addEventListener('click', function () {
      if (mobileDropdownWrap.classList.contains('is-open')) {
        closeDropdown(false);
      } else {
        openDropdown(false);
      }
    });

    mobileDropdownButton.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        openDropdown(true);
      }
      if (event.key === 'Escape') closeDropdown(false);
    });

    document.addEventListener('click', function (event) {
      if (!mobileDropdownWrap.contains(event.target)) closeDropdown(false);
    });

    firstCate.replaceWith(tabs);
    tabs.after(mobileDropdownWrap);
    labelWraps[0].classList.add('home-partners-label-wrap-select');
    labelWraps.slice(1).forEach(function (wrap) {
      wrap.classList.add('home-partners-label-wrap-hidden');
    });

    activateCategory(0, false);
  });
})();
