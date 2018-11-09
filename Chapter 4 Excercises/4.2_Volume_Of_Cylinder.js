function volumeofcylinder(r, h) {
  var volume = Math.PI*(r^2)*h;
  document.getElementById("volume").innerHTML = "Volume: " + Math.ceil(volume) + " cubic meters";
}
