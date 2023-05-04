//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

//Print the array using console.log()

console.log( `Array is ${itCompanies}` )

//Print the number of companies in the array

let length = itCompanies.length
console.log(`Number of companies is ${length}`)

//Print the first company, middle and last company

let first = itCompanies[0]
let middle = itCompanies[parseInt(length/2)]
let last = itCompanies[ length - 1 ]

console.log( `First element: ${ first }\nMiddle element: ${middle}\nLast element: ${ last } ` )

//Change each company name to uppercase one by one and print them out

for( let i = 0; i<length; i++){
  console.log(itCompanies[i].toUpperCase())
}

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

const sentence = itCompanies.slice(0, -2).join(", ") //Slice upto 2nd last term and join.
console.log(`${sentence} and ${last} are Big IT companies.`)

//Filter out companies which have more than one 'o' without the filter method
const pattern = /o/gi
for( let i = 0; i<length; i++){

  //Handling the case of empty list inside if(), if list is empty, it returns undefined
  if ( itCompanies[i].match( pattern ) && itCompanies[i].match( pattern ).length > 1 ){
    console.log(`${itCompanies[i]} has more than 1 \'o\'`)
  }
}

//Sort and reverse the array

let  sorted = [...itCompanies].sort()
let reversed = [...itCompanies].reverse()

console.log(`Sorted: ${ sorted }\nReversed: ${ reversed } `)

//Slice out the first 3 and last 3 companies from the array.

let firstThree = itCompanies.slice(0, 3)
let lastThree = itCompanies.slice(-3)

console.log(`First three: ${firstThree}\nLast three: ${lastThree}`)

//Remove the first IT company from the array
itCompanies.shift()
console.log(itCompanies)

//Remove the middle IT company or companies from the array
itCompanies.splice( parseInt((itCompanies.length)/2)-1, 2)
console.log( itCompanies )

//Remove the last IT company from the array
itCompanies.pop()
console.log( itCompanies )

//Remove all IT companies
itCompanies.splice(0)
console.log( itCompanies )