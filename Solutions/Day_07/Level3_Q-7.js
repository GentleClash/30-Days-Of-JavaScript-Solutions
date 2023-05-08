//Write a function generateColors which can generate any number of hexa or rgb colors.
//console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
//console.log(generateColors('hexa', 1)) // '#b334ef'
//console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
//console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

function generateColors( type, times ){
    let array = []
    if (type.toLowerCase() === "hexa"){
        for (let i = 1; i<=times; i++){
            array.push(generateHexa())
        }
    }
    else if(type.toLowerCase() === "rgb"){
        for (let i = 1; i<=times; i++){
            array.push(`rgb(${generateRGB()})`)
        }
    }
    else{
        return
    }
    console.log(array)
}
function generateHexa(){
    const hex = `012345678abcdef`
    let arr = ['#']
    for( let i = 0; i<=5; i++ ){
        let randomIndex = Math.floor(Math.random()*(hex.length))
        arr.push( hex[randomIndex] )
    }
    return arr.join('')
}

function generateRGB(){
    let arr = []
    arr.push( Math.round(Math.random()*255) )
    arr.push( Math.round(Math.random()*255) )
    arr.push( Math.round(Math.random()*255) )
    return arr.join(", ")
}
let type = prompt("Enter the code type.\n\'hexa\' for hexadecimal\n\'rgb\' for rgb colours", 'hexa')
let times = prompt("Number of codes required", 1)

generateColors( type, parseInt(times) )