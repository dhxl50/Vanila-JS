const form = document.querySelector('.js-form'),
    input = form.querySelector('input');

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    alert(currentValue);
}

function askForName() {
    form.classList.add('showing');
    form.addEventListener('submit', handleSubmit);
}

function loadName() {
    const currentUser = localStorage.getItem('userName');
    if (currentUser === null) {
        askForName();
    } else {
    }
}

function init() {
    loadName();
}

init();