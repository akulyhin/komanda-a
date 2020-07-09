let toggleMenu = document.querySelector('.toggle-menu');
let menuButton = document.querySelector('.menu__button');
let closeButton = document.querySelector('.close-btn');
let menuLinks = document.querySelector('.toggle-menu__list-link');

menuButton.onclick = function() {
    toggleMenu.classList.toggle('active-menu');
    menuButton.classList.toggle('hidden-menu-button');
};

closeButton.onclick = function () {
    toggleMenu.classList.toggle('active-menu');
    menuButton.classList.toggle('hidden-menu-button');
};

menuLinks.onclick = function() {
    toggleMenu.classList.remove('active-menu');
    menuButton.classList.remove('hidden-menu-button');
}