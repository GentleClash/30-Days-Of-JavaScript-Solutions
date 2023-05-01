//1. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

console.log( typeof('10') === typeof(10) )    

console.log( typeof( parseInt( '10' ) ) === typeof( 10 ))

//2.Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

console.log( parseFloat('9.8') === 10 )    

console.log( Math.round( parseFloat('9.8') ) === 10 ) //Using Math.round( ) to round off.

//5. Check if 'on' is found in both python and jargon

let arr = ["python", "jargon"]

console.log( arr[0].includes('on') && arr[1].includes('on') )

//6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let str = "I hope this course is not full of jargon."

console.log( str.includes("jargon") )
