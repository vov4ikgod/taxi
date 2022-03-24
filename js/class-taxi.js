const carListSwitches = document.querySelector('.switches-class-taxi');

carListSwitches.addEventListener('click', (e) => {
    const data = e.target.closest('[data-rate]');
    if (data) {
        const rateBlock = document.querySelector(".title-slide-class-taxi");
        const modelsBlock = document.querySelector(".discription-slide-class-taxi");
        const imgCar = document.querySelector('.img-slide-class-taxi');
        
        const { 
            rate,
            car,
            img
        } = data.dataset

        rateBlock.innerText = rate;
        modelsBlock.innerText = car;
        imgCar.src = img;

        console.log(imgCar);
    }
});

