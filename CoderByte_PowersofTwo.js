/*
CoderByte: PowersofTwo

Using the JavaScript language, have the function PowersofTwo(num) 
take the num parameter being passed which will be an integer and 
return the string true if it's a power of two. 

If it's not return the string false. 

For example if the input is 16 then your program should return the 
string true but if the input is 22 then the output should be the string false. 

*/
var myNum = 26;

function PowersofTwo(num){

	// is it odd? return false;
	if(num % 2 !== 0){ return false }

	var num = num;
    while(num >= 2){

    	if(num % 2 == 0 && num / 2 == 1){
    		return true;
    	} else {
    		num = num / 2;
    	}
    }

    return false;

}



console.log(PowersofTwo(myNum));

