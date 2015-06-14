/*
CoderByte: DivisionStringified

Using the JavaScript language, have the function DivisionStringified(num1,num2) 
take both parameters being passed, divide num1 by num2, and return the result 
as a string with properly formatted commas. If an answer is only 3 digits long, 
return the number with no commas (ie. 2 / 3 should output "1"). 

For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345". 

*/

var n1 = 12345;
var n2 = 100;

function DivisionStringified(num1,num2){
	// divide num1 by num2
	var numToString = Math.round(num1 / num2);

	// remove decimals ***** challenge wanted us to round, not chop off decimals
	//numToString = numToString | 0;

	// make it a string
	var s = numToString.toString();

	var stringToReturn = "";
	// loop through from the end of the string. For every 3 characters (which are numbers in this program), add a comma.
	var counter = 0;
	for(var i = s.length-1; i >= 0; i--){

		// the var i counter is to loop backward
		// we'll use this counter to know when to place a comma
		if(counter % 3 == 0 && counter > 0){
			stringToReturn = s.charAt(i) + "," + stringToReturn;
		} else {
			stringToReturn = s.charAt(i) + stringToReturn;
		}
		counter++;
	}

	// return string
	return stringToReturn;
}


console.log(DivisionStringified(n1,n2));


