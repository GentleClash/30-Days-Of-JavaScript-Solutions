const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'India']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]



//Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

const netPrize = products.filter((product)=>!product.price.trim).reduce((acc, curr)=>acc+curr['price'], 0)
//console.log(netPrize)


//Find the sum of price of products using only reduce reduce(callback))
const netPrize2 = products.reduce((acc, curr)=>{
    if(!curr.price.trim){
        return acc+curr['price']} 
    else{return acc}
}, 0)
//console.log(netPrize2)


//Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

function categorizeCountries( countriesArray, pattern ){
    const arr = countriesArray.filter((country)=>country.toLowerCase().includes(pattern))
    return arr
}
let pattern = "land" //Change as per need
//console.log(categorizeCountries(countries, pattern))


//Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

const startsWith = (countriesArray)=>{
    const obj = {}
    countriesArray.forEach(
        (country)=>obj[country[0]]=(obj[country[0]]+1 || 1)
    )
        return obj
}
//console.log(startsWith(countries))
