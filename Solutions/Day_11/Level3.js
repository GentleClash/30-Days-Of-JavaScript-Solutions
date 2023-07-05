//Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]
const convertArrayToObject = ()=>{
    const studentsObj = []
    for(const [name, skills, marks] of students ){
        studentsObj.push({"name":name, "skills":skills, "scores":marks})
    }
    return studentsObj
}
console.log(convertArrayToObject())