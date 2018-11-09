function replaceHeading() {
	var newH2 = document.createElement("h2");
	var newH2text = document.createTextNode("Welcome!");
	newH2.appendChild(newH2text);
	
	var myDiv = document.getElementById("id1");
	var oldP = document.getElementById("para1");
	myDiv.replaceChild(newH2, oldP);
}

function removeP() {
	var myDiv = document.getElementById("id1");
	var para = document.getElementById("para2");
	myDiv.removeChild(para);
}

function addP() {
	var newP = document.createElement("p");
	var newPtext = document.createTextNode("Thanks for adding me!");
	newP.appendChild(newPtext);
	
	var myDiv = document.getElementById("id1");
	myDiv.appendChild(newP);
}

window.onload = function() {
	document.getElementById("replaceBtn").onclick = replaceHeading;
	document.getElementById("removeBtn").onclick = removeP;
	document.getElementById("reAddBtn").onclick = addP;
}
