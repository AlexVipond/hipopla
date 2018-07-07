function openCloseDrawer(drawerSelector, openClass) {
  let drawer = document.querySelector(drawerSelector);
      // drawerClasses = Array.from(drawer.classList),
      // drawerIsOpen = drawerClasses.findIndex(c => c === openClass) > -1;

  let result = drawer.classList.toggle(openClass);
}
