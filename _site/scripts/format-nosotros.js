function formatNosotros() {
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
}
