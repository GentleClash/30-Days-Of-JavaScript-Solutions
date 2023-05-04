/*In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'
*/

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if (!(shoppingCart.includes(`Meat`))){
    shoppingCart.unshift(`Meat`)
}

if (!(shoppingCart.includes(`Sugar`))){
    shoppingCart.push(`Sugar`)
}

shoppingCart[ shoppingCart.indexOf(`Tea`) ] = `Green Tea` //You can also do shoppingCart.splice( shoppingCart.indexOf(`Tea`), 1, `Green Tea`)

console.log(shoppingCart)