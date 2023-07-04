const countries = require('./countries_data.js')

//Use the countries information, in the data folder. Sort countries by name, by capital, by population

//Sorted by name
const sortByName = countries.sort(
    (a, b)=>{
        if(a['name']<b['name']){return -1}
        else if(a['name']>b['name']){return 1}
        return 0
    }
) 
//console.log(sortByName)

//Sorted by capital
const sortByCapital = countries.sort(
    (a, b)=>{
        if(a['capital']<b['capital']){return -1}
        else if(a['capital']>b['capital']){return 1}
        return 0
    }
) 
//console.log(sortByCapital)

//Sorted by population
const sortByPopulation = countries.sort(
    (a, b)=>{
        if(a['population']<b['population']){return 1}
        else if(a['population']>b['population']){return -1}
        return 0
    }
) 
//console.log(sortByPopulation)


// Find the 10 most spoken languages:

//Finding frequency of languages (works specifically for countries array)
const langFreq = (array)=>{
    let freq = {}
    for(const data of array){
        for(const language of data['languages']){
            freq[language]=(freq[language]+1 || 1)
        }
    }
    const freqArray = Object.entries(freq)
    freqArray.sort((a, b) => b[1] - a[1])
    freq = Object.fromEntries(freqArray)
    return freq

}


const mostSpokenLanguages = (array, size) => {
    const langData = Object.entries(langFreq(array)).map(([language, count]) => ({ language:language, count:count }))
    return langData.slice(0, size)
  }
//console.log(mostSpokenLanguages(countries, 10))

// Use countries_data.js file create a function which create the ten most populated countries
const mostPopulatedCountries = (array=countries, size)=>{
    const trimmedArray = sortByPopulation.slice(0, size)
    const output = trimmedArray.map(
        ({name, population})=>({'country':name, population:population})
    )
    return output
}
//console.log(mostPopulatedCountries(countries, 3))

