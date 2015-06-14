/*
CoderByte: DashInsert

Using the JavaScript language, have the function DashInsert(str) 
insert dashes ('-') between each two odd numbers in str. 

For example: if str is 454793 the output should be 4547-9-3. 
Don't count zero as an odd number. 

*/

var myStr = "667488958374553"; 

function DashInsert(str){
	var strToReturn = "";

	// loop through string
	for(var i = 0; i < str.length; i++){

		// is character odd? if so, add a dash (-)
		if( i != str.length - 1 && isOdd(str.charAt(i)) && isOdd(str.charAt(i+1))){
			strToReturn += str.charAt(i) + "-";
		} else {
			strToReturn += str.charAt(i);
		}

	}
	
	// return string
	return strToReturn;
}

function isOdd(n){
	if(n % 2 == 0){
		return false;
	}
	return true;
}

console.log(DashInsert(myStr));

// test cases:
// 1562
// 3556
// 567
// 10120
// 12
// 2129
// 399047
// 667488958374553
