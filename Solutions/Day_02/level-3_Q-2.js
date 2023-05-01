/*
Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
*/

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let pattern = /[^\s^\w]+/g    //Characters that are not whitespace or alphanum

const cleanedString = sentence.replace(pattern, '') //Remove special characters

const arr = cleanedString.split(' ')

let frequencyCount = {}
let maxFreq = 0
let maxWord = []

for (let i = 0; i < arr.length; i++) {
  const word = arr[i]
  if ( frequencyCount[word] === undefined ){ frequencyCount[word]=1 }
  else { frequencyCount[word]+=1 }

  if (frequencyCount[word] > maxFreq) {
    maxFreq = frequencyCount[word]
    maxWord = []
    maxWord.push(word)
  }
  else if (frequencyCount[word] === maxFreq){
    maxWord.push(word)
  }
}

console.log(maxWord.join(', ') + ` repeated ${maxFreq} times.`);
