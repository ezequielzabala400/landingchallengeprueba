const toggleMenu = document.querySelector('#toggle-icon');
const navbar = document.querySelector('.navbar-list');

toggleMenu.addEventListener('click', (() => {
    navbar.classList.toggle('show')
    if(navbar.classList.contains('show')) toggleMenu.setAttribute('src', './assets/images/icon-close.svg')
    else toggleMenu.setAttribute('src', './assets/images/icon-hamburger.svg')
    
}))