var Portfolio = function() {
  var navbarLinks = document.querySelectorAll('.js-navbar-link');
  var ToolList = {
    items: [],
    addItem: function(title, iconUrl) {
      this.items.push({
        title: title,
        iconUrl: iconUrl
      });
    },

    getToolItems: function() {
      return this.items.map(function(item) {
        return `
          <li class="tool__item">
            <h3 class="tool__title has-text-center">
              ${item.title}
            </h3>
            <img class="tool__image is-rounded" src="${item.iconUrl}" alt="${item.title} icon">
          </li>
        `;
      }).join('');
    }
  }; //for Displaying Tool icons

  //add all icon images in Tool Items
  addToolItems();

  //display all tool icons
  displayToolItems();
  
  navbarLinks.forEach(navbarLink => {
    //add click events to navbarLinks for smooth scrolling
    navbarLink.addEventListener('click', handleNavbarClick);
  });
  
  function handleNavbarClick(e) {
    e.preventDefault();
    // smooth scroll!!! 
    var href = e.currentTarget.getAttribute('href');
    var section = document.querySelector(href);
  
    //scroll if section exist
    if(section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  function addToolItems() {
    ToolList.addItem('CSS3', 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png');

    ToolList.addItem('HTML5', 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png');

    ToolList.addItem('Node JS', 'https://www.shareicon.net/data/256x256/2015/09/11/99371_javascript_512x512.png');

    ToolList.addItem('React', 'https://www.shareicon.net/download/2016/07/08/117367_logo.ico');

    ToolList.addItem('Bulma', 'https://jgthms.com/web-design-in-4-minutes/bulma.png');

    ToolList.addItem('Bootstrap', 'https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-social-logo.png');

    ToolList.addItem('JQuery', 'https://donjayamanne.gallerycdn.vsassets.io/extensions/donjayamanne/jquerysnippets/0.0.1/1474455550460/Microsoft.VisualStudio.Services.Icons.Default');

    ToolList.addItem('MongoDB', 'https://plugins.qgis.org/static/cache/99/ec/99ec0011d70e0fe6237a4cda0166fdca.png');

    ToolList.addItem('VS Code', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/241px-Visual_Studio_Code_1.18_icon.svg.png');

    ToolList.addItem('Sublime Text', 'https://upload.wikimedia.org/wikipedia/en/d/d2/Sublime_Text_3_logo.png');

    ToolList.addItem('Git', 'https://www.linuxjournal.com/sites/default/files/styles/360_250/public/nodeimage/story/git-icon.png?itok=w7zB9vuE');

    ToolList.addItem('Github', 'https://www.shareicon.net/download/2016/10/12/843742_media.ico');

    ToolList.addItem('ITerm', 'https://upload.wikimedia.org/wikipedia/commons/5/57/ITerm2_v3_icon.png');

    // ToolList.addItem('Firefox', 'https://i2.wp.com/prosoftfull.com/wp-content/uploads/2018/06/mozilla-firefox-62-0-developer-edition-beta-1-free-download.png?resize=256%2C256&ssl=1');
    
    ToolList.addItem('Chrome DevTools', 'https://png.icons8.com/cotton/2x/chrome.png');

    ToolList.addItem('Coffee', 'http://icons.iconarchive.com/icons/aha-soft/food/256/coffee-icon.png');

    ToolList.addItem('SASS', 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg');

    ToolList.addItem('npm', 'https://cdn.iconscout.com/public/images/icon/free/png-512/npm-logo-3dc2529e5720fdb2-512x512.png');

    ToolList.addItem('yarn', 'https://cdn.rawgit.com/yarnpkg/assets/master/yarn-kitten-circle.png');
  }

  function displayToolItems() {
    var toolList = document.querySelector('.js-tool__list');

    toolList.innerHTML = `
      ${ToolList.getToolItems()}
    `;
  }
}

Portfolio();

// document.addEventListener('DOMContentLoaded', function() {
// });