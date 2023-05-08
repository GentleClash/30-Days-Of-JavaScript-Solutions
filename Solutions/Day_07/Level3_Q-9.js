//Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

function factorial( number ){
    if ( number === 1 || number === 0){
        return 1
    }
    else{
        return number*factorial( number-1 )
    } 
}

