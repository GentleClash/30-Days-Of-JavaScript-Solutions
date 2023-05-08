//Write a function called isPrime, which checks if a number is prime number.
let isPrime = (number)=>{
    flag = 0
    for(let i = 2; i<= Math.round(Math.sqrt(number)); i++){
        if ( number%i === 0){
            flag = 1
            break
        }
    }
    if (!flag){
        return `Prime`
    }
    return `Not Prime` 
}

//console.log(isPrime(9369436546273618472368527695829))