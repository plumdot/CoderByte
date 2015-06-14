/*
CoderByte: SimpleSymbols

Using the JavaScript language, 
have the function SimpleSymbols(str) 
take the str parameter being passed and 
determine if it is an acceptable sequence 
by either returning the string true or false. 

The str parameter will be composed of + and = symbols 
with several letters between them (ie.++d+===+c++==a) 
and for the string to be true each letter must be 
surrounded by a + symbol. So the string to the left 
would be false. The string will not be empty and will 
have at least one letter. 

*/

function SimpleSymbols(str) {
 
  var re = /[A-Z]/gi;
  var temp_string = "";

  for(var i = 0; i<str.length; i++){

    // if it is a letter
    temp_string = str.charAt(i);
    if(re.test(temp_string)){

      if(str.charAt(i+1) !== "+" || str.charAt(i-1) !== "+"){
        return false;
      }
      
    }

  }

  return true;
}

console.log(SimpleSymbols("++d+===+C++==a"));