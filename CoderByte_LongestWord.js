/*
CoderByte: LongestWord

Have the function LongestWord(sen) take 
the sen parameter being passed and return 
the largest word in the string. 

If there are two or more words that are the same length, 
return the first word from the string with that length.

Ignore punctuation and assume sen will not be empty. 

*/

function LongestWord(sen) {
	var myArray = [];
    var tempWord = "";
    var longestWord = "";
    var myRegEx = /^[A-z]+$/;

    // loop through each letter in the sentence
    for (i = 0; i < sen.length; i++) {
    	// if we come across a space, push the tempword into our array
        if (sen.charAt(i) == " ") {
            myArray.push(tempWord);
            tempWord = "";
        } else {
        	// if the character is a letter, append it to our tempWord
        	if(sen.charAt(i).match(myRegEx)){
				tempWord = tempWord + sen.charAt(i);
        	}
        }
    }

    myArray.push(tempWord);

    // once we have our array of words, let's return the longest one
    for (i = 0; i < myArray.length; i++) {

        if (myArray[i].length > longestWord.length) {
            longestWord = myArray[i];
        }
    }
    return longestWord;
}

console.log(LongestWord("a confusing /:sentence:/[ this is not!!!!!!!~"));


/* Test cases:
1. When the input was "a beautiful sentence^&!" your output was incorrect.
2. When the input was "letter after letter!!" your output was incorrect.
3. When the input was "a confusing /:sentence:/[ this is not!!!!!!!~" your output was incorrect.
*/