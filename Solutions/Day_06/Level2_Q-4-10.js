const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
/*
Using the above countries array, create the following new array.

["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

*/
let countries2 = []
for(const country of countries){
    countries2.push( country.toUpperCase() )
} console.log(`New array: ${countries2}`)

//Using the above countries array, create an array for countries length

let length = []
for(const country of countries){
    length.push( country.length )
} console.log(`Length array is`)
console.log(length)

/*
Use the countries array to create the following array of arrays:

  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
*/

let arr = []
for( let i = 0; i<countries.length; i++){
    arr.push([ countries[i], countries2[i].slice(0, 3), length[i]])
}console.log(arr)


//In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

let land = []
const pattern = /land/gi

console.log(`Countries with land in their name`)

for(const country of countries){
    if (country.match(pattern)){
        land.push(country)
    }
}console.log(land)

//Country with largest name

let maxLength = 0
let count = []
let count5 = []
for ( const country of countries){
    if(country.length === 5){
        count5.push(country)
    }
    if (country.length>maxLength){
        maxLength = country.length
        count = []
        count.push(country)
    }else if(country.length === maxLength){
        count.push(country)
    }
}console.log(`Country with max length is/are ${count}`)
console.log(`Country with 5 letters`)
console.log(count5)