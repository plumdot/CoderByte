/*
CoderByte: VowelCount

Using the JavaScript language, have the function VowelCount(str) 
take the str string parameter being passed and return the number 
of vowels the string contains (ie. "All cows eat grass" would return 5). 

Do not count y as a vowel for this challenge. 

*/

function VowelCount(str) {
  var count = 0;

  for(var i = 0; i < str.length; i++){
  	if(vowelTest(str.charAt(i))){
  		count++;
  	}
  }

  return count;
}

function vowelTest(c){
	return (/^[aeiou]$/i).test(c);
}

