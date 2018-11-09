function displaymonths() {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  for(i = 11; i >=0; i--) {
    months[i + 1] = months[i];
  }
  months[0] = null;

  var monthMessage = "";
  for(i = 1; i <= 12; i++) {
    monthMessage += months[i] + ':' + i + "\n";
  }
  alert(monthMessage);
}
