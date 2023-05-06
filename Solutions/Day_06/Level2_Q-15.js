//This is a fruit array ,array = ['banana', 'orange', 'mango', 'lemon'],  reverse the order using loop without using a reverse method.

let array = ['banana', 'orange', 'mango', 'lemon']
const length = array.length
for (let i = length-1; i>=0; i--){
    array.push( array[i] )
}
for (let i = 0; i<length; i++){
    array.shift()
}
console.log(array)