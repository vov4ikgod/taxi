const stepNumber = document.querySelectorAll('.step-number');
const steps = document.querySelectorAll('.step');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const form = document.querySelector('form');

let stepForm = () => {
    
    form.addEventListener('sumbit', (e) => e.preventDefault());

    let formStep = 0;

    prev.addEventListener('click', () => {
        formStep--;
        updateFormSteps();
    })

    next.addEventListener('click', () => {
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
    }

    updateFormSteps();
}

stepForm();