//Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
const tenMostFrequentWords = (string)=>{
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
    return wordFreqArr.slice(0, 10)
}
const str =`I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
console.log(tenMostFrequentWords(str))
