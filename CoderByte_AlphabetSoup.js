/*
CoderByte: AlphabetSoup

Using the JavaScript language, have the function AlphabetSoup(str) 
take the str string parameter being passed and return the string 
with the letters in alphabetical order (ie. hello becomes ehllo). 

Assume numbers and punctuation symbols will not be included in the string.

*/

function AlphabetSoup(str)  {

  // this variable will hold the str characters in an array
  var arrayToSort = [];

  // loop through the str parameter, and push it into the array
  for(var i = 0; i < str.length; i++){
    arrayToSort.push(str[i]);
  }

  // sort the array
  arrayToSort.sort();

  // join all the array elements to one string, and return it
  return arrayToSort.join('');

}

console.log(AlphabetSoup("helloabcxyz"));

 