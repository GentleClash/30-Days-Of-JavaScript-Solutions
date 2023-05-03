/*Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/

let marks = prompt( "Enter your Marks" )
marks = parseFloat( marks )

switch ( true ){
    case marks>100 && marks<0 : alert("Enter in range of 0-100"); break
    case marks<=100 && marks>=90 : alert("Your grade is A"); break
    case marks<90 && marks>70 : alert("Your grade is B"); break
    case marks<=70 && marks>60 : alert("Your grade is C"); break 
    case marks<=60 && marks>50 : alert("Your grade is D"); break 
    case marks<=50 && marks>=0 : alert("Your grade is F"); break
}