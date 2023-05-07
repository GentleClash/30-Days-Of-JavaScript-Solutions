//Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).


let array = [] //Change as per need
console.log(`Array before reversing`)
console.log(array)

function reverseArray( array ){
    const length = array.length
    for (let i = length-1; i>=0; i--){
        array.push( array[i] )
    }
    for (let i = 0; i<length; i++){
        array.shift()
    }
    return array
}
console.log(`Array after reversing`)
console.log(reverseArray(array))