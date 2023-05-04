/*First remove all the punctuations and change the string to array and count the number of words in the array
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)
*/

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

const pattern = /[^\s\w]/g;

text = text.replace(pattern, '');

let words = text.split(' ');
let count = words.length;

console.log(words);
console.log(`Number of words is ${count}`);
