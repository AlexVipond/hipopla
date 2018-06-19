function buildNosotros() {
  function nextSeven(elem, selector) {
  	// matches() polyfill
  	if (!Element.prototype.matches) {
  		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  	}

  	let siblings = [];

  	elem = elem.nextElementSibling;

  	for ( i = 0; i < 7; i++ ) {
      if (elem.matches(selector)) break;
  		siblings.push(elem);
  		elem = elem.nextElementSibling;
    }

  	return siblings;
  };

  let horas = nextSeven('#horas');
}

buildNosotros();
