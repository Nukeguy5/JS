function getInput() {
  var string = prompt("Enter a String:");
  return string;
}

function removecharacters(string) {
  var toRemove = prompt("Enter the amount of characters you would like to remove:");
  var idxToRemoveAt = string.length - parseInt(toRemove);
  var newString = string.substr(0, idxToRemoveAt);
  document.getElementById('NewString').innerHTML = newString;
}
