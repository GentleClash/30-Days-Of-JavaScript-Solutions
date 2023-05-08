//Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

const average = ( array )=>{
    let sum = 0
    for(const element of array){
        if(typeof(element) == "number"){
            sum+=element
        }
        else{
            return `${typeof(element)} detected.\nAverage not possible.`
        }
    }
    return sum/array.length
}