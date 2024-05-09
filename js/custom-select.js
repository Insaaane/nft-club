const dropdown = document.querySelector('.custom-select');

const dropdownButton = dropdown.querySelector('.dropdown__button');
const dropdownList = dropdown.querySelector('.dropdown-list');
const dropdownItems = dropdownList.querySelectorAll('.dropdown-list-item');

function clickButton(evt) {
  evt.preventDefault();
  if (dropdownList.hidden === true) {
    dropdownList.hidden = false;
  } else {
    dropdownList.hidden = true;
  }
  document.addEventListener('click', clickOutsideDropdown);
  document.addEventListener('keydown', keyDown);
}

dropdownButton.addEventListener('click', clickButton);

function clickItem() {
  dropdownButton.innerText = this.innerText;
  closeDropdown();
}

dropdownItems.forEach(function (item) {
  item.addEventListener('click', clickItem)
});

function closeDropdown() {
  dropdownList.hidden = true;
  dropdownButton.classList.remove('dropdown-list__opened');
  document.removeEventListener('click', clickOutsideDropdown);
  document.removeEventListener('keydown', keyDown);
}

function clickOutsideDropdown(evt) {
  const click = evt.composedPath();

  if (!click.includes(dropdownButton)) {
    closeDropdown();
  }
}

function keyDown(evt) {
  if (evt.key === 'Tab' || evt.key === 'Escape') {
    closeDropdown();
  }
}
