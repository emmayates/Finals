//1 grabbing the HTML element

var button = document.getElementById("Finish");

//2 specify what I want to happen to the HTML element - always a function
function popUp(){
	alert("You now know how to cook an egg");
}

//3 make sure javascript is listening for that event so it can run the function

button.addEventListener("click", popUp);

