const toggleMenu = document.querySelector('#toggle-icon');
const navbar = document.querySelector('.navbar-list');

toggleMenu.addEventListener('click', (() => {
    navbar.classList.toggle('show')
    if(navbar.classList.contains('show')) toggleMenu.setAttribute('src', './assets/images/icon-close.svg')
    else toggleMenu.setAttribute('src', './assets/images/icon-hamburger.svg')
    
}))

window.addEventListener('scroll', (() => {
    if(navbar.classList.contains('show')){
        navbar.classList.remove('show')
        toggleMenu.setAttribute('src', './assets/images/icon-hamburger.svg')
    }
}))