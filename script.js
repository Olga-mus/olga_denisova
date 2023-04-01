const btnOpenPopup = document.querySelector('.button-menu');
const btnClosePopup = document.querySelector('.popup_burger__button-close');
const overlay = document.querySelector('.popup_burger');
const popup = document.querySelector('.popup');

function closePopup() {
  popup.classList.add('hidden');
}

function openPopup() {
  popup.classList.remove('hidden');
}

btnOpenPopup.addEventListener('click', openPopup);
btnClosePopup.addEventListener('click', closePopup);
overlay.addEventListener('click', closePopup);

document.addEventListener('keydown', function (e) {
  if ((e.key = 'Escape' && !popup.classList.contains('.hidden'))) {
    closePopup();
  }
});
