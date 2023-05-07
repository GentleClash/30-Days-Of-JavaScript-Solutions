//Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

/*console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}
*/

let a = prompt("Enter the value of 'a' in ax^2 + bx + c", 0)
let b = prompt("Enter the value of 'a' in ax^2 + bx + c", 0)
let c = prompt("Enter the value of 'a' in ax^2 + bx + c", 0)
a = parseFloat(a)
b = parseFloat(b)
c = parseFloat(c)

let discriminant = b**2 - 4*a*c

function solveQuadratic( a, b, c ){
    if (a === 0){
        return `${(-1)*c/b}`
    } else if ( discriminant === 0 ){
        return (-1)*b/(2*a)
    } else if ( discriminant > 0){
        let root1 = ((-1)*b + Math.sqrt(discriminant))/(2*a)
        let root2 = ((-1)*b - Math.sqrt(discriminant))/(2*a)
        return [ root1, root2 ]
    } else {
        let real = (-1)*b / (2*a)
        let imag =  Math.sqrt( Math.abs( discriminant ) ) / (2*a)
        let root1 = `${real}+i${imag}`
        let root2 = `${real}-i${imag}`
        return [ root1, root2 ]

    }
}

console.log(`Roots are: ${solveQuadratic(a, b, c)}`)