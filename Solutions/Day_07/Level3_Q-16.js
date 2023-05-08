//Write a functions which checks if all items are unique in the array.

let checkUnique = ( array )=>{
    let checkArray = []
    while(array[0]!= undefined){
        if (checkArray.includes(array[0]) ){
            return `Not Unique`
        }
        checkArray.push(array[0])
        array.shift()
    }
    return `Unique`
}

