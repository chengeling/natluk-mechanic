"use strict"

const hamburgerBtn = document.querySelector('.navigation__hamburger-btn');
const menu = document.querySelector('.header');


hamburgerBtn.addEventListener('click', () => {
    menu.classList.remove('header');
    menu.classList.add('header--open');
});