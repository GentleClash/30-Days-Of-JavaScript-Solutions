//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14

let radius = prompt("Enter the radius", 0)
let area = Math.PI*radius**2

alert(`The area of the circle is ${area}.`)