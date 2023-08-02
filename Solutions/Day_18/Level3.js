//Read the cats api and find the average weight of cat in metric unit.
const catsAPI = 'https://api.thecatapi.com/v1/breeds' 

fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    const weights = data.map(cat => cat.weight.metric) 
    const weightsSum = weights.reduce((sum, weight) => sum + parseFloat(weight), 0) 
    const averageWeight = weightsSum / weights.length 
    console.log(`Average weight of cats: ${averageWeight} kg`) 
  })
  .catch(error => {
    console.log('Error:', error) 
  }) 


//Read the countries api and find out the 10 largest countries
const countriesAPI = 'https://restcountries.com/v2/all' 

fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    const sortedCountries = data.sort((a, b) => b.area - a.area) 
    const largestCountries = sortedCountries.slice(0, 10) 
    console.log('10 Largest Countries:') 
    largestCountries.forEach(country => {
      console.log(country.name) 
    }) 
  })
  .catch(error => {
    console.log('Error:', error) 
  }) 



//Read the countries api and count total number of languages in the world used as officials.

fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    let languages = new Set();
    data.forEach(country => {
      if (country.languages) {
        country.languages.forEach(language => {
            languages.add(language.name);
          }
        );
      }
    });
    console.log(`Total number of languages used as officials: ${languages.size}`);
  })
  .catch(error => {
    console.log('Error:', error);
  });
