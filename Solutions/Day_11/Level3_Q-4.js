/*Copy the student object to newStudent without mutating the original object. In the new object add the following ?
Add Bootstrap with level 8 to the front end skill sets
Add Express with level 9 to the back end skill sets
Add SQL with level 8 to the data base skill sets
Add SQL without level to the data science skill sets*/

const student = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }
const newStudent ={
    ...student,
    skills: {
        frontEnd: [
            {skill: 'Bootstrap', level: 8},
            ...student.skills.frontEnd
        ],
        backEnd: [
            {skill:"Express", level:9},
            ...student.skills.backEnd
        ],
        dataBase: [
            {skill:"SQL", level:8},
            ...student.skills.dataBase
        ],
        dataScience:["SQL", ...student.skills.dataScience]
    }
}
console.log(newStudent)