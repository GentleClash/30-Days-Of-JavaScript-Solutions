//Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

//let a = prompt("Enter first number", 0)
//let b = prompt("Enter second number", 0)
//let c = prompt("Enter third number", 0)

function findMax( a, b, c){
    if ( a > b ){
        if ( a > c){
            return a
        }else{
            return c
        }
    }
    if ( b > a ){
        if ( b > c ){
            return b
        }else{
            return c
        }
    }
    if ( c > a){
        if ( c > b){
            return c
        }else{
            return b
        }
    }
}
console.log(findMax(1, 2, 3))