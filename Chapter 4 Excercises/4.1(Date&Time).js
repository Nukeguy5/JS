function telltime() {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var out = '';
  var now = new Date();
  out += '</br>' + now.getDate();
  out += ' ' + months[now.getMonth()];
  out += ' ' + now.getFullYear();
  out += ' ' + now.getHours();
  out += ':' + now.getMinutes();
  // out += ':' + now.getSeconds();
  out += '</br></br>';
  document.getElementById("div1").innerHTML = out;
}
