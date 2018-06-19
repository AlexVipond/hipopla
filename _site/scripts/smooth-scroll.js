function smoothScroll(selector) {
  let html = document.querySelector('html'),
    htmlTop = html.getBoundingClientRect().top;
    element = document.querySelector(selector),
    elementTop = element.getBoundingClientRect().top,
    scrollPoint = elementTop - htmlTop


  window.scroll({
    top: scrollPoint,
    left: 0,
    behavior: 'smooth'
  });
}
