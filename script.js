var burger = document.querySelector('.navbar-burger');
var menu = document.querySelector('.navbar-menu');




// event listeners 
burger.addEventListener('click', toggleBurger);


function toggleBurger() {
  menu.classList.toggle('is-active');
}

