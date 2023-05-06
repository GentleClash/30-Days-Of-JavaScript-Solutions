/*
Develop a small script which generate array of 5 random numbers

Develop a small script which generate array of 5 random numbers and the numbers must be unique

Develop a small script which generate a six characters random id:
5j2khz

*/

const numbers = `1234567890`
const letters = `qwertyuiopasdfghjklzxcvbnm`
let arr = []

for( let i = 0; i<5; i++){
    let randomIndex = Math.floor(Math.random()*(numbers.length))
    arr.push( numbers[randomIndex] )
}

console.log(`Random script is: ${ arr.join('') }`)


arr = []
while( arr.length<5 ){
    let randomIndex = Math.floor(Math.random()*(numbers.length))
    if (!arr.includes( numbers[randomIndex] )){
        arr.push( numbers[randomIndex] )
    }
}
console.log(`Random script with unique numbers is: ${ arr.join('') }`)

arr =[]

for( let i = 0; i<5; i++){
    let randomIndex1 = Math.floor(Math.random() * numbers.length)
    let randomIndex2 = Math.floor(Math.random() * letters.length)
    let randomChar = Math.random() < 0.5 ? numbers[randomIndex1] : letters[randomIndex2]
    arr.push(randomChar)
}

console.log(`Random script of numbers and letters is: ${ arr.join('') }`)

