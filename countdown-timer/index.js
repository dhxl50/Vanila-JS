const discharge = `2022-07-17`;
const timerText = document.querySelectorAll('.big-text');

function countdown(){
	const dischargeDate = new Date(discharge);
	const currentDate = new Date();
	const countdownSecond = dischargeDate-currentDate;
	
	const days = Math.floor(countdownSecond / 60000 / 60 / 24);
	const hours = Math.floor(countdownSecond / 60000 / 60) % 24;
	const minutes = Math.floor(countdownSecond / 60000) % 60;
	const seconds = Math.floor(countdownSecond % 60000 / 1000);
	timerText[0].innerText = days;
	timerText[1].innerText = hours;
	timerText[2].innerText = minutes;
	timerText[3].innerText = seconds;
}

function paintTimer(){
	
}

function init(){
	countdown();
	setInterval(countdown, 1000);
}

init();