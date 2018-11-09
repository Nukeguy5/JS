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
  document.getElementById("Date").innerHTML = out;
}

function displaymessage() {
  var now = new Date();
  switch(now.getDay()) {
    case 0:
      document.getElementById('Message').innerHTML = "Have a great week!";
      break;
    case 1:
      document.getElementById('Message').innerHTML = "I hate Mondays...";
      break;
    case 2:
      document.getElementById('Message').innerHTML = "5$ Movies today!";
      break;
    case 3:
      document.getElementById('Message').innerHTML = "It's HUMP DAY!";
      break;
    case 4:
      document.getElementById('Message').innerHTML = "All I can say is it's Thursday.";
      break;
    case 5:
      document.getElementById('Message').innerHTML = "TGIF";
      break;
    case 6:
      document.getElementById('Message').innerHTML = "Welcome to the weekend.";
      break;
    default:
      document.getElementById('Message').innerHTML = "I've seem to have lost track of what day it is...";
  }
}
