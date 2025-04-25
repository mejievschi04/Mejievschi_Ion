const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const auth = document.querySelector('.auth');

toggle.addEventListener('click', () => {
  menu.classList.toggle('open');
  auth.classList.toggle('open');
});