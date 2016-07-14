var Pic = document.querySelector ('img');

Pic.onclick = function () {
	var Src = Pic.getAttribute ('src') 
		if (Src === 'images/img1.jpg') {
			Pic.setAttribute ('src', 'images/img2.jpg');
		} else {
			Pic.setAttribute ('src', 'images/img1.jpg');
		}
}

var myButton = document.querySelector ('button');
var myHeading = document.querySelector ('h1');

function setUserName () {
	var myName = prompt ('Пожалуйста введите ваше имя');
	localStorage.setItem ('name', myName);
	myHeading.textContent = 'YOHOOO DUDE, ' + myName;
}

if (!localStorage.getItem ('name')) {
	setUserName ();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = "YAHOOO DUDE, " + storedName;
}

myButton.onclick = function() {
	setUserName ();
}