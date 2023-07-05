const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

//Find a union b
const aUnionb = new Set([...a, ...b])
console.log(aUnionb)

//Find a intersection b
const aIntersectb = []
a.forEach((num)=>{
    if(b.includes(num)){
        aIntersectb.push(num)
    }
})
console.log(aIntersectb)
