/*
Create an Animal class. The class will have name, age, color, legs properties and create different methods
Create a Dog and Cat child class from the Animal Class.
*/

class Animal{
    constructor(name = "", age = 0, color = "", legs = 0){
    this.name = name
    this.age = age
    this.color = color
    this.legs = legs
    }
    getinfo(){
        return `Animal name is ${this.name}.\nIt is ${this.age} years old.\nIt is ${this.color} coloured.\nIt has ${this.legs} legs.`
    }
}
const animal1 = new Animal("Dog", 4, "White", 4)
const animal2 = new Animal("Cat", 3, "Brown", 4)
console.group("Dog")
console.log(animal1.getinfo())
console.groupEnd()

console.group("Cat")
console.log(animal2.getinfo())
console.groupEnd()
