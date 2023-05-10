const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ]

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

/*
Imagine you are getting the above users collection from a MongoDB database. 
a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
b. Create a function called signIn which allows user to sign in to the application

The products array has three elements and each of them has six properties. 
a. Create a function called rateProduct which rates the product 
b. Create a function called averageRating which calculate the average rating of a product
c. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
*/
function generateId() {
    const numbers = '1234567890'
    const letters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCNM'
    let id = ''
    for (let i = 0; i < 6; i++) {
      let randomIndex1 = Math.floor(Math.random() * numbers.length)
      let randomIndex2 = Math.floor(Math.random() * letters.length)
      let randomChar = Math.random() < 0.5 ? numbers[randomIndex1] : letters[randomIndex2]
      id += randomChar
    }
    return id
  }
function dateTime(){
    const currentDate = new Date()
    const date = currentDate.toLocaleDateString()
    const time = currentDate.toLocaleTimeString()
    return `${date} ${time}`
  }
  
  function signUp() {
    let username = prompt('Enter the username')
    let email = prompt('Enter the email id')
  
    // Check if user already exists
    for (const user of users) {
      if (user.email === email) {
        alert("User already exists")
        return
      }
    }
  
    let password = prompt('Enter the password')
    let createdAt = dateTime()
    let id = generateId()
  
    let user = {
      _id: id,
      username: username,
      email: email,
      password: password,
      createdAt: createdAt,
      isLoggedIn: true,
    }
  
    users.push(user)
    alert('User registered successfully')
    return
  }

//console.log(signUp())
//console.log(users)

function signIn() {
    let username = prompt('Enter the username')
    let email = prompt('Enter the email id')
  
    // Check if user exists
    let userFound = false
    for (const user of users) {
      if (user.email === email && user.username === username) {
        userFound = true
  
        // Check if already logged in
        if (user.isLoggedIn === true) {
          alert('Already logged in')
          return
        } else {
          let password = prompt('Enter the password')
          let tries = 1
          while (tries <= 3) {
            if (user.password == password) {
              user.isLoggedIn = true
              return 'Login successful'
            } else {
              password = prompt('Incorrect password. Enter the password again')
              tries++
            }
          }
          alert( 'Maximum login attempts reached')
        }
      }
    }
  
    if (!userFound) {
      alert('User not found')
    }
  }
//console.log(signIn())
//console.log(users)

function rateProduct(){
  let email = prompt("Enter your email")
  let userID, userFound = false
  //Fetch userID
  for (const user of users) {
    if (user.email === email) {
      userID = user._id
      userFound = true
      break
    }
  }
  if(!userFound){
    alert(`You are not registered.`)
    return
  }
  
  let name = parseInt(prompt("Which product to rate?\n1) MobilePhone\n2)Laptop \n3)TV\nEnter choice number "))
  let rating = prompt("Rate it out of 5")
  while ( rating > 5 || rating < 1 || isNaN(rating) ){
    rating = prompt("Please rate from 1 to 5")
  }
  let rate= { userId : userID,
    rate : parseFloat(rating)
  }

  switch ( name ){
    case 1: 
      products[0].ratings.push(rate)
      break
  
    case 2: 
      products[1].ratings.push(rate)
      break

    case 3: 
      products[2].ratings.push(rate)
      break
  }
  alert("Rated")
}
//rateProduct()
//console.log(products)

function averageRating() {
  let name = parseInt(prompt("Which product's rating?\n1) MobilePhone\n2) Laptop\n3) TV\nEnter choice number "))
  let rateSum = 0
  
  let length = products[name - 1].ratings.length
  // Check if no ratings are there
  if (!length) {
    alert("No ratings")
    return
  }
  
  for (let i = 0; i < length; i++) {
    rateSum += products[name - 1].ratings[i].rate
  }
  
  return rateSum / length
}
//console.log(averageRating())

function likeProduct() {
  let email = prompt("Enter your email");
  let userID, userFound = false;

  // Fetch userID
  for (const user of users) {
    if (user.email === email) {
      userID = user._id;
      userFound = true;
      break;
    }
  }

  if (!userFound) {
    alert("You are not registered.");
    return;
  }

  let name = parseInt(prompt("Which product to rate?\n1) MobilePhone\n2) Laptop\n3) TV\nEnter choice number "));
  if (products[name - 1].likes.includes(userID)) {
    let index = products[name - 1].likes.indexOf(userID);
    products[name - 1].likes.splice(index, 1);
    alert("Disliked");
  } else {
    products[name - 1].likes.push(userID);
    alert("Liked");
  }
}
//likeProduct()