//create an empty set
const set = new Set()
console.log(set)

//Create a set containing 0 to 10 using loop
for(let i=0; i<=10; i++){
    set.add(i)
}
console.log(set)

//Remove an element from a set
set.delete(0)
console.log(set)

//Clear a set
set.clear()
console.log(set)

//Create a set of 5 string elements from array
const arr = ["My", "name", "is", "is", "Ayush", "Bajpai"]
const set_2 = new Set(arr)
console.log(set_2)

//Create a map of countries and number of characters of a country
const countries = ['Finland', 'Helsinki','Sweden', 'Stockholm','Norway', 'Oslo']
const countriesChar = []
countries.forEach(
    (country)=>{
        countriesChar.push([country, country.length])
    }
)
const map = new Map(countriesChar)
console.log(map)