// The below function does not work. The variable twoPlusTwo gets set to undefined. Refactor the function to make it work.
//
// function addNumbers(numberA, numberB) {
//   console.log(numberA + numberB);
// }
//
// var twoPlusTwo = addNumbers(2, 2)
//
// console.log(twoPlusTwo) // 4

function addNumbers(a, b){
  return (a + b);
}

var twoPlustwo = addNumbers(2,2);
console.log(twoPlustwo);

// Write a function called yell that logs out an uppercase version of a string.

var string = "Hello World!";
var result = string.toUpperCase();
console.log(result);

function yell() {
  return X;
}

var uppercase = yell.toUpperCase("Hello World!");
console.log(uppercase);

// Write a function called yell10 that uses your yell function to log out an uppercase version of a string 10 times.

Write a function called longest that returns the longest of two input strings or arrays.

Write a function called isVowel that takes a character (i.e. a string of length 1) 
and returns true if it is a vowel, uppercase or lowercase. 
The function should return false if the character is not a vowel.
