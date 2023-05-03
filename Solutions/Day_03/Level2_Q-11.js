/*Compare your first name length and your family name length and you should get this output.
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'

Your first name, Asabeneh is longer than your family name, Yetayeh*/

let firstName = prompt("Enter your first name")
let lastName = prompt("Enter your last name")


firstName.length > lastName.length ? alert(`Your first name, ${ firstName } is longer than your family name, ${ lastName }`)
:(firstName.length < lastName.length ? alert(`Your first name, ${ firstName } is shorter than your family name, ${ lastName }`) 
:alert(`Your first name, ${ firstName } is equal in length to your family name, ${ lastName }`))