//Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

function shuffleArray( array ){
    length = array.length
    let shuffledArray = []
    for( let i = length; i>0; i--){

        //Math.random()*i so that it remains within the length of array
        randomIndex = Math.floor( Math.random()*i )

        //Push one random element
        shuffledArray.push( array[ randomIndex ] )

        //Delete the already used element
        array.splice( randomIndex, 1)
    }
    console.log( shuffledArray )

}

//shuffleArray([0, 1, 2, 3, 4, "Hello", "World"])