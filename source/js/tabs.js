const countriesSlides = document.querySelectorAll('.countries__slide');
const cards = document.querySelectorAll('.trips__element');
const countriesSlideButtons = document.querySelectorAll('.countries__button');
let countriesActive = document.querySelector('.countries__button--active');
let slideActive = document.querySelector('.countries__slide--active');

countriesSlideButtons.forEach(function(slideButton, index) {
  if (slideButton.classList.contains('countries__button--active')) {
    countriesActive = slideButton;
  }
  slideButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    countriesActive.classList.remove('countries__button--active');
    countriesActive = slideButton;
    slideButton.classList.add('countries__button--active');
    countriesSlides.forEach(function(slide, slideIndex) {
      if (slide.classList.contains('countries__slide--active')) {
        slideActive = slide;
      }
      if (index == slideIndex){
        slideActive.classList.remove('countries__slide--active');
        slideActive = slide;
        slide.classList.add('countries__slide--active');
      }
      });
    });
  });

  cards.forEach(function(card, index) {
    card.addEventListener('click', function () {
      countriesSlides.forEach(function(slide, slideIndex) {
        if (slide.classList.contains('countries__slide--active')) {
          slideActive = slide;
        }
        if (index === slideIndex){
          slideActive.classList.remove('countries__slide--active');
          slideActive = slide;
          slide.classList.add('countries__slide--active');
        }
        });
      });
    });
