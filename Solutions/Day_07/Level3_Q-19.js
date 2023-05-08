//Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
//sevenRandomNumbers()
//[(1, 4, 5, 7, 9, 8, 0)]

function sevenRandomNumbers(){
    let array = []
    while ( array.length !== 7){
        let randomNum = Math.round(Math.random()*9)
        if (!array.includes(randomNum)){
            array.push( randomNum )
        }
    }
    console.log(array)
}
sevenRandomNumbers()
//It can happen that computer generates a number which would be rounded off to any 1 number, let's say 7, infinite times.
//i.e. Math.random() may produce number between 6 and 7 (let) always.
//In this case, while loop will keep execting infinite times.
//So, alternate approach could be to create an array containing numbers from 0-9. Pick a number from this array.
//Add it to another array and remove from the original one.