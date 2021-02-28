const popups = document.querySelectorAll('.pop-up');
const priceBuyButtons = document.querySelectorAll('.price__buy');
const countriesBuyButtons = document.querySelectorAll('.countries__buy');

const submit = document.querySelector('.contact-us__submit');
const buyPopup = document.querySelector('.modal-buy');
const successPopup = document.querySelector('.modal-success');
const successClose = document.querySelector('.modal-success__close-btn');
const buyClose = document.querySelector('.modal-buy__close-btn');
const userEmailField = document.querySelector('.contact-us__your-email');
const userEmail = document.querySelector('.contact-us__email');
const userNumber = document.querySelector('.contact-us__number');
const buyNumber = document.querySelector('.modal-buy__your-number');
const userNumberField = document.querySelector('.contact-us__your-number');

/*Form*/

submit.addEventListener('click', function (evt) {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const phoneReg = /((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  if (((reg.test(userEmailField.value) == false) && userEmailField.value !== '') && (phoneReg.test(userNumberField.value) == false)) {
    evt.preventDefault();
    userEmail.classList.add('contact-us__error');
    userNumber.classList.add('contact-us__error');
  }
  else if (phoneReg.test(userNumberField.value) === false){
    evt.preventDefault();
    userNumber.classList.add('contact-us__error');
  }
  else if ((reg.test(userEmailField.value) == false) && userEmailField.value !== '') {
    evt.preventDefault();
    userEmail.classList.add('contact-us__error');
  }
  else {
    evt.preventDefault();
    userNumber.classList.remove('contact-us__error');
    userEmail.classList.remove('contact-us__error');
    successPopup.classList.add('pop-up--show');
  }
});

successClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  successPopup.classList.remove('pop-up--show');
});

/*Modal Buy Tour*/

const showModal = function (button) {
  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    buyPopup.classList.add('pop-up--show');
    buyNumber.focus();
  });
}

priceBuyButtons.forEach(function(btn){
  showModal(btn);
});

countriesBuyButtons.forEach(function(btn){
  showModal(btn);
});

buyClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  buyPopup.classList.remove('pop-up--show');
});

/*Esc*/

popups.forEach(function(popup){
  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains('pop-up--show')) {
        evt.preventDefault();
        popup.classList.remove('pop-up--show');
      }
    }
  });
});
