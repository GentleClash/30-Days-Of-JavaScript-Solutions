/*Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and 
measure of variability(range, variance, standard deviation). In addition to those measures 
find the min, max, count, percentile, and frequency distribution of the sample. 
You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object.
*/

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics={
}
statistics.array = ()=>{return ages.sort((a,b)=>{return a-b})}

statistics.count = ()=>{return statistics.array().length}

statistics.sum = ()=>{return statistics.array().reduce((acc, curr)=>{return acc+curr}, 0)}

statistics.min = ()=>{return statistics.array()[0]}
statistics.max = ()=>{return statistics.array()[statistics.count()-1]}

statistics.range = ()=>{return statistics.max() - statistics.min()}

statistics.mean = ()=>{return statistics.sum()/statistics.count()}
statistics.median = ()=>{return statistics.array()[Math.floor(statistics.count()/2)]}
statistics.freqDist = ()=>{
    let dist = {}
    statistics.array().forEach((age)=>{
        dist[age]=(dist[age]+1||1)
        }
    )
    return dist
}
statistics.mode = ()=>{
    let maxEntry = Math.max(...Object.values(statistics.freqDist()))
    let mode = []
    for(const [age, freq] of Object.entries(statistics.freqDist())){
        if(freq==maxEntry){
            mode.push([age, freq])
        }
    }
    return mode
}
statistics.var = ()=>{
  const data = statistics.array()
  const mean = statistics.mean()
  const sumOfSquares = data.reduce((acc, curr) => acc + (curr - mean) ** 2, 0)
  const variance = sumOfSquares / data.length
  return variance
}
statistics.std = ()=>{
    return statistics.var()**0.5
}
statistics.describe = ()=>{
    return`Count: ${statistics.count()}
Sum: ${statistics.sum()}
Min: ${statistics.min()}
Max: ${statistics.max()}
Range: ${statistics.range()}
Mean: ${statistics.mean()}
Median: ${statistics.median()}
Mode: ${statistics.mode()}
Variance: ${statistics.var()}
Standard Deviation: ${statistics.std()}
`
}
console.log(statistics.describe())
