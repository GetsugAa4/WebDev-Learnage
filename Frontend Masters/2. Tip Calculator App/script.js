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

function tipAmount(bill, percentage, divide) {
    
    // Taking the values needed
    var bill = document.getElementById("bill").value;
    var divide = document.getElementById("divideBy").value;

    console.log(bill,percentage,divide);

    // If any isn't a number, say it needs a number AND No input can be 0
    if (bill == 0 || percentage == 0 || divide == 0 ) {
        
    }
}