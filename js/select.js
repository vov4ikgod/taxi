const defaultSelect = () => {
    const element = document.querySelector('.default');
    const choices = new Choices(element, { 
        searchEnabled: false});
}

const select = () => {
    const element = document.querySelector('.dselect');
    const choices = new Choices(element, { 
        searchEnabled: false});
}

const dSelect = () => {
    const element = document.querySelector('.tselect');
    const choices = new Choices(element, { 
        searchEnabled: false});
}

defaultSelect();
select();
dSelect();