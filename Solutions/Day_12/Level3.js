//Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
const cleanText = (string)=>{
    let pattern = /[^\s^\w ^\.]+/g    //Characters that are not whitespace or alphanum
    return string.replace(pattern, '') //Remove special characters
}
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
let cleanedText = cleanText(sentence)
console.log(cleanedText)


//Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.
const mostFrequentWords = (string)=>{
    const arr = string.toLowerCase().match(/\b\w+\b/g);
    let wordFreq = {};
    arr.forEach((word) => {
        wordFreq[word]=wordFreq[word]+1||1
    })
    let wordFreqArr = Object.keys(wordFreq).map(key => ({
        word: key,
        count: wordFreq[key]
    }))
    wordFreqArr.sort((a, b) => b.count - a.count);
    return wordFreqArr.slice(0, 3)
}
console.log(mostFrequentWords(cleanedText))