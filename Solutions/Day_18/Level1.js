const countriesAPI = 'https://restcountries.com/v2/all'

fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      const { name, capital, languages, population, area } = country
      console.log('Country:', name)
      console.log('Capital:', capital)
      console.log('Languages:', languages.map(lang => lang.name).join(', '))
      console.log('Population:', population)
      console.log('Area:', area)
      console.log('----------------------------')
    })
  })
  .catch(error => {
    console.log('Error:', error)
  })
