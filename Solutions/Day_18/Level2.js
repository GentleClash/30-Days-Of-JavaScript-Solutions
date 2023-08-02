const catsAPI = 'https://api.thecatapi.com/v1/breeds'

fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    const catNames = data.map(cat => cat.name)
    console.log(catNames)
  })
  .catch(error => {
    console.log('Error:', error)
  })
