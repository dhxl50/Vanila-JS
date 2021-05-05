const form = document.querySelector('.js-form'),
      input = form.querySelector('input'),
	  text = document.querySelector('.js-text');

function paintGreeting(name){
		form.classList.remove('showing');
		text.innerText = `Hello ${name}`;
		text.classList.add('showing');
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    localStorage.setItem('userName',currentValue);
	
	paintGreeting(currentValue);
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
		paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();