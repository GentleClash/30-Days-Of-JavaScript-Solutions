const countries = require("./countries_data.js")
const countriesArray = require("./countries.js")

//Display the countries array as a table
console.table(countriesArray)

//Display the countries object as a table
console.table(countries)

//Use console.group() to group logs
console.group("Countries array")
console.table(countriesArray)
console.groupEnd()
console.group("Countries data object")
console.table(countries)
console.groupEnd()