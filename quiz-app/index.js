const quizData = [
    {
        question: '나의 전역일은 언제인가?',
        a: '2020-07-28',
        b: '2020-10-26',
        c: '2021-07-17',
        d: '2021-09-11',
        correct: 'c',
    },
    {
        question: 'Who is the man invented C and Unix?',
        a: 'Tom Cruise',
        b: 'Dennis Ritchie',
        c: 'Guido van Rossum',
        d: 'Steve Jobs',
        correct: 'b',
    },
];
let questionNumber = 0;
let count = 0;
const quizHeader = document.querySelector('.quiz-header');
const question = quizHeader.querySelector('h2');
const answer = quizHeader.querySelectorAll('li');
const submitBtn = document.querySelector('button');

function handleSubmit() {
	let checked;
    const answerRadio = quizHeader.querySelectorAll('input');
    
	for (let i = 0; i < 4; ++i) {
        if (answerRadio[i].checked) {
			checked = answerRadio[i].id;
        }
    }
	
	if(checked === quizData[questionNumber].correct){
		alert("correct!");
		count++;

	}else{
		alert("worng!");
	}
	
	questionNumber++;
	
	if (questionNumber >= quizData.length) {
        answer[0].remove();
        answer[1].remove();
        answer[2].remove();
        answer[3].remove();
        submitBtn.remove();
        question.innerText = `결과 : ${count}/${quizData.length}`;
    }else{
		paintQuiz();
	}
	
    


}

function paintQuiz() {
    const answerLabel = quizHeader.querySelectorAll('label');
    question.innerText = quizData[questionNumber].question;
    answerLabel[0].innerText = quizData[questionNumber].a;
    answerLabel[1].innerText = quizData[questionNumber].b;
    answerLabel[2].innerText = quizData[questionNumber].c;
    answerLabel[3].innerText = quizData[questionNumber].d;
}

function init() {
    submitBtn.addEventListener('click', handleSubmit);
    paintQuiz();
}

init();