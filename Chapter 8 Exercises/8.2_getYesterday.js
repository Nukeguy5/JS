Date.prototype.getYesterday = function() {
	
  var days = ['Sun','Mon','Tues','Wed','Thu','Fri','Sat'];
  var date = this.getDate();
  var day = this.getDay();
  var month = this.getMonth();
  var year = this.getYear();

  date -= 1;
  day -= 1;

  if (date == 0 && day == -1) {
	date = 31;
	day = 6;
    month -= 1;
	if (month == -1) {
		month = 11;
		year -= 1;
	}
  } 

  return 'Yesterday:\n' + (month + 1) + '/' + date + '/' + (year + 1900) + '\n' + days[day];
};
