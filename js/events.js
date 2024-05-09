const registerButtons = document.querySelectorAll('.events__poster-btn');
const registerPopup = document.querySelector('.register__popup');
const registerSubmitBtn = document.querySelector('.register__submit_btn')
const successRegisterPopup = document.querySelector('.success-register__popup')

const closeBtns = document.querySelectorAll('.close');

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

closeBtns.forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    registerPopup.hidden = true;
    successRegisterPopup.hidden = true;
    document.removeEventListener('keydown', escPushHandler);
  })
})

document.getElementById('phone').addEventListener('input', function(event) {
  this.value = this.value.replace(/[^0-9+]/g, '');
});

document.getElementById('email').addEventListener('input', function(event) {
  this.value = this.value.replace(/[а-яА-Я]/g, '');
});