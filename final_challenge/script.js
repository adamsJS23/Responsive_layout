const btnMobileNav = document.querySelector('.btn-mobile-nav');
const nav = document.querySelector('.nav');


btnMobileNav.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})