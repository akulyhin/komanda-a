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


$('.toggle-menu__list-link').click(function() {
    $('.toggle-menu').toggleClass('active-menu');
    $('.menu__button').toggleClass('hidden-menu-button');
});

$('.toggle-menu__tel').click(function() {
    $('.toggle-menu').toggleClass('active-menu');
    $('.menu__button').toggleClass('hidden-menu-button');
});