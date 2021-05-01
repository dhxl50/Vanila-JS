const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked"

function handleClick(){
	
	title.classList.toggle(CLICKED_CLASS);
}
function handleMouseOver(event){
	const color = title.style.color;
	title.style.color = "blue";
}

function handleMouseLeave(event){
	const color = title.style.color;
	title.style.color = "black";
}

function init(){
	//title.addEventListener("mouseover",handleMouseOver);
	//title.addEventListener("mouseleave",handleMouseLeave);
	title.addEventListener("click",handleClick);
}

init();