/*
CoderByte: SwapCase

Using the JavaScript language, have the function SwapCase(str) 
take the str parameter and swap the case of each character. 

For example: if str is "Hello World" the output should be hELLO wORLD. 

Let numbers and symbols stay the way they are. 
*/

var myStr = "Hello World"; // hELLO wORLD

function SwapCase(str){
	
	var strToReturn = "";

	for(var i = 0; i < str.length; i++){
		if(checkUpperCase(str.charAt(i))){
			strToReturn += str.charAt(i).toLowerCase();

		} else if(checkLowerCase(str.charAt(i))) {
			strToReturn += str.charAt(i).toUpperCase();
		}
	}

	return strToReturn;
}

function checkUpperCase(c){
	if(c == c.toUpperCase()){
		return true;
	}
	return false;
}

function checkLowerCase(c){
	if(c == c.toLowerCase()){
		return true;
	}
	return false;
}


console.log(SwapCase(myStr));
