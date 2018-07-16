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
      title: 'Survey Form Challenge',
      url: 'https://codepen.io/jcunanan05/full/ERKmYg',
      imageUrl: 'res/survey.PNG',
      description: 'This is a Responsive Web Design Challenge, all in CSS! Enjoyed some mind-bending problems here like making a google form clone.'
    },

    {
      title: 'Color Game',
      url: 'https://codepen.io/jcunanan05/full/gzrjdq',
      imageUrl: 'res/color-game.PNG',
      description: 'This is a front-end game that enhances your understanding on how Red Blue and Green affects color mixes. This uses jQuery library as well as plain CSS for styling.'
    },

    {
      title: 'fCC Random Quote Machine',
      url: 'https://jcunanan05-random-quote.netlify.com/',
      imageUrl: 'res/random-quote.PNG',
      description: 'This is a front-end challenge that uses random quote API to deliver random quotes. I had fun rewriting effects, color transitions, in react!!'
    }
  ];

  // event listeners
  burger.addEventListener("click", toggleBurger);

  window.addEventListener("scroll", checkSlide);

  //hide / show burger
  navbarItems.forEach(navbarItem => {
    navbarItem.addEventListener("click", hideBurger);
  });

  //build projects section
  makeProjectString();


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

  //build the projectsContainer
  function makeProjectString() {
    var projectsString = [];
    var rowString = [];

    //loop the project Object
    projects.forEach((project, i) => {
      // for every 3 proj new line
      var newColumn = ((i + 1) % 3) === 0;
  
      //loop all column
      rowString.push(`
        ${makeColumn(project)}
      `);

      //if new column
      if(newColumn) {
        projectsString.push(`<div class="columns">${rowString.join('')}</div>`);
        //reset rowString
        rowString = [];
      }

      //if end of array
      if(i === projects.length - 1) {
        projectsString.push(`<div class="columns">${rowString.join('')}</div>`);
      }
    });

    //build the string
    projectsContainer.innerHTML = `
      ${projectsString.join('')}
    `;
  }

  //get object and return a html string of project
  function makeColumn(project) {
    return `
      <div class="column is-one-third my-projects">
        <article>
          <h2 class="title">
            <a href="${project.url}" target="_blank">${project.title}</a>
          </h2>

          <figure>
            <a href="${project.url}"></a>
            <img class="image" src="${project.imageUrl}">

            <figcaption class="has-text-centered">${project.description}</figcaption>
          </figure>
        </article>
      </div>
    `;
  }
};


//run scripts 
var project = Portfolio();
