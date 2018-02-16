var burger = document.querySelector('.navbar-burger');
var menu = document.querySelector('.navbar-menu');
var projects = document.querySelector('.parentTile');

var projectUrls = [
  {
    title: 'fCC Tribute Page',
    subtitle: 'subtitle here',
    userUrl: 'https://codepen.io/jcunanan05',
    slug: 'eWgbwB'
  },

  {
    title: 'fCC Tribute Page',
    subtitle: 'subtitle two',
    userUrl: 'https://codepen.io/jcunanan05',
    slug: 'eWgbwB'
  },

  {
    title: 'fCC Tribute Page',
    subtitle: 'subtitle three',
    userUrl: 'https://codepen.io/jcunanan05',
    slug: 'eWgbwB'
  },

  {
    title: 'fCC Tribute Page',
    subtitle: 'subtitle four',
    userUrl: 'https://codepen.io/jcunanan05',
    slug: 'eWgbwB'
  },
];



burger.addEventListener('click', toggleBurger);

function toggleBurger() {
  menu.classList.toggle('is-active');
}


function addAllProjects(projectUrls) {
  var articles = '';
  
  //get all articles in one string
  projectUrls.forEach(projectUrl => {
    articles += makeArticle(projectUrl);
  });

  //put all article into a section
  projects.innerHTML = 
  `
    <section class="tile is-parent">
      ${articles}
    </section>
  `;
}


function makeArticle(projectUrl) {
  if (projectUrl === undefined || projectUrl === '') return '';

  return `
    <article class="tile is-parent">
      <div class="is-child">
        <p class="title">${projectUrl.title}</p>
        <p class="subtitle">${projectUrl.subtitle}</p>

        <figure class="is-image is-16by9">
          <a href="${projectUrl.userUrl}/full/${projectUrl.slug}/" target="_blank">
            <img src="${projectUrl.userUrl}/pen/${projectUrl.slug}/image/small.png">
          </a>
        </figure>
      </div>
    </article>
  `;
}

addAllProjects(projectUrls);
