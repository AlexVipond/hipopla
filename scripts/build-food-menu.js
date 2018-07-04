function buildFoodMenu() {
  function nextUntil(elem, selector) {
  	// matches() polyfill
  	if (!Element.prototype.matches) {
  		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  	}

  	let siblings = [];

  	elem = elem.nextElementSibling;

  	while (elem) {
  		if (elem.matches(selector)) break;
  		siblings.push(elem);
  		elem = elem.nextElementSibling;
  	}

  	return siblings;
  };

  function slugify(string) {
    return string.toLowerCase()
      .replace(/[\s\&\.\/\?\!\@\#\$\%\^\*\(\)\_\+\=\'\"\;\:\>\<\,\~\`]/g, '-')
      .replace(/\-{2,}/g, '-')
      .replace(/^-/, '')
      .replace(/-$/, '');
  }

  let menuContainer = document.querySelector('section.menu-container');

  let menuHeaders = menuContainer.querySelectorAll('h1');
  menuHeaders.forEach(function(header) {
    header.classList.add('menu-section-header');
  });

  let menuSections = [];
  menuHeaders.forEach(function(header) {
    let theseItems = nextUntil(header, 'h1');
    theseItems = [header].concat(theseItems);
    menuSections.push(theseItems);
  });

  menuSections.forEach(function(section) {
    let container = document.createElement('div');
    container.setAttribute('id', slugify(section[0].textContent));
    container.classList.add('menu-section');

    section.forEach(function(node) {
      container.appendChild(node);
    });

    menuContainer.appendChild(container);
  });

  let menuSectionContainers = document.querySelectorAll('.menu-section');
  menuSectionContainers.forEach(function(section) {
    let menuItemNames = section.querySelectorAll('h2');

    let menuItemGroups = [];
    menuItemNames.forEach(function(name) {
      let theseItems = nextUntil(name, 'h2');
      theseItems = [name].concat(theseItems);
      menuItemGroups.push(theseItems);
    });

    menuItemGroups.forEach(function(group) {
      let container = document.createElement('div');

      container.setAttribute('id', slugify(group[0].textContent));
      container.classList.add('menu-item');
      section.appendChild(container);

      group.forEach(function(node) {
        container.appendChild(node);
      });

      section.appendChild(container);
    });
  });
}

buildFoodMenu();
