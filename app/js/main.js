const headerMenu = document.querySelector('.header__menu');
const openMenuBtn = document.querySelector('.header__open-menu');

const openMenu = () => {
    headerMenu.classList.add('active')
}
const closeMenu = () => {
    headerMenu.classList.remove('active')
}

headerMenu.addEventListener('click', closeMenu);
openMenuBtn.addEventListener('click',openMenu)