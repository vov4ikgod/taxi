const burger = document.querySelector('.burger');
const popup = document.querySelector('.popup');
const tel = document.querySelector('.tel-header');
const menu = document.querySelector('.ul-menu-header');
const titleLogo = document.querySelector('.logo-header');

burger.addEventListener('click', () => {
    popup.classList.toggle('open');
    burger.classList.toggle('active-burger');
    titleLogo.classList.toggle('active-title');
    renderPopup();
    renderTel();
});

const renderPopup = () => {
    popup.appendChild(menu);
    popup.appendChild(tel);
}
