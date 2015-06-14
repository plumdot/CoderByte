/*
CoderByte: ArithGeo

Using the JavaScript language, have the function ArithGeo(arr) 
take the array of numbers stored in arr and return the string 
"Arithmetic" if the sequence follows an arithmetic pattern or return 
"Geometric" if it follows a geometric pattern. 

If the sequence doesn't follow either pattern return -1. 

An arithmetic sequence is one where the difference between each of 
the numbers is consistent, where as in a geometric sequence, 
each term after the first is multiplied by some constant or common ratio. 

Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. 

Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. 

*/

var arithArray = [1, 2, 3, 4, 5];
var geoArray = [1, 2, 4, 8, 16];
var negArithArray = [-1, -2, -3, -4, -5];
var negGeoArray = [-1, -2, -4, -8, -16];
var brokenArray = [1, 5, 4, 2, 10];

function ArithGeo(arr) {

    console.log("Array being passed: " + arr);
    // if 1 or 0, no pattern. Return -1.
    if (arr.length <= 2) {
        return -1;
    }
    
    if(isGeo(arr)){
        return "Geometric";
    } else if (isArith(arr)) {
        return "Arithmetic";
    } else {
        return -1;
    }
}

function isGeo(arr){
    for(var i = 0; i < arr.length; i++){

        // we to check the differenc ebetween i to i+1, and i+1 to i+2
        // if i+2 ends up being longer then the array (meaning we've come to the end of the loop),
        // we shouldn't compare anymore
        if(i+2 <= arr.length-1){

            // return true if i to i+1, and i+1 to i+2 matches (being divided)
            if(arr[i+2] / arr[i+1] != arr[i+1] / arr[i]){
                return false;
            }
        }
    }
    return true;
}

function isArith(arr){
    for(var i = 0; i < arr.length; i++){
        // we to check the differenc ebetween i to i+1, and i+1 to i+2
        // if i+2 ends up being longer then the array (meaning we've come to the end of the loop),
        // we shouldn't compare anymore
        if(i+2 <= arr.length-1){

            // return true if i to i+1, and i+1 to i+2 matches (being subtracted)
            if(arr[i+2] - arr[i+1] != arr[i+1] - arr[i]){
                return false;
            }

            
        }
    }
    return true;
}

console.log(ArithGeo(fooArray));