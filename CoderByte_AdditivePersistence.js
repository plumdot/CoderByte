/*
CoderByte: AdditivePersistence

Using the JavaScript language, have the function AdditivePersistence(num) 
take the num parameter being passed which will always be a positive integer 
and return its additive persistence which is the number of times you must add 
the digits in num until you reach a single digit. 

For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9. 

*/
var myNum = 2718;

function AdditivePersistence(num){

    if (num < 10){
        return num;
    } else {
        return AdditivePersistence(addUpDigits(num));
    }
 
}

function addUpDigits(num){
    // make num a string
    var strNum = num.toString();

    // split the string to individual characters, push into an array
    var tempArray = strNum.split("");

    // we can't add a stringified number, so map each element back to a number
    tempArray = tempArray.map(Number);

    // loop through, and add the numbers up
    var sum = 0;
    for(var i = 0; i < tempArray.length; i++){
        sum += tempArray[i];
    }

    return sum;
}



console.log(AdditivePersistence(myNum));

// Test cases:
