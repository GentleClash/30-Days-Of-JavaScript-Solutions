//Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

let range = prompt("Enter the range (positive only)", 0)
range = Math.abs( parseInt ( range ) )

const evensAndOdds = ( range ) => {
    let even = 0, odd = 0
    while ( range >= 0){
        if (range%2===0){
            even+=1
        } else{
            odd+=1
        }
        range-=1
    }
    console.log(`The number of odds are ${odd}.\nThe number of evens are ${even}.`)
}

evensAndOdds(range)
