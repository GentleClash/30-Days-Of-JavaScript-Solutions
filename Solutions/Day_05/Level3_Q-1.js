/*
The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method 
*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const length = ages.length

console.log(`Sorted array is ${ages.sort()}`)

let min = ages[0]
let max = ages[ length-1 ]
let median, sum=0

console.log(`Min is ${min}\nMax is ${max}`)

if ( length % 2 === 0){
    let mid = length / 2
    median = (ages[ mid ] + ages[ mid-1 ])/2
} else{
    let mid = parseInt(length / 2)
    median = ages[ mid ]
}

console.log( `Median is ${median}` )

for (const age of ages){
    sum+=age
}
const average = sum/length

console.log(`Average is ${average}`)
console.log(`Range is ${max-min}`)

console.log(`max - average = ${Math.abs(max-average)}\nmin - average = ${Math.abs(min-average)}`)