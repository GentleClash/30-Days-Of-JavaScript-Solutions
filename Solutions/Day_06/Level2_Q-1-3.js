/*
Develop a small script which generate any number of characters random id:
  fe3jo1gl124g
  xkqci4utda1lmbelpkm03rba

Write a script which generates a random hexadecimal number.
    '#ee33df'
*/




const numbers = `1234567890`
const letters = `qwertyuiopasdfghjklzxcvbnm`
const hex = `012345678abcdef`
let arr = []
let randomLength = Math.floor(1 + Math.random()*20)

for( let i = 0; i< randomLength; i++){
    let randomIndex1 = Math.floor(Math.random() * numbers.length)
    let randomIndex2 = Math.floor(Math.random() * letters.length)
    let randomChar = Math.random() < 0.5 ? numbers[randomIndex1] : letters[randomIndex2]
    arr.push(randomChar)
}
console.log(`Random script of numbers and letters is: ${ arr.join('') }`)

arr=['#']
for( let i = 0; i<=5; i++){
    let randomIndex = Math.floor(Math.random()*(hex.length))
    arr.push( hex[randomIndex] )
}

console.log(`Random hexadecimal number is: ${ arr.join('') }`)

