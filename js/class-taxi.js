const blockSlideClass = document.querySelectorAll('.block-slide-class-taxi'); 
const switcheClass = document.querySelectorAll('.switche-class-taxi');

const switche = () => {
    blockSlideClass.forEach(item => {
        if (item.classList.contains('active-class-taxi')) {
            item.classList.remove('active-class-taxi');
        }   

        item.classList.add('active-class-taxi');
    })
}

switcheClass.addEventListener('click', switche);