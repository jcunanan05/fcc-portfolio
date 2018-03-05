var burger = document.querySelector('.navbar-burger');
var menu = document.querySelector('.navbar-menu');
var sections = document.querySelectorAll('section.section');


//debounce calls the function every 20ms
function debounce(func, wait = 20, immediate = true) {
  var timeout;
	return function() {
    var context = this, args = arguments;
		var later = function() {
      timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// event listeners 
burger.addEventListener('click', toggleBurger);


function toggleBurger() {
  menu.classList.toggle('is-active');
}


function checkSlide(e) {
  sections.forEach(section => {
    //client height is the height of the element
    //scrollY is the position at the top
    //innerHeight is the height of the viewport
    console.log(window.innerHeight);
  });
}


window.addEventListener('scroll', debounce(checkSlide));