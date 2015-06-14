/*
CoderByte: NumberSearch

Using the JavaScript language, have the function NumberSearch(str) 
take the str parameter, search for all the numbers in the string, 
add them together, then return that final number. 

For example: 
if str is "88Hello 3World!" the output should be 91. 

You will have to differentiate between single digit numbers and 
multiple digit numbers like in the example above. 

So "55Hello" and "5Hello 5" should return two different answers. 

Each string will contain at least one letter or symbol. 

*/
var myStr = "88Hello 3World!";

function NumberSearch(str){
	var re = /\d+/g;

	// extract the numbers using a regex
	var tempArray = str.match(re);
	// convert characters to integers
	tempArray = tempArray.map(Number);

	// loop through and add
	var sum = 0;
	for(var i = 0; i < tempArray.length; i++){
		sum += tempArray[i];
	}

	return sum;
}


console.log(NumberSearch(myStr));

