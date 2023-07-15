//Store you first name, last name, age, country, city in your browser localStorage.

let details = ["Okabe", "Rintarou", 18, "Japan", "Akihabara"]

let [firstName, lastName, age, country, city] = details

localStorage.setItem("first name", firstName)
localStorage.setItem("last name", lastName)
localStorage.setItem("age", age)
localStorage.setItem("country", country)
localStorage.setItem("city", city)

console.log(localStorage.getItem("city"))