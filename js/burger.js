const burger = document.querySelector('.burger');
const popup = document.querySelector('.popup');
const menu = document.querySelector('.ul-menu-header');

burger.addEventListener('click', () => {
    popup.classList.toggle('open');
    burger.classList.toggle('active-burger');
    renderPopup();
});

const renderPopup = () => {
    popup.appendChild(menu);
}
