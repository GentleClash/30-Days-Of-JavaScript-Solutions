//Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//YYY-MM-DD HH:mm eg. 20120-01-02 07:05

const now = new Date()
const year = now.getFullYear() // return year
let month = now.getMonth() + 1 // return month(0 - 11)
let date = now.getDate() // return date (1 - 31)
let hours = now.getHours() // return number (0 - 23)
let minutes = now.getMinutes() // return number (0 -59)

if ( month < 10 ) { month = `0${month}` }
if ( date < 10 ) { date = `0${date}` }
if ( hours < 10 ) { hours = `0${hours}` }
if ( minutes < 10) { minutes = `0${minutes}` }

console.log(`${year}/${month}/${date} ${hours}:${minutes}`) // 4/1/2020 0:56