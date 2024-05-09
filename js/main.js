const residencyButtons = document.querySelectorAll('.residency-btn');
const residencyPopup = document.querySelector('.residency__popup');
const residencySubmitBtn = document.querySelector('.residency__submit_btn')
const successResidencyPopup = document.querySelector('.success-residency__popup')

const closeBtns = document.querySelectorAll('.close');

const escPushHandler = (evt) => {
  if (evt.key === 'Escape') {
    residencyPopup.hidden = true;
    successResidencyPopup.hidden = true;
    document.removeEventListener('keydown', escPushHandler);
  }
};

const residencyButtonHandler = (evt) => {
  evt.preventDefault();

  residencyPopup.hidden = false;
  document.addEventListener('keydown', escPushHandler);
};

residencyButtons.forEach((btn) => {
  btn.addEventListener('click', residencyButtonHandler);
});

residencySubmitBtn.addEventListener('click', (evt) => {
  evt.preventDefault();

  successResidencyPopup.hidden = false;
  residencyPopup.hidden = true;
})

closeBtns.forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    residencyPopup.hidden = true;
    successResidencyPopup.hidden = true;
    document.removeEventListener('keydown', escPushHandler);
  })
})
