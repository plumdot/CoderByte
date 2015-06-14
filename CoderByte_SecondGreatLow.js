/*
CoderByte: SecondGreatLow

Using the JavaScript language, have the function SecondGreatLow(arr) 
take the array of numbers stored in arr and return the second lowest 
and second greatest numbers, respectively, separated by a space. 

For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. 
The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers! 

*/

var myArr = [-4, -5, 10, 2]; // should ouput -4 2

function SecondGreatLow(arr){
	// sort the array
	arr.sort(function(a,b){ 
		return a-b 
	});
	
	// remove dupilcate elements. rather, if an element isn't a duplicate, put into temp array
	var tempArray = [];
	for(var i = 0; i < arr.length; i++) {
		if(!contains(tempArray, arr[i])){
			tempArray.push(arr[i]);
		}
	}

	// print [1] [length - 2]
	return tempArray[1] + " " + tempArray[tempArray.length - 2];
}

function contains(arr, n) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            return true;
        }
    }
    return false;
}

console.log(SecondGreatLow(myArr));


