//Generate a random number between 0 and 100 inclusively.

let num1 = Math.floor(Math.random()*101) //Math.ceil will produce from 1 to 100

console.log(num1)

//Generate a random number between 50 and 100 inclusively.

let num2 = Math.floor(50+Math.random()*(100 - 50 + 1)) // For number between x and y, use Math.floor(x + Math.random()*( y-x+1 ))

//Generate a random number between 0 and 255 inclusively.

let num3 = Math.floor(Math.random()*(256))

//Access the 'JavaScript' string characters using a random number.

let word = 'JavaScript'
let upperLimit = word.length
let randomIndex = Math.floor( Math.random() * upperLimit )
console.log(word[randomIndex])

/* Use console.log() and escape characters to print the following pattern.
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125")
