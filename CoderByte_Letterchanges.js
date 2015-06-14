/*

CoderByte: LetterChanges

Using the JavaScript language, have the 
function LetterChanges(str) take the str 
parameter being passed and modify it using 
the following algorithm. 

Replace every letter in the string with the 
letter following it in the 
alphabet (ie. c becomes d, z becomes a). 

Then capitalize every vowel in this new string 
(a, e, i, o, u) and finally return this 
modified string. 

*/

  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var updated_string = "";


function LetterChanges(str){

  // first, updating str, to the next letter in the alphabet
  for(var i = 0; i < str.length; i++){

      if(str.charAt(i) === " "){
        updated_string += str.charAt(i);
      } else {

        for (var j = 0; j < alphabet.length; j++) {

          if (str.charAt(i) == alphabet[j]) {
              updated_string += alphabet[j+1];
          }
        }

      }

  }

  // now turn vowels into capitals
  var string_to_return = "";

  for(var i = 0; i < updated_string.length; i++) {

      if(updated_string.charAt(i) == "a" || updated_string.charAt(i) == "e" || updated_string.charAt(i) == "i" || updated_string.charAt(i) == "o" || updated_string.charAt(i) == "u"){

        string_to_return += updated_string.charAt(i).toUpperCase();
      } else {
        string_to_return += updated_string.charAt(i);
      }
  }


  return string_to_return;
}

console.log(LetterChanges("replace!*"));



/*


1. When the input was "replace!*" your output was incorrect.
2. When the input was "beautiful^" your output was incorrect.
3. When the input was "123456789ae" your output was incorrect.
4. When the input was "this long cake@&" your output was incorrect.
5. When the input was "a confusing /:sentence:/[ this is not!!!!!!!~" your output was incorrect.

*/

/*

function LetterChanges(str) { 
  return str.replace(/[a-z]/ig,function(c){
    var next = String.fromCharCode(c.charCodeAt() + 1);
    if(/[aeiou]/g.test(next)){
      next = next.toUpperCase(); 
    }

    // return (expression) ? if true : if false;
    return c == 'z' ? 'A' : c == 'Z' ? 'A' : next;
  });    
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());           


*/