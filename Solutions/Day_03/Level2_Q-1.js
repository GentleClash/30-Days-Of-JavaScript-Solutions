//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

let height = prompt("Enter the height of the triangle", 0)
let base = prompt("Enter the base of the triangle", 0)

let area = 0.5 * parseFloat(height) * parseFloat(base)

alert(`The area of the triangle is ${area}.`)