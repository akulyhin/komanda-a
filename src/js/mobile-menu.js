let toggleMenu = document.querySelector('.toggle-menu');
let menuButton = document.querySelector('.menu__button');
let closeButton = document.querySelector('.close-btn');

menuButton.onclick = function() {
    toggleMenu.classList.toggle('active-menu');
    menuButton.classList.toggle('hidden-menu-button');
};

closeButton.onclick = function () {
    toggleMenu.classList.toggle('active-menu');
    menuButton.classList.toggle('hidden-menu-button');
}
