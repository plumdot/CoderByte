/*
CoderByte: MeanMode

Using the JavaScript language, have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if \
the mode equals the mean, 0 if they don't equal each other 

(ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). 

The array will not be empty, will only contain positive integers, and will not contain more than one mode. 

Mean = average
Mode = most repeated
*/

var test = [5, 3, 3, 3, 1];

function MeanMode(arr){
	var mode = getMode(arr);
	var mean = getMean(arr);

	if(mode == mean){
		return 1;
	} 

	return 0;
}

function getMean(arr){
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		sum += arr[i];
	}

	return sum / arr.length;
}

function getMode(arr){
	var mode = [];
	var currentMax = 0;
	var count = 0;

	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr.length; j++) {

			// if it matches, add one to count
			if(arr[i] == arr[j]){
				count++;
			}
		}

		// if the count is greater, assign the new Mode
		if(count > currentMax){
			currentMax = count;
			// this N is the new mode, so can clear out mode[]
			mode = [];
			mode.push(arr[i]);
		} else if (count == currentMax) {
			if(!inArray(mode, arr[i])){
				mode.push(arr[i]);
			}
		}

		// reset count for the next loop
		count = 0;
	}

	return mode;
}

function inArray(arr, n) {
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] === n) {
			return true;
		}
	}
	return false;
}

console.log(MeanMode(test));


