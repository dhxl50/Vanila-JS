const toDoForm = document.querySelector(".js-toDoForm"),
	  toDoInput = toDoForm.querySelector("input"),
	  toDoList = document.querySelector("ul");

const TODOS_LS = 'toDos' //todos in localStorage
let toDos = [];

function deleteTodo(event){
	const btn  = event.target;
	const li = btn.parentNode;
	toDoList.removeChild(li);
	const cleanToDos = toDos.filter((toDo)=>{
		return parseInt(li.id) !== toDo.id;
	});
	toDos = cleanToDos;
	saveToDos();
}

function saveToDos(){
	localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
	const li = document.createElement("li");
	const delBtn = document.createElement("button");
	const span = document.createElement("span");
	const newId = toDos.length +1;
	const toDoObj = {
		text: text,
		id: newId,
		
	};
	
	delBtn.innerText = "❌"
	delBtn.addEventListener("click",deleteTodo);
	span.innerText = text;
	
	li.id = newId;
	li.appendChild(delBtn);
	li.appendChild(span);
	toDoList.appendChild(li);
	
	toDos.push(toDoObj);
	saveToDos(toDos);
}

function handleSubmit(){
	event.preventDefault();
	const currentValue = toDoInput.value;
	paintToDo(toDoInput.value);
	toDoInput.value="";
	
}

function loadToDos(){
	const loadedToDos = localStorage.getItem(TODOS_LS);
	if(loadedToDos !== null){
		const parsedTodos = JSON.parse(loadedToDos);
		parsedTodos.forEach((toDo)=>{
			paintToDo(toDo.text);
		})
	}
}

function init(){
	loadToDos();
	toDoForm.addEventListener("submit",handleSubmit);
}

init();