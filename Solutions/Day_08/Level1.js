/*
Create an empty object called dog
Print the the dog object on the console
Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
Get name, legs, color, age and bark value from the dog object
Set new properties the dog object: breed, getDogInfo
*/

const dog = {

}
console.log(dog)

dog.name = "Doge"
dog.legs = 8
dog.color = "brown"
dog.age = "Primordial"
dog.bark = (function() {
    return "woof woof"
})

console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())

dog.breed = "Shiba Inu"
dog.getDogInfo = function() {
    return `Dog name is ${this.name}. It has ${this.legs} legs. Dog is ${this.age} years old.\nDoge breed is ${this.breed}. Dog barks like ${this.bark()}.`;
  }
  
  console.log(dog.getDogInfo());
  