// Tinkering with funtions


// A function that reverses a string
function reverseString(reverseMe) {
  let reversed = '';
  for (let i = reverseMe.length - 1; i >= 0; i--) {
    reversed += reverseMe[i];
  }
  return reversed;
}

console.log(reverseString('Thomas'));

// generates a number of ha ha ha's 
 

function laugh(num) {
  let haHa = ''
  for (let x = 0; x < num; x++){
   haHa = haHa + 'ha' ;
  }
haHa = haHa + '!';
return haHa;
}

console.log(laugh(12));


//inline function
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions('happy', function(num) {
  let haHa = ''
  for (let x = 0; x < num; x++){
   haHa = haHa + 'ha' ;
  }
haHa = haHa + '!';
return haHa;
}
)