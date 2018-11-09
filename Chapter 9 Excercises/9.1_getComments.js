function getComments() {
	var body = document.body;
	var comments = [];
	// alert(body);
	
	for (var i=0; i < body.childNodes.length; i++){
		if(body.childNodes[i].nodeType == 8) {
			comments[i] = body.childNodes[i].nodeValue;
		}
	}
	alert(comments.join(" "));
}

window.onload = function() {
	document.getElementById("btn").onclick = getComments;
}