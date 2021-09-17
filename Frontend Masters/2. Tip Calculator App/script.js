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

    // if (typeof percentage == 'undefined') {
    //     percent = document.getElementById('customTip').value;
    //     setPercentage(percent);
    // }

    //  !  Calculus

    var totalTip = (bill/100)*percent;
    console.log(totalTip + ' Total tip');
    document.getElementById('innerTotal').innerText = totalTip.toFixed(2);

    var tipPerPerson = totalTip/divide;
    console.log(tipPerPerson + ' Tip per person');
    document.getElementById('innerPerPerson').innerText = tipPerPerson.toFixed(2);


    console.log(bill,percent,divide);

}

function ifZero() {
    if (document.getElementById("bill").value == '0') {
    document.getElementById("bill").style.borderColor = 'red';
}   else {
    document.getElementById("bill").style.borderColor = 'white';
}
}
