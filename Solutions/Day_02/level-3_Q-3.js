// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let str = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'

const pattern = /love+/gi 

let arr = str.match(pattern)

console.log( arr.length )

