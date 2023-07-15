//Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. 
//Store the student object in your browser localStorage.

const student = {
    firstName: 'Okabe',
    lastName: 'Rintarou',
    age: 18,
    skills: ['HTML', 'CSS', 'JS', 'React'],
    country: "Japan"
  }
  
  const studentText = JSON.stringify(user, undefined, 4)
  localStorage.setItem('student', studentText)

