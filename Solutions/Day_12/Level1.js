//Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

const txt1 = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
let pat1 = /\d+/g
const numArray = txt1.match(pat1)
let total = (parseInt(numArray[0])+parseInt(numArray[2]))*12+parseInt(numArray[1])
//console.log(total)


//The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

const txt2 = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles."
let pat2 = /-?\d+/g     //May contain "-" followed by digits
const coordinates = txt2.match(pat2)
coordinates.sort((a,b)=>{return a-b})
let maxDistance = coordinates[coordinates.length-1]-coordinates[0]
//console.log(coordinates)
//console.log(maxDistance)


//Write a pattern which identify if a string is a valid JavaScript variable
const is_valid_variable = (string) =>{
    const pattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/
  return pattern.test(string)
}
//console.log(is_valid_variable("Hello"))
