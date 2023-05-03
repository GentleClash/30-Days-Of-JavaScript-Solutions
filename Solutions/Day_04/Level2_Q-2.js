/*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer*/

let month = prompt( "Enter the month" ).toLowerCase()

const autumn = ["september", "october", "november"]
const winter = ["december", "january", "february"]
const spring = ["march", "april", "may"]

if ( autumn.includes( month ) ) { alert(" The Season is Autumn. ") }
else if ( winter.includes( month ) ) { alert("The Season is Winter. ") }
else if ( spring.includes( month ) ) { alert("The Season is Spring. ") }
else { alert("Enter a valid month name. ")}