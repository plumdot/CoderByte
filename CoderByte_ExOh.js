/*
CoderByte: ExOh

Using the JavaScript language, have the function ExOh(str) 
take the str parameter being passed and return the string 
true if there is an equal number ofx's and o's, otherwise 
return the string false. Only these two letters will be entered 
in the string, no punctuation or numbers. 

For example: 
if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's. 

*/

function ExOh(str) {
  var xcount = 0;
  var ocount = 0;

  var answer = false;

  for(var i = 0; i < str.length; i++){
  	if(!xo_test(str.charAt(i))){
  		return "something other then X or O entered."
  	} else if(str.charAt(i) == "x"){
  		xcount++;
  	} else if(str.charAt(i) == "o"){
  		ocount++;
  	}
  }

  if(xcount == ocount){
  	answer = true;
  }

  return answer;
}

function xo_test(c){
	return (/^[xo]$/i).test(c);
}


console.log(ExOh("xxxxoooo"));