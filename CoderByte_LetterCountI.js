/*
CoderByte: MeanMode

Using the JavaScript language, have the function LetterCountI(str) 
take the str parameter being passed and return the first word with 
the greatest number of repeated letters. 

For example: "Today, is the greatest day ever!" should return greatest 
because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. 

If there are no words with repeating letters return -1. Words will be separated by spaces. 
*/

var myStr = "a bat cat rat";

function LetterCountI(str){
	// break the str being passsed into an array
	var wordArray = makeArrayOfWords(str);
	
	// loop through each words
		// how many repeating letters for this word?
		// is it the most repeating? if so, make this word the candidate
	var wordToReturn = "";
	var currentHighNum = 0;

	for (var i = 0; i < wordArray.length; i++){
		if(countRepeatingLetters(wordArray[i]) > currentHighNum){
			wordToReturn = wordArray[i];
			currentHighNum = countRepeatingLetters(wordArray[i]);
		}
	}

	// if no repeating letters, return -1
	if(currentHighNum == 1){
		return -1
	}
	// else return the candidate
	return wordToReturn;
}

function makeArrayOfWords(str){

	var returnArray = [];
	var wordToPush = "";

	if(str.length <= 0){ return -1;}

	for(var i = 0; i < str.length; i++){
  		if(str.charAt(i) === " "){
  			returnArray.push(wordToPush);
  			wordToPush = "";
  		} else {
  			wordToPush += str.charAt(i);
  		}

  		if(i == str.length-1){
  			returnArray.push(wordToPush);
  		}
	}

  	return returnArray;
}

function countRepeatingLetters(str){
	var highestNum = 0; // the highest number of a repeated letter
	var tempCount = 0; 
	
	for(var i = 0; i < str.length; i++){
		for(var j = 0; j < str.length; j++){
			if(str.charAt(i) == str.charAt(j)){
				tempCount++;
			}
		}

		if(tempCount > highestNum){
			highestNum = tempCount;
		}

		tempCount = 0;
	}
	return highestNum;
}

console.log(LetterCountI(myStr));


