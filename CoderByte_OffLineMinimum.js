/*
CoderByte: OffLineMinimum

Using the JavaScript language, have the function OffLineMinimum(strArr) 
take the strArr parameter being passed which will be an array of integers 
ranging from 1...n and the letter "E" and return the correct subset based 
on the following rules. 

The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] 
where the I's stand for integers and the E means take out the 
smallest integer currently in the whole set. When finished, 
your program should return that new set with integers separated by commas. 

For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] 
then your program should return 4,1,5. 

*/
var strArr = ["5","4","6","E","1","7","E","E","3","2"];

// loop through the array
    // if it isn't an E
        // insert into temp array
    // else
        // push the smallest in temp array into return array (remove element in temp array)

// return return Array

function OffLineMinimum(strArr){

    var arrToReturn = [];
    var tempArray = [];

    for(var i = 0; i < strArr.length; i++){
        if(strArr[i] != "E"){
            tempArray.push(strArr[i]);
        } else {
            var tempObj = findLowest(tempArray);

            arrToReturn.push(tempObj["n"]);
            tempArray.splice(tempObj["index"] , 1);
        }
    }

    return arrToReturn;

}

function findLowest(arr){
    var lowest = {n:0, index:0};
    arr = arr.map(Number);

    lowest["n"] = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < lowest["n"]){
            lowest["n"] = arr[i];
            lowest["index"] = arr.indexOf(arr[i]);
        }
    }

    return lowest;

}

console.log(OffLineMinimum(strArr));

