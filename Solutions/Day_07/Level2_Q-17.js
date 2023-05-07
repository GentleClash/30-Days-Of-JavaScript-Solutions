//Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

const hex = `012345678abcdef`

function randomHexaNumberGenerator(){
    let arr = ['#']
    for( let i = 0; i<=5; i++){
        let randomIndex = Math.floor(Math.random()*(hex.length))
        arr.push( hex[randomIndex] )
    }
    return arr.join('')
}

console.log( randomHexaNumberGenerator() )
