var burger = document.querySelector('.navbar-burger');
var menu = document.querySelector('.navbar-menu');
var projects = document.querySelector('.parentTile');

var projectUrls = [
  {
    title: 'fCC Tribute Page',
    subtitle: 'subtitle here',
    userUrl: 'https://codepen.io/jcunanan05/',
    slug: 'eWgbwB'
  },

  {
    title: 'fCC Tribute Page',
    subtitle: 'subtitle here',
    userUrl: 'https://codepen.io/jcunanan05',
    slug: 'eWgbwB'
  },
];



burger.addEventListener('click', toggleBurger);

function toggleBurger() {
  menu.classList.toggle('is-active');
}


function addProject(project) {
  projects.innerHTML = 
  `
    <section class="tile is-parent">
      <article class="tile is-parent">
        <div class="tile is-child">
          <p class="title">${project.title}</p>
          <p class="subtitle">${project.subtitle}</p>

          <figure class="is-image is-16by9">
            <a href="${project.userUrl}/full/${project.slug}" target="blank">
              <img src="${project.userUrl}/pen/${project.slug}/image/small.png">
            </a>
          </figure>
        </div>
      </article>
    </section>
  `;
}

addProject(projectUrls[0]);
addProject(projectUrls[1]);