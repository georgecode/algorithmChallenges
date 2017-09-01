// babel theMostSacredOfDays.js | node

console.log("theMostSacredOfDays.js")

// In the United States, one of the most important days 
// of the year is colloquially known as "Black Friday". 
// On this day, millions of pilgrims sojourn to their local 
// centers of capitalism to stand in long lines and trade 
// currency for flat-screen TVs and two-dollar DVDs.

// Black Friday—so-called because on this day some retailers' 
// accounting books move from "the red" (having net losses) 
// to "the black" (having net profits)—is traditionally celebrated 
// on the day immediately following the American Thanksgiving 
// holiday, which always falls on the fourth Thursday in November.

// You have recently been hired by a large boat retailer, Beast 
// Bouy, who wants to know exactly what date they can expect 
// shoppers to crowd their store and purchase their stocks of 
// moderately discounted jet-skis. Your first task at this job 
// is create a blackFriday function which accepts an integer year, 
// and returns the day of the month of November that Black Friday 
// falls on in that year. Your function only needs to support 
// years after 1752*.

// * This happens to be the year that the British Empire adopted 
// the Gregorian calendar. The Javascript Date object uses an 
// extrapolated Gregorian calendar, meaning it is not necessarily 
// accurate to reality for dates in the far past.

function blackFriday(year) {

  let d = new Date(year,10,1)
  let arr = []
  
  while (arr.length<4) {
  	if(d.getUTCDay()==4){
  		arr.push("t")
  	}//END if
  	d.setDate(d.getDate()+1)
  }//END while
  return d.getDate()


}//END blackFriday

//NOTES
//needs to be 4

// BLACK FRIDAY is the fourth Friday of November

// 0=sun
// 1=mon
// 2=tues
// 3=wed
// 4=thurs
// 5=fri
// 6=sat


// var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);

console.log(blackFriday(2013)) //29
console.log(blackFriday(2009)) //27
