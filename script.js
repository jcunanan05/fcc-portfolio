var burger = document.querySelector(".navbar-burger");
var menu = document.querySelector(".navbar-menu");
var sections = document.querySelectorAll("body > section");
var navbarItems = document.querySelectorAll(".navbar-item");
var nav = document.querySelector("nav");

// event listeners
burger.addEventListener("click", toggleBurger);

navbarItems.forEach(navbarItem => {
  navbarItem.addEventListener("click", hideBurger);
});

function toggleBurger() {
  menu.classList.toggle("is-active");
}

function hideBurger() {
  if (menu.classList.contains("is-active")) {
    menu.classList.remove("is-active");
  }
}

//debounce calls the function every xms
function debounce(func, wait = 19, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide(e) {
  var topPosition = window.scrollY;
  var navbarHeight = nav.clientHeight;
  console.log(`navbarHeight = ${navbarHeight}`);

  sections.forEach(section => {
    var sectionId = "#" + section.getAttribute("id");
    console.log(`\nsectionId = ${sectionId}`);
    var sectionIsNear = topPosition + navbarHeight * 4 >= section.offsetTop;
    console.log(`topPosition = ${topPosition}, section.offsettop = ${section.offsetTop}`);
    var sectionPassedBy =
      topPosition + navbarHeight * 4 >=
      section.offsetTop + section.clientHeight;
    console.log(`section.clientHeight = ${section.clientHeight}`);
    console.log(`sectionIsNear = ${sectionIsNear}, sectionPassedBy = ${sectionPassedBy}`);
    //client height is the height of the element
    //window.scrollY is the position at the top
    //window.innerHeight is the height of the viewport
    //offsetTop is the distance from the top to the element
    // console.log('offsetTop: ' + section.offsetTop);
    // console.log('scrollY: ' + topPosition);

    var navbarItem = document.querySelector(`a[href="${sectionId}"]`);
    console.log(`navBarItem = ${navbarItem}`);
    // deactiviate it here for a test before any activation
    navbarItem ? navbarItem.classList.remove("is-active") : "";

    if (sectionIsNear) {
      //add is-active class to a navbar-item

      //execute if navbarItem exists
      navbarItem ? navbarItem.classList.add("is-active") : "";
    }

    if (sectionPassedBy) {
      //add is-active class to a navbar-item

      //execute if navbarItem exist
      navbarItem ? navbarItem.classList.remove("is-active") : "";
    }
  });
  console.log("-------------------------------");
}

window.addEventListener("scroll", checkSlide);
