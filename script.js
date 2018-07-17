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
        behavior: 'smooth'
      });
    }
  }

  function addToolItems() {
    ToolList.addItem('CSS3', 'http://www.myiconfinder.com/uploads/iconsets/256-256-8b61de4c84033266e15317a6eb9fda2d-css3.png');

    ToolList.addItem('HTML5', 'http://www.iconarchive.com/download/i73026/cornmanthe3rd/plex/Other-html-5.ico');

    ToolList.addItem('Node JS', 'https://www.shareicon.net/data/256x256/2015/09/11/99371_javascript_512x512.png');

    ToolList.addItem('React', 'https://www.shareicon.net/download/2016/07/08/117367_logo.ico');

    ToolList.addItem('Bulma', 'https://jgthms.com/web-design-in-4-minutes/bulma.png');

    ToolList.addItem('Bootstrap', 'https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-social-logo.png');

    ToolList.addItem('JQuery', 'https://donjayamanne.gallerycdn.vsassets.io/extensions/donjayamanne/jquerysnippets/0.0.1/1474455550460/Microsoft.VisualStudio.Services.Icons.Default');

    ToolList.addItem('MongoDB', 'https://plugins.qgis.org/static/cache/99/ec/99ec0011d70e0fe6237a4cda0166fdca.png');

    ToolList.addItem('VS Code', 'http://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/visual-studio-code-icon.png');

    ToolList.addItem('Sublime Text', 'https://upload.wikimedia.org/wikipedia/en/d/d2/Sublime_Text_3_logo.png');

    ToolList.addItem('Git', 'http://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/256px-Git_icon.svg.png');

    ToolList.addItem('Github', 'https://www.shareicon.net/download/2016/10/12/843742_media.ico');

    ToolList.addItem('ITerm', 'http://icons.iconarchive.com/icons/froyoshark/enkel/256/iTerm-icon.png');

    ToolList.addItem('Firefox', 'https://i2.wp.com/prosoftfull.com/wp-content/uploads/2018/06/mozilla-firefox-62-0-developer-edition-beta-1-free-download.png?resize=256%2C256&ssl=1');
    
    ToolList.addItem('Chrome', 'https://png.icons8.com/cotton/2x/chrome.png')

    ToolList.addItem('Coffee', 'http://icons.iconarchive.com/icons/aha-soft/food/256/coffee-icon.png');
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