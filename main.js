const toggleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', ()=> {
  menu.classList.toggle('avtive');
  icons.classList.toggle('avtive');

});
