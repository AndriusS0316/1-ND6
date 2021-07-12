// sesta uzduotis

const logoND6 = document.querySelector('.logo');
const hamburgerND6 = document.querySelector('.hamburger');

function hamburgerClick() {
  if (logoND6.classList.contains('big', 'nav.visible')) {
    logoND6.classList.remove('big');
  } else {
    logoND6.classList.add('big');
  }
}

hamburgerND6.addEventListener('click', hamburgerClick);

const navND6 = document.querySelector('nav'); 

