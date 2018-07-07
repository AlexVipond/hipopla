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

  let cheveronBeforeClass = '<svg class="',
      cheveronAfterClass = '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="heroicon-ui" d="M9.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z"/></svg>';

  let menuHeaders = menuContainer.querySelectorAll('h1');
  menuHeaders.forEach(function(header) {
    header.classList.add('menu-section-header');
    let text = header.textContent;
    header.innerHTML = cheveronBeforeClass  + slugify(text) + '-cheveron' + cheveronAfterClass + text;
    header.setAttribute('onclick', "openCloseDrawer('div#" + slugify(text) + "-items', 'open-drawer'); rotateItem('svg." + slugify(text) + "-cheveron', 'rotate-item');");
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
    let menuSectionName = section.querySelector('h1').textContent;
    let menuItemNames = section.querySelectorAll('h2');

    let menuItemGroups = [];
    menuItemNames.forEach(function(name) {
      let theseItems = nextUntil(name, 'h2');
      theseItems = [name].concat(theseItems);
      menuItemGroups.push(theseItems);
    });

    let menuItemsContainer = document.createElement('div');
    menuItemsContainer.classList.add('menu-items-container');
    menuItemsContainer.setAttribute('id', slugify(menuSectionName) + '-items');

    menuItemGroups.forEach(function(group) {
      let container = document.createElement('div');

      container.setAttribute('id', slugify(group[0].textContent));
      container.classList.add('menu-item');
      menuItemsContainer.appendChild(container);

      group.forEach(function(node) {
        container.appendChild(node);
      });
    });

    section.appendChild(menuItemsContainer);
  });
}

buildFoodMenu();
