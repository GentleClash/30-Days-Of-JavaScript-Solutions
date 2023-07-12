//Override the method you create in Animal  class

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
console.group("Parent")

console.group("Dog")
console.log(animal1.getinfo())
console.groupEnd()

console.group("Cat")
console.log(animal2.getinfo())
console.groupEnd()

console.groupEnd()

class Pet extends Animal{
    constructor(name = "", age = 0, color = "", legs = 0, nickName= "" ){
        super(name , age , color , legs)
        this.nickName = nickName
    }
    getinfo(){
        return `Animal species is ${this.name}.\nIt's pet name is ${this.nickName}\nIt is ${this.age} years old.\nIt is ${this.color} coloured.\nIt has ${this.legs} legs.`
    }
}
const animal3 = new Pet("Dog", 4, "Brown", 4,"Cheems")

console.group("Child")
console.log(animal3.getinfo())
console.groupEnd()
