const stepNumber = document.querySelectorAll('.step-number');
const steps = document.querySelectorAll('.step');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const form = document.querySelector('form');
const textButtonsForm = document.querySelector('.text-right-buttons-form');
const titleButtonsForm = document.querySelector('.title-right-buttons-form');

let stepForm = () => {

    let formStep = 0;

    prev.addEventListener('click', (e) => {
        e.preventDefault();
        formStep--;
        stepNumber[formStep + 1].classList.remove('active-step-number');
        updateFormSteps();
    })

    next.addEventListener('click', (e) => {
        e.preventDefault();
        formStep++;
        updateFormSteps();
    })

    let updateFormSteps = () => {
        steps.forEach((step) => {
            if (step.classList.contains('active')) {
                step.classList.remove('active');
            }
        })

        steps[formStep].classList.add('active');
        stepNumber[formStep].classList.add('active-step-number');

        if (formStep === 0) {
            prev.style.display = 'none';
            next.innerText = 'Перейти к шагу 2';
            textButtonsForm.style.display = 'none';
            titleButtonsForm.style.display = 'none';
        } else {
            prev.style.display = 'block';
            next.innerText = 'Далее';
            textButtonsForm.style.display = 'block';
            titleButtonsForm.style.display = 'block';
        }

        if (formStep === 1) {
            next.innerText = 'Перейти к шагу 3';
            prev.innerText = 'Вернутся к шагу 1';
            textButtonsForm.innerText = 'Остался всего 1 шаг для заказа такси:)';
            titleButtonsForm.innerText = `Стоимость Вашей поездки
                                        составляет: 1580₽`;
        }

        if (formStep === steps.length - 1) {
            next.innerText = 'Заказать такси';
            prev.innerText = 'Вернутся к шагу 2';
            textButtonsForm.innerText = 'Все данные заполнены!';
            titleButtonsForm.innerText = `Стоимость Вашей поездки 
                                        составляет: 1580₽`;
        }
    }

    updateFormSteps();
}

stepForm();