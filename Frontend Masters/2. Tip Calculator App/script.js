// * Reset form function
function resetForm() {
    document.getElementById('form').reset();
}
    
// * Doing the maths

/* -- NEED :
    - input#bill
    - [] of .tip-flex-container>input
    - input#divideBy
*/
// ! Getting the percentage from the buttons

var percent = 0 ;
function setPercentage(x) {
    return percent = x ;
}


function tipAmount(bill, percentage, divide) {
    
    // Taking the values needed
    var bill = document.getElementById("bill").value;
    var divide = document.getElementById("divideBy").value;
    console.log(bill,percent,divide);

    //  !  Calculus

    var totalTip = (bill/100)*percent;
    console.log(totalTip + ' Total tip');

    var tipPerPerson = totalTip/divide;
    console.log(tipPerPerson + ' Tip per person');


    // If any isn't a number, say it needs a number AND No input can be 0
    if (bill == 0 || percentage == 0 || divide == 0 ) {
        
    }
}