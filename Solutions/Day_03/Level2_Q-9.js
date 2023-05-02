//Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

const hours = parseFloat(prompt("Enter the number of hours", 0))
const rate = parseFloat(prompt("Enter the rate per hour", 0))

alert(`Your pay is ${hours * rate}`)