/*Change skills array to JSON using JSON.stringify()
Stringify the age variable
Stringify the isMarried variable
Stringify the student object
*/

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

const skillJSON = JSON.stringify(skills)
console.log(skillJSON)

const ageJSON = JSON.stringify(age)
console.log(age)

const isMarried_JSON = JSON.stringify(isMarried)
console.log(isMarried_JSON)

const student_JSON = JSON.stringify(student)
console.log(student_JSON)