function getStringInput() {
  var string = prompt("Enter a String:");
  return string;
}

function capitalizeString(string) {
  var strArr = string.split(" ");
  var modString = ''
  for(i=0; i < strArr.length; i++) {
    strArr[i] = upperFirstLetter(strArr[i]);
    modString = modString.concat(strArr[i], " ");
  }
  document.getElementById("NewString").innerHTML = modString;
}

function upperFirstLetter(string) {
  var firstLetterLow = string[0];
  var firstLetterUp = firstLetterLow.toUpperCase();
  var modString = string.replace(firstLetterLow, firstLetterUp);
  return modString;
}
