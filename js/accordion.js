const accordionTitle = document.querySelectorAll('.accordion');

accordionTitle.forEach(item => {
    item.addEventListener('click', () => {
        item.nextElementSibling.classList.toggle('active-accordion');
        item.classList.toggle('active-accordion');
    })
});