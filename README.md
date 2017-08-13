# Intro to JavaScript 

What is JavaScript?
JavaScript is an expressive programming language that powers a tremendous amount of the interactivity on the web, and increasingly powers servers behind the scenes. JavaScript written to run in a browser is often called "front-end" programming, and server-side JavaScript is usually considered "back-end" programming. In particular in front-end programming, JavaScript works hand-in-hand with HTML and CSS.

HOW TO CREATE A JAVASCRIPT FILE

  In Atom, create a new file and name it main.js
    The '.js' file extension name indicates that it is a JavaScript file
    
  Create a new HTML file and name it index.html
  
  Link your JS file inside of your HTML file 
    The line below should be right before your </body> tag. 
      This is because you want   all of your other content (HTML and CSS) to run in the browser first. 
    <script src="main.js"></script>
    
    
COMPLETE THE FOLLOWING QUESTIONS BELOW: 

1. The below function does not work. The variable twoPlusTwo gets set to undefined. Refactor the function to make it work.

        function addNumbers(numberA, numberB) {
          console.log(numberA + numberB);
        }

        var twoPlusTwo = addNumbers(2, 2)

        console.log(twoPlusTwo) // 4
        
2. Write a function called yell that logs out an uppercase version of a string.
   Write a function called yell10 that uses your yell function to log out an uppercase version of a string 10 times. 
   
3. Write a function called longest that returns the longest of two input strings or arrays.

4. Write a function called isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, 
    uppercase or lowercase. The function should return false if the character is not a vowel.
