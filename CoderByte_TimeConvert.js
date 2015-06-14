/*
CoderByte: TimeConvert

Using the JavaScript language, have the function TimeConvert(num)
 take the num parameter being passed and return the number of hours and 
 minutesthe parameter converts to (ie. if num = 63 then the output should be 1:3). 

 Separate the number of hours and minutes with a colon. 

*/

function TimeConvert(num) {
  var nHours = 0;
  var nMinutes = 0;

  nHours = Math.floor(num / 60);
  nMinutes = num % 60;

  return nHours + ":" + nMinutes; 
}

