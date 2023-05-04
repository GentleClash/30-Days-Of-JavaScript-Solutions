console.log(`Countries : ${countries}`)
console.log(`Web_Techs : ${webTechs}`)

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.


if (countries.includes('Ethiopia')){
    console.log(`ETHIOPIA`)
}else {
    countries.push(`Ethiopia`)
}

if (webTechs.includes('Sass')){
    console.log(`Sass is a CSS preprocess.`)
}else {
    webTechs.push(`Sass`)
}

console.log(`Web_Techs : ${webTechs}`)