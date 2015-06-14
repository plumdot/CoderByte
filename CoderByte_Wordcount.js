/*
CoderByte: WordCount

Using the JavaScript language, have the function WordCount(str) 
take the str string parameter being passed and return the 
number of words the string contains 

(ie. "Never eat shredded wheat" would return 4). 
Words will be separated by single spaces. 

*/

function WordCount(str) {
  var count = 0;

  for(var i = 0; i < str.length; i++){
  	if(str.charAt(i) === " " && i != str.length-1){
  		count++;
  	}
  }

  return count+1;
}


console.log(WordCount("Never eat shredded wheat"));