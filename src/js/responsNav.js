function responsNav() {
  let navMenu = document.getElementById('navMenu');
  if (navMenu.className === 'navbar-menu') {
    navMenu.className += ' responsive';
  } else {
    navMenu.className = 'navbar-menu';
  }
}

