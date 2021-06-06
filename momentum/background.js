const html = document.querySelector("html");

const IMG_NUMBER = 3;

function handleImgLoad(){
	console.log("asdf");
}

function paintImage(imgNumber){
	const img = new Image();
	img.src = `./images/landscape${imgNumber}.jpg`; 
	html.appendChild(img);
	img.classList.add('bgImage');
	
	
	img.addEventListener("loaded",handleImgLoad);
}

function genRandom(){
	const number =Math.floor(Math.random()*IMG_NUMBER);
	return number;
}
function init(){
	const randomNum = genRandom();
	paintImage(randomNum);
}

init();