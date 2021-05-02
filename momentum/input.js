const form = document.querySelector('.js-form'),
      input = form.querySelector('input'),
	  text = document.querySelector('.js-text');

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    localStorage.setItem('userName',currentValue);
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
		input.classList.remove('showing');
		text.innerText = `Hello ${currentUser}`;
		text.classList.add('showing');
    }
}

function init() {
    loadName();
}

init();