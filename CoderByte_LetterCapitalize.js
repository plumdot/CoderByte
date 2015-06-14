/*
CoderByte: LetterCapitalize

Using the JavaScript language, have the function 
LetterCapitalize(str) take the str parameter being passed 
and capitalize the first letter of each word. 

Words will be separated by only one space. 
*/

function LetterCapitalize(str) {
  var string_to_return = "";

  for(var i = 0; i < str.length; i++){
    
    if(str.charAt(i-1) === " "){
      string_to_return += str.charAt(i).toUpperCase();
    } else if(i == 0) {
      string_to_return += str.charAt(i).toUpperCase();
    } else {
      string_to_return += str.charAt(i);
    }
  }
  
  return string_to_return;
}

