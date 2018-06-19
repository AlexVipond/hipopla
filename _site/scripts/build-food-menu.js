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

function buildFoodMenu() {
  let menuContainer = document.querySelector('section');

  let menuHeaders = document.querySelectorAll('main h1');
  menuHeaders.forEach(header => {
    header.classList.add('menu-section-header');
  });

  let menuSections = [];
  menuHeaders.forEach(header => {
    let theseItems = nextUntil(header, 'main h1');
    theseItems = [header].concat(theseItems);
    menuSections.push(theseItems);
  });

  menuSections.forEach(section => {
    let container = document.createElement('div');
    container.setAttribute('id', section[0].textContent);
    container.classList.add('menu-section');

    section.forEach(node => {
      container.appendChild(node);
    });

    menuContainer.appendChild(container);
  });

  let menuSectionContainers = document.querySelectorAll('.menu-section');
  menuSectionContainers.forEach(section => {
    let menuItemNames = section.querySelectorAll('main h2');

    let menuItemGroups = [];
    menuItemNames.forEach(name => {
      let theseItems = nextUntil(name, 'main h2');
      theseItems = [name].concat(theseItems);
      console.log(theseItems);
      menuItemGroups.push(theseItems);
    });

    menuItemGroups.forEach(group => {
      let container = document.createElement('div');

      container.setAttribute('id', group[0].textContent);
      container.classList.add('menu-item');
      section.appendChild(container);

      group.forEach(node => {
        container.appendChild(node);
      });

      section.appendChild(container);
    });
  });
}

buildFoodMenu();
