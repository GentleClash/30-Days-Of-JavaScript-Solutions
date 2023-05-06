/*
Use for loop to iterate from 0 to 100 and print only even numbers

Use for loop to iterate from 0 to 100 and print only odd numbers

Use for loop to iterate from 0 to 100 and print only prime numbers

Use for loop to iterate from 0 to 100 and print the sum of all numbers.

Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
*/

let evenArray = [], oddArray = [], primeArray = [], sum = 0
for( let i = 0; i<=100; i=i+2){
    evenArray.push(i)
}console.log("Even numbers are")
console.log(evenArray)

for( let i = 1; i<=100; i=i+2){
    oddArray.push(i)
}console.log("Odd numbers are")
console.log(oddArray)

for( let i=2; i<=100; i++){
    let flag=0
    for( let j = 2; j<= Math.ceil(Math.sqrt(i)); j++){
        if ( i%j === 0){
            flag = 1
            break
        }
    }
    if ( !flag ){
        primeArray.push(i)
    }
}
console.log(`Prime numbers`)
console.log(primeArray)


for( let i = 1; i<=100; i++){
    sum+=i
}
console.log(`Sum of numbers from 1 to 100: ${ sum }`)
console.log(`\n`)


sum = [0, 0] //Array would contain [evenSum, oddSum]
for( let i = 0; i<=100; i++){
    sum[ i%2 ]+= i
}
console.log(`[even sum, odd sum] is `)
console.log( sum )

