var Portfolio = function() {
  var burger = document.querySelector(".navbar-burger");
  var menu = document.querySelector(".navbar-menu");
  var sections = document.querySelectorAll("body > section");
  var navbarItems = document.querySelectorAll(".navbar-item");
  var nav = document.querySelector("nav");
  var projectsContainer = document.querySelector('.js-projects-container');
  //don't judge, no database for now ok. =))
  var projects = [
    {
      title: 'fCC Tribute Page',
      url: 'https://codepen.io/jcunanan05/full/eWgbwB/',
      imageUrl: 'https://codepen.io/jcunanan05/pen/eWgbwB/image/small.png',
      description: 'This is a front-end exercise project that I made at freeCodeCamp using Bootstrap.'
    },

    {
      title: 'Color Game',
      url: 'https://codepen.io/jcunanan05/full/gzrjdq',
      imageUrl: 'https://codepen.io/jcunanan05/pen/gzrjdq/image/small.png',
      description: 'This is a front-end game that enhances your understanding on how Red Blue and Green affects color mixes. This uses jQuery library as well as plain CSS for styling.'
    },

    {
      title: 'fCC Random Quote Machine',
      url: 'https://codepen.io/jcunanan05/full/yKaoRm',
      imageUrl: 'https://codepen.io/jcunanan05/pen/yKaoRm/image/small.png',
      description: 'This is a front-end challenge that uses random quote API to deliver random quotes. It uses plain CSS with flexbox to practice responsive web design skills and also generate random colors.'
    }
  ];

  // event listeners
  burger.addEventListener("click", toggleBurger);

  window.addEventListener("scroll", checkSlide);

  //hide / show burger
  navbarItems.forEach(navbarItem => {
    navbarItem.addEventListener("click", hideBurger);
  });

  projects.forEach((project, i) => {
    // for every 3 proj new line
    var projectString = '';

    
  });

  function toggleBurger() {
    menu.classList.toggle("is-active");
  }
  
  function hideBurger() {
    if (menu.classList.contains("is-active")) {
      menu.classList.remove("is-active");
    }
  }
  
  //debounce calls the function every x ms
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
  
  //scrollspy for navbar-items
  function checkSlide(e) {
    var topPosition = window.scrollY;
    var navbarHeight = nav.clientHeight;
    var navbarPosition = topPosition + navbarHeight;
    // console.log(`navbarHeight = ${navbarHeight}`);
    //client height is the height of the element
    //window.scrollY is the position at the top
    //window.innerHeight is the height of the viewport
    //offsetTop is the distance from the top to the element
    // console.log('offsetTop: ' + section.offsetTop);
    // console.log('scrollY: ' + topPosition);
  
    sections.forEach(section => {
      var sectionId = "#" + section.getAttribute("id");
      var sectionHeight = section.offsetTop + section.clientHeight;
      var sectionIsPassingBy = 
        navbarPosition >= section.offsetTop && 
        navbarPosition <= sectionHeight;
      var navbarItem = document.querySelector(`a[href="${sectionId}"]`);
  
      // deactiviate it here for a test before any activation
      navbarItem ? navbarItem.classList.remove("is-active") : "";
  
      if (sectionIsPassingBy) {
        //add is-active class to a navbar-item
        //execute if navbarItem exists
        navbarItem ? navbarItem.classList.add("is-active") : "";
      }
    });
  }
};


//run scripts 
var project = Portfolio();