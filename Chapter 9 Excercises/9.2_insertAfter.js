function insertAfter(newNode, targetNode) {
	newNode.textContent = "Here is the new element.";
	var pNode = targetNode.parentNode;
	var sibling = targetNode.nextSibling;
	pNode.insertBefore(newNode, sibling.nextSibling);
}

// window.onload = function() {
// 	document.getElementById("insrtAftrBtn").onclick = insertAfter(document.createElement("p"), document.getElementById("myDiv").childNodes[0]);
// }
