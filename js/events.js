const registerButtons = document.querySelectorAll('.events__poster-btn');
const registerPopup = document.querySelector('.register__popup');
const registerSubmitBtn = document.querySelector('.register__submit_btn')
const successRegisterPopup = document.querySelector('.success-register__popup')

const escPushHandler = (evt) => {
  if (evt.key === 'Escape') {
    registerPopup.hidden = true;
    successRegisterPopup.hidden = true;
    document.removeEventListener('keydown', escPushHandler);
  }
};

const registerButtonHandler = (evt) => {
  evt.preventDefault();

  registerPopup.hidden = false;
  document.addEventListener('keydown', escPushHandler);
};

registerButtons.forEach((btn) => {
  btn.addEventListener('click', registerButtonHandler);
});

registerSubmitBtn.addEventListener('click', (evt) => {
  evt.preventDefault();

  successRegisterPopup.hidden = false;
  registerPopup.hidden = true;
})