var navbarLinks = document.querySelectorAll('.navbar-link');


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