//Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.


const sumOfArrayItems = ( array )=>{
    let sum = 0
    for(const element of array){
        if(typeof(element) == "number"){
            sum+=element
        }
        else{
            return `${typeof(element)} detected.\nSum not possible.`
        }
    }
    return sum
}
