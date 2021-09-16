// find elements
var showPrevBtn = document.getElementById('show-prev');
var showNextBtn = document.getElementById('show-next');
var slideImage = document.getElementById('slide-img');


//subscribe to events
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

//create images arrey
var imgArrey=[];
imgArrey.push('img/slide_first.png');
imgArrey.push('img/slider_second.jpg');
imgArrey.push('img/slide_third.png');


var currentImageIndex=0;

slideImage.src= imgArrey[currentImageIndex];
	showPrevBtn.disabled = true;



//function definitions
function onShowPrevBtnClick(){
	currentImageIndex--;
	slideImage.src= imgArrey[currentImageIndex];

	//disable prev button
	if (currentImageIndex ===0){
		showPrevBtn.disabled = true;
		showNextBtn.disabled = false;
	}
}

function onShowNextBtnClick(){
	currentImageIndex++;
	slideImage.src= imgArrey[currentImageIndex];
    
    showPrevBtn.disabled = false; 

    //disable next button
	if (currentImageIndex ===(imgArrey.length -1)){
		showNextBtn.disabled = true;
	}
	
}