//1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

const challenge = "30 Days Of Javascript"

//2. Print the string on the browser console using console.log()

console.log(challenge)

//3. Print the length of the string on the browser console using console.log()

console.log(challenge.length)

//4. Change all the string characters to capital letters using toUpperCase() method

const upper = challenge.toUpperCase()

//5. Change all the string characters to lowercase letters using toLowerCase() method

const lower = challenge.toLowerCase()

//6. Cut (slice) out the first word of the string using substr() or substring() method

const newString = challenge.substring( challenge.indexOf('Days'), 7)

//7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

const newString2 = challenge.slice( challenge.indexOf("Days"), challenge.length )

//8. Check if the string contains a word Script using includes() method

console.log(challenge.includes("Script"))

//9. Split the string into an array using split() method

let arr1 = challenge.split('') 

//10. Split the string 30 Days Of JavaScript at the space using split() method

let arr2 = challenge.split(' ') 

//11. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

const newString3 = challenge.replace("Javascript", "Python")

//12. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

console.log(challenge.charAt(15))

//13. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

console.log( challenge.charCodeAt( challenge.indexOf( 'J' ) ) )

//14. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

console.log(challenge.indexOf( 'a' ) )

//15. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

console.log( challenge.lastIndexOf( 'a' ) )

//21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true

console.log( challenge.startsWith( 3 ) )

//22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true

console.log( challenge.endsWith( "Javascript" ))

//23. Use match() method to find all the a’s in 30 Days Of JavaScript

let pattern = /a/gi
let arr3 = challenge.match( pattern )


//25. Use repeat() method to print 30 Days Of JavaScript 2 times

console.log( challenge.repeat( 2 ) )