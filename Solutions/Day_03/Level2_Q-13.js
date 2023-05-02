/*Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years. */

let birthYear = prompt ("Enter your year of birth", 2003)

let age = new Date().getFullYear() - parseInt(birthYear)

age>=18 ? alert (`You are ${age}. You are old enough to drive`) : alert(` You are ${age}. You will be allowed to drive after ${18-age} years. `)