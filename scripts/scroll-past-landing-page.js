function scrollPastLandingPage() {
  let landingPage = document.querySelector('header.landing-page'),
    landingPageHeight = landingPage.getBoundingClientRect().height;

  window.scroll({
    top: landingPageHeight,
    left: 0,
    behavior: 'smooth'
  });
}
