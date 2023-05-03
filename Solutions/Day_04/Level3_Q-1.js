/*Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days. */

  let month = prompt("Enter the month").toLowerCase()

  month = month.charAt(0).toUpperCase() + month.slice(1) //Converting to Title Case

  const thirtyOne = ["January", "March", "May", "July", "August", "October", "December"]
  const thirty = ["April", "June", "September", "November"]

  if ( thirtyOne.includes( month ) ){
    alert(`${month} has 31 days. `)}

  else if ( thirty.includes( month )){
    alert(`${month} has 30 days. `)
  }
  else if ( month === "February" ){
    alert(`${month} has 28 days. `)
  }
  else{
    alert("Enter a valid month.")
  }

