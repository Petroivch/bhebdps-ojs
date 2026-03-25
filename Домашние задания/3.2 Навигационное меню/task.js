const links = Array.from(document.querySelectorAll('.menu__link'));

links.forEach(link => {
  link.onclick = function () {
    const item = link.closest('.menu__item');
    const subMenu = item.querySelector('.menu_sub');

    if (subMenu) {
      const parentMenu = item.closest('.menu');
      const activeSubMenus = parentMenu.querySelectorAll('.menu_sub.menu_active');

      activeSubMenus.forEach(menu => {
        if (menu !== subMenu) {
          menu.classList.remove('menu_active');
        }
      });

      subMenu.classList.toggle('menu_active');
      return false;
    }
  };
});