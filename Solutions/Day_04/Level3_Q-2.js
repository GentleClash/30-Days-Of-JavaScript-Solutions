//Write a program which tells the number of days in a month, now consider leap year.

let year = prompt("Enter the year", new Date().getFullYear() )

year = parseInt( year )

if( year%100 === 0 ){
    if ( year%400 === 0 ){
        alert( "Year has 366 days.")
    }
}

else{
    if ( year%4 === 0 ){
        alert( "Year has 366 days.")
    }
    else {
        alert( "Year has 365 days.")
    }
}
