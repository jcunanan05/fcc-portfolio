var burger = document.querySelector('.navbar-burger');
var menu = document.querySelector('.navbar-menu');
var projects = document.querySelector('.parentTile');

var projectUrls = [
  {
    title: 'fCC Tribute Page',
    subtitle: 'subtitle here',
    userUrl: 'https://codepen.io/jcunanan05',
    slug: 'eWgbwB'
  }
];


// event listeners 
burger.addEventListener('click', toggleBurger);


function toggleBurger() {
  menu.classList.toggle('is-active');
}


function addAllProjects(projectUrls) {
  var articles = [];
  var sections = [];
  var projectsHtml = '';

  //add all projectUrls into an array of articles 
  projectUrls.forEach(projectUrl => {
    articles.push(makeArticle(projectUrl));
  });

  //add each two of articles to a section
  for(var i = 0; i < articles.length; i += 2) {
    sections.push(makeSection(articles[i], articles[i + 1]));
  }

  //make a combined string of sections
  sections.forEach(section => {
    projectsHtml += section;
  });

  //output HTML
  projects.innerHTML = projectsHtml;
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


function makeSection(articleOne, articleTwo = '') {
  return `
    <section class="tile is-parent">
      ${articleOne}
      ${articleTwo}
    </section>
  `;
}


addAllProjects(projectUrls);
