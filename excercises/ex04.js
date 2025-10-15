
let totalNumber = 0;

// add a button titled click me

$("#needy-button").click (function (){
    
    totalNumber = totalNumber +1;

let sentence = "I was clicked";
let totalNumbers= sentence + totalNumber;

$("#needy-button").html (totalNumbers);
   
})

// when it is clicked
// add one to the total number

// show the total number
// on our button
// show "total number times clicked"

// a top limit