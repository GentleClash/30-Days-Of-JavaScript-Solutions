//Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.



let charNum = prompt("Enter the number of characters", 0)
let idNum = prompt("Enter the number of IDs", 0)
charNum = parseInt(charNum)
idNum = parseInt(idNum)

const numbers = `1234567890`
const letters = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCNM`


function userIdGeneratedByUser(){
    let arr = []
    for( let i = 0; i<= charNum; i++){
        let randomIndex1 = Math.floor(Math.random() * numbers.length)
        let randomIndex2 = Math.floor(Math.random() * letters.length)
        let randomChar = Math.random() < 0.5 ? numbers[randomIndex1] : letters[randomIndex2]
        arr.push(randomChar)
        
    }
    return arr.join('')   
}

for(let i = 0; i < idNum; i++ ){
    console.log(userIdGeneratedByUser())
}