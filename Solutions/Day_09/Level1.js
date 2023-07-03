const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
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

//Define a callback function before you use it in forEach, map, filter or reduce.
function callback( val ){
    console.log(val)
}

//Use forEach to console.log each country in the countries array.
countries.forEach(callback)

//Use forEach to console.log each name in the names array.
names.forEach(callback)

//Use forEach to console.log each number in the numbers array.
numbers.forEach(callback)

//Use map to create a new array by changing each country to uppercase in the countries array.
const countries2 = countries.map((name)=>name.toUpperCase())
//console.log(countries2)

//Use map to create an array of countries length from countries array.
const lengths = countries.map((country)=>country.length)
//console.log(lengths)

//Use map to create a new array by changing each number to square in the numbers array
const square = numbers.map((num)=>num**2)
//console.log(square)

//Use map to change to each name to uppercase in the names array
const name2 = names.map((name)=>name.toUpperCase())
//console.log(name2)

//Use map to map the products array to its corresponding prices.
const prices = products.map((item) => item.price)
//console.log(prices)

//Use filter to filter out countries containing land.
const filter1 = countries.filter((country)=>country.toLowerCase().includes('land'))
//console.log(filter1)

//Use filter to filter out countries having six character.
const filter2 = countries.filter((country)=>country.length===6)
//console.log(filter2)

//Use filter to filter out countries containing six letters and more in the country array.
const filter3 = countries.filter((country)=>country.length>=6)
//console.log(filter3)

//Use filter to filter out country start with 'E';
const filter4 = countries.filter((country)=>country.startsWith('E'))
//console.log(filter4)

//Use filter to filter out only prices with values.
const filter5 = products.filter((product)=> !product.price.trim)
//console.log(filter5)

//Use reduce to sum all the numbers in the numbers array.
let sum = numbers.reduce((acc, cur)=>acc+cur, 0)
//console.log(sum)

//Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
let str = ()=>{
    const sentence = countries.reduce((acc, curr)=>acc+`, `+curr)
    return sentence+` are north European countries`
}
//console.log(str())


//Use some to check if some names' length greater than seven in names array
const check = names.some((name)=>name.length>7)
//console.log(check)


//Use every to check if all the countries contain the word land
const check2 = names.every((name)=>name.toLowerCase().includes("land"))
//console.log(check2)

//Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const check3 = countries.findIndex((country)=>country=="Norway") || -1
//console.log(check3)

const check4 = countries.findIndex((country)=>country=="Russia") || -1
//console.log(check4)

